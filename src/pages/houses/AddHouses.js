import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { doAddHousesReq } from "../../redux/actions/Houses";
import { ToastContainer, toast } from "react-toastify";
import { doGetHostedRequest } from "../../redux/actions/Hosted";

export default function AddHouses() {
  const [uploaded, setUploaded] = useState(false);
  let [refresh, setRefresh] = useState(false);
  const dispatch = useDispatch();
  const { hosted } = useSelector((state) => state.hostedState);

  const [values, setValues] = useState({
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
    house_approval: "",
    hosted_fullname: "",
    hosted_level: "",
  });

  const [files, setFiles] = useState({
    uploadFile: undefined,
    imagePreviewUrl: undefined,
  });

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const uploadOnChange = (name) => (event) => {
    let reader = new FileReader();
    let file = event.target.files[0];

    reader.onloadend = () => {
      setFiles({
        ...files,
        uploadFile: file,
        imagePreviewUrl: reader.result,
      });
    };

    reader.readAsDataURL(file);
    setUploaded(true);
  };
  const onClearImage = (event) => {
    event.preventDefault();
    setUploaded(false);
    setFiles({
      file: undefined,
      imagePreviewUrl: undefined,
    });
  };

  const onSubmit = (el) => {
    el.preventDefault();
    let payload = new FormData();
    payload.append("name", values.house_name);
    payload.append("address", values.house_address);
    payload.append("title", values.house_title);
    payload.append("ratting", values.house_ratting);
    payload.append("bedrooms", values.house_bedrooms);
    payload.append("occupied", values.house_occupied);
    payload.append("beds", values.house_beds);
    payload.append("baths", values.house_baths);
    payload.append("province", values.house_province);
    payload.append("city", values.house_city);
    payload.append("country", values.house_country);
    payload.append("latitude", values.house_latitude);
    payload.append("longitude", values.house_longitude);
    payload.append("offer", values.house_offer);
    payload.append("approval", values.house_approval);
    payload.append("hosted_fullname", values.hosted_fullname);
    payload.append("hosted_level", values.hosted_level);
    payload.append("uploadFile", files.uploadFile);
    dispatch(doAddHousesReq(payload));
    setRefresh(true);
    toast.success("Data has been insert.");
  };

  useEffect(() => {
    dispatch(doGetHostedRequest());
  }, []);

  return (
    <>
      <div className="sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="mt-5 md:mt-0 md:col-span-3">
            <form action="#" method="POST">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-4 gap-5">
                    <div className="col-span-6 sm:col-span-2">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-700 sr-only"
                      >
                        House Name{" "}
                      </label>
                      <input
                        type="text"
                        value={values.house_name}
                        onChange={handleChange("house_name")}
                        placeholder="House Name"
                        autoComplete="given-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 sr-only">
                        House Tittle
                      </label>
                      <input
                        type="text"
                        name="last-name"
                        value={values.house_title}
                        onChange={handleChange("house_title")}
                        id="last-name"
                        autoComplete="family-name"
                        placeholder="House Title"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-1">
                      <label className="block text-sm font-medium text-gray-700 sr-only">
                        Bedrooms
                      </label>
                      <input
                        type="number"
                        placeholder="Bedrooms"
                        value={values.house_bedrooms}
                        onChange={handleChange("house_bedrooms")}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-1">
                      <label className="block text-sm font-medium text-gray-700 sr-only">
                        Beds
                      </label>
                      <input
                        type="number"
                        placeholder="Beds"
                        value={values.house_beds}
                        onChange={handleChange("house_beds")}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-1">
                      <label
                        htmlFor="email-address"
                        className="block text-sm font-medium text-gray-700 sr-only"
                      >
                        Baths
                      </label>
                      <input
                        type="number"
                        placeholder="Baths"
                        value={values.house_baths}
                        onChange={handleChange("house_baths")}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-1">
                      <label className="block text-sm font-medium text-gray-700 sr-only">
                        Occupied
                      </label>
                      <input
                        type="number"
                        placeholder="Occupied"
                        value={values.house_occupied}
                        onChange={handleChange("house_occupied")}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 sr-only">
                        Address
                      </label>
                      <input
                        type="text"
                        placeholder="Address"
                        value={values.house_address}
                        onChange={handleChange("house_address")}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-1">
                      <label className="block text-sm font-medium text-gray-700 sr-only">
                        City
                      </label>
                      <input
                        type="text"
                        placeholder="City"
                        value={values.house_city}
                        onChange={handleChange("house_city")}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-1">
                      <label className="block text-sm font-medium text-gray-700 sr-only">
                        Province
                      </label>
                      <input
                        type="text"
                        placeholder="Province"
                        value={values.house_province}
                        onChange={handleChange("house_province")}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-1">
                      <label className="block text-sm font-medium text-gray-700 sr-only">
                        Country
                      </label>
                      <select
                        value={values.house_country}
                        onChange={handleChange("house_country")}
                        className="mt-1 block w-full py-2 uppercase px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option>Amerika</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                        <option>Indonesia</option>
                        <option>Malaysya</option>
                        <option>Singapura</option>
                        <option>Thailan</option>
                        <option>Chines</option>
                        <option>India</option>
                        <option>Australia</option>
                      </select>
                    </div>

                    <div className="col-span-6 sm:col-span-1">
                      <label
                        htmlFor="street-address"
                        className="block text-sm font-medium text-gray-700 sr-only"
                      >
                        Latitude
                      </label>
                      <input
                        type="text"
                        placeholder="Latitude"
                        value={values.house_latitude}
                        onChange={handleChange("house_latitude")}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-1">
                      <label className="block text-sm font-medium text-gray-700 sr-only">
                        Longitude
                      </label>
                      <input
                        type="text"
                        placeholder="Longitude"
                        value={values.house_longitude}
                        onChange={handleChange("house_longitude")}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-1">
                      <label className="block text-sm font-medium text-gray-700 sr-only">
                        Approroval
                      </label>
                      <select
                        className="mt-1 block w-full uppercase py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        value={values.house_approval}
                        onChange={handleChange("house_approval")}
                      >
                        <option>true</option>
                        <option>false</option>
                      </select>
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-3">
                      <label className="block text-sm font-medium text-gray-700 sr-only">
                        Offer
                      </label>
                      <input
                        type="text"
                        placeholder="Offer"
                        value={values.house_offer}
                        onChange={handleChange("house_offer")}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-1">
                      <label className="block text-sm font-medium text-gray-700 sr-only">
                        Hosted Level
                      </label>
                      <select
                        className="mt-1 block w-full uppercase py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        value={values.hosted_level}
                        onChange={handleChange("hosted_level")}
                      >
                        {hosted &&
                          hosted.map((el) => (
                            <option>{el.hosted_level}</option>
                          ))}
                      </select>
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 sr-only">
                        Hosted Fullname
                      </label>
                      <input
                        type="text"
                        placeholder="Hosted Fullname"
                        value={values.hosted_fullname}
                        onChange={handleChange("hosted_fullname")}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-span-6 sm:col-span-2 lg:col-span-3 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-2 text-center">
                    <div className="mx-auto h-48 w-24 text-gray-400">
                      {uploaded === false ? (
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      ) : (
                        <img
                          src={files.imagePreviewUrl}
                          alt="image"
                          className="mx-auto h-48 w-48"
                        />
                      )}
                    </div>
                    <div className="flex text-sm text-gray-600">
                      <label
                        for="image"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="image"
                          accept="image/*"
                          name="image"
                          value={values.file}
                          onChange={uploadOnChange("uploadFile")}
                          type="file"
                          className="sr-only"
                        />
                      </label>
                    </div>
                    <div className="flex text-sm text-gray-600">
                      <label
                        for="image"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                      >
                        <span className="ml-4" onClick={onClearImage}>
                          Remove
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="button"
                    onClick={onSubmit}
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
            <ToastContainer autoClose={2000} />
          </div>
        </div>
      </div>
    </>
  );
}
