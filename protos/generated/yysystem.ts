import type * as grpc from 'grpc';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { YYSpeechClient as _yysystem_YYSpeechClient, YYSpeechDefinition as _yysystem_YYSpeechDefinition } from './yysystem/YYSpeech';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  yysystem: {
    Audio: MessageTypeDefinition
    Config: MessageTypeDefinition
    Request: MessageTypeDefinition
    Response: MessageTypeDefinition
    Result: MessageTypeDefinition
    RubyInfo: MessageTypeDefinition
    Status: MessageTypeDefinition
    StreamRequest: MessageTypeDefinition
    StreamResponse: MessageTypeDefinition
    StreamResult: MessageTypeDefinition
    StreamingConfig: MessageTypeDefinition
    WordInfo: MessageTypeDefinition
    YYSpeech: SubtypeConstructor<typeof grpc.Client, _yysystem_YYSpeechClient> & { service: _yysystem_YYSpeechDefinition }
  }
}

