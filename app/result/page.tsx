import ResultCard from "@/components/result-card";
import { ApiService } from "@/lib/api";
import { FactType, ResultPageProps } from "@/types";
import { notFound } from "next/navigation";

const ResultPage = async ({ params }: ResultPageProps) => {
  const numberInput = params.number;
  const isRandom = params.random === "true";

  const number = Number(numberInput);
  if (!isRandom && (isNaN(number) || numberInput === undefined)) {
    notFound();
  }

  const type = params.type;
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

export function generateMetadata({ params }: ResultPageProps) {
  const numberInput = params.number;
  const isRandom = params.random === "true";

  const number = Number(numberInput);
  const type = params.type ?? "trivia";

  if (!isRandom && !isNaN(number) && numberInput !== undefined) {
    return {
      title: `Facts of number ${number} (${type})`,
    };
  }

  return {
    title: "Number Facts",
  };
}
