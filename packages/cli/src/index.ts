import { Command } from 'commander';

import { add } from '@/src/commands/add';
import { init } from '@/src/commands/init';

import packageJson from '../package.json';

process.on('SIGINT', () => process.exit(0));
process.on('SIGTERM', () => process.exit(0));

async function main() {
  const program = new Command();

  // Initial config
  program
    .name('guara-cli')
    .description('A CLI for adding hooks to your project.')
    .version(
      packageJson.version || '1.0.0',
      '-v, --version',
      'display version number',
    );

  // Add commands
  program.addCommand(init).addCommand(add);

  program.parse();
}

main();
