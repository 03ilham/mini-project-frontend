import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  doDeleteLinesReeq,
  doGetLinesReq,
} from "../../redux/actions/HousesLines";
import config from "../../config/config";
import { ToastContainer, toast } from "react-toastify";
import { doCreateORderReq } from "../../redux/actions/Order";
import { ShoppingCartIcon } from "@heroicons/react/outline";

export default function Cart({ match }) {
  const dispatch = useDispatch();

  const { lines } = useSelector((state) => state.linesState);
  const { authUser } = useSelector((state) => state.userState);

  const [isRefresh, setIsRefresh] = useState(true);

  let total = lines && lines.map((el) => parseInt(el.hrit_subtotal));
  let salary = 0;
  for (let i = 0; i < lines.length; i++) {
    salary += total[i];
  }

  useEffect(() => {
    getLines();
  }, []);

  useEffect(() => {
    getLines();
    setIsRefresh(false);
  }, [isRefresh]);

  async function getLines() {
    const payload = match.params.id;
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

  return (
    <div class="flex justify-center my-6">
      <div class="flex flex-col w-full p-8 text-gray-800 bg-white shadow-xl rounded-lg pin-r pin-y md:w-4/5 lg:w-4/5">
        <img src="../../a.png" className="w-24 h-24 -mt-5" alt="" />
        <div className="bg-indigo-500 py-2 px-5 rounded-full text-base font-bold text-white -mt-5 flex space-x-3">
          <span>My Cart</span>
          <ShoppingCartIcon className=" w-6 h-6" />
        </div>
        <div class="flex-1 pt-2 overflow-x-auto overflow-y-auto">
          <table className="min-w-full divide-y divide-gray-200 border-b-2 border-gray-300">
            <thead className="bg-white">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                ></th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Items
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
                  Visitor
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Type Bedroom
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Price Bedroom
                </th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200">
              {lines &&
                lines.map((data) => (
                  <tr key={data.hrit_id}>
                    <td class="pb-4 pt-3">
                      <div className="flex-shrink-0 w-40 h-32 border border-gray-200 rounded-md overflow-hidden">
                        <img
                          src='../../home.png'
                          alt="www.airbnb.com"
                          className="w-full h-full object-center object-cover"
                        />
                        {/* <img
                          src={`${config.urlImages}/${data.hrit_host.house_url_images}`}
                          alt="www.airbnb.com"
                          className="w-full h-full object-center object-cover"
                        /> */}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 font-medium">
                      {data.hrit_host.house_title}
                      <br />{" "}
                      <button
                        className=" no-underline hover:underline mt-2 text-sm font-medium text-red-500 hover:text-red-400"
                        onClick={() => {
                          if (window.confirm("Delete record ?"))
                            onDelete(data.hrit_id);
                        }}
                      >
                        (Remove)
                      </button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 font-medium">
                      {data.hrit_total_nights}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 font-medium">
                      {parseInt(
                        data.hrit_adult + data.hrit_infant + data.hrit_children
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 font-medium">
                      {data.hrith_hobed.hobed_name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 font-medium">
                      Rp.{" "}
                      {new Intl.NumberFormat("ID").format(
                        data.hrith_hobed.hobed_price
                      )}
                      /Nights
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        {lines.length !== 0 ? (
          <div className=" flex justify-between mt-2">
            <a
              href="/hosteed/order/detail"
              className="bg-indigo-500 text-sm font-bold text-white px-5 py-2 rounded-full flex"
              onClick={onOrder}
            >
              {" "}
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
              Order Now
            </a>
            <span className=" text-red-500 text-sm font-medium">
              <span className=" text-base font-bold text-gray-600">
                Subtotal &nbsp;
              </span>
              Rp. {new Intl.NumberFormat("ID").format(salary)}
            </span>
          </div>
        ) : null}
      </div>
      <ToastContainer autoClose={1000} />
    </div>
  );
}
