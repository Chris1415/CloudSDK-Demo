import { Metadata } from "next";
import HeroBanner from "../components/HeroBanner";
import { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types";

export const metadata: Metadata = {
  title: "News Area",
  description: "Get all the latest News and find what is interesting for you",
  metadataBase: new URL("https://cloud-sdk-demo.vercel.app/"),
  openGraph: {
    title: "News Area",
    description: "Get all the latest News and find what is interesting for you",
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
      <HeroBanner
        Title="News Area"
        Text="Get all the latest News and find what is interesting for you"
      />
      <div className="p-6">
        {/* <Card /> */}
      </div>

      {/* <Title /> */}
    </div>
  );
}
