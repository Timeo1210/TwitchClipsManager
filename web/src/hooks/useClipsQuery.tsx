import {
  useClipsQuery as useClipsQueryAPI,
  ClipsQueryVariables,
  ClipsQuery,
} from "@/API";
import { UseQueryResult } from "react-query";

let lastVariables: ClipsQueryVariables | undefined;

const useClipsQuery = (
  variables?: ClipsQueryVariables
): UseQueryResult<ClipsQuery> => {
  if (lastVariables === undefined) {
    if (variables === undefined) throw new Error("An error occurred !");
    lastVariables = variables;
  }
  return useClipsQueryAPI(lastVariables, {
    staleTime: Infinity,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    retry: false,
  });
};
export default useClipsQuery;
