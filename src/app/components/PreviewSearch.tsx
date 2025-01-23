"use client";

import {
  Context,
  getWidgetData,
  SearchWidgetItem,
  WidgetRequestData,
} from "@sitecore-cloudsdk/search/browser";
import { useEffect, useState } from "react";

export default function PreviewSearch() {
  // Create a data state variable to store the received data:
  const [products, setProducts] = useState<unknown[]>([]);

  // Perform the initial data request:
  useEffect(() => {
    async function fetchData() {
      const widgetRequest = new SearchWidgetItem("product", "rfkid_7"); // Create a new widget request
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
      // Set the received data to the state variable:
      const responseWidget = response.widgets;
      const currentProducts = responseWidget?.[0]?.content || [];
      setProducts(currentProducts);
    }
    fetchData();
  }, []);

  return (
    <div className="text-white">
      {products && (
        <ul className="list-disc p-2">
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {products.map((product: any) => (
            <li className="p-2" key={product.id}>{product.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
