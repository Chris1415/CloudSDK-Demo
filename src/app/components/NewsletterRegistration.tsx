"use client";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { identity } from "@sitecore-cloudsdk/events/browser";
import { useState } from "react";

export default function NewsletterRegistration() {
  const [mail, setMail] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function Register(e: any) {
    e.preventDefault();
    if (mail) {
      identity({
        email: mail,
        firstName: firstName,
        lastName: lastName,
        identifiers: [
          {
            id: mail,
            provider: "email",
          },
        ],
      });
    }
  }

  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
          <h2 className="mx-auto max-w-3xl text-center text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Get informed about any upcoming features and releases
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-center text-lg text-gray-300">
            You can easily register with your eamil to always get all the latest
            information
          </p>
          <form className="mx-auto mt-10 flex max-w-4xl gap-x-4">
            <input
              id="firstName"
              name="firstName"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
              className="min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-white sm:text-sm/6"
            />
            <input
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              name="lastName"
              type="text"
              placeholder="Last Name"
              className="min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-white sm:text-sm/6"
            />

            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              required
              placeholder="Email"
              autoComplete="email"
              className="min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-white sm:text-sm/6"
            />
            <button
              onClick={(e) => Register(e)}
              type="submit"
              className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Notify me{" "}
              <InformationCircleIcon className="inline-block w-5 h-5 ml-1 align-top text-black" />
            </button>
          </form>
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
      </div>
    </div>
  );
}
