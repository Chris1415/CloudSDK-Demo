"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { EventData, event } from "@sitecore-cloudsdk/events/browser";
import { CHANNEL, LANGUAGE } from "../consts/personalization";

interface TrackableLinkProps {
  eventName: string;
  href: string;
  text: string;
}

export default function TrackableLink({
  eventName,
  href,
  text,
}: TrackableLinkProps) {
  const router = useRouter();
  const pathName = usePathname();

  async function sendEventOnLinkClick() {
    event({
      type: eventName,
      channel: CHANNEL,
      language: LANGUAGE,
      page: pathName,
    } as EventData);
    router.push(href);
  }

  return (
    <Link
      onClick={() => sendEventOnLinkClick()}
      href={href}
      className="rounded-md bg-indigo-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
    >
      {text}
      <InformationCircleIcon className="inline-block w-5 h-5 align-top text-white" />
    </Link>
  );
}
