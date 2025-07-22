"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const ResultPageNotFound = () => {
  const router = useRouter();
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-red-500">Error!</CardTitle>
        <CardDescription>The information entered is incorrect.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="text-center text-lg font-medium">
          You can only enter a number and a specified type.
        </div>
        <Link href="/">
          <Button onClick={() => router.back()} className="w-full mt-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go back
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ResultPageNotFound;
