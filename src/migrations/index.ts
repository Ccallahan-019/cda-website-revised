import * as migration_20251121_201841 from './20251121_201841';
import * as migration_20251122_115837 from './20251122_115837';
import * as migration_20251123_004428 from './20251123_004428';

export const migrations = [
  {
    up: migration_20251121_201841.up,
    down: migration_20251121_201841.down,
    name: '20251121_201841',
  },
  {
    up: migration_20251122_115837.up,
    down: migration_20251122_115837.down,
    name: '20251122_115837',
  },
  {
    up: migration_20251123_004428.up,
    down: migration_20251123_004428.down,
    name: '20251123_004428'
  },
];
