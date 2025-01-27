import { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types";
import HeroBanner from "../components/HeroBanner";
import { Metadata } from "next";
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Form",
  description: "Want to reach us? No Problem!",
  metadataBase: new URL("https://cloud-sdk-demo.vercel.app/"),
  openGraph: {
    title: "Contact Form",
    description: "Want to reach us? No Problem!",
    type: "website",
    url: "https://cloud-sdk-demo.vercel.app/Contact",
    images: [
      {
        url: "https://fastly.picsum.photos/id/731/1600/800.jpg?hmac=of1pk05OqDGv4GDQeJtFBLW2ME5d3EamKvyISieBFb8",
      },
    ],
  } as OpenGraph,
};

export default function Contact() {
  return (
    <div>
      <HeroBanner
        title="Contact Form"
        text="Want to reach us? No Problem!"
        personalizable={false}
      />
      <div className="p-6">
        <ContactForm />
      </div>
    </div>
  );
}
