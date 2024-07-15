import { Sidebar, Modal, Button } from "flowbite-react";
import { useState } from "react";
import {
  HiChartPie,
  HiUsers,
  HiCash,
  HiOutlineExclamationCircle,
} from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const sidebarItems = [
  { link: "/dashboard", icon: HiChartPie, text: "Dashboard" },
  { link: "/members", icon: HiUsers, text: "Members" },
  { link: "/billing", icon: HiCash, text: "Billing" },
  { link: "/inventories", icon: HiCash, text: "Inventory" },
];

export default function CTAButton() {
  const [openModal, setOpenModal] = useState(false);
  const navigateTo = useNavigate();

  const handleNavigation = (path) => {
    navigateTo(path);
  };

  const handleLogout = () => {
    setOpenModal(true);
  };
  return (
    <div>
      <Sidebar className="h-[100vh]">
        <h2 className="text-black font-bold text-3xl px-2 text-center p-4">
          Vitalz
        </h2>
        <Sidebar.Items className="flex flex-col h-[calc(100%-70px)]  justify-between">
          <Sidebar.ItemGroup>
            {sidebarItems.map((item, index) => (
              <Sidebar.Item
                className="cursor-pointer"
                key={index}
                icon={item.icon}
                onClick={() => handleNavigation(item.link)}
              >
                <p>{item.text}</p>
              </Sidebar.Item>
            ))}
          </Sidebar.ItemGroup>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={HiChartPie} onClick={handleLogout}>
              Logout
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>

      <Modal
        show={openModal}
        size="md"
        onClose={() => setOpenModal(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to Logout?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={() => navigateTo("/login")}>
                {"Yes, I'm sure"}
              </Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
