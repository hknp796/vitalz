import React from 'react'
import { FaArrowRight, FaCaretRight, FaTrash, FaEdit, FaPenSquare, FaRegTrashAlt } from "react-icons/fa";
import Chart from '../components/barchart'
import Doughnut from '../components/Doughnut';

function Billing() {
  const clients = [
    { id: 1, name: 'John Doe', amount: 30, description: '', status: 'Active' },
    { id: 2, name: 'Jane Smith', amount: 25, description: '', status: 'Inactive' },
  ]

  const tableHeaders = ['Sl. No', 'Member', 'Amount', 'Description', 'Status', ''];

  return (
    <div className='w-full pt-3'>
      <h3 className='ml-4 mb-10 font-semibold text-3xl'>Billing</h3>
      <div className='flex'>

        <Doughnut />
        <Chart />
      </div>
      <table className="w-[100%]">
        <thead>
          <tr className="bg-gray-200 text-gray-700">
            {tableHeaders.map((header, index) => (
              <th key={index} className="py-2 px-4">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client.id} className="border-b border-gray-200 text-black text-center">
              <td className="py-3 px-4">{client.id}</td>

              <td className="py-3 px-4 flex items-center justify-center gap-3">
                <img src='https://gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg' alt="Profile" className="w-8 h-8 rounded-full" />
                <div className="">
                  <div>
                    {client.name}
                  </div>
                  <div className="text-xs text-gray-500">{client.billingStatus}</div>
                </div>
              </td>
              <td className="py-3 px-4">{client.amount}</td>
              <td className="py-3 px-4">{client.description}</td>
              <td className="py-3 px-4">{client.status}</td>
              <td className="py-3 px-4">
                <button className="mr-2">
                  download
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Billing