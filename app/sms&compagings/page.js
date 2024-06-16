'use client'
import {useState} from 'react'
const SendSms = () => {

    const [activeTab, setActiveTab]=useState("contactFile")

    const ChangeToContactGroups=()=>{
        setActiveTab("contactGroups")
    }
    const ChangeTabToContactFile=()=>{
        setActiveTab("contactFile")
    }

    return ( 
    <main className="bg-[#D9D9D9] min-h-screen p-4 flex lg:flex-row flex-col gap-4 mt-14 md:mt-0 md:ml-80">
        <form action="" className="bg-white w-3/2 lg:w-2/3 p-4 rounded-2xl">
            <h2 className="text-left text-xl font-semibold my-3 md:text-2xl">Send SMS</h2>
            <div className="flex flex-col">
                <label htmlFor="campaignName" className="text-left">Campaign Name</label>
                <input type="text" className="border-2 border-black rounded-md outline-8 p-2"/>
            </div>
            <div className="flex flex-col my-3">
                <label htmlFor="senderID" className="text-left">Sender ID</label>
                <input type="senderID" className="border-2 border-black rounded-md outline-8 p-2"/>
            </div>
            <div className="flex flex-col">
                <label htmlFor="contact" className="text-left">Contacts</label>
                <textarea name="contact" rows="3" className="border-2 border-black rounded-md outline-8" id=""></textarea>
            </div>
            <div className="flex sm:items-center sm:flex-row my-3 flex-col items-start sm:gap-2 lg:gap-8" >
                <div className="flex gap-2 my-3">
                    <input type="checkbox" name="RemoveDuplicates" className="h-6 w-6 " id="RemoveDuplicates" />
                    <label htmlFor="RemoveDuplicates">Remove&nbsp;Duplicates</label>
                </div>
                <button className="bg-[#F8EBEB] hover:bg-[#f3cccc] text-red-500 font-semibold py-1 px-4 rounded-md flex gap-3 items-center">
                    <span>
                    <svg width="33" height="30" viewBox="0 0 33 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.96875 0.5C5.35259 0.5 3.80262 1.09263 2.65982 2.14752C1.51702   3.20242 0.875 4.63316 0.875 6.125V19.625C0.875 21.1168 1.51702 22.5476 2.65982 23.6025C3.80262 24.6574 5.35259 25.25 6.96875 25.25H8.1875V17.375C8.1875 15.8832 8.82952 14.4524 9.97232 13.3975C11.1151 12.3426 12.6651 11.75 14.2812 11.75H27.6875V6.125C27.6875 4.63316 27.0455 3.20242 25.9027 2.14752C24.7599 1.09263 23.2099 0.5 21.5938 0.5H6.96875ZM6.96875 6.125C6.96875 5.82663 7.09715 5.54048 7.32571 5.3295C7.55427 5.11853 7.86427 5 8.1875 5H20.375C20.6982 5 21.0082 5.11853 21.2368 5.3295C21.4653 5.54048 21.5938 5.82663 21.5938 6.125C21.5938 6.42337 21.4653 6.70952 21.2368 6.9205C21.0082 7.13147 20.6982 7.25 20.375 7.25H8.1875C7.86427 7.25 7.55427 7.13147 7.32571 6.9205C7.09715 6.70952 6.96875 6.42337 6.96875 6.125ZM10.6299 17.2153C10.6743 16.3489 11.0784 15.5316 11.7583 14.9329C12.4382 14.3343 13.3416 14.0002 14.2812 14H28.9062C29.8459 14.0002 30.7493 14.3343 31.4292 14.9329C32.1091 15.5316 32.5132 16.3489 32.5576 17.2153L21.5938 22.838L10.6299 17.2153ZM22.1836 25.1082L32.5625 19.787V26.375C32.5625 27.2701 32.1773 28.1286 31.4916 28.7615C30.8059 29.3944 29.8759 29.75 28.9062 29.75H14.2812C13.3116 29.75 12.3816 29.3944 11.6959 28.7615C11.0102 28.1286 10.625 27.2701 10.625 26.375V19.787L21.0014 25.1082C21.1826 25.2012 21.3865 25.25 21.5938 25.25C21.801 25.25 22.0049 25.2012 22.1861 25.1082" fill="#BC3333"/>
                    </svg>
                    </span>
                    <span className='text-lg'>SELECT TEMPLATE</span>
                </button>
            </div>
            <div className="flex flex-col">
                <label htmlFor="enterMessage" className="text-left">Enter Message</label>
                <textarea name="enterMessage" rows="4" className="border-2 border-black rounded-md outline-8" id=""/>
                <div className="flex mt-1">
                    <p className="w-1/3  text-left px-2">Character: <span>0/1224</span></p>
                    <p className="w-3/4 text-left pl-16  px-2 border-l-2 border-black">Pages: <span>1/8</span></p>
                </div>
            </div>
            <div className="flex justify-between gap-4 mt-8 mb-3 px-2 mx-auto flex-wrap ">
                <p className="flex items-center gap-1 text-[#BC3333] text-lg font-semibold">
                    <span>
                        <svg width="24" height="24" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.99984 16.625C13.2215 16.625 15.8332 13.8827 15.8332 10.5C15.8332 7.11726 13.2215 4.375 9.99984 4.375C6.77818 4.375 4.1665 7.11726 4.1665 10.5C4.1665 13.8827 6.77818 16.625 9.99984 16.625Z" stroke="#BC3333" stroke-width="2"/>
                            <path d="M4.97078 2.74402C4.40545 2.903 3.88995 3.21546 3.47611 3.64999C3.06227 4.08452 2.76469 4.6258 2.61328 5.21939M15.0291 2.74402C15.5944 2.903 16.1099 3.21546 16.5238 3.64999C16.9376 4.08452 17.2352 4.6258 17.3866 5.21939M9.99995 7.00002V10.2813C9.99995 10.402 10.0933 10.5 10.2083 10.5H12.4999" stroke="#BC3333" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                    </span> SCHEDULE</p>
                <button type="submit" className="bg-[#BC3333] flex items-center rounded-md gap-2 p-3  text-white text-md font-semibold"> 
                    <span>
                        <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.2875 5.42687L14.9993 8.78512L6.33675 16.6226H2.625V13.2636L11.2875 5.42687ZM12.5247 4.30667L14.3806 2.62754C14.5447 2.47913 14.7672 2.39575 14.9993 2.39575C15.2313 2.39575 15.4538 2.47913 15.6179 2.62754L18.0932 4.86637C18.1746 4.9399 18.2391 5.02721 18.2832 5.12332C18.3272 5.21942 18.3499 5.32244 18.3499 5.42648C18.3499 5.53052 18.3272 5.63353 18.2832 5.72964C18.2391 5.82575 18.1746 5.91306 18.0932 5.98658L16.2365 7.66571L12.5247 4.30667Z" fill="white"/>
                        </svg>
                    </span>
                SUBMIT</button>
            </div>
        </form>
        <div className=" w-[90%] md:w-2/3 lg:w-1/3 bg-white rounded-2xl p-2  lg:h-64">
            <div className="flex justify-between">
                <button onClick={()=>ChangeToContactGroups()} className={`text-sm  ${activeTab==='contactGroups' ? 'border-[#BC3333] border-b-2 pb-3 text-[#BC3333]': 'pb-3'}`} >CONTACT GROUPS</button>
                <button className={`text-sm  ${activeTab==='contactFile' ? 'border-[#BC3333] border-b-2 pb-3 text-[#BC3333]': 'pb-3'}`} onClick={()=>{ChangeTabToContactFile()}}>CONTACTS FROM FILE</button>
            </div>
            <div >
                {activeTab==='contactFile' ? (
                    <div className="border-2 mt-4 border-dashed border-gray-400 rounded-lg p-2 flex flex-col lg:flex-row justify-center items-center lg:h-44">
                    <div className="text-white rounded-full p-2">
                     <img src="/images/explorer.png" alt="" srcset="" />
                    </div>
                    <div className="ml-2">
                      <p className="text-gray-600 font-semibold">Drag &amp; Drop</p>
                      <p className="text-gray-600">or <span className='font-semibold'>Click</span> to upload file(s)</p>
                    </div>
                  </div>
                ):(
                <div className="border-2 mt-4 border-dashed border-gray-400 rounded-lg p-2 flex flex-col lg:flex-row justify-center items-center lg:h-44">
                    <h1>CONTACT GROUPS</h1>
                    {/* Design for here is missing */}
                </div> 
                )}
               
            </div>
        </div>
        
    </main>
     );
}
 
export default SendSms;
