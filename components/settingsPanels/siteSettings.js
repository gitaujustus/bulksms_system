'use client'
import React from 'react'
import { useState } from 'react'

function SiteSettings() {
  const [allowDefaultSenderID, setAllowDefaultSenderID] = useState(false);
  const [ website, setWebsite ] = useState("");
  const [ brandname, setBrandname] = useState("");
  const [ region, setRegion ] = useState("");
  const [logoFile, setLogoFile] = useState(null);
  
  const handleLogoChange = () => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*'; // Only accept image files
    fileInput.addEventListener('change', (event) => {
      const file = event.target.files[0];
      setLogoFile(file);
    });
    fileInput.click();
  };
  

  return (
    <section className='flex flex-col gap-6'>
      {/* Website Logo */}
      <div>
        <h1 className='text-left font-bold'>WEBSITE LOGO</h1>
        <div className='flex justify-start mx-2 my-4 w-1/4 bg-theme-default-dark text-white p-2 rounded-lg'>
          {logoFile ? logoFile.name : 'LOGO'}
        </div>
        <button className='flex justify-start' onClick={handleLogoChange}>
          *Click to change
        </button>
      </div>

      {/* Theme */}
      <div>
        <h1 className='text-left font-bold'>THEME</h1>
        {/* color palettes */}
        <div className="flex items-center gap-2 flex-wrap">
          <div className="w-12 h-12 bg-theme-default rounded"></div>
          <div className="w-12 h-12 bg-theme-default-dark rounded"></div>
          <div className="w-12 h-12 bg-theme-amber rounded"></div>
          <div className="w-12 h-12 bg-theme-amber-dark rounded"></div>
          <div className="w-12 h-12 bg-theme-amethyst rounded"></div>
          <div className="w-12 h-12 bg-theme-amethyst-dark rounded"></div>
          <div className="w-12 h-12 bg-theme-cobalt rounded"></div>
          <div className="w-12 h-12 bg-theme-cobalt-dark rounded"></div>
          <div className="w-12 h-12 bg-theme-emerald rounded"></div>
          <div className="w-12 h-12 bg-theme-emerald-dark rounded"></div>
          <div className="w-12 h-12 bg-theme-ruby rounded"></div>
          <div className="w-12 h-12 bg-theme-ruby-dark rounded"></div>
        </div>
      </div>

      <div className='flex gap-2 items-center'>
        <input
          type="checkbox"
          id="allowDefaultSenderID"
          checked={allowDefaultSenderID}
          onChange={(e) => setAllowDefaultSenderID(e.target.checked)}
          className='w-6 h-6'
        />
        <h1 className='font-bold'>Allow Default Sender ID</h1>
      </div>

      {/* site branding section */}
      <div>
        <h1 className='font-bold text-left my-2'>SITE BRANDING</h1>
        <div className='flex gap-2 flex-wrap'>
          <div className='m-2'>
            <h1 className='text-left'>Website</h1>
            <input type="text"
              value={website}
              onChange={(e)=>setWebsite(e.target.value)}
              placeholder='Website' 
              className='border border-gray-400 p-2 rounded-lg m-2' 
            />
          </div>
          <div className='m-2'>
            <h1 className='text-left'>Brand Name</h1>
            <input type="text" 
              placeholder='Brand Name' 
              value={brandname}
              onChange={(e) => setBrandname(e.target.value)}
              className='border border-gray-400 p-2 rounded-lg m-2' 
            />
          </div>
          <div className='m-2 w-1/10 w-20'>
            <h1 className='text-left'>Region</h1>
            <input type="text" 
              placeholder='KE' 
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className='border border-gray-400 p-2 rounded-lg m-2 w-16' 
            />
          </div>
        </div>
      </div>
      {/* save button */}
      <div className='flex justify-end'>
        <button className='bg-hillganred  px-4 py-2 rounded-lg text-white font-bold'>SAVE</button> 
      </div>
    </section>
  )
}

export default SiteSettings