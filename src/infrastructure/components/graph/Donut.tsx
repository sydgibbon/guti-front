import { Doughnut } from "react-chartjs-2";
import { Chart, Tooltip, Title, ArcElement, Legend } from "chart.js";
import { DonutType } from "../../../domain/models/Others";
import { useEffect, useState } from "react";

Chart.register(Tooltip, Title, ArcElement, Legend);

const Donut = ({ data, criteria }: DonutType) => {
  const [donutValues, setDonutValues] = useState<number[]>([]);
  const [donutLabels, setDonutLabels] = useState<string[]>([]);

  let dataLabels: string[] = [];
  let dataValues: number[] = [];

  useEffect(() => {

    if (data !== undefined) {
      data.forEach((obj: any) => {
        dataLabels.push(obj[criteria]);
        dataValues.push(obj["count"]);
      });


      setDonutValues(dataValues)
      setDonutLabels(dataLabels)
    }
  }, [data]);

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      weight: 3,
    },
  };

  const dataSet = {
    labels: donutLabels,
    datasets: [
      {
        data: donutValues,
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
