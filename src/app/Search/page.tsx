import { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types";
import HeroBanner from "../components/HeroBanner";
import PreviewSearch from "../components/PreviewSearch";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search",
  description: "Easily find what you need",
  metadataBase: new URL("https://cloud-sdk-demo.vercel.app/"),
  openGraph: {
    title: "Search",
    description: "Easily find what you need",
    type: "website",
    url: "https://cloud-sdk-demo.vercel.app/",
    images: [
      {
        url: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply",
      },
    ],
  } as OpenGraph,
};

export default function News() {
  return (
    <div>
      <HeroBanner title="Search" text="Easily find what you need" />
      <div className="p-6">
        <PreviewSearch />
      </div>

      {/* <Title /> */}
    </div>
  );
}
