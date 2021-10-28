import { useContext } from "react";
import { ClipsContext } from "@/contexts/ClipsContext";
import SortingButtons from "./SortingButtons/SortingButtons";
import ClipItem from "./ClipItem/ClipItem";

const ClipsList = (): JSX.Element => {
  const clipsContext = useContext(ClipsContext);

  return (
    <div
      style={{ maxWidth: "1000px", maxHeight: "400px", minHeight: "50%" }}
      className="flex flex-col overflow-y-auto overflow-x-hidden w-full"
    >
      <div className="ml-2 mb-2 flex items-center">
        <span>Trier par : </span>
        <SortingButtons />
        <span className="ml-2">
          Cette fonctionnalité n&apos;est pas encore disponible !<br />
          (par défaut les clips sont trier par vues)
        </span>
      </div>
      <div className="w-full h-full overflow-y-auto custom-scrollbar">
        {clipsContext.clips.map((value) => (
          <ClipItem key={value.id} clip={value} />
        ))}
      </div>
    </div>
  );
};

export default ClipsList;
