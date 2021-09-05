import { useContext } from "react";
import { ChannelContext } from "@/contexts/ChannelContext";
import formatViewCount from "@/utils/formatViewCount";
import { Tools } from "@/utils/toolReducer";
import BurgerButton from "./BurgerButton";

const Burger = (): JSX.Element => {
  const channelContext = useContext(ChannelContext);
  return (
    <div style={{ minWidth: "200px" }}>
      <div className="h-screen flex flex-col items-center bg-gray-800 bg-opacity-50 shadow text-lg">
        <div className="w-full flex flex-col items-center px-8 pt-8 pb-6 border-r-2 border-b-2 border-purple-900">
          <figure
            aria-label={channelContext.display_name}
            className="w-32 h-32"
          >
            <img
              src={channelContext.profile_image_url}
              alt={channelContext.display_name}
            />
          </figure>
          <span>{channelContext.display_name}</span>
          <span>{formatViewCount(channelContext.view_count)} vues</span>
        </div>
        <div className="w-full">
          <BurgerButton tool={Tools.VODs} />
          <BurgerButton tool={Tools.Clips} />
        </div>
        <div className="w-full h-full border-r-2 border-purple-900" />
      </div>
    </div>
  );
};

export default Burger;
