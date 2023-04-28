import { useState } from "react";
import SelectComponent from "../atomic/Select/SelectComponent";

import { TbPlus, TbList, TbMap } from "react-icons/tb";
import { FaPaste, FaRegEye } from "react-icons/fa";
import { FormProps } from "./types";

let formData = new FormData();

let formFields: any = {};

export default function FormsTemplate({
  inputPropierties,
  FormHeader,
}: FormProps) {
  const [openSuccessAlert, setOpenSuccessAlert] = useState(false);

  const [openErrorAlert, setOpenErrorAlert] = useState(false);

  const HandleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    Object.keys(formFields).forEach((key) => {
      formData.append(key, formFields[key]);
    });
    // saveAsset("computers", formData, setOpenSuccessAlert, setOpenErrorAlert);
  };

  const handleChange = (e: any) => {
    formFields[e.target.id] = e.target.value;
  };

  const handleChangeSelect = (data: any) => {
    formFields[data.id] = data.value;
  };

  const renderInputType = (props: any) => {
    switch (props.type) {
      case "select":
        if (props.data) {
          return (
            <select className="w-full m-2 rounded-md border-secondary-dark bg-medium-gray">
              {props.data.map((item: any) => {
                return <option value={item}> {item} </option>;
              })}
              {props.data}
            </select>
          );
        }
        return (
          <SelectComponent
            onChange={handleChangeSelect}
            id={props.key}
            className="w-full rounded-md"
          />
        );

      case "input":
        return (
          <input
            type={props.isPassword ? "password" : "text"}
            onChange={handleChange}
            id={props.key}
            className="w-full h-10 px-2 rounded-md bg-medium-gray"
          />
        );

      case "textarea":
        return (
          <textarea
            rows={3}
            className="w-full p-2 rounded-md border-secondary-dark bg-medium-gray"
          ></textarea>
        );

      case "checkbox":
        return props.subCheckBox.map((checkBox: any) => {
          return (
            <div className="px-4">
              <input id={props.key} type="checkbox" className="mr-2"></input>
              {/* falta idkey */}
              <span>{checkBox.subTitle}</span>
            </div>
          );
        });

      case "number":
        return (
          <input
            type="number"
            onChange={handleChange}
            id={props.key}
            className="w-full h-10 px-2 rounded-md bg-medium-gray"
            min="0"
          />
        );

      case "file":
        return (
          <div className="px-12 py-2 text-center border border-dashed rounded-md border-secondary-dark bg-medium-gray">
            <p className="mb-3 text-sm font-semibold">
              File(s) (40 Mio max){" "}
              <a
                href="help"
                title="Help"
                className="text-[#3a5693] font-mono text-lg"
              >
                i
              </a>
            </p>
            <p className="text-sm font-semibold">
              Drag and drop your file here, or
            </p>
            <input
              type="file"
              accept=".jpg, .jpeg, .png"
              multiple
              className="w-full m-0 bg-white border rounded-md border-secondary-dark"
            />
          </div>
        );

      case "text":
        return <div className="m-2">No room found or selected</div>;

      case "color":
        return (
          <input
            type="color"
            value="#e8594b"
            className="w-full px-2 rounded-md h-9 border-secondary-dark bg-medium-gray"
          ></input>
        );
    }
  };

  const FieldIconStyle =
    "cursor-pointer h-10 flex items-center border-secondary-dark px-2";

  return (
    <div className="flex flex-col items-center m-4 divide-y-reverse contenedor">
      {/* {FormHeader.map((header: any) => (
        <div className="flex justify-center w-full px-5 py-4 border border-b-0 header md:justify-start bg-medium-gray h-1/6 rounded-t-md border-secondary-dark">
          {appItems[0] &&
            appItems[0].itemContent?[0] &&
            appItems[0]?.itemContent?[0].itemContent.map((app) => {
              return header.title === app.name
                ? app.icon(header.style, header.size)
                : "";
            })}
          <p className="my-auto text-base font-medium">
            New Item - {header.title}
          </p>
        </div>
      ))} */}
      <form
        onSubmit={HandleSubmit}
        action={`/computers`}
        method="POST"
        encType="multipart/form-date"
        className="w-full h-full divide-y divide-y-reverse"
      >
        <div className="grid w-full h-full grid-cols-1 px-2 py-2 bg-white border inputs-container md:grid-cols-2 gap-x-2 border-secondary-dark">
          {inputPropierties.map((field: any) => (
            <div className={`mx-4 input-${field.key} my-4`}>
              <p className="mb-2 text-sm">{field.title}</p>
              <div
                className={`flex ${
                  field.type === "checkbox" || field.type === "file"
                    ? "flex flex-wrap flex-col md:flex-row ml-4 md:ml-0"
                    : "border border-secondary-dark bg-medium-gray divide-x"
                } rounded-md  `}
              >
                {renderInputType(field)}
                {field.addList ? (
                  <div className={FieldIconStyle}>
                    <TbList />
                  </div>
                ) : (
                  ""
                )}
                {field.addNew ? (
                  <div className={FieldIconStyle}>
                    <TbPlus />
                  </div>
                ) : (
                  ""
                )}
                {field.addMap ? (
                  <div className={FieldIconStyle}>
                    <TbMap />
                  </div>
                ) : (
                  ""
                )}
                {field.isPassword ? (
                  <div
                    // onMouseDown={(e) => {
                    //   document.getElementById(field.key).type = "text";
                    // }}
                    // onMouseUp={(e) => {
                    //   document.getElementById(field.key).type = "password";
                    // }}
                    className={FieldIconStyle}
                  >
                    <FaRegEye />
                  </div>
                ) : (
                  ""
                )}
                {field.copy ? (
                  <div
                    className={FieldIconStyle}
                    // onClick={(e) => {
                    //   navigator.clipboard
                    //     .writeText
                    //     // document?.getElementById(field.key).value
                    //     ();
                    // }}
                  >
                    <FaPaste />
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center w-full px-5 py-4 mb-2 bg-white border form-footer h-1/6 rounded-b-md border-secondary-dark md:justify-end">
          <button className="flex items-center px-4 py-2 text-white border-2 rounded-md md:mr-4 border-orange-dark bg-primary-light hover:border-black">
            <TbPlus className="mr-1" />
            <p className="text-lg font-medium">Add</p>
          </button>
        </div>
      </form>
    </div>
  );
}
