"use client";

import Link from "next/link";

const SearchBar = ({ handleSearchInput, searchString }) => {
  return (
    <div className="flex w-full items-center justify-center mb-[20px]">
      <input
        placeholder="Какой у вас вопрос?"
        type="text"
        className="w-full p-[10px] h-[48px] mr-[5px] text-white font-bold bg-[#1c1b1b] outline-none rounded-lg"
        onChange={(e) => handleSearchInput(e)}
        value={searchString}
      />
      <Link className="bg-green-500 rounded-lg text-center hover:bg-green-600 font-bold" href={"/add_post_form/"}>Добавить решение</Link>
    </div>
  );
};

export default SearchBar;
