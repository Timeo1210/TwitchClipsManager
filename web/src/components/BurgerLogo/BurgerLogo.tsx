import { HTMLAttributes } from "react";
import { animated, useSpring, config } from "react-spring"; // use to function to combine value

const defaultProps = {
  wrapperClasses: "",
  spanClasses: "",
  isOpen: false,
  spanHeight: 4,
};

type BurgerLogoProps = {
  height: number;
  wrapperClasses?: HTMLAttributes<HTMLDivElement>["className"];
  spanClasses?: HTMLAttributes<HTMLDivElement>["className"];
  isOpen?: boolean;
  spanHeight?: number;
} & typeof defaultProps;

const BurgerLogo = ({
  height,
  wrapperClasses,
  spanClasses,
  isOpen,
  spanHeight,
}: BurgerLogoProps): JSX.Element => {
  const middle = Math.round(height / 2);
  const {
    bottomAngle,
    bottomOffsetY,
    middleOffsetX,
    middleOpacity,
    topAngle,
    topOffsetY,
  } = useSpring({
    reset: true,
    reverse: !isOpen,
    config: config.wobbly,
    from: {
      topAngle: 0,
      topOffsetY: 0,
      middleOffsetX: 0,
      middleOpacity: 1,
      bottomAngle: 0,
      bottomOffsetY: height,
    },
    to: {
      topAngle: 135,
      topOffsetY: middle,
      middleOffsetX: -60,
      middleOpacity: 0,
      bottomAngle: -135,
      bottomOffsetY: middle,
    },
    topAngle: 0,
    topOffsetY: 0,
    middleOffsetX: 0,
    middleOpacity: 1,
    bottomAngle: 0,
    bottomOffsetY: height,
  });

  const baseStyle = {
    display: "block",
    height: `${spanHeight}px`,
    width: "100%",
    borderRadius: "9px",
  };

  return (
    <div
      style={{ height: `${height}px` }}
      className={`w-full h-full relative ${wrapperClasses}`}
    >
      <animated.span
        className={spanClasses}
        style={{
          ...baseStyle,
          position: "absolute",
          top: topOffsetY.to((t) => `${t}px`),
          transform: topAngle.to((a) => `rotate(${a}deg)`),
        }}
      />
      <animated.span
        className={spanClasses}
        style={{
          ...baseStyle,
          position: "absolute",
          top: middle,
          left: middleOffsetX.to((l) => `${l}px`),
          opacity: middleOpacity.to((o) => `${o}`),
        }}
      />
      <animated.span
        className={spanClasses}
        style={{
          ...baseStyle,
          position: "absolute",
          top: bottomOffsetY.to((t) => `${t}px`),
          transform: bottomAngle.to((a) => `rotate(${a}deg)`),
        }}
      />
    </div>
  );
};

BurgerLogo.defaultProps = defaultProps;

export default BurgerLogo;
