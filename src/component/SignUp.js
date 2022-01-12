import React, { Fragment, useRef, useState, useEffect } from "react";
import { LockClosedIcon } from "@heroicons/react/solid";
import { Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { doSignupReq } from "../redux/actions/User";
import Loading from "./Loading";

export default function SugnUp(props) {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.userState.status);
  const [isLoading, SetIsLoading] = useState(true);

  const [values, setValues] = useState({
    user_id: undefined,
    username: "",
    email: "",
    user_password: "",
  });

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const onSubmit = (el) => {
    el.preventDefault();

    // if(values.user_password.length < 7) {
    //   return alert('Create Stronger Passwords')
    // }

    const payload = {
      username: values.username,
      email: values.email,
      user_password: values.user_password,
    };
    dispatch(doSignupReq(payload));
  };

  const { from } = props.location.state || {
    from: {
      pathname: "/hosted/signin",
    },
  };

  if (status) {
    //console.log('redirect : ' || { from })
    return <Redirect to={from} />;
  }

  if (isLoading) {
    setTimeout(() => {
      SetIsLoading(false);
    }, 3000);
  }

  return (
    <>
      <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
        <div className="bg-white sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden">
          <div className="px-4 py-10 sm:px-10">
            <div>
              <p className="text-sm font-medium text-gray-700">Sign Up</p>
            </div>

            <div className="mt-6 relative">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500"></span>
              </div>
            </div>

            <div className="mt-6">
              <form action="#" method="POST" className="space-y-6">
                <div>
                  <label htmlFor="name" className="sr-only">
                    Full name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={values.username}
                    onChange={handleChange("username")}
                    autoComplete="Full name"
                    placeholder="Full name"
                    required
                    className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div>
                  <label htmlFor="mobile-or-email" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="Email"
                    value={values.email}
                    onChange={handleChange("email")}
                    autoComplete="current-email"
                    placeholder="Email"
                    required
                    className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={values.user_password}
                    onChange={handleChange("user_password")}
                    placeholder="Password"
                    autoComplete="current-password"
                    required
                    className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div>
                  <button
                    type="button"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={onSubmit}
                  >
                    Create your account
                  </button>
                  <p className="mt-2 text-center text-sm text-gray-600">
                    Or{" "}
                    <a
                      href="/hosted/signin"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      already have account ?
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
          <div className="px-4 py-6 bg-gray-50 border-t-2 border-gray-200 sm:px-10">
            <p className="text-xs leading-5 text-gray-500">
              By signing up, you agree to our{" "}
              <a href="#" className="font-medium text-gray-900 hover:underline">
                Terms
              </a>
              ,{" "}
              <a href="#" className="font-medium text-gray-900 hover:underline">
                Data Policy
              </a>{" "}
              and{" "}
              <a href="#" className="font-medium text-gray-900 hover:underline">
                Cookies Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
