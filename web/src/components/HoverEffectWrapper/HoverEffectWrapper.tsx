import { PropsWithChildren, useRef, useState } from "react";
import { animated, useSpring } from "react-spring";

const transformAttributes = (x: number, y: number, s: number) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const calcTransformValues = (x: number, y: number, rect: DOMRect) => [
  -(y - rect.top - rect.height / 2) / 5,
  (x - rect.left - rect.width / 2) / 5,
  1.05,
];

const HoverEffectWrapper = ({
  children,
}: // eslint-disable-next-line @typescript-eslint/ban-types
PropsWithChildren<{}>): JSX.Element => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [xys, set] = useState([0, 0, 1]);
  const transformValues = useSpring({ xys });

  return (
    <div ref={wrapperRef}>
      <animated.div
        style={{ transform: transformValues.xys.to(transformAttributes) }}
        onMouseLeave={() => set([0, 0, 1])}
        onMouseMove={(e) => {
          if (!wrapperRef.current) return;
          const rect = wrapperRef.current.getBoundingClientRect();
          set(calcTransformValues(e.clientX, e.clientY, rect));
        }}
      >
        {children}
      </animated.div>
    </div>
  );
};

export default HoverEffectWrapper;
