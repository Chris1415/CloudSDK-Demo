import Card from "./components/Card";
import FeatureList from "./components/FeatureList";
import HeroBanner from "./components/HeroBanner";
import NewsletterRegistration from "./components/NewsletterRegistration";

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
