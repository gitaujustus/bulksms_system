'use client'
import React, { useState } from 'react';
import Link from 'next/link';

const Register = () => {
const [accountType, setAccountType] = useState('company');
const [firstName, setFirstName]=useState('')
const [lastName, setLastName]=useState('')
const [username, setUsername]=useState('')
const [email, setEmail]=useState('')
const [phone, setPhone]=useState('')
const [country, setCountry]=useState('')
const [password, setPassword]=useState('')
const [confirmPassword, setConfirmPassword]=useState('')
const [agreeTerms, setAgreeTerms]=useState(false)

const handleSubmit = (e) => {
  e.preventDefault();

};

  return (
    <div className="min-h-screen flex py-10 items-center justify-center bg-gray-100">
      <div className="bg-[#26364E] text-white p-8 rounded-md shadow-md w-full mx-2 max-w-lg">
        <div className="flex justify-center mb-6">
            <img src="/images/logo.png" className='bg-white rounded-full w-40'  alt="Logo" srcset="" />
        </div>
        <h2 className="text-2xl font-semibold text-center mb-6">Register</h2>
        <form>
          <div className="mb-4">
            <p className='text-sm text-gray-500 text-left'>Enter your details below to get started</p>
            <label className="block text-gray-300 text-left mb-1">Account type</label>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input 
                  type="radio" 
                  name="accountType"
                  value="individual"
                  checked={accountType === 'individual'}
                  onChange={(e) => setAccountType(e.target.value)} 
                  className="form-radio text-red-600 w-4 h-4" 
                />
                <span className="ml-2">Individual</span>
              </label>
              <label className="flex items-center">
                <input 
                  type="radio"
                  required 
                  name="accountType" 
                  value="company" 
                  checked={accountType === 'company'}
                  onChange={(e) => setAccountType(e.target.value)}
                  className="form-radio text-red-600 w-4 h-4" 
                />
                <span className="ml-2">Company</span>
              </label>
            </div>
          </div>
          
          <div className="flex mb-4 space-x-4">
            <input 
              type="text" 
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-1/2 px-3 py-2 text-gray-900 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input 
              type="text" 
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)} 
              className="w-1/2 px-3 py-2 text-gray-900 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div className="mb-4">
            <input 
              type="text"
              required 
              placeholder="Username" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 text-gray-900 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div className="mb-4">
            <input 
              type="email"
              required 
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
              className="w-full px-3 py-2 text-gray-900 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div className="mb-4 flex items-center">
            <input 
              type="tel"
              required 
              placeholder="+254"
              value={phone}
              onChange={(e) => setPhone(e.target.value)} 
              className="w-full px-3 py-2 text-gray-900 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div className="mb-4">
            <input 
              type="text"
              required 
              placeholder="Country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full px-3 py-2 text-gray-900 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div className="mb-4">
            <input 
              type="password"
              required 
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
              className="w-full px-3 py-2 text-gray-900 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div className="mb-4">
            <input 
              type="password"
              required 
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-3 py-2 text-gray-900 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div className="mb-4 flex items-center">
            <input 
              type="checkbox"
              required
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)} 
              className="form-checkbox text-red-600 w-10 h-10 md:w-4 md:h-4" 
            />
            <span className="ml-2 text-gray-300 text-sm">By registering, I agree to Hillgan Innovations <a href="#" className="underline text-[#ff5c5c]">Terms and Conditions</a></span>
          </div>
          <button 
            type="submit" 
            className="w-full bg-[#BC3333] font-semibold text-white py-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            CREATE ACCOUNT
          </button>
        </form>
        <p className="text-center mt-4 text-sm">
          Already have an account? <Link href="/signin" className="underline text-[#ff5c5c]">Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
