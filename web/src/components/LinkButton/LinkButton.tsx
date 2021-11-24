/* eslint-disable react/require-default-props */
import React from "react";
import Link from "next/link";
import Image from "next/image";
import HoverEffectWrapper from "@/components/HoverEffectWrapper";

type LinkButtonProps = {
  href: string;
  imgSrc: string;
  imgSquareSize?: number;
  imgWidth?: number;
  imgHeight?: number;
  imgAlt?: string;
  containerClassName?: string;
};

const LinkButton = ({
  href,
  imgSrc,
  imgSquareSize = 32,
  imgWidth,
  imgHeight,
  imgAlt = "",
  containerClassName = "",
}: LinkButtonProps): JSX.Element => (
  <div className={`leading-none text-center ${containerClassName}`}>
    <HoverEffectWrapper>
      <Link href={href}>
        <a className="inline-block">
          <Image
            src={imgSrc}
            width={imgWidth || imgSquareSize}
            height={imgHeight || imgSquareSize}
            alt={imgAlt}
          />
        </a>
      </Link>
    </HoverEffectWrapper>
  </div>
);

export default LinkButton;
