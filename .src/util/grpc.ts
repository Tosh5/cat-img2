import { resolve } from 'path'
import { credentials, loadPackageDefinition, Metadata, StatusObject } from 'grpc'
import { loadSync } from '@grpc/proto-loader'
import { ProtoGrpcType } from '../../protos/generated/yysystem'

const protoFile = resolve(__dirname, `../../protos/yysystem.proto`)
const packageDefinition = loadSync(protoFile)
const grpcObj = ((loadPackageDefinition(packageDefinition) as unknown) as ProtoGrpcType)
const yysystem = grpcObj.yysystem

export interface CreateRecognizeStreamCallInput { address: string, metadata: Metadata }
export const createRecognizeStreamCall = ({ address, metadata }: CreateRecognizeStreamCallInput) => {
  const client = new yysystem.YYSpeech(address, credentials.createSsl())
  const call = client.RecognizeStream(metadata)
  return call
}

export const isStatusObject = (value: unknown): value is StatusObject => {
  if (typeof value !== "object" || value === null) return false
  const statusObject = value as Record<keyof StatusObject, unknown>
  if(typeof statusObject.code !== 'number') return false
  if(typeof statusObject.details !== "string") return false
  return statusObject.metadata instanceof Metadata
}