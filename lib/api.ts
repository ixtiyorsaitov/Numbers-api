import { axiosClient } from "@/http/axios";
import { FactType, IResponse } from "@/types";

export const ApiService = {
  async getResult(number: number, type: FactType, random: boolean) {
    const url = random
      ? `/random/${type}` // /random/math
      : `/${number}/${type}`; // /42/math

    const { data } = await axiosClient.get<IResponse>(url);
    return data;
  },
};
