export enum FactType {
  TRIVIA = "trivia",
  YEAR = "year",
  DATE = "date",
  MATH = "math",
}
export interface IDetails {
  factType: FactType;
  number: string;
  isRandom: boolean;
}

export interface ResultPageProps {
  params: Promise<{ type?: string; number?: string; random?: string }>;
}

export interface IResponse {
  found: boolean;
  number: number;
  text: string;
  type: FactType;
}
