import kleur from 'kleur';
import { z } from 'zod';

import { logger } from '@/src/utils/logger';

export function handleError(error: unknown) {
  logger.error(
    'Something went wrong. Please check the error below for more information:',
  );
  logger.error('If the error persists, please open an issue on GitHub.');

  // Handle string errors
  if (typeof error === 'string') {
    logger.error(error);
    logger.break();
    process.exit(1);
  }

  // Handle zod errors
  if (error instanceof z.ZodError) {
    logger.error('Validation failed:');
    for (const [key, value] of Object.entries(error.flatten().fieldErrors)) {
      logger.error(`- ${kleur.blue(key)}: ${value}`);
    }
    logger.break();
    process.exit(1);
  }

  // Handle other generic errors
  if (error instanceof Error) {
    logger.error(error.message);
    logger.break();
    process.exit(1);
  }

  logger.break();
  process.exit(1);
}
