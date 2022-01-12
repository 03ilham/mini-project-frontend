import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState, useEffect } from "react";
import { DocumentAddIcon } from "@heroicons/react/solid";
import { useDispatch, useSelector } from "react-redux";
import ApiHouses from "../../api/ApiHouses";
import {
  doGetOneHousesReq,
  doUpdateHousesReq,
} from "../../redux/actions/Houses";
import { toast } from "react-toastify";

export default function EditHouses(props) {
  const dispatch = useDispatch();

  let [values, setValues] = useState({
    house_id: undefined,
    house_name: "",
    house_title: "",
    house_bedrooms: "",
    house_occupied: "",
    house_beds: "",
    house_baths: "",
    house_address: "",
    house_province: "",
    house_city: "",
    house_country: "",
    house_latitude: "",
    house_longitude: "",
    house_offer: "",
  });

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  useEffect(() => {
    ApiHouses.findOne(props.action.id).then((detail) => {
      setValues({
        ...values,
        house_id: detail.house_id,
        house_name: detail.house_name,
        house_title: detail.house_title,
        house_address: detail.house_address,
        house_baths: detail.house_baths,
        house_bedrooms: detail.house_bedrooms,
        house_beds: detail.house_beds,
        house_city: detail.house_city,
        house_country: detail.house_country,
        house_latitude: detail.house_latitude,
        house_occupied: detail.house_occupied,
        house_offer: detail.house_offer,
        house_province: detail.house_province,
        house_longitude: detail.house_longitude,
      });
    });
  }, [props.action.id]);

  const onSubmit = () => {
    const data = {
      house_id: values.house_id,
      house_name: values.house_name,
      house_title: values.house_title,
      house_address: values.house_address,
      house_baths: values.house_baths,
      house_bedrooms: values.house_bedrooms,
      house_beds: values.house_beds,
      house_city: values.house_city,
      house_country: values.house_country,
      house_latitude: values.house_latitude,
      house_occupied: values.house_occupied,
      house_offer: values.house_offer,
      house_province: values.house_province,
      house_longitude: values.house_longitude,
    };
    dispatch(doUpdateHousesReq(data));
    props.closeModal();
    props.isRefresh();
    toast.success("Row has been updated");
  };

  return (
    <>
      <Transition appear show={props.isEditOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={() => null}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="absolute inset-0 bg-gray-800 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle "
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-lg p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-sm font-medium leading-6 text-gray-700 flex"
                >
                  <DocumentAddIcon className="w-5 h-5 text-red-500" />
                  Edit Houses
                </Dialog.Title>
                <div className="mt-2 border-2 border-gray-300 rounded-md">
                  <div className="mt-5 md:mt-0 md:col-span-2">
                    <form action="#" method="POST">
                      <div className="shadow overflow-hidden sm:rounded-md">
                        <div className="px-4 py-5 bg-white sm:p-6">
                          <div className="grid grid-cols-8 gap-4">
                            <div className="col-span-6 sm:col-span-4">
                              <input
                                type="text"
                                name="house_id"
                                id="house_id"
                                value={values.house_id}
                                hidden
                              />
                              <label className="block text-xs font-medium text-gray-700">
                                House Name
                              </label>
                              <input
                                type="text"
                                value={values.house_name}
                                onChange={handleChange("house_name")}
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              />
                            </div>

                            <div className="col-span-6 sm:col-span-4">
                              <label className="block text-xs font-medium text-gray-700">
                                House Title
                              </label>
                              <input
                                type="text"
                                value={values.house_title}
                                onChange={handleChange("house_title")}
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              />
                            </div>

                            <div className="col-span-6 sm:col-span-2">
                              <label className="block text-xs font-medium text-gray-700">
                                Occupied
                              </label>
                              <input
                                type="number"
                                value={values.house_occupied}
                                onChange={handleChange("house_occupied")}
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              />
                            </div>
                            <div className="col-span-6 sm:col-span-2">
                              <label className="block text-xs font-medium text-gray-700">
                                Bedroom
                              </label>
                              <input
                                type="number"
                                value={values.house_bedrooms}
                                onChange={handleChange("house_bedrooms")}
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              />
                            </div>
                            <div className="col-span-6 sm:col-span-2">
                              <label className="block text-xs font-medium text-gray-700">
                                Baths
                              </label>
                              <input
                                type="number"
                                value={values.house_baths}
                                onChange={handleChange("house_baths")}
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              />
                            </div>
                            <div className="col-span-6 sm:col-span-2">
                              <label className="block text-xs font-medium text-gray-700">
                                Beds
                              </label>
                              <input
                                type="number"
                                value={values.house_beds}
                                onChange={handleChange("house_beds")}
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              />
                            </div>

                            <div className="col-span-6 sm:col-span-4">
                              <label className="block text-xs font-medium text-gray-700">
                                Address
                              </label>
                              <input
                                type="text"
                                value={values.house_address}
                                onChange={handleChange("house_address")}
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              />
                            </div>
                            <div className="col-span-6 sm:col-span-4">
                              <label
                                htmlFor="last-name"
                                className="block text-xs font-medium text-gray-700"
                              >
                                City
                              </label>
                              <input
                                type="text"
                                value={values.house_city}
                                onChange={handleChange("house_city")}
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              />
                            </div>
                            <div className="col-span-6 sm:col-span-4">
                              <label
                                htmlFor="last-name"
                                className="block text-xs font-medium text-gray-700"
                              >
                                Province
                              </label>
                              <input
                                type="text"
                                value={values.house_province}
                                onChange={handleChange("house_province")}
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              />
                            </div>

                            <div className="col-span-6 sm:col-span-4">
                              <label
                                htmlFor="country"
                                className="block text-xs font-medium text-gray-700"
                              >
                                Country
                              </label>
                              <select
                                value={values.house_country}
                                onChange={handleChange("house_country")}
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              >
                                <option>United States</option>
                                <option>Canada</option>
                                <option>Mexico</option>
                                <option>Indonesia</option>
                              </select>
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                              <label
                                htmlFor="region"
                                className="block text-xs font-medium text-gray-700"
                              >
                                Latitude
                              </label>
                              <input
                                type="text"
                                value={values.house_latitude}
                                onChange={handleChange("house_latitude")}
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                              <label
                                htmlFor="postal-code"
                                className="block text-xs font-medium text-gray-700"
                              >
                                Longitude
                              </label>
                              <input
                                type="text"
                                value={values.house_longitude}
                                onChange={handleChange("house_longitude")}
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              />
                            </div>

                            <div className="col-span-6">
                              <label
                                htmlFor="street-address"
                                className="block text-xs font-medium text-gray-700"
                              >
                                Offer
                              </label>
                              <input
                                type="text"
                                value={values.house_offer}
                                onChange={handleChange("house_offer")}
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="flex flex-row space-x-4 mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 duration-200"
                    onClick={onSubmit}
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-red-500 border border-transparent rounded-md hover:bg-red-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 duration-200"
                    onClick={props.closeModal}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
