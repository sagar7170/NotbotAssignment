import React from 'react'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Link from 'next/link';

function Login_page() {
    return (
        <div className='h-screen flex flex-col mt-5 items-center'>
            <div className='flex justify-center items-center'>
                <CalendarMonthIcon />
                <h1 className='text-xl font-light'>TidyCal</h1>
            </div >
            <br />
            <div className='w-[26rem]  border-gray-300 border-[1px] rounded-md '>
                <form className='' action="">
                    <h1 className='flex justify-center p-3 text-2xl font-light'>Login</h1>
                    <hr className='h-[1px] bg-gray-300' />

                    <div className='p-5 space-y-4 w-full'>
                        <div className='space-y-1'>
                            <label className='font-semibold ' htmlFor="">Your email:</label>
                            <input className='border-gray-300 border-[1px] p-2 w-full rounded-md' type="text" />
                        </div>
                        <div className='space-y-1'>
                            <label className='font-semibold' htmlFor="">Your password:</label>
                            <input className='border-gray-300 border-[1px] p-2 w-full rounded-md' type="text" />
                        </div>
                        <div className='space-x-2'>
                            <input type="checkbox" />
                            <label htmlFor="">Remember me</label>
                        </div>
                        <Link href="/dashboard">
                            <button className='bg-blue-600 text-white p-2  mt-2 rounded-md w-full'>Login</button>
                        </Link>
                        <div className='flex items-center justify-center'>
                            <hr className='w-[40%] m-3' /> <h1 className='text-sm text-gray-500 font-light'>Or:</h1> <hr className='w-[40%] m-3 ' />
                        </div>
                        <div className='border-blue-500 border-[1px] rounded-md flex justify-between items-center'>
                            <img className='w-10 h-10' src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" />
                            <span className='text-gray-700'>Login with Google</span>
                            <div></div>
                        </div>
                        <div className='flex justify-between'>
                            <a className='text-blue-600' href="">Forget password</a>
                            <a className='text-blue-600' href="">Not registered?</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login_page
