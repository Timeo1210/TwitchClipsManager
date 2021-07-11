import React from "react"

import SearchBar from "@/components/SearchBar";

const Home = (): JSX.Element => (
  <div className="bg-gray-900 h-screen flex flex-col items-center">
    <div className="w-full flex justify-center items-center p-4 bg-gray-800 text-base leading-relaxed" >
      <SearchBar />
    </div>
  </div>
)

export default Home;
