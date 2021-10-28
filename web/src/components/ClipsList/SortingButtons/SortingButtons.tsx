import Image from "next/image";
import { useEffect, useState } from "react";

interface SortButtonProps {
  position: "l" | "r";
  imageUrl: string;
  onClick: () => void;
}

const SortButton = ({ position, imageUrl, onClick }: SortButtonProps) => (
  <div
    className={`bg-gray-800 flex items-center rounded-${position}-lg border-t border-${position} border-b border-gray-400`}
  >
    <button
      type="button"
      onClick={onClick}
      style={{ outline: "none" }}
      className="relative flex p-2 z-10"
    >
      <Image src={imageUrl} width={25} height={25} />
    </button>
  </div>
);

// This is purely UI and not implements logic yet
const SortingButtons = (): JSX.Element => {
  const [sortBy, setSortBy] = useState<"views" | "time">("views");

  useEffect(() => {
    if (sortBy === "time") {
      setTimeout(() => setSortBy("views"), 1000);
    }
  }, [sortBy, setSortBy]); // Only because no logic yet

  const borderRoundDirection = `rounded-${sortBy === "views" ? "l" : "r"}-lg`;
  return (
    <div className="flex ml-2 relative w-max h-full">
      <SortButton
        onClick={() => setSortBy("views")}
        position="l"
        imageUrl="/images/icon-eye.svg"
      />
      <div style={{ width: "2px" }} className="h-full bg-gray-400 z-10" />
      <SortButton
        onClick={() => setSortBy("time")}
        position="r"
        imageUrl="/images/icon-clock.svg"
      />
      <div
        style={{
          transitionDuration: "1s",
          transform: `translateX(${sortBy === "views" ? "0" : "100"}%)`,
        }}
        className={`absolute transition-all top-0 left-0 w-1/2 h-full bg-purple-800 border-transparent bg-clip-padding border ${borderRoundDirection}`}
      />
    </div>
  );
};

export default SortingButtons;
