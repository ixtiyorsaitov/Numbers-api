"use client";

import type React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import NumberForm from "@/components/number-form";
import { FactType, IDetails } from "@/types";

const FactInputPage = () => {
  const [details, setDetails] = useState<IDetails>({
    factType: FactType.TRIVIA,
    number: "",
    isRandom: false,
  });
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const queryParams = new URLSearchParams();
    queryParams.append("type", details.factType);
    queryParams.append("random", String(details.isRandom));

    if (!details.isRandom) {
      queryParams.append("number", details.number);
    }
    router.push(`/result?${queryParams.toString()}`);
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-950 p-4">
        <NumberForm
          details={details}
          setDetails={setDetails}
          onSubmit={handleSubmit}
        />
      </div>
    </>
  );
};

export default FactInputPage;
