import React, { Fragment, useRef, useState, useEffect } from 'react'
import { LockClosedIcon } from '@heroicons/react/solid';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Redirect } from 'react-router-dom'

export default function Reagister(props) {
    const dispatch = useDispatch();


    const [values, setValues] = useState({
        username: undefined,
        user_firstname: "",
        user_lastname: "",
        user_password: "",
        email: '',
        user_phone: "",
        roletype: ""
    });

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
    }


    const onSubmit = async (e) => {
        e.preventDefault();
         const payload = {
           username: (values.username),
           user_firstname: (values.user_firstname).toUpperCase() || '',
           user_lastname: (values.user_lastname).toUpperCase() || '',
           user_password: values.user_password,
           email: values.email,
           user_phone: values.user_phone,
           role_type: values.roletype
       }

       dispatch((payload));  
    }

  

    return (
        <>

            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <img
                            className="mx-auto h-12 w-auto"
                            src="/a.png"
                            alt="Workflow"
                        />
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign up</h2>
                    </div>
                    <form className="mt-8 space-y-6" action="#" method="POST">
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="username" className="sr-only">
                                    Username
                                </label>
                                <input
                                    type="text"
                                    value={values.username}
                                    onChange={handleChange('username')}
                                    autoComplete
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="User Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="firstname" className="sr-only">
                                    First Name
                                </label>
                                <input
                                    value={values.user_firstname}
                                    onChange={handleChange('user_firstname')}
                                    type="text"
                                    autoComplete
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="First Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="lastname" className="sr-only">
                                    Last Name
                                </label>
                                <input
                                    value={values.user_lastname}
                                    onChange={handleChange('user_lastname')}
                                    type="text"
                                    autoComplete
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Last Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    value={values.user_password}
                                    onChange={handleChange('user_password')}
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Password"
                                />
                            </div>
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    value={values.email}
                                    onChange={handleChange('email')}
                                    type="email"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Email address"
                                />
                            </div>
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    Phone
                                </label>
                                <input
                                    id="phone"
                                    value={values.user_phone}
                                    onChange={handleChange('user_phone')}
                                    type="text"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Phone"
                                />
                            </div>
                            <select
                                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                                defaultValue="User"
                                value={values.roletype}
                                onChange={handleChange('roletype')}
                            >
                                <option value="User">User</option>
                                <option value="Seller">Seller</option>
                            </select>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                onClick={onSubmit}
                            >
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                    <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                                </span>
                                Sign up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}