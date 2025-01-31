import {
  SearchWidgetItem,
  Context,
  getWidgetData,
  WidgetRequestData,
  widgetView,
} from "@sitecore-cloudsdk/search/browser";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

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

function useSearch(query: string) {
  const [data, setData] = useState<SearchResultData>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const pathName = usePathname();

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const widgetRequest = new SearchWidgetItem("content", "cloudsdkdemohahn"); // Create a new widget request
      widgetRequest.content = {}; // Request all attributes for the entity
      widgetRequest.limit = 10; // Limit the number of results to 10
      if (query) {
        widgetRequest.query = {
          keyphrase: query,
        };
      }

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

      setData(response as SearchResultData);
      setIsLoading(false);

      widgetView({
        pathname: pathName,
        widgetId: "cloudsdkdemohahn",
        request: {},
        entities: [],
      });
    }
    fetchData();
  }, [pathName, query]);
  return { data, isLoading };
}
export default useSearch;
