import { Fragment } from "react";
import {
  BriefcaseIcon,
  CalendarIcon,
  CheckIcon,
  ChevronDownIcon,
  CurrencyDollarIcon,
  LinkIcon,
  LocationMarkerIcon,
} from "@heroicons/react/solid";
import { Menu, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faYoutube,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Main from "../../layout/Main";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Dashboard() {
  return (
    <Main>
      {" "}
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            Airbnb Resort
          </h2>
          <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <BriefcaseIcon
                className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              Full-time
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <LocationMarkerIcon
                className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              Remote
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <CurrencyDollarIcon
                className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              $120k &ndash; $140k
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <CalendarIcon
                className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              Closing on January 9, 2023
            </div>
          </div>
        </div>
        <div className="mt-5 flex lg:mt-0 lg:ml-4">

          <span className="hidden sm:block ml-3">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <LinkIcon
                className="-ml-1 mr-2 h-5 w-5 text-gray-500"
                aria-hidden="true"
              />
              View
            </button>
          </span>

          <span className="sm:ml-3">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <CheckIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
              Publish
            </button>
          </span>

          {/* Dropdown */}
          <Menu as="span" className="ml-3 relative sm:hidden">
            <Menu.Button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              More
              <ChevronDownIcon
                className="-mr-1 ml-2 h-5 w-5 text-gray-500"
                aria-hidden="true"
              />
            </Menu.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="origin-top-right absolute right-0 mt-2 -mr-1 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm text-gray-700"
                      )}
                    >
                      Edit
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm text-gray-700"
                      )}
                    >
                      View
                    </a>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>

      {/* Image gallery */}
      <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
        <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
          <img
            src="https://i.pinimg.com/236x/3b/90/50/3b90507ff60ed3af7a8b1d5de960841c.jpg"
            alt=""
            className="w-full h-full"
          />
        </div>
        <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
          <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
            <img
              src="https://i.pinimg.com/236x/79/92/21/7992215a2785539621abe660ad9b08a3.jpg"
              alt=""
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
            <img
              src="https://i.pinimg.com/236x/80/38/c6/8038c639f1b9b8d21fd3157e411dae9a.jpg"
              alt=""
              className="w-full h-full object-center object-cover"
            />
          </div>
        </div>
        <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
          <img
            src="https://i.pinimg.com/236x/f0/b5/eb/f0b5eba206ea44e5ad590832a43f4fb9.jpg"
            alt=""
            className="w-full h-full"
          />
        </div>
      </div>

      {/**footer */}
      <Main>
        {" "}
        <div class="bg-gray-300 mt-10 rounded-t-md">
          <div class="max-w-6xl m-auto text-gray-700 flex flex-wrap">
            <div class="p-5 w-48 ">
              <div class="text-base text-gray-800 font-bold">Tentang</div>
              <a class="my-3 block" href={"/brand"}>
                Cara Kerja Airbnb{" "}
                <span class="text-teal-600 text-xs p-1"></span>
              </a>
              <a
                class="my-3 block"
                // onclick={onClickCate}
                href={"/category"}
              >
                Ruang Berita <span class="text-teal-600 text-xs p-1"></span>
              </a>
              <a class="my-3 block" href={"/condition"}>
                Airbnb 2021 <span class="text-teal-600 text-xs p-1"></span>
              </a>
              <a class="my-3 block" href="/#">
                Investor <span class="text-teal-600 text-xs p-1"></span>
              </a>
              <a class="my-3 block" href="/#">
                Airbnb Plus <span class="text-teal-600 text-xs p-1"></span>
              </a>
            </div>
            <div class="p-5 w-48 ">
              <div class="text-base text-gray-800 font-bold">Komunitas</div>
              <a class="my-3 block" href="/#">
                Aksebelitas <span class="text-teal-600 text-xs p-1"></span>
              </a>
              <a class="my-3 block" href="/#">
                Airbnb Assocites <span class="text-teal-600 text-xs p-1"></span>
              </a>
              <a class="my-3 block" href="/#">
                Refereal Tamu <span class="text-teal-600 text-xs p-1"></span>
              </a>
              <a class="my-3 block" href="/#">
                Airbnb.org <span class="text-teal-600 text-xs p-1"></span>
              </a>
            </div>
            <div class="p-5 w-48 ml-5">
              <div class="text-base text-gray-800 font-bold">Dukungan</div>
              <a class="my-3 block" href="/#">
                Respons COVID-19 Airbnb{" "}
                <span class="text-teal-600 text-xs p-1"></span>
              </a>
              <a class="my-3 block" href="/#">
                Pusat Bantuan <span class="text-teal-600 text-xs p-1"></span>
              </a>
              <a class="my-3 block" href="/#">
                Opsi Pembatalan <span class="text-teal-600 text-xs p-1"></span>
              </a>
            </div>
          </div>
        </div>
        <div class="bg-gray-200 pt-2 rounded-b-md mb-10">
          <div
            class="flex pb-5 px-3 m-auto pt-5 border-t text-gray-800 text-sm flex-col
      md:flex-row max-w-6xl"
          >
            <div class="mt-2 text-gray-600">
              &copy; Copyright {new Date().getFullYear()} Airbnb All Rights
              Reserved.
            </div>
            <div class="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
              <a
                href="https://www.instagram.com/airbnb/"
                className="mx-2 cursor-pointer p-1  border-transparent hover:border-red-600 hover:text-red-600 text-2xl text-red-500 animate-pulse"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://www.youtube.com/airbnb"
                className="mx-2 cursor-pointer p-1   border-transparent hover:border-red-600 hover:text-red-600 text-2xl text-red-500 animate-pulse"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a
                href="https://www.facebook.com/airbnb"
                className="mx-2 cursor-pointer p-1   border-transparent hover:border-blue-500 hover:text-blue-600 text-2xl text-blue-400 animate-pulse"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a
                href="https://twitter.com/Airbnb"
                className="mx-2 cursor-pointer p-1  border-transparent hover:border-blue-500 hover:text-blue-600 text-2xl text-blue-400 animate-pulse"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
          </div>
        </div>
      </Main>
    </Main>
  );
}
