import React, { useState, useEffect } from "react";
import { StarIcon, WifiIcon, LocationMarkerIcon } from "@heroicons/react/solid";
import { useSelector, useDispatch } from "react-redux";
import { doGetOneHousesReq } from "../redux/actions/Houses";
import config from "../config/config";
import Main from "../layout/Main";
import { doGetBedroomsReq } from "../redux/actions/Bedrooms";
import { doAddToCartReq } from "../redux/actions/AddToCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faYoutube,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import { RadioGroup } from "@headlessui/react";

const product = {
  breadcrumbs: [
    { id: 1, name: "Lodging", href: "#" },
    { id: 2, name: "Family", href: "#" },
  ],
};
const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetail({ match }) {
  const [selected, setSelected] = useState([0]);

  const [values, setValues] = useState({
    hobed_id: undefined,
    house_id: undefined,
    hrit_checkin: "",
    hrit_checkout: "",
    hrit_adult: 0,
    hrit_infant: 0,
    hrit_children: 0,
  });

  console.log(values);

  const Visitor =
    parseInt(values.hrit_adult) +
    parseInt(values.hrit_infant) +
    parseInt(values.hrit_children);

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const { detail } = useSelector((state) => state.housesState);

  const [isRefresh, setIsRefesh] = useState(false);

  const { bedrooms } = useSelector((state) => state.bedroomState);

  const { authUser } = useSelector((state) => state.userState);

  const data = detail.house_images;

  const dispatch = useDispatch();

  useEffect(() => {
    imagesdetail();
    getBedrooms();
  }, []);

  useEffect(() => {
    imagesdetail();
    getBedrooms();
    setIsRefesh(false);
  }, [isRefresh]);

  async function imagesdetail() {
    const payload = match.params.id;
    dispatch(doGetOneHousesReq(payload));
  }

  async function getBedrooms() {
    const payload = {};
    dispatch(doGetBedroomsReq(payload));
  }

  const addToCart = () => {
    const data = {
      user_id: authUser.userId,
      hobed_id: values.hobed_id,
      house_id: match.params.id,
      hrit_adult: values.hrit_adult,
      hrit_checkin: values.hrit_checkin,
      hrit_checkout: values.hrit_checkout,
      hrit_children: values.hrit_children,
      hrit_infant: values.hrit_infant,
    };
    const payload = data;
    dispatch(doAddToCartReq(payload));
    toast.success("Succes add to cart");
  };

  return (
    <>
      <div className="bg-white">
        <div className="pt-6">
          <nav
            aria-label="Breadcrumb"
            className=" sticky top-0 z-10 bg-white py-5"
          >
            <ol
              role="list"
              className="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8"
            >
              {product.breadcrumbs.map((breadcrumb) => (
                <li key={breadcrumb.id}>
                  <div className="flex items-center">
                    <a
                      href={breadcrumb.href}
                      className="mr-2 text-sm font-medium text-gray-900"
                    >
                      {breadcrumb.name}
                    </a>
                    <svg
                      width={16}
                      height={20}
                      viewBox="0 0 16 20"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="w-4 h-5 text-gray-300"
                    >
                      <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                    </svg>
                  </div>
                </li>
              ))}
              <li className="text-sm">
                <a
                  href={product.href}
                  aria-current="page"
                  className="font-medium text-gray-500 hover:text-gray-600"
                >
                  {detail.house_name}
                </a>
              </li>
            </ol>
          </nav>

          {/* Image gallery */}
          <Main>
            <div className="mt-6 grid grid-cols-1 gap-y-2 gap-x-2 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-2">
              {data &&
                data.map((el) => (
                  <div key={data.hoim_id} className="group relative">
                    <div className="w-full min-h-80  aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                      <img
                        src='../../home.png'
                        alt="www.airbng"
                        className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                      />
                      {/* <img
                        src={`${config.urlImages}/${el.hoim_url_name}`}
                        alt="www.airbng"
                        className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                      /> */}
                    </div>
                  </div>
                ))}
            </div>
          </Main>

          {/* Product info */}
          <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                {detail.house_name}
              </h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:mt-0 lg:row-span-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl text-gray-900">{detail.house_title}</p>

              {/* Reviews */}
              <div className="mt-6">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          reviews.average > rating
                            ? "text-gray-900"
                            : "text-gray-200",
                          "h-5 w-5 flex-shrink-0 animate-pulse"
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="sr-only">{reviews.average} out of 5 stars</p>
                  <a
                    href={reviews.href}
                    className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    {reviews.totalCount} reviews
                  </a>
                </div>
              </div>

              <form className="mt-10">
                {/* checkin checkout */}
                <div className="grid grid-cols-2 py-3 text-sm text-gray-900 font-medium">
                  <span className="px-0">Check in</span>
                  <span className="px-3">Check out</span>
                </div>
                <div className="grid grid-cols-2 space-x-2">
                  <input
                    type="date"
                    className="rounded-md border-2 border-blue-400"
                    onChange={handleChange("hrit_checkin")}
                  />
                  <input
                    type="date"
                    className="rounded-md border-2 border-blue-400"
                    onChange={handleChange("hrit_checkout")}
                  />
                </div>
                {/**occupied */}
                <h1 className="py-5 text-gray-900 font-medium">Visitor</h1>
                <p className="text-sm text-red-400 -mt-5 py-2">
                  Max {detail.house_occupied} guest
                </p>
                <div className="grid grid-cols-3 space-x-2">
                  <input
                    className="border-2 border-blue-400 rounded-md h-7"
                    type="number"
                    placeholder="Adult"
                    onChange={handleChange("hrit_adult")}
                  />
                  <input
                    className="border-2 border-blue-400 rounded-md h-7"
                    type="number"
                    placeholder="Infant"
                    onChange={handleChange("hrit_infant")}
                  />
                  <input
                    className="border-2 border-blue-400 rounded-md h-7"
                    type="number"
                    placeholder="Children"
                    onChange={handleChange("hrit_children")}
                  />
                </div>
                <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl mt-10">
                  Select Bedroom
                </h2>
                <div className="w-full px-2 py-5">
                  <div className="w-full max-w-md mx-auto">
                    <RadioGroup value={selected} onChange={setSelected}>
                      <RadioGroup.Label className="sr-only">
                        Server size
                      </RadioGroup.Label>
                      <div className="space-y-4">
                        {bedrooms &&
                          bedrooms.map((plan) => (
                            <RadioGroup.Option
                              key={plan.hobed_name}
                              value={plan}
                              className={({ active, checked }) =>
                                `${
                                  active
                                    ? "ring-2 ring-offset-2 ring-offset-gray-400 ring-white ring-opacity-60"
                                    : ""
                                }
                  ${
                    checked
                      ? "bg-gray-700 bg-opacity-75 text-white"
                      : "bg-gray-50"
                  }
                    relative rounded-lg shadow-md px-5 py-4 cursor-pointer flex focus:outline-none`
                              }
                            >
                              {({ active, checked }) => (
                                <>
                                  <div className="flex items-center justify-between w-full">
                                    <div className="flex items-center">
                                      <div className="text-sm">
                                        <RadioGroup.Label
                                          as="p"
                                          className={`font-bold text-base  ${
                                            checked
                                              ? "text-white"
                                              : "text-gray-600"
                                          }`}
                                        >
                                          {plan.hobed_name}
                                        </RadioGroup.Label>
                                        <RadioGroup.Description
                                          as="span"
                                          className={`inline ${
                                            checked
                                              ? "text-sky-100"
                                              : "text-gray-500 text-sm font-medium"
                                          }`}
                                        >
                                          <span>
                                            <span>Price:</span> Rp.
                                            {new Intl.NumberFormat("ID").format(
                                              plan.hobed_price
                                            )}
                                          </span>
                                          {" , "}
                                          <span>
                                            <span>Service Fee:</span> Rp.
                                            {new Intl.NumberFormat("ID").format(
                                              plan.hobed_service_fee
                                            )}
                                          </span>
                                        </RadioGroup.Description>
                                      </div>
                                    </div>
                                    {checked && (
                                      <div className="flex-shrink-0 text-white">
                                        <input
                                          type="checkbox"
                                          value={plan.hobed_id}
                                          className="rounded-full px-1.5 py-2 w-5 h-auto"
                                          onChange={handleChange("hobed_id")}
                                        />
                                      </div>
                                    )}
                                  </div>
                                </>
                              )}
                            </RadioGroup.Option>
                          ))}
                      </div>
                    </RadioGroup>
                  </div>
                </div>
                {Visitor <= detail.house_occupied &&
                Visitor !== 0 &&
                values.hrit_checkin &&
                values.hrit_checkout &&
                values.hobed_id ? (
                  <a
                    className="mt-4 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={addToCart}
                    href="/hosted/home"
                  >
                    Add to Cart
                  </a>
                ) : (
                  <div className="mt-4 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-not-allowed">
                    Add to Cart
                  </div>
                )}
                <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
                  <p>
                    or{" "}
                    <a
                      href="/hosted/home"
                      className="text-indigo-600 font-medium hover:text-indigo-500"
                    >
                      Continue Shopping
                      <span aria-hidden="true"> &rarr;</span>
                    </a>
                  </p>
                </div>
              </form>
            </div>

            <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>
              </div>

              <div className=" grid grid-cols-2 gap-y-5 gap-x-3 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-3">
                <div className="mt-10">
                  <h3 className="text-sm font-medium text-gray-900">Visitor</h3>
                  <div className="mt-4">
                    <ul
                      role="list"
                      className="pl-4 list-disc text-sm space-y-2"
                    >
                      <li className="text-gray-400">
                        <span className="text-gray-600">
                          {detail.house_occupied}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-10">
                  <h3 className="text-sm font-medium text-gray-900">Bedroom</h3>
                  <div className="mt-4">
                    <ul
                      role="list"
                      className="pl-4 list-disc text-sm space-y-2"
                    >
                      <li className="text-gray-400">
                        <span className="text-gray-600">
                          {detail.house_bedrooms}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-10">
                  <h3 className="text-sm font-medium text-gray-900">Beds</h3>
                  <div className="mt-4">
                    <ul
                      role="list"
                      className="pl-4 list-disc text-sm space-y-2"
                    >
                      <li className="text-gray-400">
                        <span className="text-gray-600">
                          {detail.house_beds}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-10">
                  <h3 className="text-sm font-medium text-gray-900">Baths</h3>
                  <div className="mt-4">
                    <ul
                      role="list"
                      className="pl-4 list-disc text-sm space-y-2"
                    >
                      <li className="text-gray-400">
                        <span className="text-gray-600">
                          {detail.house_baths}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="">
                <span className="text-sm font-medium text-gray-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 mt-10 animate-bounce"
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
                    {detail.house_address}
                  </span>
                  {", "}
                  <span className="text-sm text-gray-600">
                    {detail.house_city}
                  </span>
                  {", "}
                  <span className="text-sm text-gray-600">
                    {detail.house_province}
                  </span>
                  {", "}
                  <span className="text-sm text-gray-600">
                    {`${detail.house_country}, (${detail.house_latitude}, ${detail.house_longitude})`}
                  </span>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Offer</h2>

                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">{detail.house_offer}</p>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">
                  Facilities offered
                </h2>
                <div className="mt-5 grid grid-cols-3 gap-y-5">
                  <div className="flex space-x-3">
                    <img
                      src="https://www.svgrepo.com/show/22177/wifi.svg"
                      alt=""
                      className="w-6 h-6"
                    />
                    <span className="text-sm text-gray-600">Free Wifi</span>
                  </div>
                  <div className="flex space-x-3">
                    <img
                      src="https://www.svgrepo.com/show/17793/location.svg"
                      alt=""
                      className="w-6 h-6"
                    />
                    <span className="text-sm text-gray-600">
                      Great Location
                    </span>
                  </div>
                  <div className="flex space-x-3">
                    <img
                      src="https://www.svgrepo.com/show/208856/parking-car.svg"
                      alt=""
                      className="w-6 h-6"
                    />
                    <span className="text-sm text-gray-600">Free Parking</span>
                  </div>
                  <div className="flex space-x-3">
                    <img
                      src="https://www.svgrepo.com/show/265934/kitchen-pack-knife.svg"
                      alt=""
                      className="w-5 h-5"
                    />
                    <span className="text-sm text-gray-600">Kitchen</span>
                  </div>
                  <div className="flex space-x-3">
                    <img
                      src="https://www.svgrepo.com/show/40299/snow.svg"
                      alt=""
                      className="w-6 h-6"
                    />
                    <span className="text-sm text-gray-600">AC</span>
                  </div>
                  <div className="flex space-x-3">
                    <img
                      src="https://www.svgrepo.com/show/342382/animal.svg"
                      alt=""
                      className="w-6 h-6"
                    />
                    <span className="text-sm text-gray-600">Pets Allowed</span>
                  </div>
                  <div className="flex space-x-3">
                    <img
                      src="https://www.svgrepo.com/show/189318/bag.svg"
                      alt=""
                      className="w-6 h-6"
                    />
                    <span className="text-sm text-gray-600 mt-1">
                      Allowed To Leave Luggage
                    </span>
                  </div>
                  <div className="flex space-x-3">
                    <img
                      src="https://www.svgrepo.com/show/102740/refrigerator.svg"
                      alt=""
                      className="w-6 h-6"
                    />
                    <span className="text-sm text-gray-600 mt-1">
                      Refrigerator
                    </span>
                  </div>
                  <div className="flex space-x-3">
                    <img
                      src="https://www.svgrepo.com/show/202441/screen-tv.svg"
                      alt=""
                      className="w-6 h-6"
                    />
                    <span className="text-sm text-gray-600 mt-1">TV</span>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Privacy</h2>

                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">
                    {" "}
                    Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
                    incididunt cillum culpa consequat. Excepteur qui ipsum
                    aliquip consequat sint. Sit id mollit nulla mollit nostrud
                    in ea officia proident. Irure nostrud pariatur mollit ad
                    adipisicing reprehenderit deserunt qui eu.
                  </p>
                </div>
              </div>
              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Help</h2>

                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">
                    {" "}
                    Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
                    incididunt cillum culpa consequat. Excepteur qui ipsum
                    aliquip consequat sint. Sit id mollit nulla mollit nostrud
                    in ea officia proident. Irure nostrud pariatur mollit ad
                    adipisicing reprehenderit deserunt qui eu.
                  </p>
                </div>
              </div>
              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">
                  Communitas
                </h2>

                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">
                    {" "}
                    Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
                    incididunt cillum culpa consequat. Excepteur qui ipsum
                    aliquip consequat sint. Sit id mollit nulla mollit nostrud
                    in ea officia proident. Irure nostrud pariatur mollit ad
                    adipisicing reprehenderit deserunt qui eu.
                  </p>
                </div>
              </div>
              <div class="md:flex-auto md:flex-row-reverse flex-row flex mt-5">
                <a
                  href="https://www.instagram.com/airbnb/"
                  className="mx-2 cursor-pointer p-1  border-transparent hover:border-red-600 hover:text-red-600 text-2xl text-red-500 animate-pulse"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                  href="https://www.youtube.com/airbnb"
                  className="mx-2 cursor-pointer p-1   border-transparent hover:border-red-600 hover:text-red-600 text-2xl text-red-500 animate-pulse"
                >
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
                <a
                  href="https://www.facebook.com/airbnb"
                  className="mx-2 cursor-pointer p-1   border-transparent hover:border-blue-500 hover:text-blue-600 text-2xl text-blue-400 animate-pulse"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a
                  href="https://twitter.com/Airbnb"
                  className="mx-2 cursor-pointer p-1  border-transparent hover:border-blue-500 hover:text-blue-600 text-2xl text-blue-400 animate-pulse"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer autoClose={2000} />
        <div className="-mt-24">
          <hr />
        </div>
      </div>
    </>
  );
}
