/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { useSelector, useDispatch } from "react-redux";
import { doGetHousesReserveReq } from "../../redux/actions/HouseReserve";
import {
  doDeleteLinesReeq,
  doGetLinesReq,
} from "../../redux/actions/HousesLines";
import config from "../../config/config";
import { ToastContainer, toast } from "react-toastify";
import { doCreateORderReq } from "../../redux/actions/Order";

const products = [
  {
    id: 1,
    name: "Throwback Hip Bag",
    href: "#",
    color: "Salmon",
    price: "10000",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
  {
    id: 2,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    price: "3200",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  // More products...
];

export default function CartModal(props) {
  const dispatch = useDispatch();

  const { authUser } = useSelector((state) => state.userState);

  const reserve = useSelector((state) => state.reserveState.reserve);

  const { lines } = useSelector((state) => state.linesState);

  const [isRefresh, setIsRefresh] = useState(true);

  let total = lines && lines.map((el) => parseInt(el.hrit_subtotal));
  let salary = 0;
  for (let i = 0; i < lines.length; i++) {
    salary += total[i];
  }

  useEffect(() => {
    getReserve();
    getLines();
  }, []);

  useEffect(() => {
    getReserve();
    getLines();
    setIsRefresh(false);
  }, [isRefresh]);

  async function getReserve() {
    const payload = authUser.userId;
    dispatch(doGetHousesReserveReq(payload));
  }

  async function getLines() {
    const payload = reserve.hove_id;
    dispatch(doGetLinesReq(payload));
  }

  const onDelete = (id) => {
    const payload = id;
    dispatch(doDeleteLinesReeq(payload));
    toast.success("Items succes fully deleted.");
    setIsRefresh(true);
  };

  const onOrder = () => {
    const data = authUser.userId;
    const payload = data;
    dispatch(doCreateORderReq(payload));
  };


  if (lines.length === 0) {
    return (
      <Transition.Root show={props.openCart} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 overflow-hidden z-10"
          onClose={() => null}
        >
          <div className="absolute inset-0 overflow-hidden">
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-50 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <div className="w-screen max-w-lg">
                  <div className="h-full flex flex-col bg-white bg-opacity-0 shadow-xl overflow-y-scroll">
                    <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <img
                          src="../../a.png"
                          className="w-20 h-20 -mt-5"
                          alt=""
                        />
                        <div className="ml-3 h-7 flex items-center">
                          <button
                            type="button"
                            className="-m-2 p-2 text-white hover:text-gray-300"
                            onClick={() => props.setOpenCart(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <XIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className=" flex justify-center pt-20 bg-white bg-opacity-0">
                        <img src="../../5.png" className="w-72 h-auto" alt=""/>
                      </div>
                      <div className="flex justify-center pt-3 text-lg font-bold text-white">
                        <span>Sorry Your Shopping Cart is Empty....</span>
                      </div>
                    </div>

                    <div className="">
                      <div className="border-t border-gray-300 py-6 px-4 sm:px-6">
                        <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
                          <p>
                            <button
                              type="button"
                              className="text-white font-medium hover:text-indigo-500"
                              onClick={() => props.setOpenCart(false)}
                            >
                              Continue Shopping
                              <span aria-hidden="true"> &rarr;</span>
                            </button>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </div>
          <ToastContainer autoClose={2000} />
        </Dialog>
      </Transition.Root>
    );
  }

  return (
    <Transition.Root show={props.openCart} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 overflow-hidden z-10"
        onClose={() => null}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="w-screen max-w-lg">
                <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
                  <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                    <div className="flex items-start justify-between">
                      <img
                        src="../../a.png"
                        className="w-20 h-20 -mt-5"
                        alt=""
                      />
                      <div className="ml-3 h-7 flex items-center">
                        <button
                          type="button"
                          className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                          onClick={() => props.setOpenCart(false)}
                        >
                          <span className="sr-only">Close panel</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>

                    <div className="mt-8">
                      <div className="flow-root">
                        <ul
                          role="list"
                          className="-my-6 divide-y divide-gray-200"
                        >
                          {lines &&
                            lines.map((product) => (
                              <>
                                <li key={product.id} className="py-6 flex">
                                  <div className="flex-shrink-0 w-full h-52 border border-gray-200 rounded-md overflow-hidden">
                                    <img
                                      src={`${config.urlImages}/${product.hrit_host.house_url_images}`}
                                      alt={product.imageAlt}
                                      className="w-full h-full object-center object-cover"
                                    />
                                  </div>
                                  <div className="ml-4 flex-1 flex flex-col">
                                    <div>
                                      <p className="mt-1 text-sm text-gray-500">
                                        {product.color}
                                      </p>
                                    </div>
                                  </div>
                                </li>
                                <div className=" grid grid-cols-2 py-3 gap-x-5 gap-y-5">
                                  <div>
                                    <h3 className=" space-y-1">
                                      <a
                                        className="font-bold text-gray-700"
                                        href={product.href}
                                      >
                                        {product.hrit_host.house_name}
                                      </a>
                                      <p className="text-xs text-gray-500 font-medium">
                                        {product.hrit_host.house_title}
                                      </p>
                                      <p className="text-xs text-gray-500 font-medium">
                                        Checkin : {product.hrit_checkin}
                                      </p>
                                      <p className="text-xs text-gray-500 font-medium">
                                        Checkout : {product.hrit_checkout}
                                      </p>
                                    </h3>
                                  </div>
                                  <div className=" -mt-2">
                                    <h1 className="text-sm font-bold text-gray-700 py-2">
                                      Type Bedroom
                                    </h1>
                                    <p className="text-xs text-gray-600 font-medium">
                                      {product.hrith_hobed.hobed_name}
                                    </p>
                                  </div>
                                  <div className="-mt-2">
                                    <p className=" font-bold text-sm text-gray-700 py-2">
                                      Visitor
                                    </p>
                                    <p className="text-xs text-gray-600 font-medium">
                                      Adult : {product.hrit_adult || 0}
                                    </p>
                                    <p className="text-xs text-gray-600 font-medium">
                                      Children : {product.hrit_children || 0}
                                    </p>
                                    <p className="text-xs text-gray-600 font-medium">
                                      Infant : {product.hrit_infant || 0}
                                    </p>
                                  </div>
                                  <div className=" -mt-11">
                                    <span className="text-sm font-medium text-gray-900">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-6 w-6 mt-10"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                      >
                                        <path
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          stroke-width="2"
                                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        />
                                        <path
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          stroke-width="2"
                                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                      </svg>
                                    </span>
                                    <div className=" px-8 -mt-6">
                                      <span className="text-sm text-gray-600">
                                        {product.hrit_host.house_address}
                                      </span>
                                      {", "}
                                      <span className="text-sm text-gray-600">
                                        {product.hrit_host.house_city}
                                      </span>
                                      {", "}
                                      <span className="text-sm text-gray-600">
                                        {product.hrit_host.house_province}
                                      </span>
                                      {", "}
                                      <span className="text-sm text-gray-600">
                                        {`${product.hrit_host.house_country}, (${product.hrit_host.house_latitude}, ${product.hrit_host.house_longitude})`}
                                      </span>
                                    </div>
                                  </div>
                                  <div className="">
                                    <img
                                      src="https://media.istockphoto.com/vectors/shopping-cart-character-vector-id165902191?b=1&k=20&m=165902191&s=170667a&w=0&h=gGtdu48Z6xK23jRyEG43YNBHJwvmhJ-jtW-A7Tq3ujc="
                                      alt=""
                                      className=""
                                    />
                                    <div className="border-2 border-gray-300 rounded-md py-1 px-3">
                                      <p className="text-xs text-red-500 mb-2">
                                        Price Calculated Per night
                                      </p>
                                      <hr />
                                      <p className="text-xs text-gray-600 font-medium mb-1">
                                        Total Night :{" "}
                                        {product.hrit_total_nights}
                                      </p>
                                      <p className="text-xs text-gray-600 font-medium mb-1">
                                        Price Bedroom : Rp.{" "}
                                        {new Intl.NumberFormat("ID").format(
                                          product.hrith_hobed.hobed_price
                                        )}
                                      </p>
                                      <p className="text-xs text-gray-600 font-medium mb-1">
                                        Service Fee : Rp.{" "}
                                        {new Intl.NumberFormat("ID").format(
                                          product.hrith_hobed.hobed_service_fee
                                        )}
                                      </p>
                                      <hr />
                                      <p className="text-sm text-gray-800 font-bold mt-1">
                                        Total: Rp.
                                        {new Intl.NumberFormat("ID").format(
                                          product.hrit_subtotal
                                        )}
                                      </p>
                                    </div>
                                  </div>
                                  <div className=" py-2 ml-12 mt-44">
                                    <button
                                      type="button"
                                      className="font-medium text-white bg-red-400 py-1 px-5 rounded-lg hover:bg-red-300 shadow-lg hover:shadow-none duration-200"
                                      onClick={() => {
                                        if (window.confirm("Delete record ?"))
                                          onDelete(product.hrit_id);
                                      }}
                                    >
                                      Remove
                                    </button>
                                  </div>
                                </div>
                                <hr />
                              </>
                            ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="">
                    <div className="border-t border-gray-300 py-6 px-4 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>Rp. {new Intl.NumberFormat("ID").format(salary)}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">
                        Shipping and taxes calculated at checkout.
                      </p>
                      <div className="mt-6">
                        <a
                          href="/hosteed/order"
                          className="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                          onClick={onOrder}
                        >
                          Next Order 
                        </a>
                      </div>
                      <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
                        <p>
                          or{" "}
                          <button
                            type="button"
                            className="text-indigo-600 font-medium hover:text-indigo-500"
                            onClick={() => props.setOpenCart(false)}
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
        <ToastContainer autoClose={2000} />
      </Dialog>
    </Transition.Root>
  );
}
