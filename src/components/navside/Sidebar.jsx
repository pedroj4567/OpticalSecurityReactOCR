
'use client';

import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser } from 'react-icons/hi';
import { Link, useNavigate } from 'react-router-dom';
import useSession from '../../utils/hooks/useSession';
import { useEffect, useRef } from 'react';

function SidebarComponent() {

  const navigate = useNavigate();
  const { cleanStorage } = useSession();
  const ref = useRef()

  useEffect(() => {
    console.log(ref)
  }, [ref])
  
  const handlerSession = () =>{
    cleanStorage();
    navigate('/')
  }

  return (
    <Sidebar className='h-screen bg-[#522b5b] dark:bg-[#522b5b]' aria-label="Sidebar  with multi-level dropdown example">
      <Sidebar.Items className='h-full flex flex-col justify-between'>
        <Sidebar.ItemGroup>
            <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={HiChartPie}>
                Optical
            </Sidebar.Item>
            </Sidebar.ItemGroup>

            <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={HiInbox}>
              <Link to={"/admin"}>Home</Link>
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiUser}>
              <Link to={"/admin/visits"}>Visita</Link>
            </Sidebar.Item>
            <Sidebar.Collapse icon={HiShoppingBag} label="Community">
                <Sidebar.Item href="#">
                  <Link to={"/admin/community/family"}>Family</Link>
                </Sidebar.Item>
                <Sidebar.Item href="#">
                  <Link to={"/admin/community/people"}>People</Link>
                </Sidebar.Item>
            </Sidebar.Collapse>
            
            </Sidebar.ItemGroup>
        </Sidebar.ItemGroup>
        

        <Sidebar.ItemGroup>
          <Sidebar.Item href="#"  icon={HiTable}>
            <button onClick={handlerSession}>
                Log out
            </button>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

export default SidebarComponent
