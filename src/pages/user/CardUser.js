import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import { doGetUserReq, doUpdateUserReq } from "../../redux/actions/User";
import { ToastContainer, toast } from "react-toastify";
import { doCreateAddressReq, doGetAddressReq } from "../../redux/actions/Address";

export default function CardUser() {
  const [isRefresh, setIsRefresh] = useState(false);
  const { authUser } = useSelector((state) => state.userState);
  const users = useSelector((state) => state.userState.users);
  const addres = useSelector((state) => state.addressState.address);
  const dispatch = useDispatch();

  useEffect(() => {
    getUser();
    getAddress()
  }, []);


  useEffect(() => {
    getUser();
    getAddress()
    setIsRefresh(false);
  }, [isRefresh]);

  const [values, setValues] = useState({
    user_handphone: "",
  });

  const [address, setAddress] = useState({
    addr_id: undefined,
    addr_name: "",
    addr_detail: "",
    addr_latitude: "",
    addr_longitude: "",
  });

  const handleUsers = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleAddress = (name) => (event) => {
    setAddress({ ...address, [name]: event.target.value });
  };

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

  const onSave = (el) => {
    el.preventDefault()
    const data = {
      user_id: authUser.userId,
      addr_name: address.addr_name,
      addr_detail: address.addr_detail,
      addr_latitude: address.addr_latitude,
      addr_longitude: address.addr_longitude
    }
    dispatch(doCreateAddressReq(data))
    setIsRefresh(true);
    toast.success("Data succes fully inserted");
  }

  async function getUser() {
    const payload = {
      user_id: authUser.userId,
    };
    dispatch(doGetUserReq(payload));
  }

  async function getAddress() {
    const payload = {
      user_id: authUser.userId,
    };
    dispatch(doGetAddressReq(payload));
  }

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Users Setting
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          Personal details and application.
        </p>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Full name</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {users.user_name || ""}
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Email Address</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {users.user_email || ""}
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Phone Number</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {users.user_handphone || (
                <>
                  <input
                    className="rounded-lg border-1 border-blue-500 h-8"
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
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Address</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {addres.addr_name || (
                <>
                  <input
                    className="rounded-lg border-1 border-blue-500 h-8"
                    type="text"
                    placeholder="Add Address"
                    onChange={handleAddress('addr_name')}
                  />
                </>
              )}
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Address Detail
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {addres.addr_detail || (
                <>
                  <input
                    className="rounded-lg border-1 border-blue-500 h-8"
                    type="text"
                    placeholder="Address Detail"
                    onChange={handleAddress('addr_detail')}
                  />
                </>
              )}
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Address Latitude
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {addres.addr_latitude || (
                <>
                  <input
                    className=" bg-white rounded-lg border-1 border-blue-500 h-8"
                    type="text"
                    placeholder="Address Latitude"
                    onChange={handleAddress('addr_latitude')}

                  />
                </>
              )}
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Address Longitude
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {addres.addr_longitude || (
                <>
                  <input
                    className="rounded-lg border-1 border-blue-500 h-8"
                    type="text"
                    placeholder="Address Longitude"
                    onChange={handleAddress('addr_longitude')}

                  />
                </>
              )}
            </dd>
          </div>
          <div className="ml-5 py-3 flex justify-start">
          <button 
          className="font-medium text-base bg-blue-600 px-7 py-1 rounded-md text-white animate-pulse hover:bg-blue-400 shadow-xl hover:shadow-none"
          onClick={onSave}
          >Save</button>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Roll Type</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {users.user_roles || "Users"}
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">About</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
              incididunt cillum culpa consequat. Excepteur qui ipsum aliquip
              consequat sint. Sit id mollit nulla mollit nostrud in ea officia
              proident. Irure nostrud pariatur mollit ad adipisicing
              reprehenderit deserunt qui eu.
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"></div>
        </dl>
      </div>
      <ToastContainer autoClose={2000} />
    </div>
  );
}
