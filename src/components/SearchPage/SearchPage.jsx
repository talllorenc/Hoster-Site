"use client";
import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import SearchedPosts from "./SearchedPosts";
const SearchPage = ({ posts }) => {
  const [filteredPosts, setfilteredPosts] = useState(posts);
  const [searchString, setsearchString] = useState("");

  const handleSearchInput = (e) => {
    setsearchString(e.target.value);
    const filterdPosts = posts.filter((post) => {
      return post.title.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setfilteredPosts(filterdPosts);
  };

  return (
    <div>
      <SearchBar
        handleSearchInput={handleSearchInput}
        searchString={searchString}
      />
      <div className="overflow-hidden rounded-lg bg-zinc-800 shadow">
        <SearchedPosts posts={filteredPosts} />
      </div>
    </div>
  );
};

export default SearchPage;
