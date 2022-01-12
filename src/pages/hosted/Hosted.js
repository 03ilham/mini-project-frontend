import React, { useEffect, useState, Fragment, useRef } from "react";
import apiCategory from "./ApiHosted";
import { Dialog, Transition } from "@headlessui/react";
import {
  PencilIcon,
  PencilAltIcon,
  TrashIcon,
  HomeIcon,
} from "@heroicons/react/solid";
import AddCategory from "./AddHosted";
import EditCategory from "./EditHosted";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from 'react-redux';
import { doGetHostedRequest, doDeleteHostedReq } from "../../redux/actions/Hosted";
import Loading from "../../component/Loading";


export default function Hosted() {
  const dispatch = useDispatch();
  const hosted = useSelector((state)=> state.hostedState.hosted)
  const [isRefresh, setIsRefesh] = useState(false);
  let [isOpen, setIsOpen] = useState(false);
  let [isEditOpen, setIsEditOpen] = useState(false);

  const [action, setAction] = useState({
    id: undefined,
    actionType: "edit",
  });

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
  }, [setIsRefesh(true)]);

  async function fetchData() {
    const payload = {}
    dispatch(doGetHostedRequest(payload))
  }

  const onEdit = (id) => {
    setAction({
      id: id,
      actionType: "edit",
    });
    setIsEditOpen(true);
  };

  const onDelete = async (id) => {
    try {
        const payload = id
        dispatch(doDeleteHostedReq(payload)) 
        setIsRefesh(true);
        toast.success("Row has been deleted");
      
    } catch (error) {
      toast.error("No Data Found");
    }
  };

  return (
    <div>
      <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Hosted Acc
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Hosted Fullname
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Hosted Level
                </th>
                <th scope="col" className="relative px-8 py-3 text-right">
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={() => setIsOpen(true)}
                  >
                    <HomeIcon
                      className="-ml-1 mr-2 h-5 w-5 text-gray-500"
                      aria-hidden="true"
                    />
                    New Hosted
                  </button>
                </th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200">
              {hosted &&
                hosted.map((data) => (
                  <tr key={data.hosted_acc}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-700">
                      {data.hosted_acc}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 font-medium uppercase">
                      {data.hosted_fullname}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 font-medium uppercase">
                      {data.hosted_level}
                    </td>

                    <div className="flex flex-row-reverse space-x-0 space-x-reverse">
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex flex-row space-x-4 mt-4">
                          <button
                            type="button"
                            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-indigo-900 bg-indigo-200 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                            onClick={() => {
                              onEdit(data.hosted_acc);
                            }}
                          >
                            Edit
                            <PencilAltIcon className="w-5 ml-1"/>
                          </button>
                          <button
                            type="button"
                            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-red-100 bg-red-400 border border-transparent rounded-md hover:bg-red-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                            onClick={() => {
                              if (window.confirm("Delete record ?"))
                                onDelete(data.hosted_acc);
                            }}
                          >
                            Delete
                            <TrashIcon className="w-5 ml-1"/>
                          </button>
                        </div>
                      </td>
                    </div>
                  </tr>
                ))}
            </tbody>
          </table>
          <ToastContainer autoClose={2000} />
        </div>
      </div>
      {isOpen ? (
        <AddCategory
          isOpen={isOpen}
          setRefresh={() => setIsRefesh(true)}
          closeModal={() => setIsOpen(false)}
          action={action}
        />
      ) : null}

      {isEditOpen ? (
        <EditCategory
          isEditOpen={isEditOpen}
          setRefresh={() => setIsRefesh(true)}
          closeModal={() => setIsEditOpen(false)}
          action={action}
        />
      ) : null}
    </div>
  );
}
