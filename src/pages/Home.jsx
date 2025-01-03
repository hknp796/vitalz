import { useEffect, useState } from "react";
import { Spinner } from "flowbite-react";

import axios from "axios";
import Table from "../components/Table";
import Tab from "../components/Tab";
import { FaPlus, FaSearch } from "react-icons/fa";
import MyModal from "../components/Modal";
import SideCard from "../components/SideCard";
import SideNavbar from "../components/SideNavbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

function Home() {
  let [isOpen, setIsOpen] = useState(false);
  let [isLoading, setLoading] = useState(false);

  function closeModal() {
    setIsOpen(true);
  }

  function handleChildEvent() {
    setIsOpen(false);
  }

  function details() {}

  let [userData, setUserData] = useState([]);
  useEffect(() => {
    getClient();
  }, []);

  const handleDeleteUser = (person) => {
    setUserData((prevUserData) => {
      return prevUserData.filter((item) => item.id !== person.id);
    });
  };

  const getClient = () => {
    setLoading(true);
    axios
      .get("https://dummyjson.com/users")
      .then((response) => {
        response.data.users.length = 6;
        setUserData(response.data.users);
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const getManagementData = () => {
    setLoading(true);
    axios
      .get("https://dummyjson.com/users")
      .then((response) => {
        response.data.users.length = 8;
        setUserData(response.data.users);
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const getManagement = () => {
    getManagementData();
  };
  const clients = [
    {
      id: 1,
      name: "John Doe",
      age: 30,
      contact: "123-456-7890",
      dateOfJoining: "12-21-211",
      billingStatus: "Active",
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 25,
      contact: "987-654-3210",
      dateOfJoining: "12-21-211",
      billingStatus: "Inactive",
    },
  ];

  const tableHeaders = [
    "Sl. No",
    "Name",
    "Age",
    "Contact",
    "Date of Joining",
    "Billing Status",
    "",
  ];
  const home = false;
  return (
    <div>
      <div className="flex flex-wrap">
        <Card className="m-4 w-[60%]">
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>You have 3 unread messages.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">sdfasfd</CardContent>
          <CardFooter></CardFooter>
        </Card>
        <Card className="m-4 w-[30%]">
          <h4>Calendar</h4>
        </Card>
      </div>
      <div className="flex">
        <Card className="m-4 w-[50%]">
          <CardHeader>
            <CardTitle>Coaches</CardTitle>
            <CardDescription>You have 3 unread messages.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">sdfasfd</CardContent>
          <CardFooter></CardFooter>
        </Card>
        <Card className="m-4 w-[50%]">
          <CardHeader>
            <CardTitle>Sales</CardTitle>
            <CardDescription>You have 3 unread messages.</CardDescription>
          </CardHeader>
        </Card>
      </div>
      <div className="flex">
        <Card className="m-4 w-[50%]">
          <CardHeader>
            <CardTitle>Active memebers</CardTitle>
            <CardDescription>You have 3 unread messages.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">sdfasfd</CardContent>
          <CardFooter></CardFooter>
        </Card>
        <Card className="m-4 w-[50%]">
          <CardHeader>
            <CardTitle>Inventories</CardTitle>
            <CardDescription>You have 3 unread messages.</CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}

export default Home;
