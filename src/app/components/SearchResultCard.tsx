interface SearchResultCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  type: string;
}

export default function SearchResultCard({
  title,
  description,
  image,
  link,
  type,
}: SearchResultCardProps) {
  return (
    <>
      <div className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white m-2">
        <img
          alt={"Product Image"}
          src={image}
          className="aspect-[3/4] bg-gray-200 object-cover group-hover:opacity-75 sm:h-96"
        />
        <div className="flex flex-1 flex-col space-y-2 p-4 w-full">
          <div className="relative w-full">
            <h3 className="inline-block text-sm font-medium text-gray-900">
              <a href={link}>
                <span aria-hidden="true" className="absolute inset-0" />
                {title}
              </a>
            </h3>
            <div className="bg-slate-800 rounded-full py-1 px-2 absolute float-end right-0 text-sm inline-block">{type} </div>
          </div>

          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
    </>
  );
}
