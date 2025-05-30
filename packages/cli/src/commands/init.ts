import { Command } from 'commander';
import { z } from 'zod';

import { handleError } from '@/src/utils/handle-error';
import { logger } from '@/src/utils/logger';

export const initOptionsSchema = z.object({
  yes: z.boolean(),
  defaults: z.boolean(),
  force: z.boolean(),
  cwd: z.string(),
  silent: z.boolean(),
  srcDir: z.boolean().optional(),
});

export const init = new Command()
  .command('init')
  .description('Initiliaze your project')
  .option('-y, --yes', 'skip confirmation prompt.', true)
  .option('-d, --defaults,', 'use default configuration.', false)
  .option('-f, --force', 'force overwrite of existing configuration.', false)
  .option(
    '-c, --cwd <cwd>',
    'the working directory. defaults to the current directory.',
    process.cwd(),
  )
  .option('-s, --silent', 'mute output.', false)
  .option(
    '--src-dir',
    'use the src directory when creating a new project.',
    false,
  )
  .option(
    '--no-src-dir',
    'do not use the src directory when creating a new project.',
  )
  .action(async (opts) => {
    try {
      const options = initOptionsSchema.parse(opts);

      console.log(options);
    } catch (error) {
      logger.break();
      handleError(error);
    }
  });
