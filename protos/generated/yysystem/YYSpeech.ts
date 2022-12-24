// Original file: protos/yysystem.proto

import type * as grpc from 'grpc'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Request as _yysystem_Request, Request__Output as _yysystem_Request__Output } from '../yysystem/Request';
import type { Response as _yysystem_Response, Response__Output as _yysystem_Response__Output } from '../yysystem/Response';
import type { StreamRequest as _yysystem_StreamRequest, StreamRequest__Output as _yysystem_StreamRequest__Output } from '../yysystem/StreamRequest';
import type { StreamResponse as _yysystem_StreamResponse, StreamResponse__Output as _yysystem_StreamResponse__Output } from '../yysystem/StreamResponse';

export interface YYSpeechClient extends grpc.Client {
  Recognize(argument: _yysystem_Request, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_yysystem_Response__Output>): grpc.ClientUnaryCall;
  Recognize(argument: _yysystem_Request, metadata: grpc.Metadata, callback: grpc.requestCallback<_yysystem_Response__Output>): grpc.ClientUnaryCall;
  Recognize(argument: _yysystem_Request, options: grpc.CallOptions, callback: grpc.requestCallback<_yysystem_Response__Output>): grpc.ClientUnaryCall;
  Recognize(argument: _yysystem_Request, callback: grpc.requestCallback<_yysystem_Response__Output>): grpc.ClientUnaryCall;
  recognize(argument: _yysystem_Request, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_yysystem_Response__Output>): grpc.ClientUnaryCall;
  recognize(argument: _yysystem_Request, metadata: grpc.Metadata, callback: grpc.requestCallback<_yysystem_Response__Output>): grpc.ClientUnaryCall;
  recognize(argument: _yysystem_Request, options: grpc.CallOptions, callback: grpc.requestCallback<_yysystem_Response__Output>): grpc.ClientUnaryCall;
  recognize(argument: _yysystem_Request, callback: grpc.requestCallback<_yysystem_Response__Output>): grpc.ClientUnaryCall;
  
  RecognizeStream(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_yysystem_StreamRequest, _yysystem_StreamResponse__Output>;
  RecognizeStream(options?: grpc.CallOptions): grpc.ClientDuplexStream<_yysystem_StreamRequest, _yysystem_StreamResponse__Output>;
  recognizeStream(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_yysystem_StreamRequest, _yysystem_StreamResponse__Output>;
  recognizeStream(options?: grpc.CallOptions): grpc.ClientDuplexStream<_yysystem_StreamRequest, _yysystem_StreamResponse__Output>;
  
}

export interface YYSpeechHandlers extends grpc.UntypedServiceImplementation {
  Recognize: grpc.handleUnaryCall<_yysystem_Request__Output, _yysystem_Response>;
  
  RecognizeStream: grpc.handleBidiStreamingCall<_yysystem_StreamRequest__Output, _yysystem_StreamResponse>;
  
}

export interface YYSpeechDefinition extends grpc.ServiceDefinition {
  Recognize: MethodDefinition<_yysystem_Request, _yysystem_Response, _yysystem_Request__Output, _yysystem_Response__Output>
  RecognizeStream: MethodDefinition<_yysystem_StreamRequest, _yysystem_StreamResponse, _yysystem_StreamRequest__Output, _yysystem_StreamResponse__Output>
}
