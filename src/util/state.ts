import { ClientDuplexStream } from "grpc"
import { StreamRequest } from "../../protos/generated/yysystem/StreamRequest"
import { StreamResponse__Output } from "../../protos/generated/yysystem/StreamResponse"

export interface State {
  call?: ClientDuplexStream<StreamRequest, StreamResponse__Output> | null 
  recording: any
}

export const state: State = {
  call: null,
  recording: null
}