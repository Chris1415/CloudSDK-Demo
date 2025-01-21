import { NextResponse } from "next/server";
import "@sitecore-cloudsdk/events/server";
import "@sitecore-cloudsdk/personalize/server";

export async function middleware() {
  const response = NextResponse.next();
  return response;
}
