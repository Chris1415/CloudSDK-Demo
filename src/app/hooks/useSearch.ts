import {
  SearchWidgetItem,
  Context,
  getWidgetData,
  WidgetRequestData,
  widgetView,
  SearchSuggestionOptions,
  SearchEventEntity,
} from "@sitecore-cloudsdk/search/browser";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { SearchResult, StandardSearchResultElement } from "../types/search";

export const SUGGESION_KEY = "auto_named_suggester_4";
export const WIDGET_ID = "cloudsdkdemohahn";

function useSearch<
  T extends SearchResult<U>,
  U extends StandardSearchResultElement
>(query: string) {
  const [data, setData] = useState<T>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const pathName = usePathname();

  useEffect(() => {
    async function fetchData() {
      const suggesions = {
        name: SUGGESION_KEY,
        max: 5,
      } as SearchSuggestionOptions;
      const widgetRequest = new SearchWidgetItem("content", WIDGET_ID); // Create a new widget request
      widgetRequest.content = {}; // Request all attributes for the entity
      widgetRequest.limit = 10; // Limit the number of results to 10
      widgetRequest.suggestion = [suggesions];
      if (query && query.length >= 3) {
        widgetRequest.query = {
          keyphrase: query,
        };
      }

      // Create a new context with the locale set to "EN" and "us".
      // Depending on your Sitecore Search configuration, using `Context` might be optional:
      const context = new Context({
        locale: { language: "EN", country: "us" },
      });

      setIsLoading(true);
      // Call the `getWidgetData` function with the widget request and the context to request the data:
      const response = await getWidgetData(
        new WidgetRequestData([widgetRequest]),
        context
      );
      if (!response) return console.warn("No search results found.");

      const mappedSearchResult = response.widgets[0] as T;
      setData(mappedSearchResult);
      setIsLoading(false);

      widgetView({
        pathname: pathName,
        widgetId: WIDGET_ID,
        request: { keyword: query },
        entities:
          mappedSearchResult?.content?.map((element) => {
            const result = {
              entity: element.type,
              id: element.id,
            } as SearchEventEntity;
            return result;
          }) ?? ([] as SearchEventEntity[]),
      });
    }

    fetchData();
  }, [pathName, query]);
  return { data, isLoading };
}
export default useSearch;
