import Link from "next/link";
export const AccountBreadcrumbs = ({
  currentPage,
  secondPage,
  isPageDetail,
}: {
  currentPage: string;
  secondPage: string;
  isPageDetail: boolean;
}) => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse mb-4">
        <li className="inline-flex items-center">
          <Link
            href="/account"
            className="inline-flex items-center text-sm font-medium text-gray-400 hover:text-white"
          >
            <svg
              className="w-3 h-3 me-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M19.707 9.293l-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414z" />
            </svg>
            Home
          </Link>
        </li>
        {isPageDetail && (
          <li>
            <div className="flex items-center">
              <svg
                className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 9l4-4-4-4"
                />
              </svg>
              <Link
                href="/account/orders"
                className="ms-1 text-sm font-medium  hover:text-blue-600 md:ms-2 text-gray-400 capitalize"
              >
                {secondPage}
              </Link>
            </div>
          </li>
        )}
        <li>
          <div className="flex items-center">
            <svg
              className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 9l4-4-4-4"
              />
            </svg>
            <span className="ms-1 text-sm font-medium md:ms-2 text-white capitalize">
              {currentPage}
            </span>
          </div>
        </li>
      </ol>
    </nav>
  );
};
