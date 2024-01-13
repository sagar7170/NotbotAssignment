import { Switch } from '@mui/material'
import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
function Meetingcard() {
    return (
        <div className='w-[22rem] shadow-xl p-4 rounded-md space-y-4'>
            <div className='space-y-5'>
                <h1 className='text-xl font-bold'>15 Minutes Meeting</h1>
                <div className='flex justify-between'>
                    <a className='text-blue-600 font-semibold ' href="">/15 minutes meeting</a>
                    <button className='text-blue-600'>Copy link</button>
                </div>
            </div>
            <hr />
            <div className='flex items-center'>
                <Switch defaultChecked />
                <h2>Booking is OF</h2>
            </div>
            <hr />
            <div className='h-16'>
               Book a meeting with me for 15 minutes!
            </div>
            <hr/>
            <div className='space-x-10'>
                <span>share: </span>
                <EmailIcon color='disabled'/>
                <LinkedInIcon color='disabled'/>
                <FacebookIcon color='disabled'/>
                <TwitterIcon color='disabled'/>
            </div>
            <hr />
            <div className='flex justify-between'>
                <a>Embed on Website</a>
                <a>Embed on Email</a>
            </div>
            <hr />
            <div className='flex justify-between'>
                <a className='text-red-500' href="">Delete</a>
                <a className='text-blue-500' href="">Clone</a>
                <a className='text-blue-500' href="">Edit</a>
            </div>
        </div>
    )
}

export default Meetingcard
