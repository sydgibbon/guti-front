import React, { useState, useEffect } from "react";
import Select  from "react-select";
import { axiosPrivate } from "../../api/axios";



const SelectComponent = ({asset}) => {

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
  data.map((item) => {
    options.push({value: item.id, label: item.name}) 
  });

  const styles = {
    fontSize: 14,
    backgroundColor: 'blue',
  }


  return (
    <Select options={options} unstyled='true' style={styles.select} />
    );
};

export default SelectComponent;
