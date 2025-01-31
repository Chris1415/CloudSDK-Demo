"use client";

import SearchResultCard from "./SearchResultCard";
import Spinner from "./Spinner";
import useSearch from "../hooks/useSearch";
import { useState } from "react";

export default function Search() {
  const [query, setQuery] = useState<string>("News");
  const { data, isLoading } = useSearch(query);

  return (
    <div className="text-white">
      <h2 className="font-bold text-5xl pb-4 pt-2 text-center">
        Search Results
      </h2>
      {isLoading ? <Spinner /> : <></>}
      {data && (
        <div className="grid grid-cols-4">
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {data?.widgets?.[0]?.content.map((element) => (
            <SearchResultCard
              key={element.id}
              title={element.title}
              description={element.description}
              image={element.image_url}
              link={element.url}
              type={element.type}
            />
          ))}
        </div>
      )}
    </div>
  );
}
