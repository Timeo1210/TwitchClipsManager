import Image from "next/image";

type LoadingIconProps = {
  height: number;
  width: number;
};

const LoadingIcon = ({ width, height }: LoadingIconProps): JSX.Element => (
  <Image src="/images/icon-loading.svg" width={width} height={height} />
);

export default LoadingIcon;
