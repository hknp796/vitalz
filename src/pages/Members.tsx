import { useEffect, useState } from "react";
import DataTable from "../components/Table";
import { Button, Spinner } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import useAxios from "../hooks/useAxios";

function ClientDetails() {

 const headers = [
     { accessorKey: "name", header: "Name" },
     { accessorKey: "id", header: "Member Id" },
     { accessorKey: "enrolled", header: "Date Enrolled" },
     { accessorKey: "expiry", header: "Date Expiration" },
     {
         id: "action",
         header: "Edit",
         cell: ({ row }) => {
             return (
                 <Button
                     className="h-8 w-8 p-0 bg-blue-500"
                     onClick={() => {
                         console.log("clicked")
                     }}
                 >
                     Edit
                 </Button>
             )
         },
     },
 ];

  // Static data
  const clients = [
    { id: "23123412", name: "John Doe", enrolled: "Jan 10", expiry: "Feb 10" },
    { id: "23123412", name: "John Doe", enrolled: "Jan 10", expiry: "Feb 10" },
    { id: "23123412", name: "John Doe", enrolled: "Jan 10", expiry: "Feb 10" },
  ];
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigateTo = useNavigate();

  const getClient = () => {
    useAxios({
      method: "get",
      url: `/members`,
      successCallBack: ({ data }) => {
        setMembers(data);
      },
      setLoading,
    });
  };

  useEffect(() => {
    getClient();
  }, []);

  const tableHeaders = [
    "Sl. No",
    "Name",
    "Age",
    "Contact",
    "Date of Joining",
    "",
    "",
  ];
  return (
    <div className="w-full p-10">
      <DataTable data={clients} columns={headers} />

    </div>
  );
}

export default ClientDetails;
