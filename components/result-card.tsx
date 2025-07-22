import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowLeft, Terminal } from "lucide-react";
import { FC } from "react";
import { IResponse } from "@/types";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";

const ResultCard: FC<{ data: IResponse }> = ({ data }) => {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Your Fact</CardTitle>
        <CardDescription>
          An interesting piece of information for you!
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-1">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Type: {data.type}
          </p>
          <p className="text-lg font-semibold capitalize">{data.type}</p>
        </div>
        <div className="grid gap-1">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Number/Date:
          </p>
          <p className="text-lg font-semibold">{data.number}</p>
        </div>
        <div className="grid gap-1">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Fact:
          </p>
          {data.found ? (
            <p className="text-lg">{data.text}</p>
          ) : (
            <Alert variant="destructive">
              <Terminal />
              <AlertTitle>Not Found!</AlertTitle>
              <AlertDescription>
                No interesting fact was found for this number.
              </AlertDescription>
            </Alert>
          )}
        </div>
        <Link href="/">
          <Button className="w-full mt-4">
            <ArrowLeft />
            Go Back
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ResultCard;
