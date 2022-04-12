export interface GenerateMP4ApiInput {
  data: string;
}

export type GenerateMP4ApiOutput = {
  data: {
    video: {
      id: string;
      download: {
        status: string;
        url: string;
        __typename: string;
      };
    } | null;
  };
  extensions: {
    durationMilliseconds: number;
    operationName: string;
    requestID: string;
  };
};
