import * as migration_20251121_201841 from './20251121_201841';

export const migrations = [
  {
    up: migration_20251121_201841.up,
    down: migration_20251121_201841.down,
    name: '20251121_201841'
  },
];
