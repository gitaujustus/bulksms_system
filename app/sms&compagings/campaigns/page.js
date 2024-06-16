'use client'
import React, { useState } from 'react';

function Campaigns() {
  const campaigns = [
    { id: 1, senderId: 'Sender1', campaignName: 'Campaign A', message: 'Message', status: 'Running', processed: 100, contact: '0712345678', smsCount: 10, queued: 5, delivered: 95, schedule: '2024-05-01', createdAt: '2024-04-15' },
    { id: 2, senderId: 'Sender2', campaignName: 'Campaign B', message: 'Message', status: 'Completed', processed: 200, contact: '0712345678', smsCount: 20, queued: 10, delivered: 190, schedule: '2024-05-02', createdAt: '2024-04-16' },
    { id: 3, senderId: 'Sender3', campaignName: 'Campaign C', message: 'Message', status: 'Waiting Approval', processed: 300, contact: '0712345678', smsCount: 30, queued: 15, delivered: 285, schedule: '2024-05-03', createdAt: '2024-04-17' },
    { id: 4, senderId: 'Sender4', campaignName: 'Campaign D', message: 'Message', status: 'Schedule', processed: 400, contact: '0712345678', smsCount: 40, queued: 20, delivered: 380, schedule: '2024-05-04', createdAt: '2024-04-18' },
    { id: 5, senderId: 'Sender5', campaignName: 'Campaign E', message: 'Message', status: 'Running', processed: 500, contact: '0712345678', smsCount: 50, queued: 25, delivered: 475, schedule: '2024-05-05', createdAt: '2024-04-19' },
    { id: 6, senderId: 'Sender6', campaignName: 'Campaign F', message: 'Message', status: 'Completed', processed: 600, contact: '0712345678', smsCount: 60, queued: 30, delivered: 570, schedule: '2024-05-06', createdAt: '2024-04-20' },
    { id: 7, senderId: 'Sender7', campaignName: 'Campaign G', message: 'Message', status: 'Waiting Approval', processed: 700, contact: '0712345678', smsCount: 70, queued: 35, delivered: 665, schedule: '2024-05-07', createdAt: '2024-04-21' },
    { id: 8, senderId: 'Sender8', campaignName: 'Campaign H', message: 'Message', status: 'Schedule', processed: 800, contact: '0712345678', smsCount: 80, queued: 40, delivered: 760, schedule: '2024-05-08', createdAt: '2024-04-22' },
    { id: 9, senderId: 'Sender9', campaignName: 'Campaign I', message: 'Message', status: 'Running', processed: 900, contact: '0712345678', smsCount: 90, queued: 45, delivered: 855, schedule: '2024-05-09', createdAt: '2024-04-23' },
    { id: 10, senderId: 'Sender10', campaignName: 'Campaign J', message: 'Message', status: 'Completed', processed: 1000, contact: '0712345678', smsCount: 100, queued: 50, delivered: 950, schedule: '2024-05-10', createdAt: '2024-04-24' },
  ];

  const [filter, setFilter] = useState('All');

  const filteredCampaigns = campaigns.filter(campaign => {
    if (filter === 'All') return true;
    return campaign.status === filter;
  });

  return (
    <main className='min-h-screen bg-[#D9D9D9] px-3 py-10 mt-14 md:mt-0 md:ml-80'>
      <div className='bg-white rounded-lg p-4'>
        <div className='flex justify-between'>
          <h1 className='font-bold text-lg md:text-xl'>Campaigns</h1>
        </div>
        <div className='flex flex-wrap gap-2 md:gap-4 mt-3 font-bold text-gray-600'>
          <button className={`pb-2 ${filter === 'All' ? 'border-b border-red-600' : ''}`} onClick={() => setFilter('All')}>ALL</button>
          <button className={`pb-2 ${filter === 'Running' ? 'border-b border-red-600' : ''}`} onClick={() => setFilter('Running')}>RUNNING</button>
          <button className={`pb-2 ${filter === 'Schedule' ? 'border-b border-red-600' : ''}`} onClick={() => setFilter('Schedule')}>SCHEDULE</button>
          <button className={`pb-2 ${filter === 'Completed' ? 'border-b border-red-600' : ''}`} onClick={() => setFilter('Completed')}>COMPLETED</button>
          <button className={`pb-2 ${filter === 'Waiting Approval' ? 'border-b border-red-600' : ''}`} onClick={() => setFilter('Waiting Approval')}>WAITING&nbsp;APPROVAL</button>
        </div>
        <div className='overflow-x-auto border border-black my-2'>
          <table className='w-full min-h-[60vh] bg-white'>
            <thead className='h-28'>
              <tr>
                <th className='px-4 py-2'>ID</th>
                <th className='px-4 py-2'>Sender&nbsp;ID</th>
                <th className='px-4 py-2'>Campaign&nbsp;name</th>
                <th className='px-4 py-2'>Message</th>
                <th className='px-4 py-2'>Status</th>
                <th className='px-4 py-2'>Processed</th>
                <th className='px-4 py-2'>Contact</th>
                <th className='px-4 py-2'>Sms&nbsp;count</th>
                <th className='px-4 py-2'>Queued</th>
                <th className='px-4 py-2'>Delivered</th>
                <th className='px-4 py-2'>Schedule</th>
                <th className='px-4 py-2'>Created&nbsp;at</th>
              </tr>
            </thead>
            <tbody className='bg-[#D9D9D9]'>
              {filteredCampaigns.length > 0 ? (
                filteredCampaigns.map(campaign => (
                  <tr key={campaign.id}>
                    <td className='px-4 py-2'>{campaign.id}</td>
                    <td className='px-4 py-2'>{campaign.senderId}</td>
                    <td className={`px-4 py-2 `}>{campaign.campaignName}</td>
                    <td className='px-4 py-2'>{campaign.message}</td>
                    <td className='px-4 py-2'>{campaign.status}</td>
                    <td className='px-4 py-2'>{campaign.processed}</td>
                    <td className='px-4 py-2'>{campaign.contact}</td>
                    <td className='px-4 py-2'>{campaign.smsCount}</td>
                    <td className='px-4 py-2'>{campaign.queued}</td>
                    <td className='px-4 py-2'>{campaign.delivered}</td>
                    <td className='px-4 py-2'>{campaign.schedule}</td>
                    <td className='px-4 py-2'>{campaign.createdAt}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="12" className='px-4 py-2'>No campaigns found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

export default Campaigns;
