import React, { useEffect, useState } from "react";
import { Card, Label, TextInput, Checkbox, Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import useAxios from "../hooks/useAxios";
function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    useAxios({
      method: "post",
      url: `/login`,
      body: {
        email: email,
        password: password,
      },
      successCallBack: ({ message }) => {
        useSaveToken(null);
        // navigate("/");
        toast.success(message);
      },
    });
  };
  return (
    <Card className="w-[30%]">
      <form className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" value="Your email" />
          </div>
          <TextInput
            type="email"
            name="email"
            placeholder="name@flowbite.com"
            required
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="Your password" />
          </div>
          <TextInput
            type="password"
            required
            name="password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Button isProcessing={false} type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </form>
    </Card>
  );
}

export default Login;
