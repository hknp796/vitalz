import { Sidebar } from "flowbite-react";
import { HiChartPie, HiUsers, HiCash } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const sidebarItems = [
  { link: "/dashboard", icon: HiChartPie, text: "Dashboard" },
  { link: "/members", icon: HiUsers, text: "Members" },
  { link: "/billing", icon: HiCash, text: "Billing" },
  { link: "/inventories", icon: HiCash, text: "Inventory" },
];

export default function CTAButton() {
  const navigateTo = useNavigate();

  const handleNavigation = (path) => {
    navigateTo(path);
  };

  const handleLogout = () => {
    navigateTo("/login");
  };
  return (
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
  );
}
