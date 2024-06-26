import { useState } from "react";
import useAxios from "../hooks/useAxios";

import { Label, TextInput, Select, Button } from "flowbite-react"; // Import necessary components from Flowbite
import { Datepicker } from "flowbite-react";
import { Spinner } from "flowbite-react";
import { toast } from "react-toastify";

function NewMemberForm() {
  const [inputValues, setInputValues] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    age: "",
    contact: "",
  });
  const [dateOfJoining, setJoiningDate] = useState("");
  const [dateOfBirth, setBirthDate] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const handleJoiningDate = (date) => {
    setJoiningDate(date);
  };

  const handleBirthDate = (date) => {
    setBirthDate(date);
  };
  const submitForm = () => {
    let form = { ...inputValues, dateOfBirth, dateOfJoining };

    useAxios({
      method: "post",
      url: `/members`,
      body: form,
      successCallBack: ({ message }) => {
        console.log({ message });
        // useSaveToken(null)
        toast.success(message);
      },
      setLoading,
    });
  };

  return (
    <div className="container flex flex-col  mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">New Member Creation</h1>
      <form className="flex flex-col gap-4 " onSubmit={submitForm}>
        <div className="flex gap-4">
          <div className="flex-1">
            <div className="mb-2 block">
              <Label htmlFor="firstname" value="First Name" />
            </div>
            <TextInput
              id="firstname"
              type="text"
              placeholder=""
              required
              onChange={handleInputChange}
              name="firstName"
            />
          </div>
          <div className="flex-1">
            <div className="mb-2 block">
              <Label htmlFor="lname" value="Last Name" />
            </div>
            <TextInput
              id="lname"
              type="text"
              required
              onChange={handleInputChange}
              name="lastName"
            />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex-1">
            <div className="mb-2 block">
              <Label htmlFor="age" value="Age" />
            </div>
            <TextInput
              id="age"
              type="text"
              required
              onChange={handleInputChange}
              name="age"
            />
          </div>
          <div className="flex-1">
            <div className="mb-2 block">
              <Label htmlFor="contact" value="Contact" />
            </div>
            <TextInput
              id="contact"
              type="text"
              required
              onChange={handleInputChange}
              name="contact"
            />
          </div>
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="gender" value="Gender" />
          </div>
          <Select
            id="gender"
            required
            onChange={handleInputChange}
            name="gender"
          >
            <option value="">Choose one</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </Select>
        </div>
        <div className="flex gap-4">
          <div className="flex-1">
            <div className="mb-2 block">
              <Label htmlFor="joindate" value="Date of Joining" />
            </div>
            <Datepicker
              onSelectedDateChanged={handleJoiningDate}
              name="dateOfJoining"
            />
          </div>
          <div className="flex-1">
            <div className="mb-2 block">
              <Label htmlFor="dob" value="Date of Birth" />
            </div>
            <Datepicker
              onSelectedDateChanged={handleBirthDate}
              name="dateOfBirth"
            />
          </div>
        </div>
        <div className="flex justify-end">
          <Button onClick={submitForm} className="w-[110px]">
            {loading ? (
              <Spinner aria-label="Default status example" />
            ) : (
              "Submit"
            )}{" "}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default NewMemberForm;
