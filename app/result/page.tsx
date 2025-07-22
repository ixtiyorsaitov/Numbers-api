import ResultCard from "@/components/result-card";
import { ApiService } from "@/lib/api";
import { ResultPageProps } from "@/types";

const ResultPage = async ({ searchParams }: ResultPageProps) => {
  const factType = searchParams.type || "trivia";
  const numberInput = searchParams.number;
  const isRandom = searchParams.random === "true";
  const response = await ApiService.getResult();
  console.log(response);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-950 p-4">
      <ResultCard />
    </div>
  );
};

export default ResultPage;
