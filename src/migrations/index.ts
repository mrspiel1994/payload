import * as migration_20260602_094029_init from './20260602_094029_init';

export const migrations = [
  {
    up: migration_20260602_094029_init.up,
    down: migration_20260602_094029_init.down,
    name: '20260602_094029_init'
  },
];
