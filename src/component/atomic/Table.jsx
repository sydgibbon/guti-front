import React from "react";
import { TbCaretDown } from "react-icons/tb";

const Table = ({ data, columns, itemProps }) => {
  return (
    <table className="w-full">
      <thead>
        <tr className="gap-2 border-secondary-dark border-y text-left text-xs font-semibold bg-medium-gray">
          <th className="pl-2">
            <input type="checkbox" className="w-4 h-4 mt-2 ml-0.5 px-2"></input>
          </th>
          {columns.map((column, index) => {
            if (index === 0) {
              return (
                <th className="px-2">
                  <span>{column}</span>
                  <TbCaretDown className="inline my-auto" />
                </th>
              );
            } else {
              return <th className="px-2">{column}</th>;
            }
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr
            key={item.id}
            className="gap-2 text-xs bg-white border-secondary-dark border-b "
          >
            <td className="pl-2">
              <input type="checkbox" className="w-4 h-4 mt-2 ml-0.5" />
            </td>
            {itemProps.map((itemProp) => (
              <td className="pl-2">{item[itemProp]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
