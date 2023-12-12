import React from 'react'
import DataTable from '../components/Table'

function ClientDetails() { 
  const clients  = [
  { id: 1, name: 'John Doe', age: 30, contact: '123-456-7890', dateOfJoining: '12-21-211', billingStatus: 'Active' },
  { id: 2, name: 'Jane Smith', age: 25, contact: '987-654-3210', dateOfJoining: '12-21-211', billingStatus: 'Inactive' },
]

const tableHeaders = ['Sl. No', 'Name', 'Age', 'Contact', 'Date of Joining', 'Billing Status', ''];
  return (
    <div>
      <DataTable clients={clients} headers={tableHeaders}/>
    </div>
  )
}

export default ClientDetails