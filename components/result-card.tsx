"use client";

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
import { motion } from "framer-motion";
import { ModeToggle } from "./ui/mode-toggle";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const ResultCard: FC<{ data: IResponse }> = ({ data }) => {
  return (
    <motion.div
      className="w-full max-w-md"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
    >
      <Card className="w-full relative">
        <div className="absolute right-1 top-1">
          <ModeToggle />
        </div>
        <CardHeader>
          <motion.div variants={itemVariants}>
            <CardTitle>Your Fact</CardTitle>
            <CardDescription>
              An interesting piece of information for you!
            </CardDescription>
          </motion.div>
        </CardHeader>

        <CardContent className="grid gap-4">
          <motion.div variants={itemVariants} className="grid gap-1">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Type:
            </p>
            <p className="text-lg font-semibold capitalize">{data.type}</p>
          </motion.div>

          <motion.div variants={itemVariants} className="grid gap-1">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Number/Date:
            </p>
            <p className="text-lg font-semibold">{data.number}</p>
          </motion.div>

          <motion.div variants={itemVariants} className="grid gap-1">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Fact:
            </p>
            {data.found ? (
              <p className="text-lg">{data.text}</p>
            ) : (
              <motion.div variants={itemVariants}>
                <Alert variant="destructive">
                  <Terminal />
                  <AlertTitle>Not Found!</AlertTitle>
                  <AlertDescription>
                    No interesting fact was found for this number.
                  </AlertDescription>
                </Alert>
              </motion.div>
            )}
          </motion.div>

          <motion.div variants={itemVariants}>
            <Link href="/">
              <Button className="w-full mt-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Go Back
              </Button>
            </Link>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ResultCard;
