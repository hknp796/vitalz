import React from 'react'
import SideNavbar from '../components/SideNavbar'
import UserProfileCard from '../components/ProfileCard'
import DataTable from '../components/Datatable'

function ClientDetails() {
  return (
    <div className=''>
      <UserProfileCard />
      <h4 className='text-black font-bold text-xl m-4'>
        Payment History
      </h4>
      <DataTable />
    </div>
  )
}

export default ClientDetails