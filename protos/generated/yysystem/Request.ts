// Original file: protos/yysystem.proto

import type { Config as _yysystem_Config, Config__Output as _yysystem_Config__Output } from '../yysystem/Config';
import type { Audio as _yysystem_Audio, Audio__Output as _yysystem_Audio__Output } from '../yysystem/Audio';

export interface Request {
  'config'?: (_yysystem_Config | null);
  'audio'?: (_yysystem_Audio | null);
}

export interface Request__Output {
  'config'?: (_yysystem_Config__Output);
  'audio'?: (_yysystem_Audio__Output);
}
