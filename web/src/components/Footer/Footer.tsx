import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = (): JSX.Element => (
  <footer className="absolute bottom-0 border-t-2 border-purple-800 text-white text-xl font-bold py-4 px-6 bg-indigo-900 w-full flex flex-col sm:flex-row sm:justify-between sm:items-center">
    <div className="text-center sm:mb-0 mb-4">
      <h3>Created by Timeo1210</h3>
    </div>
    <div className="text-center">
      <div className="flex justify-center sm:justify-end">
        <Link href="https://twitter.com/TimeoBoulhol">
          <a className="hover-effect mr-3">
            <Image
              src="/images/icon-twitter.svg"
              alt="Twiiter logo"
              width={24}
              height={20}
            />
          </a>
        </Link>
        <Link href="https://github.com/Timeo1210">
          <a className="hover-effect">
            <Image
              src="/images/icon-github.svg"
              alt="Github logo"
              width={24}
              height={20}
            />
          </a>
        </Link>
      </div>
      <span className="text-base text-gray-400">
        © 2021 Natek. All rights reserved.
      </span>
    </div>
  </footer>
);

export default Footer;
