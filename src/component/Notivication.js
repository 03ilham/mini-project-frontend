/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon, BellIcon } from "@heroicons/react/outline";
import { useSelector, useDispatch } from "react-redux";
import { dogetCancelorderReq } from "../redux/actions/Order";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/solid";

export default function Notivication(props) {
  const dispatch = useDispatch();

  const { authUser } = useSelector((state) => state.userState);

  const { orderCancelled } = useSelector((state) => state.orderState);

  useEffect(() => {
    const payload = authUser.userId;
    dispatch(dogetCancelorderReq(payload));
  }, []);

  return (
    <Transition.Root show={props.open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 overflow-hidden"
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
              <div className="relative w-screen max-w-md">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-500"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-500"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4">
                    <button
                      type="button"
                      className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                      onClick={() => props.setOpen(false)}
                    >
                      <span className="sr-only">Close panel</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </Transition.Child>
                <div className="h-full flex flex-col py-6 bg-transparent shadow-xl overflow-y-scroll">
                  <div className="px-4 sm:px-6">
                    <Dialog.Title className="text-lg font-medium text-white">
                      <div className="flex justify-between">
                        <span>Notivication</span>
                        <BellIcon className="w-7 h-7" />
                      </div>
                    </Dialog.Title>
                    <div className=" mt-2">
                      <hr />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="w-full max-w-md p-2 mx-auto bg-transparent rounded-2xl">
                      {orderCancelled &&
                        orderCancelled.map((el) => (
                          <Disclosure>
                            {({ open }) => (
                              <>
                                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-red-500 hover:text-white bg-white bg-opacity-75 hover:bg-opacity-50 rounded-lg hover:bg-gray-600 hover:grow focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 mt-2">
                                  <span>Order Cancelled</span>
                                  <ChevronDownIcon
                                    className={`${
                                      open ? "transform rotate-180" : ""
                                    } w-5 h-5`}
                                  />
                                </Disclosure.Button>
                                <Disclosure.Panel className=" py-3 text-sm text-gray-500">
                                  <div className=" space-y-4 bg-white bg-opacity-50 text-gray-800 font-bold text-sm px-3 py-3 rounded-lg border-b-2 border-gray-300 shadow-xl">
                                  <div className=" flex justify-between">
                                    <p>Oreder Name</p>
                                    <p>{el.order_name}</p>
                                  </div>
                                  <hr/>
                                  <div className=" flex justify-between">
                                    <p>Oreder Created</p>
                                    <p>{el.order_created}</p>
                                  </div>
                                  <hr/>
                                  <div className=" flex justify-between">
                                    <p>Total Items</p>
                                    <p>
                                      {el.houses_reserve_lines.length} Items
                                    </p>
                                  </div>
                                  <hr/>
                                  <div className=" flex justify-between">
                                    <p>Total Price</p>
                                    <p>
                                      Rp.
                                      {new Intl.NumberFormat("ID").format(
                                        el.order_total_price
                                      )}
                                    </p>
                                  </div>
                                  <hr/>
                                  <div className=" flex justify-between">
                                    <p>Order Status</p>
                                    <p>{el.order_status}</p>
                                  </div>
                                  <hr/>
                                  </div>
                                </Disclosure.Panel>
                              </>
                            )}
                          </Disclosure>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
