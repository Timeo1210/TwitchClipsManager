import React, { HTMLAttributes, PropsWithChildren, useState } from "react";
import { animated, useSpring, config } from "react-spring";
import BurgerLogo from "@/components/BurgerLogo";

type SidePanelProps = {
  menu: JSX.Element;
  width: number;
  wrapperClasses?: HTMLAttributes<HTMLDivElement>["className"];
};

const springConfig = {
  ...config.wobbly,
  tension: 50,
  mass: 1.15,
};

const SidePanelLayout = ({
  menu,
  width,
  wrapperClasses,
  children,
}: PropsWithChildren<SidePanelProps>): JSX.Element => {
  const [open, setOpen] = useState(false);
  const { mainOffset } = useSpring({
    reset: true,
    reverse: !open,
    config: springConfig,
    from: {
      mainOffset: 0,
    },
    to: {
      mainOffset: width,
    },
    mainOffset: 0,
  });

  return (
    <div className={`flex justify-start h-screen ${wrapperClasses}`}>
      <div
        style={{ width: "12vw", maxWidth: "50px" }}
        className="z-30 box-border bg-gray-800 bg-opacity-50 border-r-2 border-purple-900"
      >
        <button
          type="button"
          onClick={() => setOpen(!open)}
          style={{ outline: "none" }}
          className="w-full p-2"
        >
          <BurgerLogo height={20} isOpen={open} spanClasses="bg-purple-800" />
        </button>
      </div>
      <div className="relative flex-grow">
        <div className="absolute top-0 left-0 h-full visible">{menu}</div>
        <animated.div
          style={{
            transform: mainOffset.to((o) => `translateX(${o}px)`),
            overflowX: "hidden",
          }}
          className="relative left-0 z-40"
        >
          {children}
        </animated.div>
      </div>
    </div>
  );
};

SidePanelLayout.defaultProps = {
  wrapperClasses: "",
};

export default SidePanelLayout;
