import { UseQueryResult } from "react-query";
import {
  useVideostateQuery as useVideostateQueryAPI,
  VideostateQueryVariables,
  VideostateQuery,
} from "@/API";

const useVideostateQuery = (
  variables: VideostateQueryVariables
): UseQueryResult<VideostateQuery> =>
  useVideostateQueryAPI(variables, {
    staleTime: 5000,
    refetchInterval: 60000,
    retry: true,
  });

export default useVideostateQuery;
