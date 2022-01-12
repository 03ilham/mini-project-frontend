import React from "react";
import styled from "styled-components";

const Hero = styled.div`
  * {
    margin: auto;
    padding: auto;
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: white;
  }

  svg {
    position: relative;
    width: 200px;
    height: 200px;
    animation: rotate 2s linear infinite;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(0deg);
    }
  }

  svg circle {
    width: 100%;
    height: 100%;
    fill: none;
    stroke-width: 15;
    stroke: red;
    transform: translate(10px, 10px);
    stroke-dasharray: 440;
    stroke-dashoffset: 440;
    stroke-linecap: round;
    animation: animate 2.5s linear infinite;
  }

  @keyframes animate {
    0%,
    100% {
      stroke-dashoffset: 440;
    }

    50% {
      stroke-dashoffset: 0;
    }

    50.1% {
      stroke-dashoffset: 880;
    }
  }

  span {
    display: flex;
    justify-content: center;
    margin-top: -23.5rem;
    margin-right: 2.5rem;
  }
`;

export default function Loading() {
  return (
    // <>
    // <div className='flex justify-center'>
    //     <img src='../../2.gif' className='' alt=''/>
    // </div>
    // <div className='flex justify-center text-xl font-bold text-red-500 -mt-7'>
    //     <span className=' animate-pulse'>Processing</span>&nbsp;{" "}<span className=' animate-bounce'>.....</span>
    // </div>
    // </>
    // <Hero>
    //   <body>
    //     <svg>
    //       <circle cx="70" cy="70" r="70"></circle>
    //     </svg>
    //   </body>
    // </Hero>
    <div class="flex justify-center h-screen items-center z-10">
      <div class="relative w-40 h-40 animate-spin rounded-full bg-gradient-to-r from-purple-400 via-blue-500 to-red-400 ">
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-full border-2 border-white"></div>
      </div>
    </div>
  );
}
