import React, { useRef, useState } from "react";
import { useSearchChannelsQuery } from "@/API";
import SearchInput from "./SearchInput";
import SearchItem from "./SearchItem";

const SearchBar = (): JSX.Element => {
  const areaRef = useRef<HTMLDivElement>(null);
  const [queryResponseVisible, setQueryResponseVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const { isLoading, isError, data } = useSearchChannelsQuery(
    {
      query: inputValue,
      first: 5,
    },
    {
      staleTime: Infinity,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      retry: false,
    }
  );
  const channels = data?.search || [];

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

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const { value } = event.target;
    if (value.length > 3 || value.length === 0) {
      setInputValue(value);
    }
  };

  return (
    <div
      ref={areaRef}
      onBlur={handleBlur}
      role="search"
      className="w-full max-w-md relative"
    >
      <SearchInput
        showQueryResponse={showQueryResponse}
        handleInputChange={handleInputChange}
      />
      <div
        className="absolute top-0 z-10 bg-gray-800 w-full rounded-md p-2"
        style={{
          display: queryResponseVisible ? "block" : "none",
          boxShadow:
            "0 6px 16px rgba(0, 0, 0, 0.5) , 0 0 4px rgba(0, 0, 0, 0.4)",
        }}
      >
        <div className="invisible">
          <SearchInput />
        </div>
        <div className={`${isLoading || isError ? "flex justify-center" : ""}`}>
          {isLoading && <p>loading...</p>}
          {isError && <p>An error occurred !</p>}
          {channels &&
            channels.map((value) => (
              <SearchItem key={value.id} value={value} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
