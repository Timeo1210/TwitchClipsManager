export enum Tools {
  VODs = "Vods",
  Clips = "Clips",
}

export type ToolState = {
  current: Tools;
};
export type ToolReducerAction = {
  type: "CHANGE";
  payload: Tools;
};

export const toolReducer = (
  state: ToolState,
  action: ToolReducerAction
): ToolState => {
  switch (action.type) {
    case "CHANGE":
      return { current: action.payload };
    default:
      return state;
  }
};
