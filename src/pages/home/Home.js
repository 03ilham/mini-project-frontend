import React from "react";
import SearchHouses from "../houses/SearchHouses";
import HousesList from "../houses/HousesList";
import Footers from "../../layout/Footers";
import Headers from "../../layout/Headers";
import { useSelector } from "react-redux";

export default function Home() {
  const { totalItem, totalPages, currentPage } = useSelector(
    (state) => state.housesState.houses
  );

  if (totalItem === 0 && totalPages === 0 && currentPage === 0) {
    return (
      <>
        <div class=" bg-white flex items-center justify-center">
          <img src="../../unnamed.gif" className="w-auto h-auto" alt="" />
        </div>
        <div className=" flex justify-center -mt-14">
          <span className=" text-lg font-extrabold text-indigo-400">
            Sorry, the search you entered does not match
          </span>
        </div>
      </>
    );
  }

  return (
    <>
      <HousesList />
      <Footers />
    </>
  );
}
