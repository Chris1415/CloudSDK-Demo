import { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types";
import HeroBanner from "../components/HeroBanner";
import { Metadata } from "next";

const headline = "Future";
const text = "Learn what will come next";
export const metadata: Metadata = {
  title: headline,
  keywords: "content",
  description: text,
  metadataBase: new URL("https://cloud-sdk-demo.vercel.app/"),
  openGraph: {
    title: headline,
    description: text,
    type: "website",
    url: "https://cloud-sdk-demo.vercel.app/Future",
    images: [
      {
        url: "https://fastly.picsum.photos/id/594/1600/800.jpg?hmac=2pdQ5F_kAT2pBru9OB3WrgJUWaEe0iFqwvLMlK6G39Y",
      },
    ],
  } as OpenGraph,
};

export default function Future() {
  return (
    <div>
      <HeroBanner title={headline} text={text} personalizable={false} />
      <div className="p-6"></div>
    </div>
  );
}
