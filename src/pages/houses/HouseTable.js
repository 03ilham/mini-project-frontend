import React, { useEffect, Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { doGetHousesReq, doDeleteHousesReq, doGetAllHousesReq } from "../../redux/actions/Houses";
import config from "../../config/config";
import {
  PencilAltIcon,
  TrashIcon,
  DotsVerticalIcon,
  PhotographIcon,
} from "@heroicons/react/solid";
import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import EditHouses from "./EditHouses";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function HouseTable() {
  const dispatch = useDispatch();
  const { all } = useSelector((state) => state.housesState);
  let [isRefresh, setIsRefresh] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false)
  const [action, setAction] = useState({
    id: undefined,
    actionType: "edit",
  });

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
    setIsRefresh(false);
  }, [isRefresh]);

  async function fetchData() {
    const payload = {};
    dispatch(doGetAllHousesReq(payload));
  }

  const onDelete = (id) => {
    try {
      const payload = id;
      dispatch(doDeleteHousesReq(payload));
      setIsRefresh(true);
      toast.success("Row has been deleted");
    } catch (error) {
      toast.error("Not found");
    }
  };

  const onEdit = (id) => {
    setAction({
      id: id,
      actionType: "edit",
    });
    setIsEditOpen(true);
  };

  return (
    <>
      <div>
        <div className="flex flex-col mt-10">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Name
                      </th>

                      <th
                        scope="col"
                        className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Hosted Acc
                      </th>

                      <th
                        scope="col"
                        className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Hosted Fullname
                      </th>

                      <th
                        scope="col"
                        className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Hosted Level
                      </th>

                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Bedroom
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Beds
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Baths
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Occupied
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Address
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        City
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Province
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Country
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Offer
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Latitude
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Longitude
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Ratting
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {all &&
                      all.map((el) => (
                        <tr key={el.house_id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10">
                                <img
                                  className="h-10 w-10 rounded-full"
                                  src='../../home.png'
                                  alt=""
                                />
                                {/* <img
                                  className="h-10 w-10 rounded-full"
                                  src={`${config.urlImages}/${el.house_url_images}`}
                                  alt=""
                                /> */}
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">
                                  {el.house_name}
                                </div>
                                <div className="text-sm text-gray-500">
                                  {el.house_title}
                                </div>
                              </div>
                            </div>
                          </td>

                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {el.house_hosted_account_hosted.hosted_acc}
                          </td>

                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 uppercase">
                            {el.house_hosted_account_hosted.hosted_fullname}
                          </td>

                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 uppercase">
                            {el.house_hosted_account_hosted.hosted_level}
                          </td>

                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {el.house_bedrooms}
                          </td>

                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {el.house_beds}
                          </td>

                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {el.house_baths}
                          </td>

                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {el.house_occupied}
                          </td>

                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 uppercase">
                            {el.house_address}
                          </td>

                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 uppercase">
                            {el.house_city}
                          </td>

                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 uppercase">
                            {el.house_province}
                          </td>

                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 uppercase">
                            {el.house_country}
                          </td>

                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 uppercase">
                            {el.house_offer}
                          </td>

                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {el.house_latitude}
                          </td>

                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {el.house_longitude}
                          </td>

                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {el.house_ratting}
                          </td>

                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <Menu
                              as="div"
                              className="relative flex justify-end items-center"
                            >
                              {({ open }) => (
                                <>
                                  <Menu.Button className="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                                    <span className="sr-only">
                                      Open options
                                    </span>
                                    <DotsVerticalIcon
                                      className="w-5 h-5"
                                      aria-hidden="true"
                                    />
                                  </Menu.Button>
                                  <Transition
                                    show={open}
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                  >
                                    <Menu.Items
                                      static
                                      className="mx-3 origin-top-right absolute right-7 top-0 w-48  rounded-md shadow-lg z-10 bg-white -mt-10 ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none"
                                    >
                                      <div className="py-1">
                                        <Menu.Item>
                                          {({ active }) => (
                                            <button
                                              className={classNames(
                                                active
                                                  ? "bg-gray-100 text-gray-900"
                                                  : "text-gray-700",
                                                "group flex items-center px-4 py-2 text-sm"
                                              )}
                                              onClick={()=>onEdit(el.house_id)}
                                            >
                                              <PencilAltIcon
                                                className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                                aria-hidden="true"
                                              />
                                              Edit
                                            </button>
                                          )}
                                        </Menu.Item>
                                      </div>
                                      <div className="py-1">
                                        <Menu.Item>
                                          {({ active }) => (
                                            <button
                                              type="button"
                                              className={classNames(
                                                active
                                                  ? "bg-gray-100 text-gray-900"
                                                  : "text-gray-700",
                                                "group flex items-center px-4 py-2 text-sm"
                                              )}
                                              onClick={() => {
                                                if (
                                                  window.confirm(
                                                    "Delete this record ?"
                                                  )
                                                )
                                                  onDelete(el.house_id);
                                              }}
                                            >
                                              <TrashIcon
                                                className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                                aria-hidden="true"
                                              />
                                              Delete
                                            </button>
                                          )}
                                        </Menu.Item>
                                      </div>
                                    </Menu.Items>
                                  </Transition>
                                </>
                              )}
                            </Menu>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
                <ToastContainer autoClose={2000} />
              </div>
            </div>
          </div>
        </div>
        {isEditOpen ?
          <EditHouses
            isEditOpen={isEditOpen}
            closeModal={()=>setIsEditOpen(false)}
            isRefresh = {()=> setIsRefresh(true)}
            action={action}
          />
        : null}
      </div>
    </>
  );
}
