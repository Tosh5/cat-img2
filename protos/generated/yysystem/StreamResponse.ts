// Original file: protos/yysystem.proto

import type { Status as _yysystem_Status, Status__Output as _yysystem_Status__Output } from '../yysystem/Status';
import type { StreamResult as _yysystem_StreamResult, StreamResult__Output as _yysystem_StreamResult__Output } from '../yysystem/StreamResult';
import type { StreamingConfig as _yysystem_StreamingConfig, StreamingConfig__Output as _yysystem_StreamingConfig__Output } from '../yysystem/StreamingConfig';

export interface StreamResponse {
  'error'?: (_yysystem_Status | null);
  'result'?: (_yysystem_StreamResult | null);
  'streamingConfig'?: (_yysystem_StreamingConfig | null);
}

export interface StreamResponse__Output {
  'error'?: (_yysystem_Status__Output);
  'result'?: (_yysystem_StreamResult__Output);
  'streamingConfig'?: (_yysystem_StreamingConfig__Output);
}
