import Link from 'next/link'
import React from 'react'

const NavBar = () => {
    return (
        <div className="flex justify-between items-center px-10 pt-3">
            <div>
                <Link href="/" className="font-light tracking-wide text-xl text-gray-600"><span className="font-bold text-black">Loud</span>Beats</Link>
            </div>
            <div>
                <ul className="hidden lg:flex space-x-10">
                    <li>
                        <Link className="py-1 text-link relative group" href="/headPhones" >
                                HEADPHONES
                                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-black transition-all duration-700 group-hover:w-full"></span>
                        </Link>
                    </li>
                    <li>
                        <Link className="py-1 text-link relative group" href="/airPods" >
                                AIRPODS
                                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-black transition-all duration-700 group-hover:w-full"></span>
                        </Link>
                    </li>
                    <li>
                        <Link className="py-1 text-link relative group" href="/flexPods" >
                                FLEXPODS
                                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-black transition-all duration-700 group-hover:w-full"></span>
                        </Link>
                    </li>
                    <li className="relative">
                        <Link className="py-1 text-link relative group" href="/cart" >
                                CART
                                <span className="text-black font-bold text-sm absolute -top-1 left-11">1</span>
                                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-black transition-all duration-700 group-hover:w-full"></span>
                        </Link>
                    </li>
                    <li>
                        <Link className="py-1 text-link relative group" href="/contact" >
                                CONTACT
                                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-black transition-all duration-700 group-hover:w-full"></span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar