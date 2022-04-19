import {
  useVideostateQuery as useVideostateQueryAPI,
  VideostateQueryVariables,
  VideostateQuery,
} from "@/API";
import { UseQueryResult } from "react-query";

const useVideostateQuery = (
  variables: VideostateQueryVariables
): UseQueryResult<VideostateQuery> =>
  useVideostateQueryAPI(variables, {
    staleTime: 5000,
    refetchInterval: 60000,
    retry: true,
  });

export default useVideostateQuery;
