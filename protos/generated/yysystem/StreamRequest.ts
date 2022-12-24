// Original file: protos/yysystem.proto

import type { StreamingConfig as _yysystem_StreamingConfig, StreamingConfig__Output as _yysystem_StreamingConfig__Output } from '../yysystem/StreamingConfig';

export interface StreamRequest {
  'audiobytes'?: (Buffer | Uint8Array | string);
  'streamingConfig'?: (_yysystem_StreamingConfig | null);
}

export interface StreamRequest__Output {
  'audiobytes'?: (Buffer);
  'streamingConfig'?: (_yysystem_StreamingConfig__Output);
}
