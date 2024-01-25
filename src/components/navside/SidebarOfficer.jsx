
'use client';

import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser } from 'react-icons/hi';

function SidebarComponent() {
  return (
    <Sidebar className='h-screen' aria-label="Sidebar with multi-level dropdown example">
      <Sidebar.Items className='h-full flex flex-col justify-between'>
        <Sidebar.ItemGroup>
            <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={HiChartPie}>
                Optical
            </Sidebar.Item>
            </Sidebar.ItemGroup>

            <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={HiInbox}>
                Home
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiUser}>
                Visita
            </Sidebar.Item>
            <Sidebar.Collapse icon={HiShoppingBag} label="Community">
                <Sidebar.Item href="#">Family</Sidebar.Item>
                <Sidebar.Item href="#">People</Sidebar.Item>
            </Sidebar.Collapse>
            
            </Sidebar.ItemGroup>
        </Sidebar.ItemGroup>
        

        <Sidebar.ItemGroup>
        <Sidebar.Item href="#" icon={HiArrowSmRight}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiTable}>
            Sign Up
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

export default SidebarComponent
