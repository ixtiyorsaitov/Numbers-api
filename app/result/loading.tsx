import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

const ResultPageLoading = () => {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Your Fact</CardTitle>
        <CardDescription>
          An interesting piece of information for you!
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="space-y-4">
          <div className="grid gap-1">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4 animate-pulse" />
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/2 animate-pulse" />
          </div>
          <div className="grid gap-1">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4 animate-pulse" />
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/2 animate-pulse" />
          </div>
          <div className="grid gap-1">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4 animate-pulse" />
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-full animate-pulse" />
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-5/6 animate-pulse" />
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 animate-pulse" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResultPageLoading;
