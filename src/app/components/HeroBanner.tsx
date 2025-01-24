"use client";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import usePersonalization from "../hooks/personalizationHook";
import { BANNER_PERSONALIZATION_KEY } from "../consts/personalization";
import { event, EventData } from "@sitecore-cloudsdk/events/browser";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface HeroBannerProps {
  Title: string;
  Text: string;
}

interface PersonalizedBannerResult {
  decisionOffers: {
    attributes: HeroBannerProps;
  }[];
  FirstName: string;
  LastName: string;
  message: string;
}

export default function HeroBanner({ Title, Text }: HeroBannerProps) {
  const pathName = usePathname();
  const router = useRouter();
  const { data } = usePersonalization<PersonalizedBannerResult>(
    BANNER_PERSONALIZATION_KEY
  );

  const showPersonalization = (data?.decisionOffers?.length ?? 0) > 0;

  async function sendEventOnLinkClick(
    name: string,
    url: string

  ) {
    await event({
      type: name,
      channel: "WEB",
      language: "en",
      page: pathName,
    } as EventData);

    router.push(url);
  }

  return (
    <div className="relative isolate overflow-hidden pt-14">
      <img
        alt=""
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        className="absolute inset-0 -z-10 size-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
              Go to our docs to read more{" "}
              <a
                href="https://doc.sitecore.com/xmc/en/developers/sdk/004/cloud-sdk/sitecore-cloud-sdk-for-javascript.html"
                className="font-semibold text-white"
              >
                <span aria-hidden="true" className="absolute inset-0" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-balance text-5xl font-semibold tracking-tight text-white sm:text-7xl">
              {showPersonalization
                ? data?.decisionOffers?.[0]?.attributes?.Title +
                  " " +
                  data?.FirstName +
                  " " +
                  data?.LastName
                : Title}
            </h1>
            <p className="mt-8 text-pretty text-lg font-medium text-gray-400 sm:text-xl/8">
              {showPersonalization
                ? data?.decisionOffers?.[0]?.attributes?.Text
                : Text}
            </p>

            <div className="mt-10 flex items-center justify-center gap-x-6 relative">
              <Link
                onClick={() => sendEventOnLinkClick("HERO_BANNER_BTN_CLICKED", "/")}
                href="/"
                className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
              >
                Get started{" "}
                <InformationCircleIcon className="inline-block w-5 h-5 align-top text-white" />
              </Link>
              <a href="#" className="text-sm/6 font-semibold text-white">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>
      <svg
        viewBox="0 0 1024 1024"
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-x-1/2"
      >
        <circle
          r={512}
          cx={512}
          cy={512}
          fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
          fillOpacity="0.7"
        />
        <defs>
          <radialGradient
            r={1}
            cx={0}
            cy={0}
            id="759c1415-0410-454c-8f7c-9a820de03641"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(512 512) rotate(90) scale(512)"
          >
            <stop stopColor="#7775D6" />
            <stop offset={1} stopColor="#E935C1" stopOpacity={0} />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}
