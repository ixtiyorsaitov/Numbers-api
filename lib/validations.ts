import z from "zod";

export const getDetailsForm = z.object({
  factType: z.string(),
});
