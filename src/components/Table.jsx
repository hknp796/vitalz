import { FaPenSquare, FaRegTrashAlt, FaRupeeSign } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { Button, Modal, Label, TextInput, Select } from 'flowbite-react';
import { useState } from "react";

export default function DataTable(props) {
  // console.log(props);
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const [openPaymentModal, setOpenPaymentModal] = useState(false);
  const [inputValues, setInputValues] = useState({
    month: '',
    amount: '',
  });
  const navigate = useNavigate()
  function selectClient() {
    props.details(props.person.name)
    navigate(`/${props.person.name}`)
  }

  const deleteUser = (e, user) => {
    props.onDeleteUser(user)
    e.stopPropagation()
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const submitForm = () => {
    console.log(inputValues);
  }

  const setPayment = (id) => {
    setOpenPaymentModal(true)
    // api calls
  }
  return (
    <div className="">
      <table className="w-full">
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
                {!props.isDashboard &&
                  <button className="mr-2" onClick={() => setPayment(client.id)}>
                    <FaRupeeSign size={20} />
                  </button>
                }
                <button className="mr-2">
                  <FaPenSquare size={20} />
                </button>
                <button className="">
                  <FaRegTrashAlt size={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal dismissible show={openPaymentModal} onClose={() => setOpenPaymentModal(false)} className='overflow-visible'>
        <Modal.Header>Add Payment</Modal.Header>
        <Modal.Body className='overflow-visible'>

          <div>
            <div className=" block">
              <Label htmlFor="months" value="Month" />
            </div>
            <Select id="month" required
              onChange={handleInputChange} name='month'>
              {months.map((month) => (
                <option key={month} value={month}>{month}</option>
              ))}
            </Select>
          </div>
          <div>
            <div className="block">
              <Label htmlFor="amount" value="Add Amount" />
            </div>
            <TextInput id="amount" type="number" required
              onChange={handleInputChange} name='amount' />
          </div>
          <div className="flex justify-end mt-3">
            <Button onClick={submitForm} > Add Payment</Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
