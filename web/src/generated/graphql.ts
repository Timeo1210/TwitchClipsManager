import { useMutation, UseMutationOptions, useQuery, UseQueryOptions } from 'react-query';
import { customFetcher } from '@/utils/graphqlFetcher';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
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
  created_at: Scalars['Float'];
  description: Scalars['String'];
  display_name: Scalars['String'];
  id: Scalars['String'];
  login: Scalars['String'];
  offline_image_url: Scalars['String'];
  profile_image_url: Scalars['String'];
  type: Scalars['String'];
  view_count: Scalars['Int'];
};

export type Clip = {
  __typename?: 'Clip';
  broadcaster_id: Scalars['String'];
  broadcaster_name: Scalars['String'];
  created_at: Scalars['String'];
  creator_id: Scalars['String'];
  creator_name: Scalars['String'];
  duration: Scalars['Float'];
  embed_url: Scalars['String'];
  game_id: Scalars['String'];
  id: Scalars['String'];
  language: Scalars['String'];
  thumbnail_url: Scalars['String'];
  title: Scalars['String'];
  url: Scalars['String'];
  video_id: Scalars['String'];
  view_count: Scalars['Float'];
};

export type Clips = {
  __typename?: 'Clips';
  clips: Array<Clip>;
  pagination: Pagination;
};

export type Mutation = {
  __typename?: 'Mutation';
  Videostate_postById?: Maybe<Videostate>;
};


export type MutationVideostate_PostByIdArgs = {
  request: PostByIdVideostateInput;
};

export type Pagination = {
  __typename?: 'Pagination';
  cursor?: Maybe<Scalars['String']>;
};

export type PostByIdVideostateInput = {
  video_id: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
<<<<<<< HEAD
  Channel_get: Channel;
  Clips_getByBroadcasterId: Clips;
  Hello_hello: Scalars['String'];
  SearchChannels_search: Array<SearchChannels>;
  Video_getById: Video;
  Videos_getByUser: Videos;
};


export type QueryChannel_GetArgs = {
  id: Scalars['String'];
};


export type QueryClips_GetByBroadcasterIdArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  broadcaster_id: Scalars['String'];
  ended_at?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  started_at?: InputMaybe<Scalars['String']>;
};


export type QuerySearchChannels_SearchArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  live_only?: InputMaybe<Scalars['Boolean']>;
  query: Scalars['String'];
=======
  Hello_hello: Scalars['String'];
  SearchChannels_search: Array<SearchChannels>;
  Channel_get: Channel;
  Videos_getByUser: Videos;
  Video_getById: Video;
  Clips_getByBroadcasterId: Clips;
  Videostate_getById: Videostate;
};


export type QuerySearchChannels_SearchArgs = {
  query: Scalars['String'];
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  live_only?: Maybe<Scalars['Boolean']>;
};


export type QueryChannel_GetArgs = {
  id: Scalars['String'];
};


export type QueryVideos_GetByUserArgs = {
  user_id: Scalars['String'];
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['String']>;
  period?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
>>>>>>> feature/VODDownload
};


export type QueryVideo_GetByIdArgs = {
  id: Scalars['String'];
};


<<<<<<< HEAD
export type QueryVideos_GetByUserArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['String']>;
  period?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  user_id: Scalars['String'];
=======
export type QueryClips_GetByBroadcasterIdArgs = {
  broadcaster_id: Scalars['String'];
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  ended_at?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Float']>;
  started_at?: Maybe<Scalars['String']>;
>>>>>>> feature/VODDownload
};


export type QueryVideostate_GetByIdArgs = {
  video_id: Scalars['String'];
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
  started_at: Scalars['String'];
  tag_ids: Array<Scalars['String']>;
  thumbnail_url: Scalars['String'];
  title: Scalars['String'];
};

export type Video = {
  __typename?: 'Video';
  created_at: Scalars['String'];
  description: Scalars['String'];
  duration: Scalars['String'];
  id: Scalars['String'];
  language: Scalars['String'];
  muted_segments: Scalars['String'];
  published_at: Scalars['String'];
  stream_id: Scalars['String'];
  thumbnail_url: Scalars['String'];
  title: Scalars['String'];
  type: Scalars['String'];
  url: Scalars['String'];
  user_id: Scalars['String'];
  user_login: Scalars['String'];
  user_name: Scalars['String'];
  view_count: Scalars['Float'];
  viewable: Scalars['String'];
};

export type Videos = {
  __typename?: 'Videos';
  pagination: Pagination;
  videos: Array<Video>;
};

export type Videostate = {
  __typename?: 'Videostate';
  video_id: Scalars['String'];
  state: Scalars['String'];
  download_url: Scalars['String'];
};

export type VideostateActionMutationVariables = Exact<{
  request: Scalars['String'];
}>;


export type VideostateActionMutation = (
  { __typename?: 'Mutation' }
  & { Videostate_postById?: Maybe<(
    { __typename?: 'Videostate' }
    & Pick<Videostate, 'video_id' | 'state' | 'download_url'>
  )> }
);

export type ChannelQueryVariables = Exact<{
  id: Scalars['String'];
}>;


<<<<<<< HEAD
export type ChannelQuery = { __typename?: 'Query', Channel_get: { __typename?: 'Channel', id: string, display_name: string, profile_image_url: string, view_count: number } };
=======
export type ChannelQuery = (
  { __typename?: 'Query' }
  & { Channel_get: (
    { __typename?: 'Channel' }
    & Pick<Channel, 'id' | 'display_name' | 'profile_image_url' | 'view_count'>
  ) }
);
>>>>>>> feature/VODDownload

export type ClipsQueryVariables = Exact<{
  broadcaster_id: Scalars['String'];
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  started_at?: InputMaybe<Scalars['String']>;
  ended_at?: InputMaybe<Scalars['String']>;
}>;


<<<<<<< HEAD
export type ClipsQuery = { __typename?: 'Query', Clips_getByBroadcasterId: { __typename?: 'Clips', clips: Array<{ __typename?: 'Clip', id: string, url: string, title: string, view_count: number, created_at: string, thumbnail_url: string, duration: number }>, pagination: { __typename?: 'Pagination', cursor?: string | null } } };
=======
export type ClipsQuery = (
  { __typename?: 'Query' }
  & { Clips_getByBroadcasterId: (
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
>>>>>>> feature/VODDownload

export type HelloQueryVariables = Exact<{ [key: string]: never; }>;


<<<<<<< HEAD
export type HelloQuery = { __typename?: 'Query', Hello_hello: string };
=======
export type HelloQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'Hello_hello'>
);
>>>>>>> feature/VODDownload

export type SearchChannelsQueryVariables = Exact<{
  query: Scalars['String'];
  first?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  live_only?: InputMaybe<Scalars['Boolean']>;
}>;


<<<<<<< HEAD
export type SearchChannelsQuery = { __typename?: 'Query', SearchChannels_search: Array<{ __typename?: 'SearchChannels', id: string, display_name: string, thumbnail_url: string }> };
=======
export type SearchChannelsQuery = (
  { __typename?: 'Query' }
  & { SearchChannels_search: Array<(
    { __typename?: 'SearchChannels' }
    & Pick<SearchChannels, 'id' | 'display_name' | 'thumbnail_url'>
  )> }
);
>>>>>>> feature/VODDownload

export type VideoQueryVariables = Exact<{
  id: Scalars['String'];
}>;


<<<<<<< HEAD
export type VideoQuery = { __typename?: 'Query', Video_getById: { __typename?: 'Video', id: string, user_id: string, user_name: string, title: string, description: string, created_at: string, published_at: string, url: string, thumbnail_url: string, view_count: number, duration: string } };
=======
export type VideoQuery = (
  { __typename?: 'Query' }
  & { Video_getById: (
    { __typename?: 'Video' }
    & Pick<Video, 'id' | 'user_id' | 'user_name' | 'title' | 'description' | 'created_at' | 'published_at' | 'url' | 'thumbnail_url' | 'view_count' | 'duration'>
  ) }
);
>>>>>>> feature/VODDownload

export type VideosQueryVariables = Exact<{
  user_id: Scalars['String'];
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['String']>;
  period?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
}>;


<<<<<<< HEAD
export type VideosQuery = { __typename?: 'Query', Videos_getByUser: { __typename?: 'Videos', videos: Array<{ __typename?: 'Video', id: string, title: string, description: string, created_at: string, published_at: string, url: string, thumbnail_url: string, viewable: string, view_count: number, duration: string }>, pagination: { __typename?: 'Pagination', cursor?: string | null } } };
=======
export type VideosQuery = (
  { __typename?: 'Query' }
  & { Videos_getByUser: (
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
>>>>>>> feature/VODDownload

export type VideostateQueryVariables = Exact<{
  video_id: Scalars['String'];
}>;


export type VideostateQuery = (
  { __typename?: 'Query' }
  & { Videostate_getById: (
    { __typename?: 'Videostate' }
    & Pick<Videostate, 'video_id' | 'state' | 'download_url'>
  ) }
);


export const VideostateActionDocument = `
    mutation VideostateAction($request: String!) {
  Videostate_postById(request: {video_id: $request}) {
    video_id
    state
    download_url
  }
}
    `;
export const useVideostateActionMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<VideostateActionMutation, TError, VideostateActionMutationVariables, TContext>) => 
    useMutation<VideostateActionMutation, TError, VideostateActionMutationVariables, TContext>(
      (variables?: VideostateActionMutationVariables) => customFetcher<VideostateActionMutation, VideostateActionMutationVariables>(VideostateActionDocument, variables)(),
      options
    );
export const ChannelDocument = `
    query Channel($id: String!) {
  Channel_get(id: $id) {
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
  Clips_getByBroadcasterId(
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
  Hello_hello
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
      variables === undefined ? ['Hello'] : ['Hello', variables],
      customFetcher<HelloQuery, HelloQueryVariables>(HelloDocument, variables),
      options
    );
export const SearchChannelsDocument = `
    query SearchChannels($query: String!, $first: Int, $after: String, $live_only: Boolean) {
  SearchChannels_search(
    query: $query
    first: $first
    after: $after
    live_only: $live_only
  ) {
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
  Video_getById(id: $id) {
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
  Videos_getByUser(
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
export const VideostateDocument = `
    query Videostate($video_id: String!) {
  Videostate_getById(video_id: $video_id) {
    video_id
    state
    download_url
  }
}
    `;
export const useVideostateQuery = <
      TData = VideostateQuery,
      TError = unknown
    >(
      variables: VideostateQueryVariables, 
      options?: UseQueryOptions<VideostateQuery, TError, TData>
    ) => 
    useQuery<VideostateQuery, TError, TData>(
      ['Videostate', variables],
      customFetcher<VideostateQuery, VideostateQueryVariables>(VideostateDocument, variables),
      options
    );