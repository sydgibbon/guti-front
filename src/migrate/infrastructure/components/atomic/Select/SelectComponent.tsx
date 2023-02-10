import React, { useState, useEffect } from "react";
import Select from "react-select";
import { axiosPrivate } from "../../../../../api/axios";
import { OptionValue, SelectComponentProps } from "../types";
import "./SelectComponent.css";

const options: { value: string; label: string }[] = [];

const SelectComponent = ({ id, className, onChange }: SelectComponentProps) => {
  const [loadingData, setLoadingData] = useState(true);
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    async function getData() {
      await axiosPrivate
        .get("http://127.0.0.1:8000/api/assets/" + id + "/")
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

  data.forEach((item: OptionValue) => {
    if (item.name) {
      options.push({ value: item.id, label: item.name });
    }
  });

  return (
    <>
      <Select
        id={id}
        onChange={(choice) => onChange({ id: id, value: choice?.value })}
        options={options}
        className={className}
      />
    </>
  );
};

export default SelectComponent;
