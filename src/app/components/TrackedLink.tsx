"use client";
import Link from "next/link";
import useEvents from "../hooks/useEvents";
import { useRouter } from "next/navigation";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

interface TrackedLinkProps {
  eventName: string;
  href: string;
  text: string;
}

export default function TrackedLink({
  eventName,
  href,
  text,
}: TrackedLinkProps) {
  const { triggerEvent } = useEvents();
  const router = useRouter();

  async function sendEventOnLinkClick(name: string, url: string) {
    triggerEvent(name);
    router.push(url);
  }

  return (
    <Link
      onClick={() => sendEventOnLinkClick(eventName, href)}
      href={href}
      className="rounded-md bg-indigo-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
    >
      {text}{" "}
      <InformationCircleIcon className="inline-block w-5 h-5 align-top text-white" />
    </Link>
  );
}
