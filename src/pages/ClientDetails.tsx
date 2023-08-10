import React from 'react'
import SideNavbar from '../components/SideNavbar'
import UserProfileCard from '../components/ProfileCard'

function ClientDetails() {
  return (
    <div className='flex gap-3'>
      <SideNavbar />
      <UserProfileCard />
    </div>
  )
}

export default ClientDetails