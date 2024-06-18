'use client'
import React, { useState } from 'react';
import AccountSettings from '@/components/settingsPanels/accountSettings';
import APIsettings from '@/components/settingsPanels/apiSettings';
import NotificationSettings from '@/components/settingsPanels/notificationSettings';
import SiteSettings from '@/components/settingsPanels/siteSettings';

function Settings() {
  const [activeTab, setActiveTab] = useState('ACCOUNT_SETTINGS');

  return (
    <main className="bg-[#D9D9D9]  p-4 flex lg:flex-row flex-col gap-4 mt-14 md:mt-0 md:ml-80">
      <div className="flex items-center p-1 bg-white shadow rounded-lg max-w-sm mx-auto h-44 min-w-56">
        <div>
          <div className="w-28 h-28 lg:w-20 lg:h-20 bg-gray-400 rounded-full flex items-center justify-center text-white text-2xl font-bold">
            M
          </div>
          <div className="text-sm text-gray-500 mt-2">
            * Click to change
          </div>
        </div>
        <div className="ml-4 md:ml-2">
          <div className="text-lg font-semibold">
            Meatsoko Limited
          </div>
          <div className="bg-green-500 text-white text-sm  py-1 px-3 rounded-full inline-block mt-1">
            Active
          </div>
        </div>
      </div>
      <div className="bg-white w-full lg:w-2/3 p-4 rounded-2xl">
        <div className="font-semibold text-left gap-3 flex flex-wrap my-3">
          <p
            className={`cursor-pointer pb-2 ${activeTab === 'ACCOUNT_SETTINGS' ? 'border-b-2 border-[#B91C1C]' : ''}`}
            onClick={() => setActiveTab('ACCOUNT_SETTINGS')}
          >
            ACCOUNT SETTINGS
          </p>
          <p
            className={`cursor-pointer pb-2 ${activeTab === 'SITE_SETTINGS' ? 'border-b-2 border-[#B91C1C]' : ''}`}
            onClick={() => setActiveTab('SITE_SETTINGS')}
          >
            SITE SETTINGS
          </p>
          <p
            className={`cursor-pointer pb-2 ${activeTab === 'NOTIFICATION_SETTINGS' ? 'border-b-2 border-[#B91C1C]' : ''}`}
            onClick={() => setActiveTab('NOTIFICATION_SETTINGS')}
          >
            NOTIFICATION SETTINGS
          </p>
          <p
            className={`cursor-pointer pb-2 ${activeTab === 'API_SETTINGS' ? 'border-b-2 border-[#B91C1C]' : ''}`}
            onClick={() => setActiveTab('API_SETTINGS')}
          >
            API SETTINGS
          </p>
        </div>
        {activeTab === 'ACCOUNT_SETTINGS' && <AccountSettings />}
        {activeTab === 'SITE_SETTINGS' && <SiteSettings />}
        {activeTab === 'NOTIFICATION_SETTINGS' && <NotificationSettings />}
        {activeTab === 'API_SETTINGS' && <APIsettings />}
      </div>    
    </main>
  );
}

export default Settings;
