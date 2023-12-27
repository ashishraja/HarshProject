import React from "react";


import {Chart as Chartjs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement
} from "chart.js";
import {Line } from "react-chartjs-2";
Chartjs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement
);


const ChartLine = () => {
  const options = {
    responsive:true,
    plugins:{
        legend:{
            position:"bottom"
        },
        title:{
            display:true,
            text:"Yearly Views"
        },
    },
};

const data = {
    labels:["T1","T2","T3","T4","T5"],
    datasets:[{
         label:"Views",
         data:[10,2,30,4,15],
         borderColor:"cyan",
         backgroundColor:"#6b46c1"
        },
    ],
};



  return (
        <div className="p-4">
          <Line data={data} options={options} />
        </div>
  );
};

export default ChartLine;