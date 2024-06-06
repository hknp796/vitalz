import { Tabs } from "flowbite-react";
import React from "react";
import useAxios from '../hooks/useAxios';
import { useEffect } from "react";
import Chart from "../components/Chart";
import DataTable from "../components/Table";
import CustomTabs from "../components/Tabs";
function Dashboard() {
  const getClient = () => {
    // setLoading(true)
    useAxios({
      method: "get",
      url: `${import.meta.env.VITE_REACT_APP_API_BASE_URL}/members`,
      successCallBack: ({ data }) => {
        console.log({ data });
        // useSaveToken(null);
        // toast.success(message)
      },
    });
  };

  useEffect(() => {
    getClient();
  }, []);

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [2, 4, 5],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
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
  const mangement = [
    {
      id: 1,
      name: "John Doe",
      age: 30,
      contact: "123-456-7890",
      dateOfJoining: "12-21-211",
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 25,
      contact: "987-654-3210",
      dateOfJoining: "12-21-211",
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
  const employeeTableHeaders = [
    "Sl. No",
    "Name",
    "Age",
    "Contact",
    "Date of Joining",
    "",
  ];
  const tabs = [
    {
      title: "Clients",
      content: (
        <DataTable clients={clients} headers={tableHeaders} isDashboard />
      ),
    },
    {
      title: "Trainers",
      content: (
        <DataTable
          clients={mangement}
          headers={employeeTableHeaders}
          isDashboard
        />
      ),
    },
    // Add more tabs as needed
  ];

  return (
    <div className="p-10 w-full">
      <div className="flex items-start gap-4">
        <Chart data={data} title="Current Members" />
        <Chart data={data} title="New Members" />
      </div>
      <div></div>
      <div className="mt-8">
        <CustomTabs tabs={tabs} />
      </div>
    </div>
  );
}

export default Dashboard;
