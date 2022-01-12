import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { doLogoutReq } from "../redux/actions/User";

export default function Headers() {
  let [isLogout, setIsLogout] = useState(false);
  const dispatch = useDispatch();

  const Hero = styled.div`
    .work-sans {
      font-family: "Work Sans", sans-serif;
    }

    #menu-toggle:checked + #menu {
      display: block;
    }

    .hover\:grow {
      transition: all 0.3s;
      transform: scale(1);
    }

    .hover\:grow:hover {
      transform: scale(1.02);
    }

    .carousel-open:checked + .carousel-item {
      position: static;
      opacity: 100;
    }

    .carousel-item {
      -webkit-transition: opacity 0.6s ease-out;
      transition: opacity 0.6s ease-out;
    }

    #carousel-1:checked ~ .control-1,
    #carousel-2:checked ~ .control-2,
    #carousel-3:checked ~ .control-3 {
      display: block;
    }

    .carousel-indicators {
      list-style: none;
      margin: 0;
      padding: 0;
      position: absolute;
      bottom: 2%;
      left: 0;
      right: 0;
      text-align: center;
      z-index: 10;
    }

    #carousel-1:checked
      ~ .control-1
      ~ .carousel-indicators
      li:nth-child(1)
      .carousel-bullet,
    #carousel-2:checked
      ~ .control-2
      ~ .carousel-indicators
      li:nth-child(2)
      .carousel-bullet,
    #carousel-3:checked
      ~ .control-3
      ~ .carousel-indicators
      li:nth-child(3)
      .carousel-bullet {
      color: #000;
      /*Set to match the Tailwind colour you want the active one to be */
    }
  `;

  const onLogout = () => {
    const payload = {};
    dispatch(doLogoutReq(payload));
    setIsLogout(true);
  };

  return (
    <Hero>
      <body class="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
        <div
          class="carousel relative container mx-auto"
          style={{ maxWidth: "1600px" }}
        >
          <div class="carousel-inner relative overflow-hidden w-full">
            <input
              class="carousel-open sr-only"
              type="radio"
              id="carousel-1"
              name="carousel"
              aria-hidden="true"
              hidden=""
              checked="checked"
            />
            <div
              class="carousel-item absolute opacity-0"
              style={{ height: "50vh" }}
            >
              <div
                class="block h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right"
                style={{
                  backgroundImage:
                    "url('https://media.istockphoto.com/photos/woman-with-a-suitcase-arriving-at-a-tropical-resort-for-her-vacation-picture-id1301001668?b=1&k=20&m=1301001668&s=170667a&w=0&h=DP4pe-UD9ootBRXMJ1_Z3nZd-VSyzEx9RyhgnHtaC5U=')",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundAttachment: "fixed",
                  backgroundPosition: "0 -100px",
                }}
              >
                <div class="container mx-auto">
                  <div class="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
                    <p class="text-white text-2xl my-4">
                      Create Account With One Click
                    </p>
                    <div className=" flex justify-center space-x-4 py-2">
                      {isLogout === true ? (
                        <>
                          <a
                            href="/hosted/signin"
                            className="text-sm font-medium text-white bg-red-400 px-7 py-2 rounded-md shadow-lg hover:shadow-none hover:bg-red-300 duration-200"
                          >
                            Sign in
                          </a>
                          <a
                            href="/hosted/signup"
                            className="text-sm font-medium text-white bg-red-400 px-7 py-2 rounded-md shadow-lg hover:shadow-none hover:bg-red-300 duration-200"
                          >
                            Sign Up
                          </a>
                        </>
                      ) : (
                        <button
                          className="text-sm font-medium text-white bg-red-400 px-7 py-2 rounded-md shadow-lg hover:shadow-none hover:bg-red-300 duration-200"
                          onClick={() => {
                            if (
                              window.confirm(
                                "Are you sure you want to Log out ? "
                              )
                            )
                              onLogout();
                          }}
                        >
                          Logout
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <label
              for="carousel-3"
              class="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white opacity-50 hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
            >
              ‹
            </label>
            <label
              for="carousel-2"
              class="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white opacity-50 hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
            >
              ›
            </label>

            <input
              class="carousel-open sr-only"
              type="radio"
              id="carousel-2"
              name="carousel"
              aria-hidden="true"
              hidden
            />
            <div
              class="carousel-item absolute opacity-0 bg-cover bg-right"
              style={{ height: "50vh" }}
            >
              <div
                class="block h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right"
                style={{
                  backgroundImage:
                    "url('https://media.istockphoto.com/photos/wide-angle-real-estate-interior-shot-of-a-beautiful-trendy-aframe-picture-id1322234491?b=1&k=20&m=1322234491&s=170667a&w=0&h=aTJKqFwwM6aHtfi4rtwLRKewP_lwTCvR7u8XqNFVoPo=')",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundAttachment: "fixed",
                  backgroundPosition: "0 -300px",
                }}
              >
                <div class="container mx-auto">
                  <div class="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
                    <p class="text-white text-2xl my-4">
                      Premium quality villas
                    </p>
                    <a
                      class="text-xl inline-block no-underline border-b text-white border-white leading-relaxed hover:text-black hover:border-black"
                      href="#"
                    >
                      view product
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <label
              for="carousel-1"
              class="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white opacity-50 hover:bg-gray-900  leading-tight text-center z-10 inset-y-0 left-0 my-auto"
            >
              ‹
            </label>
            <label
              for="carousel-3"
              class="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 opacity-50  leading-tight text-center z-10 inset-y-0 right-0 my-auto"
            >
              ›
            </label>

            <input
              class="carousel-open sr-only"
              type="radio"
              id="carousel-3"
              name="carousel"
              aria-hidden="true"
              hidden
            />
            <div
              class="carousel-item absolute opacity-0 bg-cover bg-right"
              style={{ height: "50vh" }}
            >
              <div
                class="block h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1640746622144-e2ec68518e97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60')",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundAttachment: "fixed",
                  backgroundPosition: "0 -100px",
                }}
              >
                <div class="container mx-auto">
                  <div class="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
                    <p class="text-white text-2xl my-4">
                      Relaxing Place For You And Your Family
                    </p>
                    <a
                      class="text-xl inline-block no-underline border-b text-white border-white leading-relaxed hover:text-black hover:border-black"
                      href="#"
                    >
                      view product
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <label
              for="carousel-2"
              class="prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white opacity-50 hover:bg-gray-900  leading-tight text-center z-10 inset-y-0 left-0 my-auto"
            >
              ‹
            </label>
            <label
              for="carousel-1"
              class="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 opacity-50  leading-tight text-center z-10 inset-y-0 right-0 my-auto"
            >
              ›
            </label>

            <ol class="carousel-indicators">
              <li class="inline-block mr-3">
                <label
                  for="carousel-1"
                  class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-gray-600"
                >
                  •
                </label>
              </li>
              <li class="inline-block mr-3">
                <label
                  for="carousel-2"
                  class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-gray-500"
                >
                  •
                </label>
              </li>
              <li class="inline-block mr-3">
                <label
                  for="carousel-3"
                  class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-gray-500"
                >
                  •
                </label>
              </li>
            </ol>
          </div>
        </div>
      </body>
    </Hero>
  );
}
