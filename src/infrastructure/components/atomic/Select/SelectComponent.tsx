import React from "react";
import Select from "react-select";
import { SelectComponentProps } from "../types";
import "./SelectComponent.css";

const options: { value: string; label: string }[] = [];

const SelectComponent = ({ id, className, onChange }: SelectComponentProps) => {

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
