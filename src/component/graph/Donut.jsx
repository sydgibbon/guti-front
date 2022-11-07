import { React, useEffect, useState } from 'react';
import axiosPrivate from "../../api/axios";
import { Doughnut } from 'react-chartjs-2';
import { Chart, Tooltip, Title, ArcElement, Legend } from 'chart.js';

Chart.register(
    Tooltip, Title, ArcElement, Legend
);


const Donut = ({ asset }) => {
  const [checked, setChecked] = useState(false);
  const [loadingData, setLoadingData] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      await axiosPrivate
        .get("http://127.0.0.1:8000/api/assets/"+asset+"/")
        .then((response) => {
          // check if the data is populated
          console.log(response.data);
          setData(response.data);
          // you tell it that you had the result
          setLoadingData(false);
        });
    }
    if (loadingData) {
      // if the result is not ready so you make the axios call
      getData();
    }
  }, []);

  const options = {
    plugins:{
     legend: {
      display: false
     },
     weight: 3
    }
   }

  const dataSet = {
    labels: [
      'Laptop',
      'Allinone',
      'Desk'
    ],
    datasets: [{
        data: [ 300, 50, 15 ],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
    }],
};

  return (
    <div> 
        <Doughnut className='' data={dataSet} options={options} />
    </div>
  )
}

export default Donut

