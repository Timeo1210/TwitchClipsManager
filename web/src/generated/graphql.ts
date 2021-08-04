import { useQuery, UseQueryOptions } from 'react-query';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL as string, {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({ query, variables }),
    });
    
    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  }
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  hello: Scalars['String'];
  search: Array<SearchChannels>;
};


export type QuerySearchArgs = {
  query: Scalars['String'];
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  live_only?: Maybe<Scalars['Boolean']>;
};

export type SearchChannels = {
  __typename?: 'SearchChannels';
  broadcaster_language: Scalars['String'];
  broadcaster_login: Scalars['String'];
  display_name: Scalars['String'];
  game_id: Scalars['String'];
  game_name: Scalars['String'];
  id: Scalars['String'];
  is_live: Scalars['Boolean'];
  tag_ids: Array<Scalars['String']>;
  thumbnail_url: Scalars['String'];
  title: Scalars['String'];
  started_at: Scalars['String'];
};

export type HelloQueryVariables = Exact<{ [key: string]: never; }>;


export type HelloQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'hello'>
);

export type SearchChannelsQueryVariables = Exact<{
  query: Scalars['String'];
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  live_only?: Maybe<Scalars['Boolean']>;
}>;


export type SearchChannelsQuery = (
  { __typename?: 'Query' }
  & { search: Array<(
    { __typename?: 'SearchChannels' }
    & Pick<SearchChannels, 'id' | 'display_name' | 'thumbnail_url'>
  )> }
);


export const HelloDocument = `
    query Hello {
  hello
}
    `;
export const useHelloQuery = <
      TData = HelloQuery,
      TError = unknown
    >(
      variables?: HelloQueryVariables, 
      options?: UseQueryOptions<HelloQuery, TError, TData>
    ) => 
    useQuery<HelloQuery, TError, TData>(
      ['Hello', variables],
      fetcher<HelloQuery, HelloQueryVariables>(HelloDocument, variables),
      options
    );
export const SearchChannelsDocument = `
    query SearchChannels($query: String!, $first: Int, $after: String, $live_only: Boolean) {
  search(query: $query, first: $first, after: $after, live_only: $live_only) {
    id
    display_name
    thumbnail_url
  }
}
    `;
export const useSearchChannelsQuery = <
      TData = SearchChannelsQuery,
      TError = unknown
    >(
      variables: SearchChannelsQueryVariables, 
      options?: UseQueryOptions<SearchChannelsQuery, TError, TData>
    ) => 
    useQuery<SearchChannelsQuery, TError, TData>(
      ['SearchChannels', variables],
      fetcher<SearchChannelsQuery, SearchChannelsQueryVariables>(SearchChannelsDocument, variables),
      options
    );