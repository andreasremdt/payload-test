import * as migration_20240925_173807_initial from './20240925_173807_initial';

export const migrations = [
  {
    up: migration_20240925_173807_initial.up,
    down: migration_20240925_173807_initial.down,
    name: '20240925_173807_initial'
  },
];
