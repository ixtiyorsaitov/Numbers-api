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

interface Props {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  details: IDetails;
  setDetails: Dispatch<SetStateAction<IDetails>>;
}

const NumberForm = ({ onSubmit, setDetails, details }: Props) => {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Get an Interesting Fact</CardTitle>
        <CardDescription>
          Select a fact type and provide a number, or get a random one!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit} className="grid gap-6">
          <div className="grid gap-2">
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
          </div>

          <div className="grid gap-2">
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
          </div>

          <div className="flex items-center space-x-2">
            <Switch
              id="random-toggle"
              checked={details.isRandom}
              onCheckedChange={() =>
                setDetails({ ...details, isRandom: !details.isRandom })
              }
            />
            <Label htmlFor="random-toggle">Get a random fact</Label>
          </div>

          <Button type="submit" className="w-full">
            Get Fact
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default NumberForm;
