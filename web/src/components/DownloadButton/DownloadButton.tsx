import Link from "next/link";
import Image from "next/image";
import HoverEffectWrapper from "../HoverEffectWrapper";

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
        <a
          target="_blank"
          aria-label="download corresponding clip"
          rel="nofollow noopener noreferrer"
        >
          <Image
            src="/images/icon-download.svg"
            width={40}
            height={40}
            alt="download clip"
          />
        </a>
      </Link>
    </HoverEffectWrapper>
  </div>
);

export default DownloadButton;
