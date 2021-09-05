import { useContext } from "react";
import { ChannelContext } from "@/contexts/ChannelContext";

const VODsTool = (): JSX.Element => {
  console.log("VODs Tool");

  const channelContext = useContext(ChannelContext);
  console.log(channelContext);

  return (
    <div>
      <span>VODs Tool</span>
    </div>
  );
};

export default VODsTool;
