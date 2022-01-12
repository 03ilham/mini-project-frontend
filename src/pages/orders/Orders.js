import React, { useState, useEffect } from "react";
import { XIcon, ChevronDownIcon, LinkIcon } from "@heroicons/react/solid";
import { useDispatch, useSelector } from "react-redux";
import { doGetAddressReq } from "../../redux/actions/Address";
import { doCancelOrderReq, doGetOrderReq } from "../../redux/actions/Order";
import { ToastContainer, toast } from "react-toastify";
import { doGetLinesByOrderReq } from "../../redux/actions/HousesLines";
import config from "../../config/config";
import Main from "../../layout/Main";

export default function Orders() {
  const dispatch = useDispatch();
  const [isRefresh, setIsRefresh] = useState(true);
  const [open, setOpen] = useState(false);

  const { authUser } = useSelector((state) => state.userState);

  const order = useSelector((state) => state.orderState.order);

  const { linesByOrder } = useSelector((state) => state.linesState);

  const addres = useSelector((state) => state.addressState.address);

  useEffect(() => {
    getAddress();
    getOrder();
  }, []);

  useEffect(() => {
    getAddress();
    getOrder();
  }, [isRefresh]);

  async function getAddress() {
    const payload = {
      user_id: authUser.userId,
    };
    dispatch(doGetAddressReq(payload));
  }

  async function getOrder() {
    const payload = authUser.userId;
    dispatch(doGetOrderReq(payload));
  }

  const getLinesByOrder = () => {
    const data = {
      hrit_order_name: order.order_name,
    };
    const payload = data;
    dispatch(doGetLinesByOrderReq(payload));
    setOpen(true);
  };

  const cancelOrder = () => {
    const payload = authUser.userId;
    dispatch(doCancelOrderReq(payload));
    setIsRefresh(true);
    toast.success("Order succes cancelled");
  };

  if (order.length === 0) {
    return (
      <>
        <div className="w-full bg-red-400 text-red-400 h-10 mb-1 rounded-br-full rounded-bl-full text-center">
          H
        </div>
        <div className="w-full bg-gray-400 text-gray-400 rounded-tr-full rounded-tl-full text-center">
          H
        </div>
        <div class="h-screen w-screen bg-white flex items-center">
          <div class="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
            <div class="max-w-md">
              <div className=" flex justify-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSqVxCy1y8ZzzLekGkMoqowH4Ec2plQ2AxsQ&usqp=CAU"
                  alt=""
                  className=""
                />
              </div>
              <p class="text-2xl font-bold text-gray-600">
                Sorry you haven't placed an order.{" "}
              </p>
              <p class="mb-8 text-base font-semibold text-gray-500">
                Please order first.
              </p>

              <a
                href="/hosted/home"
                class="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700"
              >
                back to homepage
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="w-full bg-red-400 text-red-400 h-10 mb-1 rounded-br-full rounded-bl-full text-center">
        H
      </div>
      <div className="w-full bg-gray-400 text-gray-400 rounded-tr-full rounded-tl-full text-center">
        H
      </div>
      <div className=" overflow-x-scroll  items-center">
        <div className="py-5 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow-lg overflow-hidden border-b-2 border-gray-300 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Order Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Order Created
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Total Days
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                     Price
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                     Tax
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                     Discount
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                     Promo
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Subtotal
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  ></th>
                </tr>
              </thead>

              <tbody className="bg-white divide-y divide-gray-200">
                <tr key={order.order_name}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-700">
                    {order.order_name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 font-medium uppercase">
                    {order.order_created}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 font-medium uppercase">
                    {order.order_qty} Days
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 font-medium">
                    Rp.
                    {new Intl.NumberFormat("ID").format(order.order_subtotal)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 font-medium">
                    Rp.
                    {new Intl.NumberFormat("ID").format(order.order_tax)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 font-medium">
                    Rp.
                    {new Intl.NumberFormat("ID").format(order.order_discount)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 font-medium">
                    Rp.
                    {new Intl.NumberFormat("ID").format(order.order_promo)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 font-medium">
                    Rp.
                    {new Intl.NumberFormat("ID").format(
                      order.order_total_price
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 font-medium">
                    <div className="flex justify-center bg-green-100 text-green-600 py-1 text-xs font-medium rounded-full w-40">
                      Waiting for payment
                    </div>
                  </td>

                  <div className="flex flex-row-reverse space-x-0 space-x-reverse">
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <span className="hidden sm:block ml-3">
                        <a
                          href="/hosteed/order/detail"
                          className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          <LinkIcon
                            className="-ml-1 mr-2 h-5 w-5 text-gray-500"
                            aria-hidden="true"
                          />
                          View
                        </a>
                      </span>
                    </td>
                  </div>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
