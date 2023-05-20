import { Doughnut } from "react-chartjs-2";
import { Chart, Tooltip, Title, ArcElement, Legend } from "chart.js";
import { DonutType } from "../../../domain/models/Others";
import { useEffect } from "react";

Chart.register(Tooltip, Title, ArcElement, Legend);

const Donut = ({ data, criteria }: DonutType) => {
  // const [loadingData, setLoadingData] = useState(true);
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   async function getData() {
  //     await axiosPrivate
  //       .get("http://127.0.0.1:8000/api/assets/" + asset + "/")
  //       .then((response) => {
  //         // check if the data is populated
  //         setData(response.data);
  //         // you tell it that you had the result
  //         setLoadingData(false);
  //       });
  //   }
  //   if (loadingData) {
  //     // if the result is not ready so you make the axios call
  //     getData();
  //   }
  // }, []);

  const getItemByProp = () => {
    let repeatedItemProp: any = [];

    // data.map((obj) => {
    //   repeatedItemProp.push(obj[itemProp]);
    // });
    const objItemPropCounter: any = {};

    repeatedItemProp.forEach((element: any) => {
      objItemPropCounter[element?.name] =
        (objItemPropCounter[element] || 0) + 1;
    });
    return objItemPropCounter;
  };


  let keys: string[] = []
  let values: number[] = []
  useEffect(() => {
    // debugger;
    // console.log(data)
    if (data !== undefined) {
      
      data.map((obj: any) => {
        keys.push(obj[criteria])
      });
    
      data.map((obj: any) => {
        values.push(obj["count"])
      });

      console.log(keys);
      console.log(values);
    }

  }, [data])
  
  

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
