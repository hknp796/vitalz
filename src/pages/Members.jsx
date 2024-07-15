import { useEffect, useState } from "react";
import DataTable from "../components/Table";
import { Button, Spinner } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import useAxios from "../hooks/useAxios";

function ClientDetails() {
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
    '',
  ];
  return (
    <div className="w-full p-10">
      <h3 className="font-semibold text-3xl">Members </h3>
      <div className="flex justify-end">
        <Button className="mb-2" onClick={() => navigateTo("/add-members")}>
          Add New
        </Button>
      </div>

      {loading ? (
        <div className="flex items-center justify-center">
          <Spinner
            aria-label="Extra large spinner example"
            className="flex justify-center"
            size="xl"
          />
        </div>
      ) : (
        <DataTable
          clients={members}
          headers={tableHeaders}
          getClient={getClient}
        />
      )}
    </div>
  );
}

export default ClientDetails;
