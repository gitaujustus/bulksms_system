
"use client"
import React from 'react'
import LineChart from '@/components/charts/linechart';
import Doughnut from '@/components/charts/doughnut';
import BarChart from '@/components/charts/barchat';
import data from "@/lib/data.json"


function Dashboard() {

// Data Simulation
const {
  barData1,
  barOptions1,
  barData2,
  barOptions2,
  lineData,
  lineOptions,
  doughnutData1,
  doughnutOptions1,
  doughnutData2,
  doughnutOptions2
} = data;

  return (
    <div className='bg-[#d9d9d9] mt-14 md:mt-0 md:ml-80 mt'>
        <div className=''>
        <div className='flex flex-col lg:flex-row  gap-10  p-3'>
          <LineChart data={lineData} options={lineOptions} title={"Network Activity"}/>
          <Doughnut  data={doughnutData1} options={doughnutOptions1} title={"Network Activity"} />
        </div>
        <div className='flex flex-col lg:flex-row gap-10  p-3'>
          <BarChart  data={barData1} options={barOptions1} title={"Delivery Report"}/>
          <Doughnut data={doughnutData1} options={doughnutOptions1} title={"Delivery Report"} />
        </div>
        <div className='flex flex-col lg:flex-row gap-10  p-3'>
          <BarChart  data={barData2} options={barOptions2} title={"Delivery Report"}/>
          <Doughnut data={doughnutData2} options={doughnutOptions2} title={"Sender Id Activity"} />
        </div>
        </div>
    </div>
  )
}

export default Dashboard

