import React, { useEffect, useState } from "react";
import config from "../../config/config";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { doGetImagesReq } from "../../redux/actions/HousesImages";
import { doGetHousesReq } from "../../redux/actions/Houses";
import Pagination from "@material-ui/lab/Pagination";
import { makeStyles } from "@material-ui/core/styles";
import { LocationMarkerIcon } from "@heroicons/react/solid";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function HousesList() {
  const classes = useStyles();

  const [page, setPage] = useState(1);

  const getRequestParams = (page) => {
    let params = {};

    if (page) {
      params["page"] = page - 1;
    }
    return params;
  };

  const dispatch = useDispatch();

  const houses = useSelector((state) => state.housesState.houses.rows);

  const totalPages = useSelector(
    (state) => state.housesState.houses.totalPages
  );

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    const payload = {};
    dispatch(doGetHousesReq(payload));
  }, [dispatch]);

  useEffect(() => {
    const payload = {};
    dispatch(doGetImagesReq(payload));
  }, [dispatch]);

  useEffect(() => {
    const params = getRequestParams(page);
    dispatch(doGetHousesReq(params));
  }, [dispatch, page]);

  return (
    <>
      {/** product */}
      <div className="bg-white -mt-10">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className=" space-x-5"></div>
          <table className="min-w-full divide-y divide-gray-200">
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
              {houses &&
                houses.map((el, index) => (
                  <div key={index} className="group relative">
                    <div className="w-full min-h-80 aspect-w-1 aspect-h-1 rounded-lg overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none hover:grow hover:shadow-2xl">
                      <a href={`/detail/houses/${el.house_id}`}>
                        <img
                          src="../../home.png"
                          alt="Resort"
                          className="w-full h-full object-center object-cover lg:w-full lg:h-full cursor-pointer"
                        />
                        {/* <img
                          src={`${config.urlImages}/${el.house_url_images}`}
                          alt="Resort"
                          className="w-full h-full object-center object-cover lg:w-full lg:h-full cursor-pointer"
                        /> */}
                      </a>
                    </div>
                    <div className=" py-3 space-y-1 text text-sm font-medium text-gray-700 tracking-tighter">
                      <p>Name: {el.house_name}</p>
                      <p>Title: {el.house_title}</p>
                      <div className=" flex space-x-2">
                      <LocationMarkerIcon className="w-4 h-4"/>
                      <span className=" text-xs font-medium text-gray-700 tracking-tighter">{`${el.house_address}, ${el.house_city}, ${el.house_province}, ${el.house_country}`}</span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </table>
          <div className={classes.root}>
            <div className="flex justify-center pt-5">
              <Pagination
                count={houses ? totalPages : 0}
                page={page}
                onChange={handlePageChange}
                showFirstButton
                showLastButton
                color="secondary"
              />
            </div>
          </div>
          <div className="pt-5">
            <hr />
          </div>
        </div>
      </div>
    </>
  );
}
