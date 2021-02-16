import React from 'react'
import Link from 'next/link'

export default function Navbar() {
return(
    <div>
        <header className="z-30 w-full px-2 py-4 bg-white sm:px-4">
  <div className="container flex items-center justify-between mx-auto">
    <Link href="/" title="Invoice Home Page" className="flex items-center">
      <p className="text-lg font-bold pl-24">Padink Invoice</p>
    </Link>
    <div className="flex items-center space-x-1">
      <div className="hidden space-x-1 pr-20 md:inline-flex">
      <Link href="/loginCompany" title="Invoice Home Page" className="flex items-center">
        <p className="border px-5 bg-purple-700 text-white rounded font-bold py-1 hover:bg-purple-800">Log out</p>
      </Link>
    </div>
  </div>
  </div>
</header>
    </div>
)
}