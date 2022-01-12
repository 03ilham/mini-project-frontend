import React, { useState, useEffect } from "react";
import { AtSymbolIcon, PhoneIcon } from "@heroicons/react/solid";
import { useSelector, useDispatch } from "react-redux";
import { doGetUserReq, doUpdateUserReq } from "../../redux/actions/User";
import { ToastContainer, toast } from "react-toastify";
import { PencilAltIcon } from "@heroicons/react/solid";
import EditUser from "./EditUser";

export default function User() {
  const { authUser } = useSelector((state) => state.userState);
  const users = useSelector((state) => state.userState.users);
  const [isRefresh, setIsRefresh] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    user_handphone: "",
  });

  const [action, setAction] = useState({
    user_name: "",
    user_handphone: "",
    user_email: "",
  });

  const handleUsers = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    getUser();
    setIsRefresh(false);
  }, [isRefresh]);

  async function getUser() {
    const payload = {
      user_id: authUser.userId,
    };
    dispatch(doGetUserReq(payload));
  }

  const onSubmit = (id) => {
    id.preventDefault();
    const data = {
      user_id: authUser.userId,
      user_handphone: values.user_handphone,
    };
    dispatch(doUpdateUserReq(data));
    setIsRefresh(true);
    toast.success("Data succes fully inserted");
  };

  const onEditPhone = (name) => {
    setAction({
      user_handphone: name,
    });
    setIsEditOpen(true);
  };

  const onEditEmail = (name) => {
    setAction({
      user_email: name,
    });
    setIsEditOpen(true);
  };

  const onEditName = (name) => {
    setAction({
      user_name: name,
    });
    setIsEditOpen(true);
  };

  return (
    <>
      <body
        class="
      font-sans
      antialiased
      text-gray-900
      leading-normal
      tracking-wider
      bg-cover
    "
        style={{
          backgroundImage: "url('https://source.unsplash.com/1L71sPT5XKc')",
        }}
      >
        <div
          class="
        max-w-4xl
        flex
        items-center
        h-screen
        flex-wrap
        mx-auto
        lg:my-0
      "
        >
          <div
            id="profile"
            class="
          w-full
          lg:w-3/5
          rounded-lg
          lg:rounded-l-lg lg:rounded-r-none
          shadow-2xl
          bg-white
          bg-opacity-30
          mx-6
          lg:mx-0
        "
          >
            <div class="p-4 md:p-12 text-center lg:text-left">
              <div
                class="
              block
              lg:hidden
              rounded-full
              shadow-xl
              mx-auto
              h-48
              w-48
              bg-cover bg-center
            "
                style={{
                  backgroundImage: "url('../../user2.png')",
                }}
              ></div>
              <div className="flex space-x-4">
                <h1 class="text-3xl font-bold pt-8 lg:pt-0 text-white">
                  {users.user_name}
                </h1>
                <button
                  className="text-white hover:grow2 hover:text-gray-400"
                  onClick={() => onEditName(users.user_name)}
                >
                  <PencilAltIcon className="w-9 h-9" />
                </button>
              </div>

              <div
                class="
              mx-auto
              lg:mx-0
              w-4/5
              pt-3
              border-b-2 border-white
              opacity-25
            "
              ></div>
              <p
                class="
              pt-4
              text-base
              font-bold
              flex
              items-center
              justify-center
              lg:justify-start
              text-white space-x-3
            "
              >
                <AtSymbolIcon className="w-6 h-6 mr-2 text-gray-400" />
                {users.user_email}
                <button
                  className="text-white hover:grow2 hover:text-gray-400"
                  onClick={() => onEditEmail(users.user_email)}
                >
                  <PencilAltIcon className="w-5 h-5" />
                </button>
              </p>
              <p
                class="
                pt-4
                text-base
                font-bold
                flex
                items-center
                justify-center
                lg:justify-start
                text-white space-x-3
            "
              >
                <PhoneIcon className=" w-6 h-6 text-gray-400 mr-2" />
                {users.user_handphone || (
                  <>
                    <input
                      className="rounded-lg h-8 text-white bg-transparent"
                      type="tel"
                      placeholder="Add Phone Number"
                      onChange={handleUsers("user_handphone")}
                    />
                    <button>
                      <div className=" -mb-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-6 w-6 ml-3 text-blue-500 hover:text-blue-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          onClick={onSubmit}
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                    </button>
                  </>
                )}
                <button
                  className="text-white hover:grow2 hover:text-gray-400"
                  onClick={() => onEditPhone(users.user_handphone)}
                >
                  <PencilAltIcon className="w-5 h-5" />
                </button>
              </p>
              <p class="pt-8 text-sm text-white">
                Totally optional short description about yourself, what you do
                and so on.
              </p>

              <div
                class="
              mt-6
              pb-16
              lg:pb-0
              w-4/5
              lg:w-full
              mx-auto
              flex flex-wrap
              items-center
              justify-between
            "
              ></div>
            </div>
          </div>

          <div class="w-full lg:w-2/5">
            <img
              src="../../user2.png"
              class="rounded-none lg:rounded-lg shadow-2xl hidden lg:block bg-white bg-opacity-75 py-10 px-3"
              alt=""
            />
          </div>
        </div>
        <ToastContainer autoClose={2000} />
      </body>
      {isEditOpen ? (
        <EditUser
          isEditOpen={isEditOpen}
          closeModal={() => setIsEditOpen(false)}
          isRefresh={() => setIsRefresh(true)}
          action={action}
        />
      ) : null}
    </>
  );
}
