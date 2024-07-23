import { useState, useEffect } from "react";
import { axiosIstance } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export const useProducts = () => {
  const {} = useQuery({
    queryFn: async () => {
      const productResponnse = await axiosIstance.get("/");
      return productResponnse.data;
    },
  });
};
