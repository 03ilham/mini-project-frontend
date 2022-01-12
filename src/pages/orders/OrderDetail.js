import React, { useState, useEffect } from "react";
import { XIcon, ChevronDownIcon } from "@heroicons/react/solid";
import { useDispatch, useSelector } from "react-redux";
import { doGetAddressReq } from "../../redux/actions/Address";
import { doCancelOrderReq, doGetOrderReq } from "../../redux/actions/Order";
import { ToastContainer, toast } from "react-toastify";
import { doGetLinesByOrderReq } from "../../redux/actions/HousesLines";
import config from "../../config/config";
import Main from "../../layout/Main";
import ButtonPaypal from "../../component/ButtonPaypal";

export default function OrderDetail() {
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
      <Main>
        <div className="px-5 py-3">
          <div className="flex min-w-0 items-center space-x-3">
            <img
              className="w-16 h-16 bg-white rounded-full flex-shrink-0"
              src="../../user.png"
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
                              src={`${config.urlImages}/${product.hrit_host.house_url_images}`}
                              alt={product.imageAlt}
                              className="w-full h-full object-center object-cover"
                            />
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
                          if (window.confirm("Cancel Order ?")) cancelOrder();
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
            <span className="text-xs font-medium text-gray-500">Total</span>
            <span className="text-sm font-medium text-gray-800">
              Rp.
              {new Intl.NumberFormat("ID").format(order.order_subtotal || "")}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-xs font-medium text-gray-500">Tax</span>
            <span className="text-sm font-medium text-gray-800">
              {" "}
              Rp.{new Intl.NumberFormat("ID").format(order.order_tax || "")}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-xs font-medium text-gray-500">Discount</span>
            <span className="text-sm font-medium text-gray-800">
              {" "}
              Rp.
              {new Intl.NumberFormat("ID").format(order.order_discount || "")}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-xs font-medium text-gray-500">Promo</span>
            <span className="text-sm font-medium text-gray-800">
              {" "}
              Rp.{new Intl.NumberFormat("ID").format(order.order_promo || "")}
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
            <span className="text-xs font-medium text-gray-500">Subtotal</span>
            <span className="text-base font-bold text-red-600">
              {" "}
              Rp.
              {new Intl.NumberFormat("ID").format(
                order.order_total_price || ""
              )}
            </span>
          </div>
        </div>
      </Main>
      <ToastContainer autoClose={2000} />
    </>
  );
}
