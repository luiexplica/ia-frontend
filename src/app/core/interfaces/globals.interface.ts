export interface Icon_I {
  // type: 'src' | 'html';
  type: SourceIcon_Type
  value: string;

}

export type SourceIcon_Type = 'html' | 'svg' | 'src';