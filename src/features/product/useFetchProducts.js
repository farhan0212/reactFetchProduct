import { axiosInstance } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export const useFetchProducts = () => {
  return useQuery({
    queryKey: ["repoData"],
    queryFn: async () => {
      const productResponse = await axiosInstance.get("/products");
      return productResponse.data;
    },
    queryKey: ["fetch.products"],
  });
};
