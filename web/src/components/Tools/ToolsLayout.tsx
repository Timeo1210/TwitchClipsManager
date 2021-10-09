import { useContext } from "react";
import { ToolContext } from "@/contexts/ToolContext";
import { Tools } from "@/utils/toolReducer";
import VODsTool from "./VODs";

const ToolsLayout = (): JSX.Element => {
  const toolContext = useContext(ToolContext);

  return (
    <div className="bg-gray-900">
      {toolContext.tool.current === Tools.VODs && <VODsTool />}
      {toolContext.tool.current === Tools.Clips && <span>Clips</span>}
    </div>
  );
};

export default ToolsLayout;
