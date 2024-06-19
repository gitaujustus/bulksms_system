'use client'
import React from 'react'
import { useState, useEffect, useRef, useCallback } from 'react';
import { FaUserCircle } from "react-icons/fa";
import { TbReload } from "react-icons/tb";
import { MdDashboard } from "react-icons/md";
import { IoMdArrowDropleft } from "react-icons/io";
import { MdOutlineArrowDropUp } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";
import { MdAccountBalanceWallet } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Navbar() {
    
    const pathname= usePathname()
    const [ showNav, setShowNav ] = useState(false)
    const [showSMSDropdown, setShowSMSDropdown] = useState(false);
    const [showContactsDropdown, setShowContactsDropdown] = useState(false);
    const [showBuySMSDropdown, setShowBuySMSDropdown] = useState(false);
    const [showSenderIDsDropdown, setShowSenderIDsDropdown] = useState(false);
    const [showReportsDropdown, setShowReportsDropdown] = useState(false);

    const showNavBar=()=>{
        setShowNav(!showNav)
    }

    const toggleSMSDropdown = () => {
        setShowSMSDropdown(!showSMSDropdown);
      };
    
      const toggleContactsDropdown = () => {
        setShowContactsDropdown(!showContactsDropdown);
      };
    
      const toggleBuySMSDropdown = () => {
        setShowBuySMSDropdown(!showBuySMSDropdown);
      };
    
      const toggleSenderIDsDropdown = () => {
        setShowSenderIDsDropdown(!showSenderIDsDropdown);
      };
    
      const toggleReportsDropdown = () => {
        setShowReportsDropdown(!showReportsDropdown);
      };
      


     // node initialization
     const menuRef = useRef();

     // Listens to clicks and scrolls outside, or navlink click the menu to close it
     const handleOutsideClick = useCallback(
        (e) => {
          if (showNav && !menuRef.current.contains(e.target)) {
            setShowNav(false);
          }
        },
        [showNav, menuRef]
      );
      
      const handleScroll = useCallback(() => {
        setShowNav(false);
      }, []);
 
     useEffect(() => {
         if (showNav) {
             document.addEventListener("mousedown", handleOutsideClick);
             window.addEventListener("scroll", handleScroll);
         } else {
             document.removeEventListener("mousedown", handleOutsideClick);
             window.removeEventListener("scroll", handleScroll);
         }
 
         return () => {
             document.removeEventListener("mousedown", handleOutsideClick);
             window.removeEventListener("scroll", handleScroll);
         };
     }, [showNav, handleOutsideClick, handleScroll]);

  return (
    <div className='md:static absolute z-10' ref={menuRef}>
          <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" onClick={showNavBar} aria-controls="logo-sidebar" type="button" className={`${showNav ? "hidden" : "fixed top-0"} z-10 re items-center  p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200`}>
            <span className="sr-only">Open sidebar</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
            </svg>
            </button>

            <aside id="logo-sidebar" className={`fixed top-0 left-0 z-40 w-80  h-screen transition-transform ${showNav ? 'block' : 'hidden'} md:block`} aria-label="Sidebar">
            <div className="h-full px-3 py-4 overflow-y-auto bg-[#26364E] ">
                <div className="flex justify-between
                 gap-2 items-center ps-2.5 mb-8 ">
                    <div className='flex'>
                        <FaUserCircle className='text-white mr-2' size={32} />
                            <div className='text-white text-left'>
                                    <span className="self-center text-2xl font-semibold whitespace-nowrap">Client Name</span>
                                    <p>CLIENT</p>
                                    <span className='flex items-center  gap-2'>1,306.00 units
                                    <TbReload className='text-white' size={16}/>
                                    </span>
                            </div>
                    </div>
                    <IoMdArrowDropleft size={32} color='white' />
                </div>

                <ul className="space-y-5 font-medium navlinks">
                    <li onClick={showNavBar}>
                        <Link href='/' className={`flex items-center p-2 text-gray-900 rounded-lg ${pathname === "/" ? "bg-[#80343E]" : ""} hover:bg-[#3c567e] group`}>
                            <MdDashboard size={32} color='white'/>
                            <span className="ms-3 text-md md:text-lg text-white">Dashboard</span>
                        </Link>
                    </li>

                    <li onClick={showNavBar} className='flex flex-col items-center'>
                        <Link href='/sms&compagings' onClick={toggleSMSDropdown} className={`flex w-full justify-between items-center p-2 text-gray-900 rounded-lg ${pathname === "/sms&compagings" ? "bg-[#80343E]" : ""}  hover:bg-[#3c567e] group`}>
                            <div className='flex'>
                            <svg width="37" height="26" viewBox="0 0 37 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M29.6 14.625V11.375H37V14.625H29.6ZM31.82 26L25.9 22.1L28.12 19.5L34.04 23.4L31.82 26ZM28.12 6.5L25.9 3.9L31.82 0L34.04 2.6L28.12 6.5ZM5.55 24.375V17.875H3.7C2.6825 17.875 1.81177 17.557 1.0878 16.9211C0.363833 16.2852 0.00123333 15.5198 0 14.625V11.375C0 10.4812 0.3626 9.71642 1.0878 9.0805C1.813 8.44458 2.68373 8.12608 3.7 8.125H11.1L20.35 3.25V22.75L11.1 17.875H9.25V24.375H5.55ZM22.2 18.4438V7.55625C23.0325 8.20625 23.7034 8.99871 24.2128 9.93363C24.7222 10.8685 24.9762 11.8907 24.975 13C24.9738 14.1093 24.7191 15.132 24.211 16.068C23.7028 17.004 23.0325 17.7959 22.2 18.4438Z" fill="white"/>
                            </svg>

                                <span className="ms-3 text-md md:text-lg text-white">SMS & Campaigns</span>
                            </div>
                            <MdOutlineArrowDropUp  color='white' size={32} className={`ml-2 ${showSMSDropdown ? 'rotate-0': "-rotate-90" } color='white' `}/>
                        </Link>
                        {showSMSDropdown && (
                             <ul className='text-white font-oswald w-48  text-left mt-2 '>
                                <li  onClick={showNavBar} className={` ${pathname === "/sms&compagings" ? "bg-[#80343E]" : ""} hover:bg-[#3c567e] p-2 rounded-md cursor-pointer`}>
                                    <Link href="/sms&compagings">Send SMS</Link>
                                </li>
                                
                                <li onClick={showNavBar} className={` ${pathname === "/sms&compagings/sendfromfile" ? "bg-[#80343E]" : ""} hover:bg-[#3c567e] p-2 rounded-md cursor-pointer`} >
                                    <Link href="/sms&compagings/sendfromfile">Send from file</Link>
                                </li>
                                
                                <li onClick={showNavBar} className={` ${pathname === "/sms&compagings/smstemplates" ? "bg-[#80343E]" : ""} hover:bg-[#3c567e] p-2 rounded-md cursor-pointer`} >
                                    <Link href="/sms&compagings/smstemplates">SMS templates</Link>
                                </li>
                                
                                <li onClick={showNavBar} className={` ${pathname === "/sms&compagings/campaigns" ? "bg-[#80343E]" : ""} hover:bg-[#3c567e] p-2 rounded-md cursor-pointer`} >
                                    <Link href="/sms&compagings/campaigns">Campaigns</Link>
                                </li>
                                
                                <li onClick={showNavBar} className={` ${pathname === "/sms&compagings/campaignmessages" ? "bg-[#80343E]" : ""} hover:bg-[#3c567e] p-2 rounded-md cursor-pointer`} >
                                    <Link href="/sms&compagings/campaignmessages">Campaign&nbsp;messages</Link>
                                </li>
                                
                                <li className={` ${pathname === "/sms&compagings/sentmessages" ? "bg-[#80343E]" : ""} hover:bg-[#3c567e] p-2 rounded-md cursor-pointer`} >
                                    <Link href="/sms&compagings/sentmessages">Sent messages</Link>
                                </li>
                                
                                <li className={` ${pathname === "/sms&compagings/incomingmessages" ? "bg-[#80343E]" : ""} hover:bg-[#3c567e] p-2 rounded-md cursor-pointer`} >
                                    <Link href="/sms&compagings/incomingmessages">Incoming&nbsp;messages</Link>
                                </li>
                         </ul>

                        )}
                    </li>

                    <li onClick={showNavBar} className='flex flex-col items-center'>
                        <Link href='/contact&groups' onClick={toggleContactsDropdown} className={`flex w-full justify-between items-center p-2 text-gray-900 rounded-lg ${pathname === "/contact&groups" ? "bg-[#80343E]" : ""} hover:bg-[#3c567e] group`}>
                            <div className='flex'>
                                <RiContactsFill size={32} color='white'/>   
                                <span className="ms-3 text-md md:text-lg text-white">Contacts & Groups</span>
                            </div>
                            <MdOutlineArrowDropUp  size={32} className={`ml-2 ${showContactsDropdown ? 'rotate-0': "-rotate-90" } color='white' `} color='white'/>
                        </Link>
                        {showContactsDropdown && (
                        <ul className='text-white font-oswald  w-48  text-left mt-2'>
                            <li onClick={showNavBar} className={`hover:bg-[#3c567e] ${pathname === "/contact&groups" ? "bg-[#80343E]" : ""} p-2 rounded-md cursor-pointer`}>
                                <Link href="/contact&groups">Contact groups</Link>
                            </li>
                            <li onClick={showNavBar} className={`hover:bg-[#3c567e] ${pathname === "/contact&groups/contacts" ? "bg-[#80343E]" : ""} p-2 rounded-md cursor-pointer`}>
                                <Link href={"/contact&groups/contacts"}>Contacts</Link>
                            </li>
                        </ul>
                        )}
                    </li>

                   
                    <li className='flex flex-col items-center'>
                        <Link href='/buysms/buynow' onClick={toggleBuySMSDropdown} className={`flex w-full justify-between items-center p-2 text-gray-900 rounded-lg ${pathname === "/buysms/buynow" ? "bg-[#80343E]" : ""}  hover:bg-[#3c567e] group `}>
                           <div className='flex'>
                                <MdAccountBalanceWallet size={32} color='white'/>
                                <span className="ms-3 text-md md:text-lg text-white">Buy SMS</span>
                           </div>
                            <MdOutlineArrowDropUp  size={32} className={`ml-2 ${showBuySMSDropdown ? 'rotate-0': "-rotate-90" } `} color='white'/>
                        </Link>
                       {showBuySMSDropdown && (
                        <ul className='text-white  font-oswald  w-48  text-left mt-2'>
                        <li onClick={showNavBar} className={`hover:bg-[#3c567e] ${pathname === "/buysms/buynow" ? "bg-[#80343E]" : ""} p-2 rounded-md cursor-pointer`}><Link href={"/buysms/buynow"}
                        >Buy now</Link></li>
                        <li onClick={showNavBar} className={`hover:bg-[#3c567e] ${pathname === "/buysms/alltransactions" ? "bg-[#80343E]" : ""} p-2 rounded-md cursor-pointer`}><Link href={'/buysms/alltransactions'}>All transactions</Link></li>
                    </ul>
                       )}
                    </li>

                    <li className='flex flex-col items-center'>
                        <Link href='/senderids/allsenderids' onClick={toggleSenderIDsDropdown} className={`flex w-full justify-between items-center p-2 text-gray-900 rounded-lg ${pathname === "/senderids/allsenderids" ? "bg-[#80343E]" : ""}  hover:bg-[#3c567e] group`}>
                           <div className='flex'>
                           <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_11_29)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M26.5871 0.295109C26.7243 0.422274 26.822 0.586957 26.8683 0.769126C26.9147 0.951295 26.9076 1.1431 26.8481 1.32121L18.3345 26.9369C18.2743 27.1181 18.1623 27.2773 18.0128 27.3943C17.8633 27.5114 17.6828 27.5812 17.494 27.5948C17.3053 27.6085 17.1167 27.5655 16.952 27.4712C16.7873 27.3769 16.6537 27.2355 16.5682 27.0648L12.176 18.3173L17.8213 12.0991C18.0637 11.8126 18.1864 11.4421 18.1638 11.0656C18.1411 10.6892 17.9747 10.3362 17.6998 10.081C17.4248 9.82588 17.0626 9.68847 16.6897 9.69776C16.3167 9.70704 15.9619 9.8623 15.7002 10.1308L10.0528 16.3472L1.05582 12.6721C0.879744 12.6006 0.728512 12.4781 0.621208 12.3199C0.513904 12.1617 0.455337 11.975 0.452899 11.7833C0.45046 11.5916 0.50426 11.4035 0.607508 11.2428C0.710756 11.082 0.858824 10.9559 1.03302 10.8802L25.5553 0.119719C25.7256 0.0449894 25.9137 0.0217837 26.0968 0.0529135C26.2799 0.0840433 26.4502 0.168173 26.5871 0.295109Z" fill="white"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_11_29">
                            <rect width="26.8794" height="27.1693" fill="white" transform="translate(0 1.14795) rotate(-2.44776)"/>
                            </clipPath>
                            </defs>
                            </svg>
                                <span className="ms-3 text-md md:text-lg text-white">Sender IDs</span>
                           </div>
                            <MdOutlineArrowDropUp size={32}  className={`ml-2 ${showSenderIDsDropdown ? 'rotate-0': "-rotate-90" } `} color='white'/>
                        </Link>
                        {showSenderIDsDropdown &&(
                            <ul className='text-white font-oswald  w-48  text-left mt-2'>
                            <li onClick={showNavBar}  className={`hover:bg-[#3c567e] ${pathname === "/senderids/allsenderids" ? "bg-[#80343E]" : ""} p-2 rounded-md cursor-pointer`}>
                                <Link href='/senderids/allsenderids'>All Sender IDs</Link>
                            </li>
                            <li onClick={showNavBar} className={`hover:bg-[#3c567e] ${pathname === "/senderids/requestsenderids" ? "bg-[#80343E]" : ""} p-2 rounded-md cursor-pointer`}><Link href="/senderids/requestsenderids">Request&nbsp;for&nbsp;Sender&nbsp;IDs</Link></li>
                        </ul>
                        )}
                    </li>

                    <li onClick={showNavBar} className='flex flex-col items-center'>
                        <Link href='/reports/deliveryReport' onClick={toggleReportsDropdown} className={`flex justify-between items-center w-full p-2 text-gray-900 rounded-lg ${pathname === "/reports/deliveryReport" ? "bg-[#80343E]" : ""}  hover:bg-[#3c567e] group`}>
                           <div className='flex gap-2'>
                           <svg width="23" height="28" viewBox="0 0 23 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23 8.4L14.375 0H2.875C2.1125 0 1.38123 0.294999 0.842068 0.820101C0.302901 1.3452 0 2.05739 0 2.8V25.2C0 25.9426 0.302901 26.6548 0.842068 27.1799C1.38123 27.705 2.1125 28 2.875 28H20.125C20.8875 28 21.6188 27.705 22.1579 27.1799C22.6971 26.6548 23 25.9426 23 25.2V8.4ZM7.1875 23.8H4.3125V11.2H7.1875V23.8ZM12.9375 23.8H10.0625V15.4H12.9375V23.8ZM18.6875 23.8H15.8125V19.6H18.6875V23.8ZM14.375 9.8H12.9375V2.8L20.125 9.8H14.375Z" fill="white"/>
                            </svg>
                                    <span className="ms-3 text-md md:text-lg text-white">Reports</span>
                           </div>
                            <MdOutlineArrowDropUp size={32}  className={`ml-2 ${showSenderIDsDropdown ? 'rotate-0': "-rotate-90" } `} color='white'/>
                        </Link>
                        {showReportsDropdown && (
                           <ul className='text-white  font-oswald  w-48  text-left mt-2'>
                                <li onClick={showNavBar}  className={`hover:bg-[#3c567e] ${pathname === "/reports/deliveryReport" ? "bg-[#80343E]" : ""} p-2 rounded-md cursor-pointer`}><Link href={"/reports/deliveryReport"}>My&nbsp;Delivery&nbsp;Reports</Link></li>
                                <li onClick={showNavBar}  className={`hover:bg-[#3c567e] ${pathname === "/reports/downloadreports" ? "bg-[#80343E]" : ""} p-2 rounded-md cursor-pointer`}><Link href={"/reports/downloadreports"}>Download&nbsp;Reports</Link></li>
                            </ul>
                        )}
                    </li>

                    <li onClick={showNavBar}>
                        <Link href='/backgroundtasks' className={`flex items-center p-2 text-gray-900 rounded-lg ${pathname === "/backgroundtasks" ? "bg-[#80343E]" : ""} hover:bg-[#3c567e] group`}>
                        <svg width="32" height="32" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.88 15.4C26.0833 15.6641 26.1842 15.9929 26.164 16.3256C26.1438 16.6583 26.0038 16.9725 25.77 17.21L16.65 26.33L11.41 21.09C11.1448 20.8248 10.9958 20.4651 10.9958 20.09C10.9958 19.7149 11.1448 19.3552 11.41 19.09C11.6752 18.8248 12.0349 18.6758 12.41 18.6758C12.7851 18.6758 13.1448 18.8248 13.41 19.09L16.67 22.35L23.67 15.35H22.23C21.5891 15.3516 20.9589 15.1858 20.4018 14.8689C19.8446 14.5521 19.3799 14.0953 19.0536 13.5437C18.7273 12.9921 18.5507 12.3648 18.5413 11.724C18.5319 11.0831 18.69 10.4509 19 9.88999V9.79999H11.25V7.99999C11.25 7.73478 11.3554 7.48042 11.5429 7.29289C11.7304 7.10535 11.9848 6.99999 12.25 6.99999H15.69V6.31999C15.69 5.70602 15.9339 5.11719 16.368 4.68304C16.8022 4.2489 17.391 4.00499 18.005 4.00499C18.619 4.00499 19.2078 4.2489 19.642 4.68304C20.0761 5.11719 20.32 5.70602 20.32 6.31999V6.99999H20.74L22 4.75999C21.6809 3.93435 21.1147 3.22731 20.3788 2.7354C19.6429 2.24348 18.7731 1.99066 17.8882 2.01144C17.0033 2.03222 16.1463 2.3256 15.4343 2.85152C14.7224 3.37744 14.19 4.11028 13.91 4.94999H7C6.7551 4.91457 6.50548 4.93149 6.2676 4.99963C6.02972 5.06777 5.809 5.18558 5.62 5.34529C5.43099 5.50499 5.27801 5.70297 5.17114 5.92614C5.06426 6.14932 5.00594 6.39262 5 6.63999V32.26C5.00131 32.4832 5.04658 32.704 5.13322 32.9098C5.21987 33.1156 5.34619 33.3022 5.50498 33.4592C5.66377 33.6161 5.85191 33.7402 6.05867 33.8244C6.26543 33.9086 6.48675 33.9513 6.71 33.95H29.29C29.5132 33.9513 29.7346 33.9086 29.9413 33.8244C30.1481 33.7402 30.3362 33.6161 30.495 33.4592C30.6538 33.3022 30.7801 33.1156 30.8668 32.9098C30.9534 32.704 30.9987 32.4832 31 32.26V15.4H25.88Z" fill="white"/>
                        <path d="M26.8499 1.14006L21.1299 11.0001C20.9968 11.1954 20.9204 11.4237 20.9092 11.6598C20.8979 11.8959 20.9523 12.1305 21.0662 12.3376C21.1801 12.5447 21.3491 12.7162 21.5545 12.8331C21.7599 12.9501 21.9937 13.0078 22.2299 13.0001H33.6799C33.9161 13.0078 34.1499 12.9501 34.3553 12.8331C34.5607 12.7162 34.7297 12.5447 34.8436 12.3376C34.9575 12.1305 35.0119 11.8959 35.0006 11.6598C34.9894 11.4237 34.913 11.1954 34.7799 11.0001L29.0599 1.14006C28.9471 0.947113 28.7857 0.787069 28.5919 0.675847C28.398 0.564625 28.1784 0.506104 27.9549 0.506104C27.7314 0.506104 27.5118 0.564625 27.3179 0.675847C27.1241 0.787069 26.9627 0.947113 26.8499 1.14006Z" fill="white"/>
                        </svg>
                            <span className="ms-3 text-md md:text-lg text-white">Background Tasks</span>
                        </Link>
                    </li>

                    <li onClick={showNavBar}>
                        <Link href='/settings' className={`flex items-center p-2 text-gray-900 rounded-lg ${pathname==='/settings' && 'bg-[#80343E]'} hover:bg-[#3c567e] group`}>
                            <IoMdSettings size={32} color='white'/>
                            <span className="ms-3 text-md md:text-lg text-white">Settings</span>
                        </Link>
                    </li>

                    <li onClick={showNavBar}>
                        <Link href='/usermanuals' className={`flex gap-2 items-center p-2 text-gray-900 rounded-lg ${pathname==='/usermanuals' && 'bg-[#80343E]'} hover:bg-[#3c567e] group`}>
                        <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M21.5 19.1964H21V22.3214H21.5C21.8978 22.3214 22.2794 22.4625 22.5607 22.7137C22.842 22.9649 23 23.3055 23 23.6607C23 24.0159 22.842 24.3566 22.5607 24.6077C22.2794 24.8589 21.8978 25 21.5 25H4.75C3.49022 25 2.28204 24.5532 1.39124 23.7578C0.500445 22.9625 0 21.8837 0 20.7589V4.01786C0 2.95226 0.474106 1.9303 1.31802 1.1768C2.16193 0.423309 3.30653 0 4.5 0L18.5 0C19.6935 0 20.8381 0.423309 21.682 1.1768C22.5259 1.9303 23 2.95226 23 4.01786V17.8571C23 18.2123 22.842 18.553 22.5607 18.8042C22.2794 19.0553 21.8978 19.1964 21.5 19.1964ZM4.75 19.1964H18V22.3214H4.75C4.28587 22.3214 3.84075 22.1568 3.51256 21.8638C3.18437 21.5708 3 21.1733 3 20.7589C3 20.3445 3.18437 19.9471 3.51256 19.6541C3.84075 19.361 4.28587 19.1964 4.75 19.1964ZM11.842 5.05179C11.5882 5.00663 11.3263 5.01229 11.0753 5.06837C10.8242 5.12445 10.5902 5.22954 10.3901 5.37609C10.1901 5.52263 10.0289 5.70697 9.91817 5.91583C9.80747 6.12469 9.75004 6.35287 9.75 6.58393C9.75 6.87993 9.6183 7.16381 9.38388 7.37311C9.14946 7.58241 8.83152 7.7 8.5 7.7C8.16848 7.7 7.85054 7.58241 7.61612 7.37311C7.3817 7.16381 7.25 6.87993 7.25 6.58393C7.25 5.88159 7.4683 5.19304 7.88062 4.59491C8.29293 3.99679 8.88307 3.51257 9.58534 3.19616C10.2876 2.87975 11.0744 2.74357 11.8583 2.80277C12.6421 2.86198 13.3921 3.11425 14.0249 3.5315C14.6576 3.94875 15.1483 4.5146 15.4422 5.16607C15.7361 5.81754 15.8217 6.52905 15.6896 7.22141C15.5574 7.91376 15.2127 8.55978 14.6937 9.08756C14.1747 9.61533 13.5018 10.0041 12.75 10.2107C12.7418 10.5067 12.6022 10.7877 12.362 10.9918C12.1217 11.1959 11.8005 11.3064 11.469 11.2991C11.1375 11.2918 10.8228 11.1671 10.5942 10.9526C10.3656 10.7382 10.2418 10.4514 10.25 10.1554V9.2625C10.25 8.64643 10.81 8.14643 11.5 8.14643C11.934 8.1457 12.3522 8.00103 12.6734 7.74048C12.9947 7.47994 13.196 7.12211 13.2384 6.73647C13.2807 6.35084 13.1611 5.9649 12.9027 5.65359C12.6443 5.34227 12.2676 5.12779 11.842 5.05179ZM11.5 15.8643C11.0359 15.8643 10.5908 15.6997 10.2626 15.4066C9.93437 15.1136 9.75 14.7162 9.75 14.3018C9.75 13.8874 9.93437 13.49 10.2626 13.1969C10.5908 12.9039 11.0359 12.7393 11.5 12.7393C11.9641 12.7393 12.4092 12.9039 12.7374 13.1969C13.0656 13.49 13.25 13.8874 13.25 14.3018C13.25 14.7162 13.0656 15.1136 12.7374 15.4066C12.4092 15.6997 11.9641 15.8643 11.5 15.8643Z" fill="white"/>
                        </svg>

                            <span className="ms-3 text-md md:text-lg text-white">User Manual</span>
                        </Link>
                    </li>

                    <li onClick={showNavBar}>
                        <Link href='/signout' className={`flex items-center p-2 text-gray-900 rounded-lg ${pathname==="/signout" ? "bg-[#80343E] group" : "group"} hover:bg-[#3c567e] group`}>
                            <CiLogout size={32} color='white'/>
                            <span className="ms-3 text-md md:text-lg text-white">Sign Out</span>
                        </Link>
                    </li>
                </ul>
                
                </div>
            </aside>
    </div>
  )
}

export default Navbar






