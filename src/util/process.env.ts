import { config } from 'dotenv'
import {
  parseBooleanOfEnv,
  parseNumberOfEnv
} from './customFunctions'

config()

// grpc connection settings
export const apiKey = process.env.API_KEY
export const apiEndpoint = process.env.API_ENDPOINT
export const apiPort = process.env.API_PORT

// streamingConfig
export const model = parseNumberOfEnv(process.env.MODEL) 
export const encoding = process.env.ENCODING
export const languageCode = parseNumberOfEnv(process.env.LANGUAGE_CODE)
export const sampleRateHertz = parseNumberOfEnv(process.env.SAMPLE_RATE_HERTZ) 
export const enableInterimResults = parseBooleanOfEnv(process.env.ENABLE_INTERIM_RESULTS) 
export const enableWord = parseBooleanOfEnv(process.env.ENABLE_WORD) 
export const audioChannelCount = parseNumberOfEnv(process.env.AUDIO_CHANNEL_COUNT) 