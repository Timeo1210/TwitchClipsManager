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

export type Clip = {
  __typename?: 'Clip';
  id: Scalars['String'];
  url: Scalars['String'];
  embed_url: Scalars['String'];
  broadcaster_id: Scalars['String'];
  broadcaster_name: Scalars['String'];
  creator_id: Scalars['String'];
  creator_name: Scalars['String'];
  video_id: Scalars['String'];
  game_id: Scalars['String'];
  language: Scalars['String'];
  title: Scalars['String'];
  view_count: Scalars['Float'];
  created_at: Scalars['String'];
  thumbnail_url: Scalars['String'];
  duration: Scalars['Float'];
};

export type Clips = {
  __typename?: 'Clips';
  clips: Array<Clip>;
  pagination: Pagination;
};

export type Pagination = {
  __typename?: 'Pagination';
  cursor?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  hello: Scalars['String'];
  search: Array<SearchChannels>;
  get: Channel;
  getByUser: Videos;
  getById: Video;
  getByBroadcasterId: Clips;
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


export type QueryGetByUserArgs = {
  user_id: Scalars['String'];
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['String']>;
  period?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};


export type QueryGetByIdArgs = {
  id: Scalars['String'];
};


export type QueryGetByBroadcasterIdArgs = {
  broadcaster_id: Scalars['String'];
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  ended_at?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Float']>;
  started_at?: Maybe<Scalars['String']>;
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

export type Video = {
  __typename?: 'Video';
  id: Scalars['String'];
  stream_id: Scalars['String'];
  user_id: Scalars['String'];
  user_login: Scalars['String'];
  user_name: Scalars['String'];
  title: Scalars['String'];
  description: Scalars['String'];
  created_at: Scalars['String'];
  published_at: Scalars['String'];
  url: Scalars['String'];
  thumbnail_url: Scalars['String'];
  viewable: Scalars['String'];
  view_count: Scalars['Float'];
  language: Scalars['String'];
  type: Scalars['String'];
  duration: Scalars['String'];
  muted_segments: Scalars['String'];
};

export type Videos = {
  __typename?: 'Videos';
  videos: Array<Video>;
  pagination: Pagination;
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

export type ClipsQueryVariables = Exact<{
  broadcaster_id: Scalars['String'];
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Float']>;
  started_at?: Maybe<Scalars['String']>;
  ended_at?: Maybe<Scalars['String']>;
}>;


export type ClipsQuery = (
  { __typename?: 'Query' }
  & { getByBroadcasterId: (
    { __typename?: 'Clips' }
    & { clips: Array<(
      { __typename?: 'Clip' }
      & Pick<Clip, 'id' | 'url' | 'title' | 'view_count' | 'created_at' | 'thumbnail_url' | 'duration'>
    )>, pagination: (
      { __typename?: 'Pagination' }
      & Pick<Pagination, 'cursor'>
    ) }
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

export type VideoQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type VideoQuery = (
  { __typename?: 'Query' }
  & { getById: (
    { __typename?: 'Video' }
    & Pick<Video, 'id' | 'user_id' | 'user_name' | 'title' | 'description' | 'created_at' | 'published_at' | 'url' | 'thumbnail_url' | 'view_count' | 'duration'>
  ) }
);

export type VideosQueryVariables = Exact<{
  user_id: Scalars['String'];
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['String']>;
  period?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
}>;


export type VideosQuery = (
  { __typename?: 'Query' }
  & { getByUser: (
    { __typename?: 'Videos' }
    & { videos: Array<(
      { __typename?: 'Video' }
      & Pick<Video, 'id' | 'title' | 'description' | 'created_at' | 'published_at' | 'url' | 'thumbnail_url' | 'viewable' | 'view_count' | 'duration'>
    )>, pagination: (
      { __typename?: 'Pagination' }
      & Pick<Pagination, 'cursor'>
    ) }
  ) }
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
export const ClipsDocument = `
    query Clips($broadcaster_id: String!, $after: String, $before: String, $first: Float, $started_at: String, $ended_at: String) {
  getByBroadcasterId(
    broadcaster_id: $broadcaster_id
    after: $after
    before: $before
    first: $first
    started_at: $started_at
    ended_at: $ended_at
  ) {
    clips {
      id
      url
      title
      view_count
      created_at
      thumbnail_url
      duration
    }
    pagination {
      cursor
    }
  }
}
    `;
export const useClipsQuery = <
      TData = ClipsQuery,
      TError = unknown
    >(
      variables: ClipsQueryVariables, 
      options?: UseQueryOptions<ClipsQuery, TError, TData>
    ) => 
    useQuery<ClipsQuery, TError, TData>(
      ['Clips', variables],
      customFetcher<ClipsQuery, ClipsQueryVariables>(ClipsDocument, variables),
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
export const VideoDocument = `
    query Video($id: String!) {
  getById(id: $id) {
    id
    user_id
    user_name
    title
    description
    created_at
    published_at
    url
    thumbnail_url
    view_count
    duration
  }
}
    `;
export const useVideoQuery = <
      TData = VideoQuery,
      TError = unknown
    >(
      variables: VideoQueryVariables, 
      options?: UseQueryOptions<VideoQuery, TError, TData>
    ) => 
    useQuery<VideoQuery, TError, TData>(
      ['Video', variables],
      customFetcher<VideoQuery, VideoQueryVariables>(VideoDocument, variables),
      options
    );
export const VideosDocument = `
    query Videos($user_id: String!, $after: String, $before: String, $first: String, $period: String, $sort: String, $type: String) {
  getByUser(
    user_id: $user_id
    after: $after
    before: $before
    first: $first
    period: $period
    sort: $sort
    type: $type
  ) {
    videos {
      id
      title
      description
      created_at
      published_at
      url
      thumbnail_url
      viewable
      view_count
      duration
    }
    pagination {
      cursor
    }
  }
}
    `;
export const useVideosQuery = <
      TData = VideosQuery,
      TError = unknown
    >(
      variables: VideosQueryVariables, 
      options?: UseQueryOptions<VideosQuery, TError, TData>
    ) => 
    useQuery<VideosQuery, TError, TData>(
      ['Videos', variables],
      customFetcher<VideosQuery, VideosQueryVariables>(VideosDocument, variables),
      options
    );