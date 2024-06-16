

import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart , CategoryScale, LinearScale, BarElement, ArcElement, PointElement, LineElement, LineController, Title, Tooltip, Legend } from 'chart.js';
Chart.register(CategoryScale, LinearScale, BarElement, ArcElement, PointElement, LineElement, LineController, Title, Tooltip, Legend);

const BarChart = ({ data, options, title }) => {
  return (
    <div className="w-[90vw] md:w-[50vw] mx-auto lg:w-[35vw] h-86 bg-white p-4 text-xl rounded-xl">
      <div className="flex justify-between">
        <h1 className="text-sm lg:text-xl ml-4 font-bold uppercase">{title}</h1>
        <p className="border-2 text-sm md:text-md flex items-center rounded-xl px-1 md:px-2">
          <select name="month" id="month">
            <option value="current">This month</option>
            <option value="jan">Jan</option>
            <option value="feb">Feb</option>
            <option value="mar">Mar</option>
            <option value="apr">Apr</option>
            <option value="may">May</option>
            <option value="jun">Jun</option>
            <option value="jul">Jul</option>
            <option value="aug">Aug</option>
            <option value="sep">Sep</option>
            <option value="oct">Oct</option>
            <option value="nov">Nov</option>
            <option value="dec">Dec</option>
          </select>
        </p>
      </div>
      <div className="h-[50vh]">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default BarChart;
