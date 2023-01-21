import { React, useEffect, useState } from "react";
import axiosPrivate from "../../api/axios";
import { Doughnut } from "react-chartjs-2";
import { Chart, Tooltip, Title, ArcElement, Legend } from "chart.js";

Chart.register(Tooltip, Title, ArcElement, Legend);

const Donut = ({ asset, itemProp }) => {
  const [checked, setChecked] = useState(false);
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
      objItemPropCounter[element?.name] = (objItemPropCounter[element] || 0) + 1;
    });
    return objItemPropCounter;
  };
  let keys = Object.keys(getItemByProp());

  let values = Object.values(getItemByProp());


  const options = {
    plugins: {
      legend: {
        display: false,
      },
      weight: 3,
    },
  };

  const dataSet = {
    labels: keys,
    datasets: [
      {
        data: values,
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
      },
    ],
  };

  return (
    <>
      <Doughnut className="" data={dataSet} options={options} />
    </>
  );
};

export default Donut;
