import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, Tooltip, Title, ArcElement, Legend } from 'chart.js';

Chart.register(
    Tooltip, Title, ArcElement, Legend
);

const data = {
    datasets: [{
        data: [10, 20, 30],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
    }],


    // These labels appear in the legend and in the tooltips when hovering different arcs
    // labels: [
    //     'Red',
    //     'Yellow',
    //     'Blue'
    // ]
};
 

const Donut = () => {
  return (
    <div> 
        <Doughnut data={data} />
    </div>
  )
}

export default Donut

