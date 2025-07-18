import { Sidebar, Modal, Button } from "flowbite-react";
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import {  isNavbarOpen } from '../redux/counter'

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
import { HiMenu } from "react-icons/hi";
import { useNavigate, useLocation } from "react-router-dom";

const sidebarItems = [
  { link: "/", icon: HiChartPie, text: "Dashboard" },
  { link: "/admin-profiles", icon: HiHome, text: "Admin Profile" },
  { link: "/registration", icon: HiPencilAlt, text: "Registration" },
  { link: "/plan", icon: ImBook, text: "Plan" },
  { link: "/payment", icon: HiCreditCard, text: "Payment" },
  { link: "/inventory", icon: MdInventory, text: "Inventory" },
  { link: "/members", icon: HiUsers, text: "View Members" },
  { link: "/coaches", icon: FaDumbbell, text: "Coaches" },
  { link: "/report", icon: RiGitRepositoryFill, text: "Report" },
];

export default function CTAButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // Get the current route
  const isSidebarOpen = useSelector((state: any) => state.counter.value)
  const dispatch = useDispatch()


  const handleNavigation = (path :string)  => {
    dispatch(isNavbarOpen(false))
    navigate(path);
  };

  const toggleSidebar = () =>  {
    dispatch(isNavbarOpen(false))
  }
  ;
  const toggleModal = () => setIsModalOpen((prev) => !prev);

  return (
    <div className="relative">
      <Sidebar
        className={`fixed md:relative top-0 left-0 z-50 h-full w-64 bg-white shadow-lg transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:block`}
      >
        <Sidebar.Items className="flex flex-col h-[calc(100%-70px)] justify-between">
          <Sidebar.ItemGroup>
            {sidebarItems.map(({ link, icon: Icon, text }, index) => {
              const isActive = location.pathname === link;

              return (
                <Sidebar.Item
                  key={index}
                  className={`cursor-pointer ${
                    isActive
                      ? "bg-blue-500 text-white hover:bg-blue-500"
                      : "text-gray-700 "
                  }`}
                  onClick={() => handleNavigation(link)}
                >
                  <div className="flex items-center gap-2">
                    <Icon
                      className={`text-lg ${
                        isActive ? "text-white" : "text-gray-700"
                      }`}
                    />
                    {text}
                  </div>
                </Sidebar.Item>
              );
            })}
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

      {/* Modal */}
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

      {/* Overlay for Sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
}
