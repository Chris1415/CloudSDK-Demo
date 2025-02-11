"use client";
import usePersonalization from "../hooks/usePersonalization";
import {
  CARD_CUSTOM_CLICK_EVENT,
  CARD_PERSONALIZATION_KEY,
  EMAIL_TOKEN,
  FIRST_NAME_TOKEN,
  LAST_NAME_TOKEN,
  NUMBER_SESSIONS_TOKEN,
} from "../consts/personalization";
import TrackedLink from "./TrackableLink";

interface CardProps {
  superTitle: string;
  title: string;
  text: string;
  buttonText: string;
  personalizable: boolean;
}

interface PersonalizedCardResult {
  decisionOffers: {
    attributes: {
      Title: string;
      Text: string;
      Subtitle: string;
    };
  }[];
  FirstName: string;
  LastName: string;
  Email: string;
  message: string;
  NumberSessions: string;
}

export default function Card({
  superTitle,
  title,
  text,
  buttonText,
  personalizable,
}: CardProps) {
  const { data } = usePersonalization<PersonalizedCardResult>(
    CARD_PERSONALIZATION_KEY,
    personalizable
  );

  const showPersonalization =
    (data?.decisionOffers?.length ?? 0) > 0 &&
    data?.FirstName &&
    data?.LastName &&
    personalizable;

  return (
    <div className="relative bg-gray-900">
      <div className="relative h-80 overflow-hidden bg-indigo-600 md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&blend=6366F1&sat=-100&blend-mode=multiply"
          className="size-full object-cover"
        />
        <svg
          viewBox="0 0 926 676"
          aria-hidden="true"
          className="absolute -bottom-24 left-24 w-[57.875rem] transform-gpu blur-[118px]"
        >
          <path
            d="m254.325 516.708-90.89 158.331L0 436.427l254.325 80.281 163.691-285.15c1.048 131.759 36.144 345.144 168.149 144.613C751.171 125.508 707.17-93.823 826.603 41.15c95.546 107.978 104.766 294.048 97.432 373.585L685.481 297.694l16.974 360.474-448.13-141.46Z"
            fill="url(#60c3c621-93e0-4a09-a0e6-4c228a0116d8)"
            fillOpacity=".4"
          />
          <defs>
            <linearGradient
              id="60c3c621-93e0-4a09-a0e6-4c228a0116d8"
              x1="926.392"
              x2="-109.635"
              y1=".176"
              y2="321.024"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#776FFF" />
              <stop offset={1} stopColor="#FF4694" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
          <h2 className="text-base/7 font-semibold text-indigo-400">
            {showPersonalization
              ? data?.decisionOffers?.[0]?.attributes?.Subtitle.replace(
                  EMAIL_TOKEN,
                  data?.Email
                )
              : superTitle}
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {showPersonalization
              ? data?.decisionOffers?.[0]?.attributes?.Title.replace(
                  FIRST_NAME_TOKEN,
                  data?.FirstName
                ).replace(LAST_NAME_TOKEN, data?.LastName)
              : title}
          </p>
          <p className="mt-6 text-base/7 text-gray-300">
            {" "}
            {showPersonalization
              ? data?.decisionOffers?.[0]?.attributes?.Text.replace(
                  NUMBER_SESSIONS_TOKEN,
                  data?.NumberSessions
                )
              : text}
          </p>
          <div className="mt-8">
            <TrackedLink
              eventName={CARD_CUSTOM_CLICK_EVENT}
              text={buttonText}
              href="/"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
