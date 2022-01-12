import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { doGetLinesByOrderReq } from "../../redux/actions/HousesLines";
import config from "../../config/config";
import { ToastContainer, toast } from "react-toastify";
import { doCancelOrderReq, doGetOrderReq } from "../../redux/actions/Order";
import { doGetAddressReq } from "../../redux/actions/Address";
import { ChevronDownIcon, XIcon } from "@heroicons/react/solid";
import ButtonPaypal from "../../component/ButtonPaypal";

export default function OrderPages() {
  const dispatch = useDispatch();
  const [isRefresh, setIsRefresh] = useState(true);
  const [open, setOpen] = useState(false);
  const [checkout, setCheckout] = useState(false);

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

  const close = () => {
    setOpen(false);
  };

  const cancelOrder = () => {
    const payload = authUser.userId;
    dispatch(doCancelOrderReq(payload));
    setIsRefresh(true);
    toast.success("Order succes cancelled");
  };

  return (
    <>
      <div class="flex justify-center my-6">
        <div class="flex flex-col w-full p-8 text-gray-800 bg-white shadow-xl rounded-lg pin-r pin-y md:w-4/5 lg:w-4/5">
          <img src="../../a.png" className="w-24 h-24 -mt-5" alt="" />
          <div className="bg-indigo-500 py-2 px-5 rounded-full text-base font-bold text-white -mt-5 flex space-x-3">
            <span>My Orders</span>
            <svg
              aria-hidden="true"
              data-prefix="far"
              data-icon="credit-card"
              class="w-6 h-6 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                fill="currentColor"
                d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"
              />
            </svg>
          </div>
          {order.length !== 0 ? (
            <>
              <div className="px-5 py-3">
                <div className="flex min-w-0 items-center space-x-3">
                  <img
                    className="w-16 h-16 bg-white rounded-full flex-shrink-0"
                    src="../../user2.png"
                    alt=""
                  />
                  <div className=" space-y-4">
                    <p className=" text-xs font-medium text-gray-700">
                      {order.order_created}
                    </p>
                    <p className=" text-xs font-medium text-gray-700 ">
                      {authUser.username}
                    </p>
                  </div>
                </div>
                <div className="flex justify-center py-3">
                  <div className="flex justify-center bg-green-100 text-green-600 py-1 text-xs font-medium rounded-full w-96">
                    Waiting for payment
                  </div>
                </div>
                <div className="flex justify-between px-3 mb-2">
                  <span className="text-xs font-medium text-gray-400">
                    Order Name
                  </span>
                  <span className="text-sm font-medium text-gray-500">
                    {order.order_name}
                  </span>
                </div>
                <hr />
              </div>
              <div className=" bg-white text-white">H</div>
              <div className="py-2 px-7 bg-gray-100 rounded-md">
                <span className="text-xs font-medium text-gray-400">
                  Alamat Pemesan
                </span>
                <p className="text-xs font-medium text-gray-600 mt-3">
                  {authUser.username}
                </p>
                <p className="text-xs font-medium text-gray-600">{`${
                  addres.addr_name || ""
                } ${addres.addr_detail || ""}`}</p>
              </div>
              <div className="bg-white py-5">
                <div className="">
                  <div className="bg-gray-100 px-5 py-5 rounded-t-md flex justify-between">
                    <p className="text-sm font-bold text-gray-700">Pemesan</p>
                    <div className="flex justify-between">
                      <button
                        className="text-sm font-bold text-gray-700"
                        onClick={getLinesByOrder}
                      >
                        {linesByOrder.length} Items
                      </button>
                      <ChevronDownIcon className="w-5 h-5 text-gray-700" />
                    </div>
                  </div>
                </div>
                <div className="-mt-7">
                  <div className="bg-gray-100 px-5 py-5 rounded-b-md">
                    <p className="text-xs font-medium text-gray-700 mb-2">
                      {authUser.username}
                    </p>
                    <hr />
                    {open ? (
                      <>
                        <div className="py-1 mt-2">
                          <span className="text-sm font-bold text-gray-700">
                            Order List
                          </span>
                        </div>
                        <ul
                          role="list"
                          className="-my-6 divide-y divide-gray-200 py-5"
                        >
                          {linesByOrder &&
                            linesByOrder.map((product) => (
                              <li key={product.id} className="py-6 flex">
                                <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                                  <img
                                    src='../../home.png'
                                    alt={product.imageAlt}
                                    className="w-full h-full object-center object-cover"
                                  />
                                  {/* <img
                                    src={`${config.urlImages}/${product.hrit_host.house_url_images}`}
                                    alt={product.imageAlt}
                                    className="w-full h-full object-center object-cover"
                                  /> */}
                                </div>

                                <div className="ml-4 flex-1 flex flex-col">
                                  <div>
                                    <div className="flex justify-between text-sm font-bold text-gray-700">
                                      <h3>
                                        <a href={product.href}>
                                          {product.hrit_host.house_name}
                                        </a>
                                      </h3>
                                      <p className="ml-4">
                                        {" "}
                                        Rp.
                                        {new Intl.NumberFormat("ID").format(
                                          product.hrit_subtotal
                                        )}
                                      </p>
                                    </div>
                                    <span className="text-xs font-medium text-gray-600">
                                      {product.hrit_host.house_title}
                                    </span>
                                  </div>
                                  <div className="flex-1 flex items-end justify-between text-sm">
                                    <p className="text-xs font-medium text-gray-600">
                                      Total Night {product.hrit_total_nights}
                                    </p>
                                  </div>
                                </div>
                              </li>
                            ))}
                        </ul>
                        <div className="flex justify-end">
                          <button onClick={close}>
                            <XIcon className="w-5 h-5 text-red-500" />
                          </button>
                        </div>
                      </>
                    ) : null}
                    <hr />
                    <div className="flex justify-center py-3 space-x-6">
                      <div>
                        {checkout ? (
                          <ButtonPaypal />
                        ) : (
                          <div className=" space-x-6">
                            <button
                              className="border-2 border-blue-800 py-2 px-5 rounded-tl-lg rounded-bl-sm rounded-tr-sm rounded-br-lg text-sm font-bold text-blue-800 hover:bg-blue-800 hover:text-white shadow-none hover:shadow-lg ease-in-out duration-200"
                              onClick={() => setCheckout(true)}
                            >
                              Order Now
                            </button>
                            <button
                              className="bg-red-500 hover:bg-red-600 py-2 px-5 rounded-tl-lg rounded-bl-sm rounded-tr-sm rounded-br-lg text-sm font-bold text-white shadow-none hover:shadow-lg ease-in-out duration-200"
                              onClick={() => {
                                if (window.confirm("Cancel Order ?"))
                                  cancelOrder();
                              }}
                            >
                              Cancel Order
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-5 py-5 space-y-2 bg-gray-100 rounded-md mb-5">
                <div className="flex justify-between">
                  <span className="text-xs font-medium text-gray-500">
                    Total
                  </span>
                  <span className="text-sm font-medium text-gray-800">
                    Rp.
                    {new Intl.NumberFormat("ID").format(
                      order.order_subtotal || ""
                    )}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs font-medium text-gray-500">Tax</span>
                  <span className="text-sm font-medium text-gray-800">
                    {" "}
                    Rp.
                    {new Intl.NumberFormat("ID").format(order.order_tax || "")}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs font-medium text-gray-500">
                    Discount
                  </span>
                  <span className="text-sm font-medium text-gray-800">
                    {" "}
                    Rp.
                    {new Intl.NumberFormat("ID").format(
                      order.order_discount || ""
                    )}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs font-medium text-gray-500">
                    Promo
                  </span>
                  <span className="text-sm font-medium text-gray-800">
                    {" "}
                    Rp.
                    {new Intl.NumberFormat("ID").format(
                      order.order_promo || ""
                    )}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs font-medium text-gray-500">
                    Total Night
                  </span>
                  <span className="text-sm font-medium text-gray-800">
                    {order.order_qty || ""} Days
                  </span>
                </div>
                <hr />
                <div className="flex justify-between">
                  <span className="text-xs font-medium text-gray-500">
                    Subtotal
                  </span>
                  <span className="text-base font-bold text-red-600">
                    {" "}
                    Rp.
                    {new Intl.NumberFormat("ID").format(
                      order.order_total_price || ""
                    )}
                  </span>
                </div>
              </div>
            </>
          ) : null}
        </div>
        <ToastContainer autoClose={1000} />
      </div>
    </>
  );
}
