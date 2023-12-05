import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards,HiUsers ,HiCash} from 'react-icons/hi';

const sidebarItems = [
  { href: '#', icon: HiChartPie, text: 'Dashboard' },
  { href: '#', icon: HiUsers, text: 'Members' },
  { href: '#', icon: HiCash, text: 'Billing' },
];

export default function CTAButton() {
  return (
    <Sidebar className='h-[100vh]'>  
      <h2 className='text-black font-bold text-3xl px-2 text-center p-4'>Vitalz</h2>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          {sidebarItems.map((item, index) => (
            <Sidebar.Item key={index} href={item.href} icon={item.icon}>
              <p>{item.text}</p>
            </Sidebar.Item>
          ))}
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
