import { useQuery, UseQueryOptions } from 'react-query';
import { customFetcher } from '@/utils/graphqlFetcher';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Channel = {
  __typename?: 'Channel';
  broadcaster_type: Scalars['String'];
  description: Scalars['String'];
  display_name: Scalars['String'];
  id: Scalars['String'];
  login: Scalars['String'];
  offline_image_url: Scalars['String'];
  profile_image_url: Scalars['String'];
  type: Scalars['String'];
  view_count: Scalars['Int'];
  created_at: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  hello: Scalars['String'];
  search: Array<SearchChannels>;
  get: Channel;
};


export type QuerySearchArgs = {
  query: Scalars['String'];
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  live_only?: Maybe<Scalars['Boolean']>;
};


export type QueryGetArgs = {
  id: Scalars['String'];
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

export type ChannelQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type ChannelQuery = (
  { __typename?: 'Query' }
  & { get: (
    { __typename?: 'Channel' }
    & Pick<Channel, 'id' | 'display_name' | 'profile_image_url' | 'view_count'>
  ) }
);

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


export const ChannelDocument = `
    query Channel($id: String!) {
  get(id: $id) {
    id
    display_name
    profile_image_url
    view_count
  }
}
    `;
export const useChannelQuery = <
      TData = ChannelQuery,
      TError = unknown
    >(
      variables: ChannelQueryVariables, 
      options?: UseQueryOptions<ChannelQuery, TError, TData>
    ) => 
    useQuery<ChannelQuery, TError, TData>(
      ['Channel', variables],
      customFetcher<ChannelQuery, ChannelQueryVariables>(ChannelDocument, variables),
      options
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
      customFetcher<HelloQuery, HelloQueryVariables>(HelloDocument, variables),
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
      customFetcher<SearchChannelsQuery, SearchChannelsQueryVariables>(SearchChannelsDocument, variables),
      options
    );