import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faYoutube,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Footers() {
  return (
    <>
      <div class="bg-gray-300 rounded-t-md -mt-14">
        <div class="max-w-6xl m-auto text-gray-700 flex flex-wrap">
          <div class="p-5 w-48 ">
            <div class="text-base text-gray-800 font-bold">Tentang</div>
            <a class="my-3 block" href={"/brand"}>
              Cara Kerja Airbnb <span class="text-teal-600 text-xs p-1"></span>
            </a>
            <a
              class="my-3 block"
              // onclick={onClickCate}
              href={"/category"}
            >
              Ruang Berita <span class="text-teal-600 text-xs p-1"></span>
            </a>
            <a class="my-3 block" href={"/condition"}>
              Airbnb 2021 <span class="text-teal-600 text-xs p-1"></span>
            </a>
            <a class="my-3 block" href="/#">
              Investor <span class="text-teal-600 text-xs p-1"></span>
            </a>
            <a class="my-3 block" href="/#">
              Airbnb Plus <span class="text-teal-600 text-xs p-1"></span>
            </a>
          </div>
          <div class="p-5 w-48 ">
            <div class="text-base text-gray-800 font-bold">Komunitas</div>
            <a class="my-3 block" href="/#">
              Aksebelitas <span class="text-teal-600 text-xs p-1"></span>
            </a>
            <a class="my-3 block" href="/#">
              Airbnb Assocites <span class="text-teal-600 text-xs p-1"></span>
            </a>
            <a class="my-3 block" href="/#">
              Refereal Tamu <span class="text-teal-600 text-xs p-1"></span>
            </a>
            <a class="my-3 block" href="/#">
              Airbnb.org <span class="text-teal-600 text-xs p-1"></span>
            </a>
          </div>
          <div class="p-5 w-48 ">
            <div class="text-base text-gray-800 font-bold">Tuan Rumah</div>
            <a class="my-3 block" href="/#">
              Adakan Pengalaman <span class="text-teal-600 text-xs p-1"></span>
            </a>
            <a class="my-3 block" href="/#">
              Pusat Informasi <span class="text-teal-600 text-xs p-1"></span>
            </a>
            <a class="my-3 block" href="/#">
              Pusat Kommunikasi <span class="text-teal-600 text-xs p-1"></span>
            </a>
          </div>
          <div class="p-5 w-48 ml-5">
            <div class="text-base text-gray-800 font-bold">Dukungan</div>
            <a class="my-3 block" href="/#">
              Respons COVID-19 Airbnb{" "}
              <span class="text-teal-600 text-xs p-1"></span>
            </a>
            <a class="my-3 block" href="/#">
              Pusat Bantuan <span class="text-teal-600 text-xs p-1"></span>
            </a>
            <a class="my-3 block" href="/#">
              Opsi Pembatalan <span class="text-teal-600 text-xs p-1"></span>
            </a>
          </div>
        </div>
      </div>
      <div class="bg-gray-200 pt-2 rounded-b-md mb-10">
        <div
          class="flex pb-5 px-3 m-auto pt-5 border-t text-gray-800 text-sm flex-col
      md:flex-row max-w-6xl"
        >
          <div class="mt-2 text-gray-600">
            &copy; Copyright {new Date().getFullYear()} Airbnb All Rights
            Reserved.
          </div>
          <div class="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
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
    </>
  );
}
