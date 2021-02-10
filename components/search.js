import React from 'react';

export default function SearchBox() {
return (
<>
<form className="flex-grow w-16 h-16 pt-12 pl-96 ml-64">
    <div className="relative text-gray-600 focus-within:text-gray-400">
      <span className="absolute inset-y-0 left-0 flex items-center pl-0">
        <button type="submit" className="p-2 focus:outline-none  bg-gray-300 rounded">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" class="w-5 h-5"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </button>
      </span>
      <input type="search" name="q" className="py-2 px-2 text-sm text-white bg-gray-300 rounded-md pl-12 focus:outline-none  focus:text-gray-900" placeholder="Search..." autoComplete="off" />
    </div>
  </form>
</>
)
}