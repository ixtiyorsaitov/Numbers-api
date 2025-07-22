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
