import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";

const ResultCard = () => {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Your Fact</CardTitle>
        <CardDescription>
          An interesting piece of information for you!
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        {false ? (
          <div className="text-destructive text-center">Error</div>
        ) : (
          <>
            <div className="grid gap-1">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Type:
              </p>
              <p className="text-lg font-semibold capitalize">Trivia</p>
            </div>
            <div className="grid gap-1">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Number/Date:
              </p>
              <p className="text-lg font-semibold">41</p>
            </div>
            <div className="grid gap-1">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Fact:
              </p>
              <p className="text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit facere recusandae magnam, id reiciendis nihil
              </p>
            </div>
          </>
        )}
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
