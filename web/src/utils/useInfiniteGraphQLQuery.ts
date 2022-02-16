/* eslint-disable */
// THIS IS DEPRECATED AND NOT USE
// SEE https://github.com/dotansimha/graphql-code-generator/issues/5212
// TO IMPLEMENT INFINITE GRAPHQL QUERY
import {
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  UseInfiniteQueryResult,
  UseQueryOptions,
} from "react-query";
import { customFetcher } from "./graphqlFetcher";

interface UseQueryFn<
  TData extends Record<string, any>,
  TVariables extends Record<string, any>
> {
  (variables: TVariables, options?: UseQueryOptions<TData>): unknown;
  document: string;
  getKey: (variables: TVariables) => unknown[];
}

function useInfiniteGraphQLQuery<
  TData extends Record<string, any>,
  TVariables extends Record<string, any>
>(
  useQuery: UseQueryFn<TData, TVariables>,
  getVariables: ({ pageParam }: { pageParam?: number }) => TVariables,
  options?: UseInfiniteQueryOptions<unknown, Error>
): UseInfiniteQueryResult<unknown, Error> {
  return useInfiniteQuery<unknown, Error>(
    useQuery.getKey(getVariables({})),
    customFetcher(useQuery.document, getVariables({})),
    options
  );
}

export default useInfiniteGraphQLQuery;
