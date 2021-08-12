import { useContext } from "react";
import { ToolContext } from "@/contexts/ToolContext";
import { Tools } from "@/utils/toolReducer";

const ToolsLayout = (): JSX.Element => {
  const toolContext = useContext(ToolContext);

  switch (toolContext.tool.current) {
    case Tools.VODs:
      return <>VODs</>;
    case Tools.Clips:
      return <>Clips</>;
    default:
      return <span>Outil Introuvable !</span>;
  }
};

export default ToolsLayout;
