import { PropsWithChildren } from "react";

type Props = {
  isEmpty: boolean;
} & PropsWithChildren;

export default function TableWrapper({ children, isEmpty }: Props) {
  if (isEmpty) {
    return (
      <div className="flex flex-col items-center justify-center mt-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-24 h-24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
          />
        </svg>
        <h1 className="prose text-3xl font-bold">No items found</h1>
      </div>
    );
  }
  return (
    <div className="overflow-x-auto mt-4">
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Created At</th>
            <th>Updated At</th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}
