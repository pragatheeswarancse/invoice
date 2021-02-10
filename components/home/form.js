import React from 'react'
import PointOfContact from '../home/pointofcontact'
import ExistingEmployee from '../home/existingEmployee'
import NextButton from '../nextbtn'

export default function Form() {
return(
<div>
    <div className="pl-16 pt-10">
        <div className="mt-10 sm:mt-0">
            <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="mt-5 md:mt-0 md:col-span-2">
                    <form action="#" method="POST">
                        <div className="shadow overflow-hidden sm:rounded-md">
                            <div className="px-4 py-2 bg-gray-200 sm:p-6">
                                <label for="city" className="block text-sm font-medium text-gray-700 py-2">Company
                                    Name*</label>
                                <input type="text" name="city" id="city"
                                    className="mt-1 py-2 px-1 w-56 focus:ring-indigo-500 focus:border-indigo-500 block  shadow-sm sm:text-sm border-gray-300 rounded-md" />

                                <div className="col-span-3 sm:col-span-3 pt-11">
                                    <label for="country" className="block text-sm font-medium text-gray-700 py-2">Country /
                                        Region</label>
                                    <input type="text" name="street_address" id="street_address" autocomplete="country"
                                        className="mt-1 py-2 px-1 w-56 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                </div>
                                <div className="grid grid-cols-8 gap-y-6 py-8">
                                    <div className="col-span-3 ">
                                        <label for="street_address"
                                            className="block text-sm font-medium text-gray-700 py-2">Street address</label>
                                        <input type="text" name="street_address" id="street_address"
                                            autocomplete="street-address"
                                            className="mt-1 py-2  w-full px-1 focus:ring-indigo-500 focus:border-indigo-500 block  shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>
                                    <div className="col-span-2 pl-3">
                                        <label for="city"
                                            className="block text-sm font-medium text-gray-700 py-2">City</label>
                                        <input type="text" name="city" id="city"
                                            className="mt-1 py-2 px-1 w-full focus:ring-indigo-500 focus:border-indigo-500 block  shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>
                                    <div className="col-span-6 pl-3 sm:col-span-3 lg:col-span-2">
                                        <label for="state" className="block text-sm font-medium text-gray-700 py-2">State
                                            /Province</label>
                                        <input type="text" name="state" id="state"
                                            className="mt-1 py-2 px-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label for="postal_code"
                                            className="block text-sm font-medium text-gray-700 py-2">ZIP/Postal</label>
                                        <input type="text" name="postal_code" id="postal_code"
                                            autocomplete="postal-code"
                                            className="mt-1 py-2 px-1 focus:ring-indigo-500 focus:border-indigo-500 block w-56  sm:text-sm border-gray-300 rounded-md" />
                                    </div>
                                </div>
                                <div>
                                    <label for="Point of contact"
                                        className="block text-sm font-medium text-gray-700 py-2">Point of Contact</label>
                                    <div className="relative text-gray-600 focus-within:text-gray-400">
                                        <span className="absolute inset-y-0 left-0 flex items-center pl-0">
                                            <button type="submit" className="p-2 focus:outline-none rounded">
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round"
                                                    strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"
                                                    class="w-5 h-5">
                                                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                                </svg>
                                            </button>
                                        </span>
                                        <input type="search" name="q"
                                            className="py-2 px-2 text-sm  rounded-md pl-12 focus:outline-none  focus:text-gray-900"
                                            placeholder="Search..." autoComplete="off" />
                                    </div>
                                    <div className="pt-4">
                                        <PointOfContact />
                                    </div>
                                </div>
                                <div className="pt-4">
                                <div>
                                    <label for="Add existing employee"
                                        className="block text-sm font-medium text-gray-700 py-2">Add existing employee*</label>
                                    <div className="relative text-gray-600 focus-within:text-gray-400">
                                        <span className="absolute inset-y-0 left-0 flex items-center pl-0">
                                            <button type="submit" className="p-2 focus:outline-none rounded">
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round"
                                                    strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"
                                                    class="w-5 h-5">
                                                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                                </svg>
                                            </button>
                                        </span>
                                        <input type="search" name="q"
                                            className="py-2 px-2 w-56 text-sm  rounded-md pl-12 focus:outline-none  focus:text-gray-900"
                                            placeholder="Search..." autoComplete="off" />
                                    </div>
                                    <div className="pt-4">
                                        <ExistingEmployee />
                                    </div>
                                </div>
                                
                            </div>
                            <div className="grid grid-cols-8 gap-y-6 py-8">
                                    <div className="col-span-3 ">
                                        <label for="month"
                                            className="block text-sm font-medium text-gray-700 py-2"> Contract Duration (*In month)</label>
                                        <input type="number" name="month" id="month"
                                            autocomplete="month"
                                            className="mt-1 py-2  w-full px-2 focus:ring-indigo-500 focus:border-indigo-500 block  shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>
                                    <div className="col-span-3 pl-3">
                                        <label for="contract"
                                            className="block text-sm font-medium text-gray-700 py-2">Date of contract*</label>
                                        <input type="date" name="contract" id="contract"
                                            className="mt-1 py-2 px-2 w-full focus:ring-indigo-500 focus:border-indigo-500 block  shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>
                                    <div className="col-span-8 sm:col-span-3 lg:col-span-4">
                                        <label for="scopeofwork" className="block text-sm font-medium text-gray-700 py-2">Companies scope of work</label>
                                        <input type="text" name="scopeofwork" id="scopeofwork"
                                            className="mt-1 py-2 px-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>
                                </div>
                                </div>
                                <div className = "pl-96 ml-56 pt-3">
                                    <NextButton />
                                </div>
                        </div>
                    </form>
                </div>
                <div className="md:col-span-1">
                    <div className="px-4 sm:px-0">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
                        <p className="mt-1 text-sm text-gray-600">
                            Use a permanent address where you can receive mail.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
)
}