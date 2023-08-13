import Link from "next/link";
import React from "react";

type Column = {
  id?: string | number;
  label: string;
  value?: string;
  content?: (item: any) => JSX.Element;
};

type TableData = {
  id: string | number;
  [key: string]: any;
};

type TableProps = {
  columns: Column[];
  data: TableData[];
};

export default function Table({ columns, data }: TableProps) {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {columns.map((column, index) => (
              <th key={column.id || index} scope="col" className="px-6 py-3">
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr
              key={row.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              {columns.map((column, columnIndex) => (
                <td key={column.id || columnIndex} className="px-6 py-4">
                  {column.label === "Action" ? (
                    column.content ? (
                      column.content(row)
                    ) : (
                      row[column.value]
                    )
                  ) : (
                    <Link href={row.link}>{row[column.value]}</Link>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
