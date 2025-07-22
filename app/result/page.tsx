import ResultCard from "@/components/result-card";
import { ApiService } from "@/lib/api";
import { FactType } from "@/types";
import { notFound } from "next/navigation";
import Head from "next/head";

interface PageProps {
  searchParams: Promise<{
    type?: string;
    number?: string;
    random?: string;
  }>;
}

const ResultPage = async ({ searchParams }: PageProps) => {
  const params = await searchParams; // Await the promise
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
    <>
      <Head>
        <title>
          Facts of number {response.number} ({factType})
        </title>
      </Head>

      <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-950 p-4">
        <ResultCard data={response} />
      </div>
    </>
  );
};

export default ResultPage;
