import { FaArrowRight, FaCaretRight, FaTrash,FaEdit,FaPenSquare,FaRegTrashAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { Table } from 'flowbite-react';
import { useState } from "react";

export default function DataTable(props) {
  const navigate = useNavigate()
  function selectClient() {
    props.details(props.person.name)
    navigate(`/${props.person.name}`)

  }

  const deleteUser = (e, user) => {
    props.onDeleteUser(user)
    e.stopPropagation()
  }

console.log(props);
  

  return (
    <div className="">
      <table className="">
        <thead>
          <tr className="bg-gray-200 text-gray-700">
            {props.headers.map((header, index) => (
              <th key={index} className="py-2 px-4">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.clients.map((client) => (
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
              <td className="py-3 px-4">{client.age}</td>
              <td className="py-3 px-4">{client.contact}</td>
              <td className="py-3 px-4">{client.dateOfJoining}</td>
              <td className="py-3 px-4">{client.billingStatus}</td>
              <td className="py-3 px-4">
                <button className="mr-2">
                <FaPenSquare size={20}/>
                </button>
                <button className="">
                <FaRegTrashAlt size={20}/>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
