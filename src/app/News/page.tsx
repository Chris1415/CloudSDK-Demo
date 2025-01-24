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
    url: "https://cloud-sdk-demo.vercel.app/News",
    images: [
      {
        url: "https://fastly.picsum.photos/id/513/1600/800.jpg?hmac=92J845qCYxEkLRQYkNJtLrzhnhl7TkNn2rclcFw5uRs",
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
