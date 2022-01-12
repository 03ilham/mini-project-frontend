import React, { Fragment, useState, useEffect } from "react";
import { Dialog, Popover, Transition } from "@headlessui/react";
import {
  MenuIcon,
  XIcon,
  ShoppingCartIcon,
  SearchIcon,
} from "@heroicons/react/outline";
import { BrowserRouter, Link, Redirect } from "react-router-dom";
import { Menu } from "@headlessui/react";
import { FilterIcon } from "@heroicons/react/solid";
import { useDispatch, useSelector } from "react-redux";
import { doLogoutReq } from "../redux/actions/User";
import { doGetHousesReq } from "../redux/actions/Houses";
import ApiAddToCart from "../api/ApiAddToCart";
import Headers from "./Headers";

const navigation = {
  categories: [
    {
      id: "category",
      name: "Category",
    },
    {
      id: "products",
      name: "Products",
    },
  ],
  pages: [
    { name: "Seller", href: "/hosteed/seller" },
    { name: "Order", href: "/hosteed/order/detail" },
  ],
};

export default function MainLayout(props) {
  const { children } = props;
  const [open, setOpen] = useState(false);
  const [isLogout, setIsLogout] = useState(false);
  const [search, setSeacrh] = useState("");
  const [order, setOrder] = useState("");
  const dispatch = useDispatch();
  const { authUser } = useSelector((state) => state.userState);

  let [values, setValues] = useState({
    id: undefined,
    totalItems: 0,
  });

  useEffect(() => {
    if (!authUser) {
      return undefined;
    }
    ApiAddToCart.getReserve(authUser.userId).then((result) => {
      console.log(result);
      if (!result.data) {
        setValues({
          ...values,
        });
      } else {
        setValues({
          ...values,
          id: result.data.hove_id,
          totalItems: result.data.houses_reserve_lines.length,
        });
      }
    });
  }, []);

  const getRequestParams = (search, order) => {
    let params = {};

    if (search) {
      params["cari"] = search;
    }
    if (order) {
      params["order"] = order;
    }
    return params;
  };

  const onChangeSearch = (e) => {
    const search = e.target.value;
    setSeacrh(search.charAt(0).toUpperCase() + search.slice(1));
  };

  const onFilter = (search) => {
    const payload = {
      cari: search,
    };
    dispatch(doGetHousesReq(payload));
  };

  useEffect(() => {
    const params = getRequestParams(search, order);
    dispatch(doGetHousesReq(params));
  }, [dispatch, search, order]);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <BrowserRouter>
      <Headers />
      <div className="">
        {/* Mobile menu */}
        <Transition.Root show={open} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 flex z-40 lg:hidden"
            onClose={setOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
                <div className="px-4 pt-5 pb-2 flex">
                  <button
                    type="button"
                    className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}

                <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <a
                        href={page.href}
                        className="-m-2 p-2 block font-medium text-gray-900"
                      >
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                  <div className="flow-root">
                    <a
                      href="/"
                      className="-m-2 p-2 block font-medium text-gray-900"
                    >
                      {isLogout ? "Sign in" : "Logout"}
                    </a>
                  </div>
                  <div className="flow-root">
                    <a
                      href="/"
                      className="-m-2 p-2 block font-medium text-gray-900"
                    >
                      Create account
                    </a>
                  </div>
                </div>

                <div className="border-t border-gray-200 py-6 px-4">
                  {authUser ? (
                    <div className="flow-root">
                      <a
                        href="/hosted/users"
                        className="group -m-2 p-2 flex items-center"
                      >
                        <img
                          className="w-10 h-10 bg-white rounded-full flex-shrink-0"
                          src="../../user2.png"
                          alt=""
                        />
                        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                          {authUser ? authUser.username : ""}
                          <br />
                          {authUser ? authUser.email : ""}
                        </span>
                      </a>
                    </div>
                  ) : undefined}
                </div>
              </div>
            </Transition.Child>
          </Dialog>
        </Transition.Root>

        <header className=" bg-white sticky top-0 z-10">
          <nav
            aria-label="Top"
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="border-b border-gray-200">
              <div className="h-16 flex items-center">
                <button
                  type="button"
                  className="bg-white p-2 rounded-md text-gray-400 lg:hidden"
                  onClick={() => setOpen(true)}
                >
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Logo */}
                <div className="ml-4 flex lg:ml-0">
                  <a href="/">
                    <span className="sr-only">Workflow</span>
                    <img className="w-20" src="../../a.png" alt="" />
                  </a>
                </div>

                {/* Flyout menus */}
                <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                  <div className="h-full flex space-x-8">
                    {navigation.pages.map((page) => (
                      <a
                        key={page.name}
                        href={page.href}
                        className="flex items-center text-sm font-medium text-gray700 hover:text-gray-800"
                      >
                        {page.name}
                      </a>
                    ))}
                  </div>
                </Popover.Group>

                {/**Search */}
                <div className="flex-1 flex items-center justify-center px-2 sm:ml-0 ml-5 sm:pl-20 lg:justify-center">
                  <div className="max-w-lg w-full lg:max-w-xs">
                    <label htmlFor="search" className="sr-only">
                      Search
                    </label>
                    <div className="relative hover:grow2 shadow-none hover:shadow-2xl">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <SearchIcon
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </div>
                      <input
                        id="search"
                        name="search"
                        value={search}
                        onChange={onChangeSearch}
                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="Search"
                        type="search"
                        autoComplete="search"
                      />
                    </div>
                  </div>
                </div>

                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 hover:grow">
                      <FilterIcon className="h-5 w-5" aria-hidden="true" />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-500"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-200"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
                      <div className=" text-center py-2 font-medium text-sm text-gray-600">
                        <span>Sort By Location</span>
                      </div>
                      <div className="py-1 px-1">
                        <Menu.Item>
                          {({ active }) => (
                            <span
                              className={classNames(
                                active
                                  ? "bg-gray-400 text-white cursor-pointer"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                              onClick={() => onFilter("Bandung")}
                            >
                              Bandung
                            </span>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <span
                              className={classNames(
                                active
                                  ? "bg-gray-400 text-white cursor-pointer"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                              onClick={() => onFilter("Bandung Barat")}
                            >
                              Bandung Barat
                            </span>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <span
                              className={classNames(
                                active
                                  ? "bg-gray-400 text-white cursor-pointer"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                              onClick={() => onFilter("Bali")}
                            >
                              Bali
                            </span>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <span
                              className={classNames(
                                active
                                  ? "bg-gray-400 text-white cursor-pointer"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                              onClick={() => onFilter("Bogor")}
                            >
                              Bogor
                            </span>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <span
                              className={classNames(
                                active
                                  ? "bg-gray-400 text-white cursor-pointer"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                              onClick={() => onFilter("Jakarta")}
                            >
                              Jakarta
                            </span>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <span
                              className={classNames(
                                active
                                  ? "bg-gray-400 text-white cursor-pointer"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                              onClick={() =>
                                onFilter("Daerah Khusus Ibukota Jakarta")
                              }
                            >
                              Daerah Khusus Ibukota Jakarta
                            </span>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <span
                              className={classNames(
                                active
                                  ? "bg-gray-400 text-white cursor-pointer"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                              onClick={() => onFilter("Kota Batam")}
                            >
                              Kota Batam
                            </span>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <span
                              className={classNames(
                                active
                                  ? "bg-gray-400 text-white cursor-pointer"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                              onClick={() => onFilter("Sulawesi")}
                            >
                              Sulawesi
                            </span>
                          )}
                        </Menu.Item>
                      </div>
                      <div className="py-1 px-1">
                        <Menu.Item>
                          {({ active }) => (
                            <span
                              className={classNames(
                                active
                                  ? "bg-gray-400 text-white cursor-pointer"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                              onClick={() => onFilter()}
                            >
                              All
                            </span>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>

                <div className="ml-auto flex items-center">
                  {/* Cart */}
                  <div className="ml-4 flow-root lg:ml-6">
                    <a
                      href={`/hosted/cart/${values.id || ""}`}
                      className="order-0 inline-flex items-center px-1 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-300 sm:order-1 sm:ml-3 duration-200"
                      //onClick={() => setOpenCart(true)}
                    >
                      <ShoppingCartIcon
                        className="ml-2 -mr-1 h-5 w-5 text-gray-700"
                        aria-hidden="true"
                      />
                      <span className=" text-sm font-bold bg-red-400 text-white px-1.5 rounded-full -mt-5 ml-2">
                        {values.totalItems}
                      </span>
                    </a>
                  </div>
                  {authUser ? (
                    <div className="ml-4 flow-root lg:ml-6 hidden md:block">
                      <a
                        href="/hosted/users"
                        className="group -m-2 p-2 flex items-center"
                      >
                        <img
                          className="w-10 h-10 bg-white rounded-full flex-shrink-0"
                          src="../../user2.png"
                          alt=""
                        />
                        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                          {authUser ? authUser.username : ""}
                          <br />
                          {authUser ? authUser.email : ""}
                        </span>
                      </a>
                    </div>
                  ) : undefined}
                </div>
              </div>
            </div>
          </nav>
        </header>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </main>
      </div>
      {/* {openCart ? (
        <CartModal openCart={openCart} setOpenCart={setOpenCart} />
      ) : null} */}
    </BrowserRouter>
  );
}
