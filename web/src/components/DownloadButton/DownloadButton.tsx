import Link from "next/link";
import Image from "next/image";
import HoverEffectWrapper from "../HoverEffectWrapper/HoverEffectWrapper";

export type DownloadButtonProps = {
  href?: string;
  className?: string;
};

const DownloadButton = ({
  href,
  className,
}: DownloadButtonProps): JSX.Element => (
  <div
    className={`flex justify-center items-center flex-shrink-0 ${className}`}
  >
    <HoverEffectWrapper>
      <Link href={href || "#"}>
        <a target="_blank">
          <Image src="/images/icon-download.svg" width={40} height={40} />
        </a>
      </Link>
    </HoverEffectWrapper>
  </div>
);

export default DownloadButton;
