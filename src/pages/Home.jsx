import { useEffect, useState } from "react";
import { Spinner } from 'flowbite-react';

import axios from "axios";
import Table from "../components/Table";
import Tab from "../components/Tab";
import { FaPlus, FaSearch } from "react-icons/fa";
import MyModal from "../components/Modal";
import SideCard from "../components/SideCard";
import SideNavbar from "../components/SideNavbar";

function Home() {

  let [isOpen, setIsOpen] = useState(false)
  let [isLoading, setLoading] = useState(false)

  function closeModal() {
    setIsOpen(true)
  }

  function handleChildEvent() {
    setIsOpen(false)
  }

  function details() {

  }

  let [userData, setUserData] = useState([]);
  useEffect(() => {
    getClient()

  }, []);

  const handleDeleteUser = (person) => {
    setUserData((prevUserData) => {
      return prevUserData.filter((item) => item.id !== person.id);
    });
  }

  const getClient = () => {
    setLoading(true)
    axios.get('https://dummyjson.com/users')
      .then(response => {
        response.data.users.length = 6
        setUserData(response.data.users);
      })
      .catch(error => {
        console.error('Error:', error);
      }).finally(() => {
        setLoading(false)
      })

  }
  const getManagementData = () => {
    setLoading(true)
    axios.get('https://dummyjson.com/users')
      .then(response => {
        response.data.users.length = 8
        setUserData(response.data.users);
      })
      .catch(error => {
        console.error('Error:', error);
      }).finally(() => {
        setLoading(false)
      })

  }

  const getManagement = () => {
    getManagementData()
  }
  const clients  = [
    { id: 1, name: 'John Doe', age: 30, contact: '123-456-7890', dateOfJoining: '12-21-211', billingStatus: 'Active' },
    { id: 2, name: 'Jane Smith', age: 25, contact: '987-654-3210', dateOfJoining: '12-21-211', billingStatus: 'Inactive' },
  ]

  const tableHeaders = ['Sl. No', 'Name', 'Age', 'Contact', 'Date of Joining', 'Billing Status', ''];

  return (
    <div className="h-[100vh]">
      {/* <div className=" md:align-middle  py-3 p-3 mb-10">
        <MyModal isOpen={isOpen} onChildEvent={handleChildEvent} />
      </div> */}
      <div className="flex flex-wrap md:flex md:flex-nowrap md:gap-10">
        <div>
          <SideNavbar />
        </div>
        <div className="w-[100%]">
          <div className="flex items-center flex-wrap md:flex md:items-center justify-between gap-4 mt-10 md:mt-0 p-3">
            <h3 className="text-white  font-bold"> People</h3>
            <div className="flex gap-4 ">

              <Tab getClients={getClient} getManagementData={getManagement} />
              <button className=" bg-[#1377FF] rounded-[50%] flex items-center justify-center text-white w-10 h-10" onClick={closeModal}><FaPlus /></button>
              <button className=" bg-[#424345] rounded-[50%] flex items-center justify-center text-white w-10 h-10"><FaSearch />
              </button>
            </div>
          </div>
          {
            isLoading ? (<div className="flex justify-center align-middle items-center">
              <Spinner
                aria-label="Info spinner example"
                color="info"
                size="xl"
              />
            </div>
            ) :
                <Table  clients={clients} headers={tableHeaders}/>
          }
        </div>
      </div>
    </div>
  );
}

export default Home;
