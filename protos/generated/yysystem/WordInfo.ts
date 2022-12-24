// Original file: protos/yysystem.proto


export interface WordInfo {
  'startTime'?: (number | string);
  'endTime'?: (number | string);
  'word'?: (string);
  'reading'?: (string);
  'partOfSpeech'?: (string);
  'pronunciation'?: (string);
}

export interface WordInfo__Output {
  'startTime'?: (number);
  'endTime'?: (number);
  'word'?: (string);
  'reading'?: (string);
  'partOfSpeech'?: (string);
  'pronunciation'?: (string);
}
