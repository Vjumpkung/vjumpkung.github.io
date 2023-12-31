import { Disclosure, Transition } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const pages = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Projects",
      path: "/projects",
    },
    {
      name: "Contact",
      path: "https://linktr.ee/vjumpkung",
    },
  ];

  return (
    <header>
      <Disclosure as="nav" className=" border-gray-200 bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src="/profile.png"
              className="h-8"
              width={32}
              height={32}
              alt="vjumpkung website Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              vjumpkung
            </span>
          </Link>
          <Disclosure.Button className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600">
            <span className="sr-only"></span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </Disclosure.Button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border  rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-gray-800 md:bg-gray-900 border-gray-700">
              {pages.map((page) => {
                return (
                  <li key={page.name}>
                    <Link
                      href={page.path}
                      className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:p-0"
                    >
                      {page.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {pages.map((page) => {
                return (
                  <Link
                    key={page.name}
                    href={page.path}
                    className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0"
                  >
                    {page.name}
                  </Link>
                );
              })}
            </div>
          </Disclosure.Panel>
        </Transition>
      </Disclosure>
    </header>
  );
}
