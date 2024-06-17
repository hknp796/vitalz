import { useEffect,useState } from "react";
import DataTable from "../components/Table";
import { Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import useAxios from "../hooks/useAxios";

function ClientDetails() {
  const [members, setMembers] = useState([]);
  const navigateTo = useNavigate();

  const getClient = () => {
    useAxios({
      method: "get",
      url: `/members`,
      successCallBack: ({ data }) => {
        setMembers(data);
      },
    });
  };

  useEffect(() => {
    getClient();
  }, []);

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
  return (
    <div className="w-full p-10">
      <h3 className="font-semibold text-3xl">Members </h3>
      <div className="flex justify-end">
        <Button className="mb-2" onClick={() => navigateTo("/add-members")}>
          Add New
        </Button>
      </div>
      <DataTable clients={members} headers={tableHeaders} getClient={getClient} />
    </div>
  );
}

export default ClientDetails;
