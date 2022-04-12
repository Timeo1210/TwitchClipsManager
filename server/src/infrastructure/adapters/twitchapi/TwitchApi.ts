import axios, { AxiosRequestConfig } from "axios";
import { OAuthResponse } from "./interfaces/OAuth.interface";
import {
  SearchChannelsInput,
  SearchChannelsOutput,
} from "./interfaces/SearchChannels.interface";
import { GetUserInput, GetUserOutput } from "./interfaces/GetUser.interface";
import { GetVideosInput } from "./interfaces/GetVideos.interface";
import { GetVideosApiOutput } from "./interfaces/api/GetVideos.api.interface";
import {
  GetStreamsApiInput,
  GetStreamsApiOutput,
} from "./interfaces/api/GetStreams.api.interface";
import { GetVideoInput } from "./interfaces/GetVideo.interface";
import {
  GetClipsApiInput,
  GetClipsApiOutput,
} from "./interfaces/api/GetClips.api.interface";
import {
  GenerateMP4ApiInput,
  GenerateMP4ApiOutput,
} from "./interfaces/api/GenerateMP4.api.interface";

interface ClientInterface {
  id: string;
  secret: string;
  gql_id: string;
}

export class TwitchApi {
  private client: ClientInterface;
  private baseUrl: string;
  private headers: {
    "Client-Id": string;
    Authorization: string;
  };

  constructor(client: ClientInterface) {
    this.client = {
      id: client.id,
      secret: client.secret,
      gql_id: client.gql_id,
    };
    this.baseUrl = "https://api.twitch.tv/helix";
    this.headers = { "Client-Id": this.client.id, Authorization: "" };
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private makeRequest(rawConfig: AxiosRequestConfig): Promise<any> {
    return new Promise((resolve, reject) => {
      const config = {
        baseURL: this.baseUrl,
        headers: this.headers,
        ...rawConfig,
      } as AxiosRequestConfig;

      axios(config)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          // LOG HERE
          console.error(error);
          reject(error);
        });
    });
  }

  private async OAuth() {
    const config = {
      method: "POST",
      baseURL: "https://id.twitch.tv",
      url: "/oauth2/token",
      params: {
        client_id: this.client.id,
        client_secret: this.client.secret,
        grant_type: "client_credentials",
      },
    } as AxiosRequestConfig;
    return (await this.makeRequest(config)) as OAuthResponse;
  }

  public async setup(): Promise<number> {
    const OAuthData = await this.OAuth();
    this.headers.Authorization = `Bearer ${OAuthData.access_token}`;
    return OAuthData.expires_in;
  }

  public async searchChannels(
    input: SearchChannelsInput
  ): Promise<SearchChannelsOutput[]> {
    const config = {
      method: "GET",
      url: "/search/channels",
      params: input,
    } as AxiosRequestConfig;
    return (await this.makeRequest(config)).data as SearchChannelsOutput[];
  }

  public async getUsers(input: GetUserInput): Promise<GetUserOutput[]> {
    const config = {
      method: "GET",
      url: "/users",
      params: input,
    } as AxiosRequestConfig;
    return (await this.makeRequest(config)).data as GetUserOutput[];
  }

  public async getVideos(
    input: GetVideosInput | GetVideoInput
  ): Promise<GetVideosApiOutput> {
    const config = {
      method: "GET",
      url: "/videos",
      params: input,
    } as AxiosRequestConfig;
    return (await this.makeRequest(config)) as GetVideosApiOutput;
  }

  public async getStreams(
    input: GetStreamsApiInput
  ): Promise<GetStreamsApiOutput> {
    const config = {
      method: "GET",
      url: "/streams",
      params: input,
    } as AxiosRequestConfig;
    return (await this.makeRequest(config)) as GetStreamsApiOutput;
  }

  public async getClips(input: GetClipsApiInput): Promise<GetClipsApiOutput> {
    const config = {
      method: "GET",
      url: "/clips",
      params: input,
    } as AxiosRequestConfig;
    return (await this.makeRequest(config)) as GetClipsApiOutput;
  }

  public async generateMP4(
    input: GenerateMP4ApiInput
  ): Promise<GenerateMP4ApiOutput> {
    const config = {
      method: "POST",
      baseURL: "https://gql.twitch.tv",
      url: "/gql",
      headers: {
        "Client-Id": this.client.gql_id,
        "Content-Type": "text/plain",
      },
      data: input.data,
    } as AxiosRequestConfig;
    return (await this.makeRequest(config)) as GenerateMP4ApiOutput;
  }
}
