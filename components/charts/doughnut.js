import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart , CategoryScale, LinearScale, BarElement, ArcElement, PointElement, LineElement, LineController, Title, Tooltip, Legend } from 'chart.js';
Chart.register(CategoryScale, LinearScale, BarElement, ArcElement, PointElement, LineElement, LineController, Title, Tooltip, Legend);


const DoughnutChart = ({data, options, title}) => {
  return (
      <div className=" flex flex-col justify-center items-center mx-auto h-[35vh] w-[90vw] md:w-[50vw] lg:w-[25vw] p-2 bg-white  rounded-xl">
        <h1 className="text-sm ml-4 font-bold">{title}: <span className="text-xs">This Month</span></h1>
        <div className="h-44">
          <Doughnut data={data} options={options} />
        </div>
      </div>
  );
};

export default DoughnutChart;