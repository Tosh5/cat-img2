// Original file: protos/yysystem.proto

import type { WordInfo as _yysystem_WordInfo, WordInfo__Output as _yysystem_WordInfo__Output } from '../yysystem/WordInfo';
import type { RubyInfo as _yysystem_RubyInfo, RubyInfo__Output as _yysystem_RubyInfo__Output } from '../yysystem/RubyInfo';

export interface StreamResult {
  'isFinal'?: (boolean);
  'transcript'?: (string);
  'words'?: (_yysystem_WordInfo)[];
  'translations'?: (string)[];
  'rubies'?: (_yysystem_RubyInfo)[];
}

export interface StreamResult__Output {
  'isFinal'?: (boolean);
  'transcript'?: (string);
  'words'?: (_yysystem_WordInfo__Output)[];
  'translations'?: (string)[];
  'rubies'?: (_yysystem_RubyInfo__Output)[];
}
