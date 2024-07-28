import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { IoIosNotifications } from "react-icons/io";
export default function Component() {
  return (
    <Navbar className="bg-cyan-700 ">
      <div className="flex justify-between w-full">
        <h2 className="text-black font-bold text-3xl text-center bg-cyan-700">
          Vitalz
        </h2>
        <div className="flex gap-4 items-center w-[100%] justify-end">
          <div>
            <IoIosNotifications />
          </div>
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        </div>
      </div>
    </Navbar>
  );
}
