import { useEffect, useState } from "react";
import { LuDumbbell } from "react-icons/lu";
import { Calendar } from "@/components/ui/calendar";

import axios from "axios";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

import DataTable from "../components/Datatable";
import RadialChart from "../components/RadialChart";

// Table headers
const headers = [
  { accessorKey: "name", header: "Name" },
  { accessorKey: "email", header: "Email" },
  { accessorKey: "mobile", header: "Mobile" },
];

const inventoryHeaders = [
  { accessorKey: "equipment", header: "Equipment" },
  { accessorKey: "status", header: "Status" },
  { accessorKey: "total", header: "Total" },
];

// Static data
const clients = [
  { id: "23123412", name: "John Doe", email: "john.doe@example.com", mobile: "+1 (555) 123-4567" },
  { id: "2312341d", name: "Jane Smith", email: "jane.smith@example.com", mobile: "+1 (555) 234-5678" },
  { id: "231234d12", name: "Michael Johnson", email: "michael.johnson@example.com", mobile: "+1 (555) 345-6789" },
];

const coaches = [
  { name: "John Doe", email: "john.doe@example.com", mobile: "+1 (555) 123-4567" },
  { name: "Jane Smith", email: "jane.smith@example.com", mobile: "+1 (555) 234-5678" },
  { name: "Michael Johnson", email: "michael.johnson@example.com", mobile: "+1 (555) 345-6789" },
];

const inventory = [
  { id: "32232", equipment: "Treadmill", total: 10, status: "In use" },
  { id: "32232a", equipment: "Dumbbells", total: 30, status: "Available" },
  { id: "32232dd", equipment: "Stationary Bike", total: 5, status: "In use" },
  { id: "32232dfa", equipment: "Rowing Machine", total: 8, status: "Available" },
];

function Home() {
  const [userData, setUserData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    fetchData("https://dummyjson.com/users", 6);
  }, []);

  const fetchData = (url, limit) => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        const users = response.data.users.slice(0, limit);
        setUserData(users);
      })
      .catch((error) => console.error("Error:", error))
      .finally(() => setLoading(false));
  };

  const handleDeleteUser = (id) => {
    setUserData((prevData) => prevData.filter((user) => user.id !== id));
  };

  return (
    <div className="p-4 space-y-6">
      {/* Welcome Section */}
      <div className="flex flex-wrap gap-4">
        <Card className="flex-1 min-w-[300px]">
          <CardHeader>
            <CardTitle>Welcome to Vitalz</CardTitle>
            <CardDescription>
              <div className="mt-2 flex justify-between items-center gap-3">
                <span>
                  Effortlessly manage your gym like a pro. Track, streamline, and elevate your fitness business—all in one place.
                </span>
                <LuDumbbell className="text-6xl text-black" />
              </div>
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="flex-none min-w-[300px]">
          <Calendar mode="single" className="rounded-md border" />
        </Card>
      </div>

      {/* Data Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Coaches Section */}
        <Card>
          <CardHeader>
            <CardTitle>Coaches</CardTitle>
          </CardHeader>
          <CardContent className="max-h-[250px] overflow-auto">
            <DataTable data={clients} columns={headers} />
          </CardContent>
        </Card>

        {/* Sales Section */}
        <Card>
          <CardHeader>
            <CardTitle>Sales</CardTitle>
          </CardHeader>
          <CardContent>
            <RadialChart />
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Active Members Section */}
        <Card>
          <CardHeader>
            <CardTitle>Active Members</CardTitle>
          </CardHeader>
          <CardContent className="max-h-[250px] overflow-auto">
            <DataTable data={coaches} columns={headers} />
          </CardContent>
        </Card>

        {/* Inventory Section */}
        <Card>
          <CardHeader>
            <CardTitle>Inventories</CardTitle>
          </CardHeader>
          <CardContent className="max-h-[250px] overflow-auto">
            <DataTable data={inventory} columns={inventoryHeaders} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Home;
