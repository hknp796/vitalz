import { useEffect, useState } from "react";
import { LuDumbbell } from "react-icons/lu";
import { Calendar } from "@/components/ui/calendar";

import axios from "axios";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

import CoachTable from "../components/Datatable";
import RadialChart from "../components/RadialChart";
const headers = [
  { key: "name", label: "Name", className: "w-[150px]" },
  { key: "email", label: "Email" },
  { key: "mobile", label: "Mobile" },
];

const customers = [
  {
    name: "John Doe",
    email: "john.doe@example.com",
    mobile: "+1 (555) 123-4567",
  },
  {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    mobile: "+1 (555) 234-5678",
  },
  {
    name: "Michael Johnson",
    email: "michael.johnson@example.com",
    mobile: "+1 (555) 345-6789",
  },
  {
    name: "Emily Davis",
    email: "emily.davis@example.com",
    mobile: "+1 (555) 456-7890",
  },
  {
    name: "Chris Brown",
    email: "chris.brown@example.com",
    mobile: "+1 (555) 567-8901",
  },
  {
    name: "Sophia Martinez",
    email: "sophia.martinez@example.com",
    mobile: "+1 (555) 678-9012",
  },
  {
    name: "Liam Wilson",
    email: "liam.wilson@example.com",
    mobile: "+1 (555) 789-0123",
  },
];

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
      <div className="flex flex-wrap ">
        <Card className="m-4 w-[60%]">
          <CardHeader>
            <CardTitle>Welcome to Vitalz</CardTitle>
            <CardDescription>
              <div className="mt-2 flex justify-between gap-3 items-center">
                <span>
                  Effortlessly Manage Your Gym Like a Pro Track, streamline, and
                  elevate your fitness business—all in one place.
                </span>
                <div>
                  <LuDumbbell className="text-6xl text-black" />
                </div>
              </div>
            </CardDescription>
          </CardHeader>

          <CardFooter></CardFooter>
        </Card>
        <Card className="m-4 border-none">
          <Calendar
            mode="single"
            className="rounded-md border"
          />
        </Card>
      </div>
      <div className="flex">
        <Card className="m-4 w-[70%] ">
          <CardHeader>
            <CardTitle>Coaches</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 max-h-[250px] overflow-auto">
            <div>
              <CoachTable data={customers} headers={headers}/>
            </div>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
        <Card className="m-4 w-[50%]">
          <CardHeader>
            <CardTitle>Sales</CardTitle>
            <CardDescription>
              <RadialChart />
            </CardDescription>
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
