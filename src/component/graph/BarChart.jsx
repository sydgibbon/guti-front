import { React, useEffect, useState } from "react";
import axiosPrivate from "../../api/axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({ asset, itemProp, title, color }) => {
  const [loadingData, setLoadingData] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      await axiosPrivate
        .get("http://127.0.0.1:8000/api/assets/" + asset + "/")
        .then((response) => {
          // check if the data is populated
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

  const getItemByProp = () => {
    let repeatedItemProp = [];

    data.map((obj) => {
      repeatedItemProp.push(obj[itemProp]);
    });
    const objItemPropCounter = {};

    repeatedItemProp.forEach((element) => {
      objItemPropCounter[element?.name] =
        (objItemPropCounter[element] || 0) + 1;
    });
    return objItemPropCounter;
  };
  let keys = Object.keys(getItemByProp());

  let values = Object.values(getItemByProp());

  const options = {
    indexAxis: "y",
    elements: {
      bar: {
        borderWidth: 3,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true
            }
        }]
    },
    plugins: {
      legend: {
        position: "right",
      },
      title: {
        display: true,
        text: title,
      },
    },
  };

  const labels = keys;

  const dataset = {
    labels,
    datasets: [
      {
        label: title,
        data: values,
        backgroundColor: color,
      },
    ],
  };

  return (
    <>
      <Bar options={options} data={dataset} className="" />
    </>
  );
};

export default BarChart;
