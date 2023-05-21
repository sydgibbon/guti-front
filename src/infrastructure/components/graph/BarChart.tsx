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
import { BarChartType, OptionsBarType } from "../../../domain/models/Others";
import { useEffect, useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({ data, criteria, title, color }: BarChartType) => {
  const [chartValues, setChartValues] = useState<number[]>([]);
  const [chartLabels, setChartLabels] = useState<string[]>([]);

  let dataLabels: string[] = [];
  let dataValues: number[] = [];

  useEffect(() => {

    if (data !== undefined) {
      data.forEach((obj: any) => {
        dataLabels.push(obj[criteria]);
        dataValues.push(obj["count"]);
      });


      setChartValues(dataValues)
      setChartLabels(dataLabels)
      console.log(chartLabels)
      console.log(chartValues)
    }
  }, [data]);

  const options: OptionsBarType = {
    indexAxis: "y",
    elements: {
      bar: {
        borderWidth: 3,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
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

  const dataset = {
    labels: chartLabels,
    datasets: [
      {
        label: title,
        data: chartValues,
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
