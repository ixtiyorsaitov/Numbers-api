import ResultCard from "@/components/result-card";
import { ApiService } from "@/lib/api";
import { FactType, ResultPageProps } from "@/types";
import { notFound } from "next/navigation";

const ResultPage = async ({ searchParams }: ResultPageProps) => {
  const numberInput = searchParams.number;
  const isRandom = searchParams.random === "true";

  // Type checking for number
  const number = Number(numberInput);
  if (!isRandom && (isNaN(number) || numberInput === undefined)) {
    notFound();
  }

  // Type checking for factType
  const type = searchParams.type;
  const validTypes = Object.values(FactType);
  const factType: FactType = validTypes.includes(type as FactType)
    ? (type as FactType)
    : FactType.TRIVIA;

  const response = await ApiService.getResult(number, factType, isRandom);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-950 p-4">
      <ResultCard data={response} />
    </div>
  );
};

export default ResultPage;
