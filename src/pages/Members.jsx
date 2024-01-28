import { useState } from 'react'
import { Datepicker } from 'flowbite-react';
import DataTable from '../components/Table'
import { Button, Modal, Label, TextInput, Select } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';

function ClientDetails() {
  const clients = [
    { id: 1, name: 'John Doe', age: 30, contact: '123-456-7890', dateOfJoining: '12-21-211', billingStatus: 'Active' },
    { id: 2, name: 'Jane Smith', age: 25, contact: '987-654-3210', dateOfJoining: '12-21-211', billingStatus: 'Inactive' },
  ]
  const navigateTo = useNavigate();

  const [openModal, setOpenModal] = useState(false);
  const [inputValues, setInputValues] = useState({
    firstName: '',
    lastName: '',
    gender: '',
  });
  const [dateOfJoining, setJoiningDate] = useState('')
  const [dateOfBirth, setBirthDate] = useState('')

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const handleJoiningDate = (date) => {
    setJoiningDate(date)
  };

  const handlingBirthDate = (date) => {
    setBirthDate(date)
  }
  const submitForm = () => {
    let form = { ...inputValues, dateOfBirth, dateOfJoining }
    console.log(form, 'frm');

  }
  const tableHeaders = ['Sl. No', 'Name', 'Age', 'Contact', 'Date of Joining', 'Billing Status', ''];
  return (
    <div className='w-full p-10'>
      <h3 className='font-semibold text-3xl'>Members</h3>
      <div className='flex justify-end'>
        <Button className="mb-2" onClick={() => setOpenModal(true)}>Add New</Button>
      </div>
      <DataTable clients={clients} headers={tableHeaders} />
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)} className='overflow-visible'>
        <Modal.Body className='overflow-visible'>
          <form className="flex flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="firstname" value="First Name" />
              </div>
              <TextInput id="firstname" type="text" placeholder="" required
                onChange={handleInputChange} name='firstName' />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="lname" value="Last Name" />
              </div>
              <TextInput id="lname" type="text" required
                onChange={handleInputChange} name='lastName' />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="age" value="Age" />
              </div>
              <TextInput id="age" type="text" required
                onChange={handleInputChange} name='age' />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="contact" value="Contact" />
              </div>
              <TextInput id="contact" type="text" required
                onChange={handleInputChange} name='contact' />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="gender" value="Gender" />
              </div>
              <Select id="countries" required
                onChange={handleInputChange} name='gender'>
                <option value="" >Choose one</option>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
              </Select>
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="joindate" value="Date of Joining" />
              </div>
              <Datepicker
                onSelectedDateChanged={handleJoiningDate} name='dateOfJoining' />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="dob" value="Date of Birth" />
              </div>
              <Datepicker
                onSelectedDateChanged={handlingBirthDate} name='dateOfBirth' />
            </div>
            <Button onClick={submitForm} > Submit</Button>
          </form>
        </Modal.Body>
      </Modal>

    

    </div>
  )
}

export default ClientDetails