import { useEffect, useState } from "react";
import { Spinner } from 'flowbite-react';

import axios from "axios";
import Table from "../components/Table";
import Tab from "../components/Tab";
import { FaPlus, FaSearch } from "react-icons/fa";
import MyModal from "../components/Modal";
import Navbar from "../components/Navbar";
import SideCard from "../components/SideCard";

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

  let [userData, setUserData] = useState<any[]>([]);
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


  return (
    <div className="bg-[#19191A] h-[100vh] px-10">
      <div className="md:flex md:justify-between md:items-center md:align-middle  py-3 p-3 mb-10">
        <MyModal isOpen={isOpen} onChildEvent={handleChildEvent} />
      </div>
      <div className="flex flex-wrap md:flex md:flex-nowrap md:gap-10">
        <div className="w-[30%]">
          <SideCard />
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
              userData.map((person, index) => (
                <Table key={person.id} person={person} details={details} onDeleteUser={handleDeleteUser} />
              ))
          }
        </div>
      </div>
      <Navbar />
    </div>
  );
}

export default Home;
