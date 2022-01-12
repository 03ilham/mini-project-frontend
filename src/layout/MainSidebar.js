import React, { useState, useEffect } from "react";
import { BellIcon, ShoppingCartIcon } from "@heroicons/react/solid";
import CartModal from "../component/addToCart/CartModal";
import Notivication from "../component/Notivication";
import { useSelector, useDispatch } from "react-redux";
import { doGetHousesReserveReq } from "../redux/actions/HouseReserve";

const MainSidebar = (props) => {
  
  const dispatch = useDispatch()

  const reserve = useSelector((state) => state.reserveState.reserve);
  const { authUser } = useSelector((state) => state.userState);

  const [openCart, setOpenCart] = useState(false);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const payload = authUser.userId;
    dispatch(doGetHousesReserveReq(payload));
  }, []);

  return (
    <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
      <div
        style={{
          backgroundImage:
            "url(https://i.pinimg.com/originals/f6/63/f8/f663f8d89c1b741d41baefd6dc321263.jpg)",
          height: "150px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          borderRadius: "0px",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Page title & actions */}
        <div className="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 pt-24">
          <div className="flex-1 min-w-0">
            <h1 className="text-lg font-medium leading-6 text-white sm:truncate">
              {props.pageTitle}
            </h1>
          </div>
          <div className="mt-4 flex sm:mt-0 sm:ml-4">
            <a
              href={`/hosted/cart/${reserve.hove_id}`}
              className="order-0 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-grey-600 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-grey-500 sm:order-1 sm:ml-3"
              //onClick={() => setOpenCart(true)}
            >
              <ShoppingCartIcon
                className="-ml-1 mr-2 h-5 w-5 text-white"
                aria-hidden="true"
              />
            </a>

            <button
              type="button"
              className="order-0 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-grey-600 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-grey-500 sm:order-1 sm:ml-3"
            >
              <BellIcon
                className="-ml-1 mr-2 h-5 w-5 text-white"
                aria-hidden="true"
                onClick={() => setOpen(true)}
              />
            </button>
          </div>
        </div>
        {/* {openCart ? (
          <CartModal openCart={openCart} setOpenCart={setOpenCart} />
        ) : null} */}
        {open ? <Notivication open={open} setOpen={setOpen} /> : null}
        {props.children}
      </div>
    </main>
  );
};

export default MainSidebar;
