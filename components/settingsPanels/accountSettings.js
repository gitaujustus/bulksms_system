import React from 'react'

function AccountSettings() {
  return (
    <div>
         <form action="">
            <div className='flex justify-between items-center'>
                <div className="flex flex-col  w-[48%]">
                    <label  className="text-left">Email address</label>
                    <input type="text" className="border-2 border-black rounded-md outline-8 p-2  text-gray-500" disabled value='info@meatsoko.co.ke'/>
                </div>
                <div className="flex flex-col my-3 w-[48%]">
                    <label  className="text-left">Phone no</label>
                    <input  className="border-2 border-black rounded-lg outline-8 p-2 text-gray-500" disabled value='+254742476290'/>
                </div>
            </div>
            <div className='flex justify-between items-center'>
                <div className="flex flex-col w-[48%]">
                    <label className="text-left">Client Name</label>
                    <input type="text" className="border-2 border-black rounded-lg outline-8 p-2 text-gray-500" disabled value='Meatsoko Limited'/>
                </div>
                <div className="flex flex-col my-3 w-[48%]">
                    <label  className="text-left">Access level</label>
                    <input  className="border-2 border-black rounded-lg outline-8 p-2 text-gray-500" disabled value='CLIENT'/>
                </div>
            </div>
            <button className='border w-full rounded-2xl bg-slate-300  text-lg text-gray-600 font-semibold py-3 cursor-pointer' disabled>UPDATE</button>
            <p className='text-left px-3 my-4'>*Disabled fields are not editable</p>
            <button className='float-left text-red-700 text-lg px-3 font-semibold'>CHANGE PASSWORD</button>
            <div className='flex flex-wrap float-left gap-11 items-center py-3 px-3'>
                    <div>
                        <p className='text-left'>
                            OTP
                        </p>
                        <div className='flex gap-3'>
                            <input type="checkbox" className='rounded-lg size-6'/>
                            <label>Use Two Factor Authentication</label>
                        </div>
                       
                    </div>
                    <div className='flex flex-col  '>
                        <label htmlFor="senderID" className="text-left text-gray-500">OTP Channel</label>
                        <input type="" className="border-2 border-black rounded-lg outline-8 p-2 "placeholder='EMAIL_OTP'/>
                    </div>
            </div>
            </form>
    </div>
  )
}

export default AccountSettings