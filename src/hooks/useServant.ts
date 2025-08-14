import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type ServantData = {
  id: number;
  name: string;
  classId: number;
  className: string;
  rarity: number;
  extraAssets: {
    charaGraph: {
      ascension: {
        0?: string;
        1?: string;
        2?: string;
        3?: string;
        4?: string;
      };
      costume: Record<string, string>;
    };
  };
};

async function fetchServants() {
  const { data } = await axios.get<ServantData[]>(
    "https://api.atlasacademy.io/export/JP/nice_servant_lang_en.json"
  );
  return data;
  // return data.filter(
  //   (servant) =>
  //     servant.extraAssets?.charaGraph?.ascension?.[1] &&
  //     servant.className &&
  //     servant.rarity
  // );
}

export const useServant = {
  useGet: () =>
    useQuery<ServantData[]>({
      queryKey: ["servantData"],
      queryFn: fetchServants,
      staleTime: 1000 * 60 * 60, // 1 jam
    }),
};
