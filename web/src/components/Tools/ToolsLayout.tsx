import { useToolContext } from "@/contexts/ToolContext";
import { Tools } from "@/utils/toolReducer";
import VODsTool from "./VODs";
import ClipsTool from "./Clips";

const ToolsLayout = (): JSX.Element => {
  const toolContext = useToolContext();

  return (
    <div className="h-full bg-gray-900">
      {toolContext.tool === Tools.VODs && <VODsTool />}
      {toolContext.tool === Tools.Clips && <ClipsTool />}
    </div>
  );
};

export default ToolsLayout;
