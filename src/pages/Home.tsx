import React, { useEffect, useState } from "react";
import Image from "../assets/workout.jpeg";
import { getBodyparts } from "../api/rapidapi";
import axios from "axios";
import Table from "../components/Table";
import Tab from "../components/Tab";
import { FaPlus, FaSearch } from "react-icons/fa";
import MyModal from "../components/Modal";
import Navbar from "../components/Navbar";

function Home() {
  const peoples = [
    {
      name: 'Leslie Alexander',
      email: 'leslie.alexander@example.com',
      role: 'Co-Founder / CEO',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      dateOfJoining: '2023-01-23T13:23Z',
    },
    {
      name: 'Michael Foster',
      email: 'michael.foster@example.com',
      role: 'Co-Founder / CTO',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      dateOfJoining: '2023-01-23T13:23Z',
    },
    {
      name: 'Dries Vincent',
      email: 'dries.vincent@example.com',
      role: 'Business Relations',
      imageUrl:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      dateOfJoining: '2023-01-23T13:23Z',
    },
    {
      name: 'Lindsay Walton',
      email: 'lindsay.walton@example.com',
      role: 'Front-end Developer',
      imageUrl:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      dateOfJoining: '2023-01-23T13:23Z',
    },
    {
      name: 'Courtney Henry',
      email: 'courtney.henry@example.com',
      role: 'Designer',
      imageUrl:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      dateOfJoining: '2023-01-23T13:23Z',
    },
    {
      name: 'Tom Cook',
      email: 'tom.cook@example.com',
      role: 'Director of Product',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      dateOfJoining: '2023-01-23T13:23Z',
    },
  ]
  let [isOpen, setIsOpen] = useState(false)
  let [people,setPeople] = useState(peoples)

  function closeModal() {
    setIsOpen(true)
  }

  function handleChildEvent() {
    setIsOpen(false)
  }

  function submitHandler(data:any){
    setPeople(current => [...current, data]);
  }
  
  return (
    <div className="bg-[#19191A] h-[100vh] py-10">
      <div className="md:flex md:justify-between md:items-center md:align-middle  py-3 p-3 mb-10">
        <h3 className="text-white  font-bold "> People</h3>

        <div className="flex items-center gap-4 mt-10 md:mt-0">
          <Tab />
          <button className=" bg-[#1377FF] rounded-[50%] flex items-center justify-center text-white w-10 h-10" onClick={closeModal}><FaPlus /></button>
          <button className=" bg-[#424345] rounded-[50%] flex items-center justify-center text-white w-10 h-10"><FaSearch />
          </button>
        </div>
        <MyModal isOpen={isOpen} onChildEvent={handleChildEvent} submitHandler={submitHandler}/>
      </div>
      {people.map((person, index) => (
        <Table key={person.email} person={person} />
      ))}
      <Navbar />
    </div>
  );
}

export default Home;
