import { Sidebar } from 'flowbite-react';
import { HiChartPie,HiUsers ,HiCash,} from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

const sidebarItems = [
  { link: '/', icon: HiChartPie, text: 'Dashboard' },
  { link: '/members', icon: HiUsers, text: 'Members' },
  { link: '/billing', icon: HiCash, text: 'Billing' },
  { link: '/inventories', icon: HiCash, text: 'Inventory' },
];


export default function CTAButton() {
  const navigateTo = useNavigate();

  const handleNavigation = (path) => {
    navigateTo(path);
  };
  return (
    <Sidebar className='h-[100vh]'>  
      <h2 className='text-black font-bold text-3xl px-2 text-center p-4'>Vitalz</h2>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          {sidebarItems.map((item, index) => (
            <Sidebar.Item className='cursor-pointer' key={index}  icon={item.icon} onClick={() => handleNavigation(item.link)}>
              <p>{item.text}</p>
            </Sidebar.Item>
          ))}
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
