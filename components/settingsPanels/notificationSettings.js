import React from 'react'

function NotificationSettings() {
  return (
    <div>
        <form action="">
            <div className='flex flex-wrap justify-between items-center'>
                
                <div className="flex flex-col w-[48%]">
                    <label  className="text-left">Email address</label>
                    <input type="text" className="border-2 border-black rounded-md outline-8 p-2 "placeholder='Email Address'/>
                </div>
                
                <div className="flex flex-col my-3 w-[48%]">
                <label className="text-left">Phone no.</label>
                <input type="tel" className="border-2 border-black rounded-md outline-8 p-2 "placeholder='+254'/>
              </div>

            </div>
            <p className='text-gray-800 text-left text-xs w-[48%] px-2'>You can add multiple email addresses by separating them with a comma</p>
            
            <div className='flex justify-between items-center'>
                <div className="flex flex-col w-[48%] my-5">
                    <label className="text-left">Notify me when units drop below :</label>
                    <input type="number" className="border-2 border-black rounded-lg outline-8 p-2 spinner-input" placeholder='0' />
                </div>
                <button className='bg-[#BC3333] text-white p-2 px-3 rounded-xl'>SAVE</button>
            </div>
            <div className='flex flex-wrap gap-3 my-4'>
                <span className='flex items-center'>
                  <input type="checkbox" name="emailAlert" className="w-6 h-6 accent-[#BC3333]" checked id="emailAlert" />
                  <label htmlFor="emailAlert" className="ml-2">Email Alerts</label>
                </span>
                <span className='flex items-center'>
                <input type="checkbox" name="smsAlert" checked className="w-6 h-6 accent-[#BC3333]" id="smsAlert" />
                  <label htmlFor="smsAlert" className="ml-2">SMS Alerts</label>
                </span>
                <span className='flex items-center'>
                  <input type="checkbox" name="use-own-channel" className="w-6 h-6" id="use-own-channel" />
                  <label htmlFor="use-own-channel" className="ml-2">Use own channel</label>
                </span>
            </div>


            
            </form>
    </div>
  )
}

export default NotificationSettings;