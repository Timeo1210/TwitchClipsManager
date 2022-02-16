import { useToolContext } from "@/contexts/ToolContext";
import HoverEffectWrapper from "@/components/HoverEffectWrapper";
import { Tools } from "@/utils/toolReducer";

interface BurgerButtonProps {
  tool: Tools;
}

const BurgerButton = ({ tool }: BurgerButtonProps): JSX.Element => {
  const toolContext = useToolContext();

  const burgerButtonClasses =
    "w-full p-2 text-center text-xl font-bold bg-gray-900 border-b-2 border-purple-900";
  return (
    <button
      type="button"
      onClick={() => toolContext.setTool(tool)}
      className={`${burgerButtonClasses} ${
        toolContext.tool === tool ? "" : "border-r-2"
      } `}
      style={{ outline: "none" }}
    >
      <span>{tool}</span>
    </button>
  );
};

const BurgerButtonWrapper = ({ tool }: BurgerButtonProps): JSX.Element => (
  <HoverEffectWrapper>
    <BurgerButton tool={tool} />
  </HoverEffectWrapper>
);

export default BurgerButtonWrapper;
