import { Metadata } from "next";
import Card from "./components/Card";
import FeatureList from "./components/FeatureList";
import HeroBanner from "./components/HeroBanner";
import NewsletterRegistration from "./components/NewsletterRegistration";
import { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types";

export const metadata: Metadata = {
  title: "Cloud SDK Demo",
  description: "Welcome to my Sitecore Cloud SDK Demo Application",
  metadataBase: new URL("https://cloud-sdk-demo.vercel.app/"),
  openGraph: {
    title: "Cloud SDK Demo",
    description: "Welcome to my Sitecore Cloud SDK Demo Application",
    type: "website",
    url: "https://cloud-sdk-demo.vercel.app/",
    images: [
      {
        url: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply",
      },
    ],
  } as OpenGraph,
};

export default async function Home() {
  return (
    <div>
      <HeroBanner
        title="Welcome to my Sitecore Cloud SDK Demo Application"
        text="This demo gives you an idea, of how Sitecore Cloud SDK works and how it can be used"
      />
      <div className="p-6">
        <Card
          title="Get started by browsing around"
          superTitle="Guided Tour"
          buttonText="Trigger your first event"
          text="While browsing through this page you will see all kinds of functionalities available in the Cloud SDK. You will be told about each and every functionality as soon as you hit it"
        />
        <NewsletterRegistration />
        <FeatureList />
      </div>
    </div>
  );
}
