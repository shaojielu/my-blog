// components/RevealCard.tsx

interface FavoriteItem {
  title: string;
  description: string;
  link: string;
}

interface RevealCardProps {
  item: FavoriteItem;
}

export default function RevealCard({ item }: RevealCardProps) {
  return (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-lg border border-transparent p-6 transition-all duration-300 ease-in-out
                 hover:border-gray-200 hover:bg-white hover:shadow-lg
                 dark:hover:border-gray-800 dark:hover:bg-neutral-900" 
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">
            {item.title}
          </h3>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
        </div>
        <div className="transform text-gray-400 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m0-7H3" />
          </svg>
        </div>
      </div>
    </a>
  );
}