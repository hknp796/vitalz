import { Sidebar, Modal, Button } from "flowbite-react";
import { useState } from "react";
import {
  HiChartPie,
  HiUsers,
  HiOutlineExclamationCircle,
  HiHome,
  HiPencilAlt,
  HiCreditCard,
  HiOutlineLogout,
} from "react-icons/hi";
import { MdInventory } from "react-icons/md";
import { FaDumbbell } from "react-icons/fa6";
import { RiGitRepositoryFill } from "react-icons/ri";
import { ImBook } from "react-icons/im";
import { useNavigate } from "react-router-dom";

const sidebarItems = [
  { link: "/", icon: HiChartPie, text: "Dashboard" },
  { link: "/inventories", icon: HiHome, text: "Admin Profile" },
  { link: "/inventories", icon: HiPencilAlt, text: "Registration" },
  { link: "/inventories", icon: ImBook, text: "Plan" },
  { link: "/billing", icon: HiCreditCard, text: "Payment" },
  { link: "/inventories", icon: MdInventory, text: "Inventory" },
  { link: "/members", icon: HiUsers, text: "View Members" },
  { link: "/inventories", icon: FaDumbbell, text: "Coaches" },
  { link: "/inventories", icon: RiGitRepositoryFill, text: "Report" },
];

export default function CTAButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path) => navigate(path);

  const toggleModal = () => setIsModalOpen((prev) => !prev);

  return (
    <div>
      <Sidebar className="h-screen">
        <Sidebar.Items className="flex flex-col h-[calc(100%-70px)] justify-between">
          <Sidebar.ItemGroup>
            {sidebarItems.map(({ link, icon: Icon, text }, index) => (
              <Sidebar.Item
                key={index}
                icon={Icon}
                className="cursor-pointer"
                onClick={() => handleNavigation(link)}
              >
                {text}
              </Sidebar.Item>
            ))}
          </Sidebar.ItemGroup>
          <Sidebar.ItemGroup>
            <Sidebar.Item
              icon={HiOutlineLogout}
              className="cursor-pointer"
              onClick={toggleModal}
            >
              Logout
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>

      <Modal show={isModalOpen} size="md" onClose={toggleModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to Logout?
            </h3>
            <div className="flex justify-center gap-4">
              <Button
                color="failure"
                onClick={() => handleNavigation("/login")}
              >
                Yes, I'm sure
              </Button>
              <Button color="gray" onClick={toggleModal}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
