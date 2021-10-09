import React from "react";
import Image from "next/image";
import Link from "next/link";
import HoverEffectWrapper from "@/components/HoverEffectWrapper/HoverEffectWrapper";

export type LookupButtonProps = {
  href?: string;
  className?: string;
};

const LookupButton = ({ href, className }: LookupButtonProps): JSX.Element => (
  <div
    className={`flex justify-center items-center flex-shrink-0 ${className}`}
  >
    <HoverEffectWrapper>
      <Link href={href || "#"}>
        <a target="_blank">
          <Image src="/images/icon-lookup.svg" width={50} height={50} />
        </a>
      </Link>
    </HoverEffectWrapper>
  </div>
);

export default LookupButton;
