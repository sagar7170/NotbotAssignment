import React from 'react'
import Header from '../components/Header'
import Bookings from '../components/Bookings'

function Dashboard() {
  return (
    <div className='m-5'>
      <Header/>
     <div className='flex justify-center '>
        <Bookings/>
     </div>
    </div>
  )
}

export default Dashboard
