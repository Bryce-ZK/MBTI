export type MBTIType = 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P';

export interface Question {
  id: number;
  text: string;
  category: 'EI' | 'SN' | 'TF' | 'JP';
  options: {
    text: string;
    score: number;
  }[];
}

export interface TestResult {
  E: number;
  I: number;
  S: number;
  N: number;
  T: number;
  F: number;
  J: number;
  P: number;
} 