"use client";

import { pageView } from "@sitecore-cloudsdk/events/browser";
import { CloudSDK } from "@sitecore-cloudsdk/core/browser";
import "@sitecore-cloudsdk/search/browser";
import { usePathname } from "next/navigation";

import { useEffect } from "react";

export default function PageView() {
  const pathName = usePathname();
  useEffect(() => {
    CloudSDK({
      sitecoreEdgeContextId:
        process.env.NEXT_PUBLIC_SITECORE_CDP_CONTEXT_ID ?? "",
      siteName: process.env.NEXT_PUBLIC_SITECORE_POS ?? "",
      enableBrowserCookie: true,
    })
      .addEvents() // Initialize the `events` package.
      .addSearch()
      .addPersonalize({ enablePersonalizeCookie: true }) // Initialize the `personalize` package.
      .initialize();

    // Send VIEW event:
    pageView({
      channel: "WEB",
      currency: "USD",
      page: pathName,
      language: "en",
      includeUTMParameters: true,
      // referrer: chosenReferrer,
    });
  }, [pathName]);

  return <></>;
}
