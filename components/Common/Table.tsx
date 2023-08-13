import React from "react";

export default function Table({
  columns,
  data,
}: {
  columns: Column[];
  data: Data[];
}) {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {columns.map((column, i) => (
              <th
                key={column.id + column.label}
                scope="col"
                className="px-6 py-3"
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr
              key={i}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              {columns.map((column) => (
                <td key={column.id + column.label} className="px-6 py-4">
                  {column.content ? column.content(item) : item[column.value]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

type Column = {
  id: string | number;
  label: string;
  value?: string;
  content?: (item: any) => JSX.Element;
};

type Data = {
  id: string | number;
  content: (item: any) => JSX.Element;
};
