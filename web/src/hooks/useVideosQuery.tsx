import { UseQueryResult } from "react-query";
import {
  useVideosQuery as useVideosQueryAPI,
  VideosQueryVariables,
  VideosQuery,
} from "@/API";

const useVideosQuery = (
  variables: VideosQueryVariables
): UseQueryResult<VideosQuery> =>
  useVideosQueryAPI(variables, {
    staleTime: Infinity,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    retry: false,
    // keepPreviousData: true,
  });

export default useVideosQuery;
