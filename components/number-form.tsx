"use client";

import React, { Dispatch, SetStateAction } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FactType, IDetails } from "@/types";
import { motion } from "framer-motion";
import { ModeToggle } from "./ui/mode-toggle";

interface Props {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  details: IDetails;
  setDetails: Dispatch<SetStateAction<IDetails>>;
}

const NumberForm = ({ onSubmit, setDetails, details }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full max-w-md"
    >
      <Card className="w-full max-w-md relative">
        <div className="absolute right-1 top-1">
          <ModeToggle />
        </div>
        <CardHeader>
          <CardTitle>Get an Interesting Fact</CardTitle>
          <CardDescription>
            Select a fact type and provide a number, or get a random one!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit} className="grid gap-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="grid gap-2"
            >
              <Label htmlFor="fact-type">Fact Type</Label>
              <Select
                value={details.factType}
                onValueChange={(value: FactType) => {
                  setDetails({ ...details, factType: value });
                }}
              >
                <SelectTrigger className="w-full" id="fact-type">
                  <SelectValue placeholder="Select a fact type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={FactType.TRIVIA}>Trivia</SelectItem>
                  <SelectItem value={FactType.YEAR}>Year</SelectItem>
                  <SelectItem value={FactType.DATE}>Date</SelectItem>
                  <SelectItem value={FactType.MATH}>Math</SelectItem>
                </SelectContent>
              </Select>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid gap-2"
            >
              <Label htmlFor="number-input">Number</Label>
              <Input
                id="number-input"
                type="text"
                placeholder={
                  details.factType === "date" ? "0101 for Jan 1st" : "42"
                }
                value={details.number}
                onChange={(e) =>
                  setDetails({ ...details, number: e.target.value })
                }
                disabled={details.isRandom}
                required={!details.isRandom}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center space-x-2"
            >
              <Switch
                id="random-toggle"
                checked={details.isRandom}
                onCheckedChange={() =>
                  setDetails({ ...details, isRandom: !details.isRandom })
                }
              />
              <Label htmlFor="random-toggle">Get a random fact</Label>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button type="submit" className="w-full">
                Get Fact
              </Button>
            </motion.div>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default NumberForm;
