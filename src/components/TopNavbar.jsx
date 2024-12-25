import { Avatar, Dropdown, Navbar, Popover } from "flowbite-react";
import { IoIosNotifications } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function Component() {
  const navigateTo = useNavigate();

  return (
    <Navbar className="bg-gray-50  ">
      <div className="flex justify-between w-full">
        <h2
          onClick={() => navigateTo("/")}
          className="font-bold text-3xl text-center bg-gray-50 text-gray-900 "
        >
          Vitalz
        </h2>
        <div className="flex gap-4 items-center w-[100%] justify-end">
          <Popover
            aria-labelledby="default-popover"
            content={
              <div className="w-64 text-sm text-gray-500 dark:text-gray-400">
                <div className="border-b border-gray-200 bg-gray-100 px-3 py-2 dark:border-gray-600 dark:bg-gray-700">
                  <h3
                    id="default-popover"
                    className="font-semibold text-gray-900 dark:text-white"
                  >
                    Notification
                  </h3>
                </div>
                <div className="px-3 py-2">
                  <p>list</p>
                </div>
              </div>
            }
          >
            <div>
              <IoIosNotifications />
            </div>
          </Popover>

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
                name@gmail.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        </div>
      </div>
    </Navbar>
  );
}
