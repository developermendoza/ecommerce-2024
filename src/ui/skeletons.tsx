import { FaAngleRight } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

export const BlogSkeleton = () => {
  return (
    <div className="col-span-2">
      <div className="animate-pulse">
        <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-20 mb-4"></div>
        <div className="h-8 bg-gray-200 rounded-full dark:bg-gray-700 w-full max-w-[500px] mb-4"></div>
        <div className="h-8 bg-gray-200 rounded-full dark:bg-gray-700 w-full max-w-[550px] mb-4"></div>
        <div className="flex items-center w-full">
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-8"></div>
          <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-12"></div>
          <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-4"></div>
          <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-12"></div>
        </div>
      </div>
      <div role="status" className="w-full mt-10 rounded shadow animate-pulse">
        <div className="flex items-center justify-center h-96 mb-4 bg-gray-300 rounded dark:bg-gray-700">
          <svg
            className="w-10 h-10 text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 20"
          >
            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
          </svg>
        </div>
      </div>
      <div role="status" className="space-y-2.5 animate-pulse mt-12">
        <div className="flex items-center w-full">
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
          <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
          <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
        </div>
        <div className="flex items-center w-full">
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
          <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
          <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
        </div>
        <div className="flex items-center w-full ">
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
          <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
          <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
        </div>
        <div className="flex items-center w-full ">
          <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
          <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
          <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
        </div>
        <div className="flex items-center w-full ">
          <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-32"></div>
          <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
          <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
        </div>
        <div className="flex items-center w-full ">
          <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
          <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
          <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
        </div>
        <div className="flex items-center w-full">
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
          <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
          <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
        </div>
        <div className="flex items-center w-full">
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
          <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
          <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
        </div>
        <div className="flex items-center w-full">
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
          <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
          <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export const BlogNavbarSkeleton = () => {
  return (
    <div className="bg-gray-100 ">
      <div className="max-w-6xl m-auto font-light flex gap-2 text-gray-500 py-3 items-center">
        <div role="status" className="space-y-2.5 animate-pulse max-w-6xl">
          <div className="flex items-center w-full">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
            <FaAngleRight className="text-2xl ml-2" />
            <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
            <FaAngleRight className="text-2xl ml-2" />
            <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const BlogSidebarSkeleton = () => {
  return (
    <aside>
      <div className="mb-10">
        <h3 className="font-semibold text-xl mb-4">Categories</h3>
        <div role="status" className="space-y-2.5 animate-pulse max-w-lg">
          <div className="h-3.5 bg-gray-200 rounded-full dark:bg-gray-700 w-20"></div>
          <div className="h-3.5 bg-gray-200 rounded-full dark:bg-gray-700 w-36"></div>
          <div className="h-3.5 bg-gray-200 rounded-full dark:bg-gray-700 w-16"></div>
          <div className="h-3.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
          <div className="h-3.5 bg-gray-200 rounded-full dark:bg-gray-700 w-24"></div>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
      <div className="mb-10">
        <h2 className="font-semibold text-xl mb-4">Latest Posts</h2>
        <div
          role="status"
          className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center mb-4"
        >
          <div className="flex items-center justify-center w-28 h-28 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
            <svg
              className="w-10 h-10 text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
            </svg>
          </div>
          <div className="w-full">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 max-w-24 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 max-w-full mb-2.5"></div>
            <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 max-w-28 mb-2.5"></div>
          </div>
          <span className="sr-only">Loading...</span>
        </div>
        <div
          role="status"
          className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center mb-4"
        >
          <div className="flex items-center justify-center w-28 h-28 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
            <svg
              className="w-10 h-10 text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
            </svg>
          </div>
          <div className="w-full">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 max-w-24 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 max-w-full mb-2.5"></div>
            <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 max-w-28 mb-2.5"></div>
          </div>
          <span className="sr-only">Loading...</span>
        </div>
        <div
          role="status"
          className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center mb-4"
        >
          <div className="flex items-center justify-center w-28 h-28 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
            <svg
              className="w-10 h-10 text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
            </svg>
          </div>
          <div className="w-full">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 max-w-24 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 max-w-full mb-2.5"></div>
            <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 max-w-28 mb-2.5"></div>
          </div>
          <span className="sr-only">Loading...</span>
        </div>
        <div
          role="status"
          className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center mb-4"
        >
          <div className="flex items-center justify-center w-28 h-28 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
            <svg
              className="w-10 h-10 text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
            </svg>
          </div>
          <div className="w-full">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 max-w-24 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 max-w-full mb-2.5"></div>
            <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 max-w-28 mb-2.5"></div>
          </div>
          <span className="sr-only">Loading...</span>
        </div>
        <div
          role="status"
          className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center mb-4"
        >
          <div className="flex items-center justify-center w-28 h-28 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
            <svg
              className="w-10 h-10 text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
            </svg>
          </div>
          <div className="w-full">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 max-w-24 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 max-w-full mb-2.5"></div>
            <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 max-w-28 mb-2.5"></div>
          </div>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
      <div className="mb-10">
        <h2 className="font-semibold text-xl mb-4">Tags</h2>
        <div role="status" className="max-w-sm animate-pulse gap-4">
          <div className="flex gap-2 flex-wrap">
            <div className="h-8 bg-gray-200 rounded-full dark:bg-gray-700 w-full max-w-[100px]"></div>
            <div className="h-8 bg-gray-200 rounded-full dark:bg-gray-700 w-full max-w-[90px]"></div>
            <div className="h-8 bg-gray-200 rounded-full dark:bg-gray-700 w-full max-w-[80px]"></div>
            <div className="h-8 bg-gray-200 rounded-full dark:bg-gray-700 w-full max-w-[120px]"></div>
            <div className="h-8 bg-gray-200 rounded-full dark:bg-gray-700 w-full max-w-[90px]"></div>
            <div className="h-8 bg-gray-200 rounded-full dark:bg-gray-700 w-full max-w-[80px]"></div>
          </div>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </aside>
  );
};

export const BlogPageSkeleton = () => {
  return (
    <main>
      <BlogNavbarSkeleton />
      <div className="max-w-6xl m-auto">
        <div className="grid grid-cols-3 gap-8 py-12">
          <BlogSkeleton />
          <BlogSidebarSkeleton />
        </div>
      </div>
    </main>
  );
};

export const BlogsPageSkeleton = () => {
  return (
    <main>
      <BlogsTopbar />
      <section className="max-w-6xl m-auto py-12">
        <div className="grid grid-cols-4 gap-6">
          <BlogsSkeleton />
          <BlogSidebarSkeleton />
        </div>
      </section>
    </main>
  );
};

export const BlogsSkeleton = () => {
  return (
    <div className="col-span-3 grid grid-cols-3 gap-6 animate-pulse ">
      <div className="col-span-3 grid grid-cols-3 gap-6">
        <div className="w-full flex justify-center items-center h-[350px] bg-gray-300 rounded dark:bg-gray-700">
          <svg
            className="w-10 h-10 text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>
        <div className="col-span-2">
          <div className="font-semibold flex gap-4 items-center mb-4">
            <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-14 "></div>
            <p className="text-gray-600">•</p>
            <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-20 "></div>
          </div>
          <div className="h-8 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4"></div>
          <div className="h-8 bg-gray-200 rounded-full dark:bg-gray-700 w-full max-w-40 "></div>
          <div className="w-full my-4">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
          </div>

          <div className="h-6 bg-gray-200 rounded-full dark:bg-gray-700 w-full max-w-36 "></div>
        </div>
      </div>
      <div className="col-span-3 grid grid-cols-3 gap-6">
        <div className="w-full flex justify-center items-center h-[350px] bg-gray-300 rounded dark:bg-gray-700">
          <svg
            className="w-10 h-10 text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>
        <div className="col-span-2">
          <div className="font-semibold flex gap-4 items-center mb-4">
            <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-14 "></div>
            <p className="text-gray-600">•</p>
            <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-20 "></div>
          </div>
          <div className="h-8 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4"></div>
          <div className="h-8 bg-gray-200 rounded-full dark:bg-gray-700 w-full max-w-40 "></div>
          <div className="w-full my-4">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
          </div>

          <div className="h-6 bg-gray-200 rounded-full dark:bg-gray-700 w-full max-w-36 "></div>
        </div>
      </div>
      <div className="col-span-3 grid grid-cols-3 gap-6">
        <div className="w-full flex justify-center items-center h-[350px] bg-gray-300 rounded dark:bg-gray-700">
          <svg
            className="w-10 h-10 text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>
        <div className="col-span-2">
          <div className="font-semibold flex gap-4 items-center mb-4">
            <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-14 "></div>
            <p className="text-gray-600">•</p>
            <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-20 "></div>
          </div>
          <div className="h-8 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4"></div>
          <div className="h-8 bg-gray-200 rounded-full dark:bg-gray-700 w-full max-w-40 "></div>
          <div className="w-full my-4">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
          </div>

          <div className="h-6 bg-gray-200 rounded-full dark:bg-gray-700 w-full max-w-36 "></div>
        </div>
      </div>
    </div>
  );
};

export const BlogsTopbar = () => {
  return (
    <div className="text-center py-16">
      <h1 className="text-6xl font-semibold">Our Stories</h1>
      <div className="flex gap-2 items-center justify-center mt-4">
        <p className="font-semibold ">Home</p>
        <IoIosArrowForward className="text-gray-500" />
        <p className="text-gray-500">Blog</p>
      </div>
    </div>
  );
};

export const LandingCategoriesSkeleton = () => {
  return (
    <section className="py-24">
      <div className="max-w-6xl m-auto">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-semibold mb-10">Shop by Collection</h2>
          <div className="flex gap-4 text-3xl">
            <MdOutlineKeyboardArrowLeft />
            <MdOutlineKeyboardArrowRight />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-8">
          <div
            role="status"
            className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center"
          >
            <div className="flex items-center justify-center w-full h-[400px] bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
              <svg
                className="w-10 h-10 text-gray-200 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
              >
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
            </div>
          </div>
          <div
            role="status"
            className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center"
          >
            <div className="flex items-center justify-center w-full h-[400px] bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
              <svg
                className="w-10 h-10 text-gray-200 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
              >
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
            </div>
          </div>
          <div
            role="status"
            className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center"
          >
            <div className="flex items-center justify-center w-full h-[400px] bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
              <svg
                className="w-10 h-10 text-gray-200 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
              >
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
            </div>
          </div>
          <div
            role="status"
            className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center"
          >
            <div className="flex items-center justify-center w-full h-[400px] bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
              <svg
                className="w-10 h-10 text-gray-200 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
              >
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const LandingHeroSkeleton = () => {
  return (
    <div
      role="status"
      className=" animate-pulse  h-[800px] m-auto w-full gap-2 flex flex-col justify-center items-center"
    >
      <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-4"></div>
      <div className="h-10 bg-gray-200 rounded-full dark:bg-gray-700 w-52 mb-4"></div>
      <div className="h-10 bg-gray-200 rounded-full dark:bg-gray-700 w-72 mb-4"></div>
      <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-40 mb-4"></div>
    </div>
  );
};
