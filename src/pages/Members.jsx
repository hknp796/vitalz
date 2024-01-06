import React from 'react'
import DataTable from '../components/Table'
import { Button } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';

function ClientDetails() { 
  const clients  = [
  { id: 1, name: 'John Doe', age: 30, contact: '123-456-7890', dateOfJoining: '12-21-211', billingStatus: 'Active' },
  { id: 2, name: 'Jane Smith', age: 25, contact: '987-654-3210', dateOfJoining: '12-21-211', billingStatus: 'Inactive' },
]
const navigateTo = useNavigate();

function addNewMember(){
  navigateTo('/add-members')
}

const tableHeaders = ['Sl. No', 'Name', 'Age', 'Contact', 'Date of Joining', 'Billing Status', ''];
  return (
    <div className='w-full p-10'>  
      <h3 className='font-semibold text-3xl'>Members</h3>
      <div className='flex justify-end'>
      <Button className="mb-2" onClick={addNewMember}>Add New</Button>
      </div>
      <DataTable clients={clients} headers={tableHeaders}/>
    </div>
  )
}

export default ClientDetails