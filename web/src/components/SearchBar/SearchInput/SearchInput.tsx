import * as React from "react";
import Image from "next/image";

type SearchInputProps = {
  showQueryResponse?: () => void;
  handleInputChange?: React.ChangeEventHandler<HTMLInputElement>;
};

const SearchInput = ({
  showQueryResponse,
  handleInputChange,
}: SearchInputProps): JSX.Element => (
  <div
    onFocus={showQueryResponse}
    className="flex flex-row w-full relative z-20 p-2"
  >
    <input
      onChange={handleInputChange}
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
);

SearchInput.defaultProps = {
  showQueryResponse: () => {},
  handleInputChange: () => {},
};

export default SearchInput;
