import React from 'react'
import Meetingcard from './Meetingcard'

function Bookings() {
    return (
        <div className='md:w-[80%]  space-y-10'>
            <div className='   mt-20 md:flex space-y-4 justify-between items-center'>
                <div className='md:flex flex-row items-center md:space-x-2 space-y-4'>
                    <h1 className='text-2xl  font-bold'>Booking types</h1>
                    <h1 className='text-blue-600 hover:bg-blue-600  hover:text-white border-[1px] border-blue-600 rounded-md p-2 ' href="">+ Create new booking type</h1>
                </div>
                <div className='md:space-x-2  sm:space-y-0 space-y-4 flex  md:flex-row flex-col justify-center '>
                    <a className='text-gray-500  hover:bg-gray-500 hover:text-white border-[1px] border-gray-500 rounded-md p-2 ' href="">Embed booking page</a>
                    <a className='text-gray-500  hover:bg-gray-500 hover:text-white border-[1px] border-gray-500 rounded-md p-2 ' href="">View your bookings page ↗</a>
                </div>
            </div>
            <div className='sm:flex justify-between flex-wrap'>
            <Meetingcard />
            <Meetingcard />
            <Meetingcard />
            </div>
        </div>
    )
}

export default Bookings
