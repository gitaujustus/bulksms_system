'use client'
import React from 'react'
import Link from 'next/link';

function ResetPassword () {
  return (
    <div className="min-h-screen flex py-10 items-center justify-center bg-gray-100">
        <div className="bg-[#26364E] text-white p-8 rounded-md shadow-md w-full mx-2 max-w-lg">
            <div  className="flex justify-center mb-6">
                <img src="/images/logo.png" className='bg-white rounded-full w-40'  alt="Logo" srcset="" />
            </div>
            <h2 className="text-2xl font-semibold text-center mb-6">Forgot Password</h2>
            <p className='text-gray-400 text-left'>Enter your email address below</p>
            <form action= "">
            <div className="flex flex-col my-3 min-w-full">
                    <input type='email' className="rounded-lg text-black my-4 bg-white p-2" placeholder='Email Address'/>
                </div>
            </form>
            <button className='bg-[#BC3333]  text-white border font-semibold float-left mt-4 min-w-full my-5 px-6 py-2 rounded-lg'>
                RESET
            </button>
            <p className='mb-10'>Go back to <Link href='/login' className='text-red-600 underline'>Log in</Link></p>
        </div>
    </div>
      
    
  )
}

export default ResetPassword; 
