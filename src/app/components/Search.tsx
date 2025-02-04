"use client";

import SearchResultCard from "./SearchResultCard";
import Spinner from "./Spinner";
import useSearch, { SUGGESION_KEY, WIDGET_ID } from "../hooks/useSearch";
import { useState } from "react";
import { widgetSuggestionClick } from "@sitecore-cloudsdk/search/browser";
import { usePathname } from "next/navigation";

export default function Search() {
  const [query, setQuery] = useState<string>("");
  const [queryField, setQueryField] = useState<string>("");
  const { data, isLoading } = useSearch(query);
  const pathName = usePathname();

  async function handleFieldChange(val: string) {
    if (val.length >= 3) {
      setQuery(val);
    } else if (query != "") {
      setQuery("");
    }

    setQueryField(val);
  }

  async function searchSuggestionClicked(val: string) {
    setQueryField(val);
    setQuery(val);
    widgetSuggestionClick({
      request: {
        keyword: val,
      },
      pathname: pathName,
      widgetId: WIDGET_ID,
    });
  }

  return (
    <div className="text-white">
      <h2 className="font-bold text-5xl pb-4 pt-2 text-center">
        Search Results
      </h2>
      <div className="p-2 mt-2">
        <input
          id="query"
          name="query"
          type="text"
          value={queryField}
          onChange={(e) => handleFieldChange(e.target.value)}
          placeholder="Enter your search query"
          className="bg-gray-900 block w-full rounded-md px-3 py-1.5 text-base text-gray-600 outline outline-1 -outline-offset-1 outline-indigo-900 placeholder:text-gray-300 focus:outline focus:outline-2 focus:bg-gray-800 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
        />
        <p className="text-gray-400 text-sm pl-2 pt-1">
          Enter more than 3 characters to trigger search...
        </p>
        {!isLoading && (data?.widgets?.[0]?.content?.length ?? 0) == 0 ? (
          <>
            <div className="pl-2 pt-6">
              <div className="inline-block"> Sorry no results...</div>
              <div></div>
              {(data?.widgets?.[0]?.suggestion?.[SUGGESION_KEY]?.length ?? 0) >
              0 ? (
                <div className="inline-block">
                  Did you mean{" "}
                  {data?.widgets?.[0]?.suggestion?.[SUGGESION_KEY]?.map(
                    (element) => {
                      return (
                        <>
                          {" "}
                          <div
                            onClick={() => {
                              searchSuggestionClicked(element.text);
                            }}
                            className="cursor-pointer bg-slate-600 rounded-full py-1 px-2 right-0 text-sm inline-block"
                          >
                            {element.text}{" "}
                          </div>
                        </>
                      );
                    }
                  )}
                </div>
              ) : (
                <></>
              )}
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
      {isLoading ? (
        <>
          <Spinner />
          <div className="h-[400px]"></div>
        </>
      ) : (
        data && (
          <div className="grid grid-cols-4">
            {data?.widgets?.[0]?.content?.map((element) => (
              <SearchResultCard
                key={element.id}
                title={element.title}
                description={element.description}
                image={element.image_url}
                link={element.url}
                type={element.type}
              />
            )) ?? <></>}
          </div>
        )
      )}
    </div>
  );
}
