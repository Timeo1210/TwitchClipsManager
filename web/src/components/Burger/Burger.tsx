import { ChannelQuery } from "@/API";
import formatViewCount from "@/utils/formatViewCount";
import { Tools } from "@/utils/toolReducer";
import BurgerButton from "./BurgerButton";

interface BurgerProps {
  channel: ChannelQuery["get"];
}

const Burger = ({ channel }: BurgerProps): JSX.Element => (
  <div style={{ minWidth: "200px" }}>
    <div className="h-screen flex flex-col items-center bg-gray-800 bg-opacity-50 shadow text-lg">
      <div className="w-full flex flex-col items-center px-8 pt-8 pb-6 border-r-2 border-b-2 border-purple-900">
        <figure aria-label={channel.display_name} className="w-32 h-32">
          <img src={channel.profile_image_url} alt={channel.display_name} />
        </figure>
        <span>{channel.display_name}</span>
        <span>{formatViewCount(channel.view_count)} vues</span>
      </div>
      <div className="w-full">
        <BurgerButton tool={Tools.VODs} />
        <BurgerButton tool={Tools.Clips} />
      </div>
      <div className="w-full h-full border-r-2 border-purple-900" />
    </div>
  </div>
);

export default Burger;
