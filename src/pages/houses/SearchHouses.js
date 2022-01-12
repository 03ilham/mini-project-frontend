import React,{ useState } from 'react'
import { SearchIcon } from '@heroicons/react/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function SearchHouses() {

    const [values, setValues] = useState({
        search: undefined,
    });

    const handleOnChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
    }

    const enterSearchKey = (event) => {
        if (event.keyCode === 13) {
          event.preventDefault()
          alert(values.search)
        }
      }

    return (
        <>
        <div className="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-center lg:mt-10 mt-5">
            <div className="max-w-lg w-full lg:max-w-xs">
                <label htmlFor="search" className="sr-only">
                    Search
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </div>
                    <input
                        id="search"
                        name="search"
                        value={values.search}
                        onChange={handleOnChange('search')}
                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="Search"
                        type="search"
                        onKeyDown={enterSearchKey}
                    />
                </div>
            </div>
        </div>
        </>
    )
}