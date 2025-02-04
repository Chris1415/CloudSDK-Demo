import { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types";
import HeroBanner from "../components/HeroBanner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn everything about us!",
  metadataBase: new URL("https://cloud-sdk-demo.vercel.app/"),
  keywords: "content",
  openGraph: {
    title: "About",
    description: "Learn everything about us!",
    type: "website",
    url: "https://cloud-sdk-demo.vercel.app/About",
    images: [
      {
        url: "https://fastly.picsum.photos/id/94/1600/800.jpg?hmac=xuEvGvnWYBctUS73Iu-67OYBcAFR9S8Rue_3lWWpA3Q",
      },
    ],
  } as OpenGraph,
};

export default function About() {
  return (
    <div>
      <HeroBanner
        title="About"
        text="Learn everything about us!"
        personalizable={false}
      />
      <div className="p-6"></div>
    </div>
  );
}
