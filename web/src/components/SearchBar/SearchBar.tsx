import React, { useState } from "react";
import Image from "next/image";

const SearchBar = (): JSX.Element => {
  const [queryResponseVisible, setQueryResponseVisible] = useState(false);

  const showQueryResponse = () => {
    setQueryResponseVisible(true);
  };

  const handleBlur: React.FocusEventHandler<HTMLDivElement> = (event) => {
    if (event.currentTarget.contains(event.relatedTarget as Node)) {
      setQueryResponseVisible(true);
    } else {
      setQueryResponseVisible(false);
    }
  };

  return (
    <div onBlur={handleBlur} role="search" className="w-full max-w-md relative">
      <div
        onFocus={showQueryResponse}
        className="flex flex-row w-full relative z-20 p-2"
      >
        <input
          className="bg-gray-600 rounded-tl-md rounded-bl-md py-2 px-4 pr-8 w-full border-2 border-transparent hover:border-gray-500 transition duration-100 ease-linear"
          placeholder="Rechercher"
        />
        <button
          type="button"
          className="flex justify-center items-center bg-gray-900 px-3 rounded-tr-md rounded-br-md ml-1"
        >
          <Image src="/images/icon-search.svg" height={20} width={20} />
        </button>
      </div>
      <div
        className="absolute top-0 z-10 bg-gray-800 w-full rounded-md p-2"
        style={{
          display: queryResponseVisible ? "block" : "none",
          boxShadow:
            "0 6px 16px rgba(0, 0, 0, 0.5) , 0 0 4px rgba(0, 0, 0, 0.4)",
        }}
      >
        <div className="invisible">
          <input
            className="bg-gray-600 rounded-tl-md rounded-bl-md p-2 px-4 pr-8 w-full border-2 border-transparent hover:border-gray-500 transition duration-100 ease-linear"
            placeholder="Rechercher"
          />
        </div>
        <div className="pt-2">
          <p>Query response here</p>
          <button type="button">HELLO</button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
