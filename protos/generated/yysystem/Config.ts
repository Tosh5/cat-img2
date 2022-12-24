// Original file: protos/yysystem.proto


export interface Config {
  'encoding'?: (string);
  'sampleRateHertz'?: (number);
  'languageCode'?: (number);
  'enableWord'?: (boolean);
  'model'?: (number);
  'translateTo'?: (string)[];
  'enableRuby'?: (boolean);
  '_encoding'?: "encoding";
  '_sampleRateHertz'?: "sampleRateHertz";
  '_languageCode'?: "languageCode";
  '_enableWord'?: "enableWord";
  '_model'?: "model";
  '_enableRuby'?: "enableRuby";
}

export interface Config__Output {
  'encoding'?: (string);
  'sampleRateHertz'?: (number);
  'languageCode'?: (number);
  'enableWord'?: (boolean);
  'model'?: (number);
  'translateTo'?: (string)[];
  'enableRuby'?: (boolean);
}
