import React, { useState, useEffect } from 'react'
import { BiMenu } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import HeaderContent from './HeaderContent';
import WorkHeaderContent from './WorkHeaderContent';
import { client } from "../client.js";



const Header = () => {
    
    const [data, setData] = useState(null);
    const [nameData, setNameData] = useState(null);

    useEffect(() => {
        client.fetch(`*[_type == "work"]`).then((data) => setData(data));
        client.fetch(`*[_type == "profile"]`).then((data) => setNameData(data));
    },[])

    const [toggle, setToggle] = useState(false);
    const [workToggle, setWorkToggle] = useState(false);
    const menuBtnClass = 'w-12 h-12 drop-shadow-lg rounded-full fixed hover:cursor-pointer z-40 transform duration-500'
    const menuClass = 'w-full md:w-72 h-screen bg-cOne drop-shadow-lg fixed z-30 transform duration-500'
    const workMenu = 'w-full fixed z-40 transform duration-500'

    const handleToggle = () => {
        if(workToggle)
        setWorkToggle(!workToggle);
        setToggle(!toggle);
    }

    const handleWorkToggle = () => {
        setWorkToggle(!workToggle);
    }

  return (
    <div className='flex justify-between p-2 mb-3 z-20'>
        <a href='/'>
            <div className='flex items-center z-20'>
                <div>
                    <h1 className='text-4xl md:text-6xl text-bold text-cOne title'>Portfolio</h1>
                    <h1 className='text-3xl md:text-4xl text-cThree text-semibold '>{nameData?.map((prof, index) => index === 0 ? prof.name : '')}</h1>
                </div>
            </div>
        </a>


        <div className={ toggle ? menuBtnClass + ' right-4 bg-white md:right-56' : menuBtnClass + ' bg-cOne right-4' } onClick={handleToggle}>
            <div className='flex justify-center items-center h-full'>
                { toggle ? <IoClose color='facc15' size={30} /> : <BiMenu color='ffffff' size={30}/> }
            </div>
        </div>

        <div className={ toggle ? menuClass + ' top-0 right-0' : menuClass + ' top-0 -right-full md:-right-96'}>
            <div className='m-5 mt-20 flex flex-col h-3/4 overflow-scroll scrollbar-hide'>
                <a href='#about'><HeaderContent title={'About'} desc={''} handleToggle={handleToggle} /></a>
                <a href='#contact'><HeaderContent title={'Contact'} desc={''} handleToggle={handleToggle} /></a>
                <HeaderContent title={'Works'} desc={''} handleToggle={handleToggle} handleWorkToggle={handleWorkToggle} />
                <div className='relative w-full'>
                    <div className={workToggle ? workMenu + ' text-white right-0' : workMenu + ' text-cOne -right-full'}>
                        {data?.map((work, index) => <WorkHeaderContent index={index} work={work} handleToggle={handleToggle} /> )}
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Header