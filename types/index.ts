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
  searchParams: {
    type?: string;
    number?: string;
    random?: string;
  };
}
