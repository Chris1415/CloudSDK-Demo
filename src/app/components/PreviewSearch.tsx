"use client";

import {
  Context,
  getWidgetData,
  SearchWidgetItem,
  WidgetRequestData,
} from "@sitecore-cloudsdk/search/browser";
import { useEffect, useState } from "react";
import SearchResultCard from "./SearchResultCard";

interface SearchResultData {
  widgets: {
    rfk_id: string;
    type: string;
    used_in: string;
    entity: string;
    content: {
      description: string;
      id: string;
      image_url: string;
      name: string;
      source_id: string;
      title: string;
      type: string;
      url: string;
    }[];
  }[];
}

export default function PreviewSearch() {
  // Create a data state variable to store the received data:
  const [searchResults, setSearchResults] = useState<SearchResultData>();

  // Perform the initial data request:
  useEffect(() => {
    async function fetchData() {
      const widgetRequest = new SearchWidgetItem("content", "cloudsdkdemohahn"); // Create a new widget request
      widgetRequest.content = {}; // Request all attributes for the entity
      widgetRequest.limit = 10; // Limit the number of results to 10

      // Create a new context with the locale set to "EN" and "us".
      // Depending on your Sitecore Search configuration, using `Context` might be optional:
      const context = new Context({
        locale: { language: "EN", country: "us" },
      });
      // Call the `getWidgetData` function with the widget request and the context to request the data:
      const response = await getWidgetData(
        new WidgetRequestData([widgetRequest]),
        context
      );
      if (!response) return console.warn("No search results found.");

      setSearchResults(response as SearchResultData);
    }
    fetchData();
  }, []);

  return (
    <div className="text-white">
      {searchResults && (
        <div className="grid grid-cols-3">
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {searchResults.widgets?.[0]?.content.map((element) => (
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
