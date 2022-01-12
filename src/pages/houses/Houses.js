import { TrashIcon } from "@heroicons/react/outline";
import React, { useState, useEffect } from "react";
import config from "../../config/config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import {
  doCretaeImagesReq,
  doGetImagesReq,
  doDeleteImagesReq,
} from "../../redux/actions/HousesImages";
import { doGetHousesReq } from "../../redux/actions/Houses";

export default function Houses() {
  let [isEditOpen, setIsEditOpen] = useState(false);
  const [action, setAction] = useState({
    id: undefined,
    actionType: "edit",
  });
  const dispatch = useDispatch();
  //redux house_images
  const images = useSelector((state) => state.imagesState.images);
  //redux houses
  const {houses, isLoading} = useSelector((state) => state.housesState);

  const [isRefresh, setIsRefesh] = useState(false);
  const [values, setValues] = useState({
    uploadFile: "",
  });
  let [files, setFiles] = useState({
    uploadFile: "",
  });

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const uploadChange = (name) => (event) => {
    let reader = new FileReader();
    let file = event.target.files[0];

    reader.onloadend = () => {
      setFiles({
        ...files,
        uploadFile: file,
      });
    };
    reader.readAsDataURL(file);
  };

  const onSubmit = (el) => {
    el.preventDefault();
    let payload = new FormData();
    const prodFile = files.uploadFile;
    prodFile && payload.append("uploadFile", prodFile);
    dispatch(doCretaeImagesReq(payload));
    setIsRefesh(true);
    toast.success("Data has been insert.");
  };

  useEffect(() => {
    imagesHouse();
    housesList();
  }, []);

  useEffect(() => {
    imagesHouse();
    housesList();
    setIsRefesh(false);
  }, [isRefresh]);

  async function imagesHouse() {
    const payload = {};
    dispatch(doGetImagesReq(payload));
  }

  async function housesList() {
    const payload = {};
    dispatch(doGetHousesReq(payload));
  }

  const onDelete = async (id) => {
    try {
      const payload = id;
      dispatch(doDeleteImagesReq(payload));
      setIsRefesh(true);
      toast.success("Row has been deleted");
    } catch (error) {
      toast.error("No Data Found");
    }
    //alert(id)
  };

  const onEdit = (id)=> {
    setAction({
      id: id,
      actionType: 'edit'
    })
    setIsEditOpen(true)
   // alert(id)
  }

  return (
    <>
      {/** product */}
      <div className="bg-white -mt-10">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className=" space-x-5">
            <span className="text-lg font-medium text-gray-600">
              Upload images
            </span>
            <input
              className="bg-gray-300 rounded-md border border-gray-700"
              type="file"
              onChange={uploadChange("uploadFile")}
            />
            <button
              className="bg-blue-600 px-3 py-1 rounded-md font-medium text-white hover:bg-blue-400"
              onClick={onSubmit}
              type="button"
            >
              Save
            </button>
          </div>
          <table className="min-w-full divide-y divide-gray-200">
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
              {images &&
                images.map((el) => (
                  <div key={el.hoim_id} className="group relative">
                    <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-lg overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                      <img
                        src={`${config.urlImages}/${el.hoim_url_name}`}
                        alt="Resort"
                        className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                      />
                    </div>
                    <div className="flex justify-start">
                      <button className="mt-5 bg-red-400 py-2 px-2 rounded-xl text-white font-medium hover:bg-red-500">
                        <TrashIcon
                          className="w-5"
                          onClick={() => {
                            if (window.confirm("Delete record ?"))
                              onDelete(el.hoim_host_id);
                          }}
                        />
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </table>
          <ToastContainer autoClose={2000} />
        </div>
      </div>
    </>
  );
}
