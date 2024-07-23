import { axiosIstance } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export const useFetchProducts = () => {
  return useQuery({
    queryKey: ["repoData"],
    queryFn: async () => {
      const productResponse = await axiosIstance.get("/products");
      return productResponse.data;
    },
  });
};
