import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { doUpdateUserReq } from "../../redux/actions/User";
import { toast } from "react-toastify";

export default function EditUser(props) {
  let [isOpen, setIsOpen] = useState(true);
  const { authUser } = useSelector((state) => state.userState);
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    user_name: props.action.user_name,
    user_handphone: props.action.user_handphone,
    email: props.action.user_email,
  });

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const payload = {
      user_id: authUser.userId,
      username: values.user_name || undefined,
      user_handphone: values.user_handphone || undefined,
      email: values.email || undefined,
    };
    dispatch(doUpdateUserReq(payload));
    props.closeModal();
    props.isRefresh();
    toast.success("Data succes fully updated");
  };

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open dialog
        </button>
      </div>

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
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

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
                {props.action.user_handphone ? (
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Edit Phone
                  </Dialog.Title>
                ) : null}
                {props.action.user_email ? (
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Edit Email
                  </Dialog.Title>
                ) : null}
                {props.action.user_name ? (
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Edit Username
                  </Dialog.Title>
                ) : null}

                <div className="mt-2">
                  {props.action.user_handphone ? (
                    <input
                      value={values.user_handphone}
                      onChange={handleChange("user_handphone")}
                      className="  border-2 border-indigo-500 rounded-md p-2"
                    />
                  ) : null}
                  {props.action.user_email ? (
                    <input
                      value={values.email}
                      onChange={handleChange("email")}
                      className=" border-2 border-indigo-500 rounded-md p-2"
                    />
                  ) : null}
                  {props.action.user_name ? (
                    <input
                      value={values.user_name}
                      onChange={handleChange("user_name")}
                      className=" border-2 border-indigo-500 rounded-md p-2"
                    />
                  ) : null}
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
