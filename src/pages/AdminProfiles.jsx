import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { RxAvatar } from "react-icons/rx";
import { FaRegEdit } from "react-icons/fa";
const AdminPage = () => {
  return (
    <div className="p-3  min-h-screen">
      <div className=" mx-auto grid gap-6 lg:grid-cols-3">
        {/* Profile Card */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Update Profile</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-center">
              <div className="rounded-full bg-gray-200 h-24 w-24 flex items-center justify-center text-black text-4xl font-bold">
                <RxAvatar />
              </div>
            </div>
            <div>
              <Button className='bg-primary text-black flex justify-center w-full'>
                <FaRegEdit />
                <span>
                  Update Profile
                </span>
              </Button>
            </div>
            <div className="flex flex-col gap-4">
              <CardDescription className="flex justify-between">
                <strong>Username:</strong> <span>
                   JuanDelaCruz
                  </span>
              </CardDescription>
              <CardDescription className="flex justify-between">
                <strong>Contact no.:</strong> <span>
                  09123456789
                  </span> 
              </CardDescription>
              <CardDescription className="flex justify-between">
                <strong>Email Address:</strong> <span>
                   juan.delacruz@gmail.com
                  </span>
              </CardDescription>
            </div>
          </CardContent>
          <div className="p-4">
            <Button className="w-full bg-blue-500">
              Register New Admin Account
            </Button>
          </div>
        </Card>

        {/* Update Details Form */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Update Profile Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <label className="block">
                <span className="text-gray-700">Username</span>
                <Input placeholder="Enter username" />
              </label>
              <label className="block">
                <span className="text-gray-700">Contact No.</span>
                <Input placeholder="Enter contact number" />
              </label>
              <label className="block">
                <span className="text-gray-700">Email Address</span>
                <Input placeholder="Enter email address" />
              </label>
            </div>
          </CardContent>
          <div className="p-4 flex justify-end gap-3">
            <Button className="bg-blue-500 text-white">Save</Button>
            <Button variant="outline" className="text-blue-900 border-blue-900">
              Cancel
            </Button>
          </div>
        </Card>

        {/* Change Password Form */}
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Password</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <label className="block">
                <span className="text-gray-700">Current Password</span>
                <Input placeholder="Enter current password" type="password" />
              </label>
              <label className="block">
                <span className="text-gray-700">New Password</span>
                <Input placeholder="Enter new password" type="password" />
              </label>
              <label className="block">
                <span className="text-gray-700">Re-type Password</span>
                <Input placeholder="Re-type new password" type="password" />
              </label>
            </div>
          </CardContent>
          <div className="p-4 flex justify-end gap-3">
            <Button className="bg-blue-500  text-white">Change</Button>
            <Button variant="outline" className="text-blue-900 border-blue-900">
              Clear
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AdminPage;
