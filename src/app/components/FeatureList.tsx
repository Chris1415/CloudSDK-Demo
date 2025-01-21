import { BeakerIcon, MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/outline";

const features = [
  {
    name: "Events",
    description:
      "Enables realtime, Unified Tracking across the Sitecore DXP stack",
    icon: UserCircleIcon,
  },
  {
    name: "Personalize",
    description:
      "Be able to use and trigger Web and ineractive Experiences as well as Experiments",
    icon: BeakerIcon,
  },
  {
    name: "Search",
    description:
      "Execute searches and gather recommendations",
    icon: MagnifyingGlassIcon,
  },
];

export default function FeatureList() {
  return (
    <div className="bg-gray-900 py-12 sm:py-16">
      <div className="mx-auto px-32">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-base/7 font-semibold text-indigo-400">
            Sitecore
          </h2>
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            What does Cloud SDK offer?
          </p>
          <p className="mt-6 text-lg/8 text-gray-300">
            Learn more about all the capabilities Sitecore Cloud SDK offers and
            how you can use all of them
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base/7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-9">
              <dt className="inline font-semibold text-white">
                <feature.icon
                  aria-hidden="true"
                  className="absolute left-1 top-1 size-5 text-indigo-500"
                />
                {feature.name}
              </dt>{" "}
              <dd className="inline">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
