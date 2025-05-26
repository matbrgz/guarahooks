import kleur from 'kleur';

export const logger = {
  error(...args: unknown[]) {
    console.log(kleur.red('[ERROR]'), ...args);
  },
  warn(...args: unknown[]) {
    console.log(kleur.yellow('[WARN]'), ...args);
  },
  info(...args: unknown[]) {
    console.log(kleur.blue('[INFO]'), ...args);
  },
  success(...args: unknown[]) {
    console.log(kleur.green('[SUCCESS]'), ...args);
  },
  log(...args: unknown[]) {
    console.log(kleur.white('[LOG]'), ...args);
  },
  break() {
    console.log('');
  },
};
