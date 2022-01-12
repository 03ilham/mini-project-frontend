import React, { Fragment, useRef, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { doCreateHostedReq } from "../../redux/actions/Hosted";

export default function AddCategory(props) {
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    hosted_acc: undefined,
    hosted_fullname: "",
    hosted_level: "",
  });

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const onSubmit = async () => {
    const data = {
      hosted_acc: undefined,
      hosted_fullname: values.hosted_fullname.toUpperCase() || "",
      hosted_level: values.hosted_level.toUpperCase() || "",
    };
    const payload = data
    dispatch(doCreateHostedReq(payload))
      props.closeModal();
      props.setRefresh();
      toast.success("Data has been insert.");
  };

  return (
    <Transition appear show={props.isOpen} as={Fragment}>
      <Dialog
        as="div"
        static
        onClose={() => null}
        className="fixed inset-0 z-10 overflow-y-auto"
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
            <Dialog.Overlay className="fixed inset-0" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
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
            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              <Dialog.Title
                as="h3"
                className="text-lg font-medium leading-6 text-gray-900"
              >
                Add Hosted
              </Dialog.Title>
              <div className="mt-2">
                <form action="#" method="POST">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Hosted Fullname
                    </label>
                    <input
                      type="text"
                      name="cate_name"
                      id="cate_name"
                      value={values.hosted_fullname}
                      onChange={handleChange("hosted_fullname")}
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 uppercase rounded-md"
                    />
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Hosted Level
                    </label>
                    <input
                      type="text"
                      name="cate_name"
                      id="cate_name"
                      value={values.hosted_level}
                      onChange={handleChange("hosted_level")}
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 uppercase rounded-md"
                    />
                  </div>
                </form>
              </div>

              <div className="flex flex-row space-x-4 mt-4">
                <button
                  type="button"
                  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  onClick={onSubmit}
                >
                  Submit
                </button>
                <button
                  type="button"
                  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-red-100 border border-transparent rounded-md hover:bg-yellow-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
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
  );
}
