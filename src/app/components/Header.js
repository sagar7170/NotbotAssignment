"use client"
import React, { useState } from 'react'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
function Header() {
    const [toggle, setToggle] = useState(true);
    const [toggle1, setToggle1] = useState(true);

    return (
        <div>
            <div className='md:flex hidden justify-between relative'>
                <CalendarMonthIcon />
                <div className=''>
                    <a className='text-sm'>Booking Types</a>
                    <a className='text-sm'>Date Polls</a>
                    <a className='text-sm'>My Bookings</a>
                    <a className='text-sm'>My Contacts</a>
                </div>
                <div className='space-x-3 '>
                    <span className='font-semibold text-blue-600 text-sm'>Upgrade $29 lifetime access!</span>
                    <span >
                        <AccountCircleIcon color='disabled' fontSize='large' />
                        <span className='text-[12px]'>Sagar karotia</span>
                    </span>
                    <span className='text-[12px]'>EARNINGS: $0.00</span>
                    <MenuIcon onClick={() => setToggle(!toggle)} fontSize='large' />
                </div>

                <ul className={toggle ? "hidden" : "border-gray-500  border-[1px] rounded-md  space-y-1 absolute bg-white right-0 top-10 w-44"}>
                    <li className=''><a className="hover:bg-gray-200 p-2  block" >Settings</a></li>
                    <li className=''><a className="hover:bg-gray-200 p-2  block" >Integrations</a></li>
                    <li className=''><hr /></li>
                    <li className=''><a className="hover:bg-gray-200 p-2  block"  >Directory</a></li>
                    <li className=''><a className="hover:bg-gray-200 p-2  block" >Pricing</a></li>
                    <li className=''><a className="hover:bg-gray-200 p-2  block"  >Roadmap</a></li>
                    <li className=''><a className="hover:bg-gray-200 p-2  block"  >Feature requests</a></li>
                    <li className=''><a className="hover:bg-gray-200 p-2  block"  >Help</a></li>
                    <li className=''><hr /><a className="hover:bg-gray-200 p-2 block" href="">Logout</a></li>
                </ul>
            </div>
            <span className=' md:hidden flex justify-between'>
                <CalendarMonthIcon />
                <MenuIcon onClick={() => setToggle1(!toggle1)} fontSize='large' />
            </span>

            <ul className={toggle1 ? 'hidden ' : ' md:hidden text-center cursor-pointer'}>
                <li><a className='text-sm hover:bg-gray-200 p-2  block"'>Booking Types</a></li>
                <li><a className='text-sm hover:bg-gray-200 p-2  block"'>Date Polls</a></li>
                <li><a className='text-sm hover:bg-gray-200 p-2  block"'>My Bookings</a></li>
                <li><a className='text-sm'>My Contacts</a></li>
                <li ><a className="hover:bg-gray-200 p-2  block" >Settings</a></li>
                <li ><a className="hover:bg-gray-200 p-2  block" >Integrations</a></li>
                <li ><hr /></li>
                <li ><a className="hover:bg-gray-200 p-2  block"  >Directory</a></li>
                <li ><a className="hover:bg-gray-200 p-2  block" >Pricing</a></li>
                <li ><a className="hover:bg-gray-200 p-2  block"  >Roadmap</a></li>
                <li ><a className="hover:bg-gray-200 p-2  block"  >Feature requests</a></li>
                <li ><a className="hover:bg-gray-200 p-2  block"  >Help</a></li>
                <li ><hr /><a className="hover:bg-gray-200 p-2 block" href="">Logout</a></li>
                <span className='font-semibold text-blue-600 text-sm'>Upgrade $29 lifetime access!</span>
                <hr />
                <div className='flex flex-col'>
                    <span >
                        <AccountCircleIcon color='disabled' fontSize='large' />
                        <span className='text-[12px]'>Sagar karotia</span>
                    </span>
                    <span className='text-[12px]'>EARNINGS: $0.00</span>
                </div>
            </ul>
        </div >
    )
}

export default Header
