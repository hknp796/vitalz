import { useState, useEffect } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import DataTable from "../components/Datatable.jsx";

const clients = [
  { id: "23123412", name: "1 Month", validity: "1", amount: "500" },
  { id: "23123412", name: "3 Month", validity: "1", amount: "500" },
  { id: "23123412", name: "6 Month", validity: "1", amount: "500" },
  { id: "23123412", name: "12 Month", validity: "1", amount: "500" },
];

const headers = [
  { accessorKey: "name", header: "Name" },
  { accessorKey: "validity", header: "Contact" },
  { accessorKey: "amount", header: "Date of Join" },
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

interface User {
    firstName: string;
    lastName: string;
    gender: string;
    age: string;
    contact: string;
    validity: string;
    amount?: string;
    status: string;
    dateOfJoining?: string;
    dateOfBirth?: string;
}

function NewMemberForm() {
    const { id } = useParams();
    const navigateTo = useNavigate();

    const [inputValues, setInputValues] = useState<User>({
        firstName: "",
        lastName: "",
        gender: "",
        age: "",
        contact: "",
        validity: "",
        status: "",
    });
    
    const [dateOfJoining, setJoiningDate] = useState<string>("");
    const [dateOfBirth, setBirthDate] = useState<string>("");
    const [loading, setLoading] = useState(false);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setInputValues((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleJoiningDate = (event: React.ChangeEvent<HTMLInputElement>) => {
        setJoiningDate(event.target.value);
    };

    const handleBirthDate = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBirthDate(event.target.value);
    };

    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = { ...inputValues, dateOfBirth, dateOfJoining };
        const axiosConfig = {
            method: id ? "put" : "post",
            url: id ? `/members/update/${id}` : "/members",
            body: form,
            successCallBack: ({ message }: { message: string }) => {
                toast.success(message);
                navigateTo("/members");
            },
            setLoading,
        };
        useAxios(axiosConfig);
    };

    const cancelForm = () => {
        navigateTo("/members");
    };

    const getMemberDetails = () => {
        if (id) {
            useAxios({
                method: "get",
                url: `/members/${id}`,
                successCallBack: ({ data } : { data: User }) => {
                    setInputValues((prev) => ({
                        ...prev,
                        ...data,
                    }));
                    setJoiningDate(data.dateOfJoining ?? "");
                    setBirthDate(data.dateOfBirth ?? "");
                },
            });
        }
    };

    useEffect(() => {
        getMemberDetails();
    }, []);

    return (
        <div className="p-6 flex flex-col gap-3">
            <Card>
                <CardHeader>
                    <CardTitle>Add Coach</CardTitle>
                </CardHeader>
                <CardContent>
                    <form className="space-y-6" onSubmit={submitForm}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <Label htmlFor="firstName">Name</Label>
                                <Input
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={inputValues.validity}
                                    onChange={handleJoiningDate}
                                    required
                                />
                            </div>

                            <div>
                                <Label htmlFor="validity">Contact</Label>
                                <Input
                                    id="validity"
                                    name="validity"
                                    type="text"
                                    value={inputValues.validity}
                                    onChange={handleJoiningDate}
                                    required
                                />
                            </div>

                            <div>
                                <Label htmlFor="amount">Date of Join</Label>
                                <Input
                                    id="status"
                                    name="status"
                                    type="date"
                                    value={inputValues.status}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="flex justify-end space-x-4">
                            <Button type="submit" className="bg-blue-500 text-white">
                                {loading ? "Loading..." : id ? "Update" : "Save"}
                            </Button>
                            <Button type="button" variant="outline" >
                                Cancel
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
             <DataTable data={clients} columns={headers} />
        </div>
    );
}

export default NewMemberForm;
