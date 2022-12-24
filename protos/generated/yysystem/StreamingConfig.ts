// Original file: protos/yysystem.proto


export interface StreamingConfig {
  'encoding'?: (string);
  'sampleRateHertz'?: (number);
  'languageCode'?: (number);
  'enableWord'?: (boolean);
  'model'?: (number);
  'enableInterimResults'?: (boolean);
  'translateTo'?: (string)[];
  'enableRuby'?: (boolean);
  'audioChannelCount'?: (number);
  '_encoding'?: "encoding";
  '_sampleRateHertz'?: "sampleRateHertz";
  '_languageCode'?: "languageCode";
  '_enableWord'?: "enableWord";
  '_model'?: "model";
  '_enableInterimResults'?: "enableInterimResults";
  '_enableRuby'?: "enableRuby";
  '_audioChannelCount'?: "audioChannelCount";
}

export interface StreamingConfig__Output {
  'encoding'?: (string);
  'sampleRateHertz'?: (number);
  'languageCode'?: (number);
  'enableWord'?: (boolean);
  'model'?: (number);
  'enableInterimResults'?: (boolean);
  'translateTo'?: (string)[];
  'enableRuby'?: (boolean);
  'audioChannelCount'?: (number);
}
