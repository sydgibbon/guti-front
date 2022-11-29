import React, { useState, useEffect } from "react";
import Select  from "react-select";
import { axiosPrivate } from "../../api/axios";
import "../../style/atomic/SelectComponent.css";



const SelectComponent = ({asset, className, onChange}) => {

  const [loadingData, setLoadingData] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      await axiosPrivate
        .get("http://127.0.0.1:8000/api/assets/" + asset + "/")
        .then((response) => {
          // check if the data is populated
          setData(response.data);
          console.log(response.data);
          // you tell it that you had the result
          setLoadingData(false);
        });
    }
    if (loadingData) {
      // if the result is not ready so you make the axios call
      getData();
    }
  }, []);

  const options = []
  data.forEach((item) => {
    options.push({value: item.id, label: item.name}) 
  });



  return (<>
    <Select onChange={onChange} options={options} className={className}  />
    </>
    );
};

export default SelectComponent;
