import path from 'path';

import { confirm } from '@inquirer/prompts';
import { Command } from 'commander';
import { z } from 'zod';

import { handleError } from '@/src/utils/handle-error';
import {
  detectProjectStructure,
  installHooks,
  type InstallOptions,
} from '@/src/utils/installer';
import { showInteractiveSelection } from '@/src/utils/interactive-selection';
import { logger } from '@/src/utils/logger';
import { fetchRegistry, filterHooks } from '@/src/utils/registry';

export const addOptionsSchema = z.object({
  hooks: z.array(z.string()).optional(),
  yes: z.boolean(),
  overwrite: z.boolean(),
  cwd: z.string(),
  all: z.boolean(),
  path: z.string().optional(),
  silent: z.boolean(),
  srcDir: z.boolean().optional(),
});

export const add = new Command()
  .command('add')
  .description('Add a hook to your project')
  .argument('[hooks...]', 'the hooks to add or a url to the hook')
  .option('-y, --yes', 'skip confirmation prompt', false)
  .option('-o, --overwrite', 'overwrite existing files', false)
  .option(
    '-c, --cwd <cwd>',
    'the working directory. defaults to the current directory',
    process.cwd(),
  )
  .option('-a, --all', 'add all available hooks', false)
  .option('-p, --path <path>', 'the path to add the hook to')
  .option('-s, --silent', 'mute output', false)
  .option(
    '--src-dir',
    'use the src directory when creating a new project',
    false,
  )
  .option(
    '--no-src-dir',
    'do not use the src directory when creating a new project',
  )
  .action(async (hooks, opts) => {
    try {
      const options = addOptionsSchema.parse({
        hooks,
        cwd: path.resolve(opts.cwd),
        ...opts,
      });

      if (!options.silent) {
        logger.info('Fetching available hooks...');
        logger.break();
      }

      // Fetch registry data
      const registryItems = await fetchRegistry();
      const availableHooks = filterHooks(registryItems);

      if (availableHooks.length === 0) {
        logger.warn('No hooks available in the registry');
        return;
      }

      let selectedHooks: string[] = [];

      // If specific hooks were provided as arguments
      if (options.hooks && options.hooks.length > 0) {
        selectedHooks = options.hooks;
      }
      // If --all flag is used
      else if (options.all) {
        selectedHooks = availableHooks.map((hook) => hook.name);
      }
      // Otherwise, show interactive selection
      else {
        selectedHooks = await showInteractiveSelection(availableHooks);
      }

      if (selectedHooks.length === 0) {
        logger.info('No hooks selected');
        return;
      }

      // Detect project structure
      const projectStructure = await detectProjectStructure(options.cwd);
      const srcDir = options.srcDir ?? projectStructure.srcDir;

      // Show confirmation unless --yes is used
      if (!options.yes) {
        const shouldInstall = await confirm({
          message: `Install ${selectedHooks.length} hook(s)? (${selectedHooks.join(', ')})`,
          default: true,
        });

        if (!shouldInstall) {
          logger.info('Installation cancelled');
          return;
        }
      }

      // Install hooks
      const installOptions: InstallOptions = {
        cwd: options.cwd,
        srcDir,
        overwrite: options.overwrite,
        silent: options.silent,
      };

      await installHooks(selectedHooks, installOptions);

      if (!options.silent) {
        logger.break();
        logger.success(
          `Successfully installed ${selectedHooks.length} hook(s)!`,
        );
      }
    } catch (error) {
      logger.break();
      handleError(error);
    }
  });
