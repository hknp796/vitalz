import { useState, useEffect } from "react";
import moment from "moment";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";

interface User {
  firstName: string;
  lastName: string;
  gender: string;
  age: string;
  contact: string;
  dateOfJoining?: string;
  dateOfBirth?: string;
  validity?: string;
  amount?: string;
  plan?: string;
  price?: string;
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
  });
  const [dateOfJoining, setJoiningDate] = useState("");
  const [dateOfBirth, setBirthDate] = useState("");
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
      successCallBack: ({ message } : { message: string }) => {
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
        successCallBack: ({ data }) => {
          setInputValues((prev) => ({
            ...prev,
            ...data,
          }));
          setJoiningDate(data.dateOfJoining);
          setBirthDate(data.dateOfBirth);
        },
      });
    }
  };

  useEffect(() => {
    getMemberDetails();
  }, []);

  return (
    <div className="p-6">
      <Card>
        <CardHeader>
          <CardTitle>Become a Member</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6" onSubmit={submitForm}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={inputValues.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div>
                <Label htmlFor="dateOfJoining">Date of Joining</Label>
                <Input
                  id="dateOfJoining"
                  name="dateOfJoining"
                  type="date"
                  value={dateOfJoining}
                  onChange={handleJoiningDate}
                  required
                />
              </div>

              <div>
                <Label htmlFor="age">Age</Label>
                <Input
                  id="age"
                  name="age"
                  type="number"
                  value={inputValues.age}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div>
                <Label htmlFor="contact">Contact</Label>
                <Input
                  id="contact"
                  name="contact"
                  type="text"
                  value={inputValues.contact}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div>
                <Label htmlFor="plan">Plan</Label>
                <Input
                  id="plan"
                  name="plan"
                  type="text"
                  value={inputValues.plan}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div>
                <Label htmlFor="price">Price</Label>
                <Input
                  id="price"
                  name="price"
                  type="text"
                  value={inputValues.price}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="flex justify-end space-x-4">
              <Button type="submit" className="bg-blue-500 text-white">
                {loading ? "Loading..." : id ? "Update" : "Avail Membership"}
              </Button>
              <Button type="button" variant="outline" >
                Cancel
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default NewMemberForm;
