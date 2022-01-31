import { useContext } from "react";
import { ToolContext } from "@/contexts/ToolContext";
import { Tools } from "@/utils/toolReducer";
import VODsTool from "./VODs";
import ClipsTool from "./Clips";

const ToolsLayout = (): JSX.Element => {
  const toolContext = useContext(ToolContext);

  return (
    <div className="h-full bg-gray-900">
      {toolContext.tool.current === Tools.VODs && <VODsTool />}
      {toolContext.tool.current === Tools.Clips && <ClipsTool />}
    </div>
  );
};

export default ToolsLayout;
