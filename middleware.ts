import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";
import "@sitecore-cloudsdk/events/server";
import "@sitecore-cloudsdk/personalize/server";
import "@sitecore-cloudsdk/search/server";
// import { CloudSDK } from "@sitecore-cloudsdk/core/server";

export async function middleware(/*request: NextRequest*/) {
  const response = NextResponse.next();
  // CloudSDK(request, response, {
  //   sitecoreEdgeContextId:
  //     process.env.NEXT_PUBLIC_SITECORE_CDP_CONTEXT_ID ?? "",
  //   siteName: process.env.NEXT_PUBLIC_SITECORE_POS ?? "",
  //   enableServerCookie: true,
  // })
  //   .addEvents() // Initialize the `events` package.
  //   .addSearch() // Inititalize the 'search' package
  //   .addPersonalize({
  //     enablePersonalizeCookie: true,
  //   }) // Initialize the `personalize` package.
  //   .initialize();
  return response;
}
