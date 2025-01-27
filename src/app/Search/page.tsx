import { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types";
import HeroBanner from "../components/HeroBanner";
import Search from "../components/Search";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search",
  description: "Easily find what you need",
  metadataBase: new URL("https://cloud-sdk-demo.vercel.app/"),
  openGraph: {
    title: "Search",
    description: "Easily find what you need",
    type: "website",
    url: "https://cloud-sdk-demo.vercel.app/Search",
    images: [
      {
        url: "https://fastly.picsum.photos/id/935/1600/800.jpg?hmac=kTnUnbusz7c5qklcH2jySzLjO1Hs71pxV8XU7bYRn_c",
      },
    ],
  } as OpenGraph,
};

export default function News() {
  return (
    <div>
      <HeroBanner
        title="Search"
        text="Easily find what you need"
        personalizable={false}
      />
      <div className="p-6">
        <Search />
      </div>

      {/* <Title /> */}
    </div>
  );
}
