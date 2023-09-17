import { PropsWithChildren } from "react";
import NotFoundIcon from "../icons/NotFoundIcon";

type Props = {
  isEmpty: boolean;
} & PropsWithChildren;

export default function TableWrapper({ children, isEmpty }: Props) {
  if (isEmpty) {
    return (
      <div className="flex flex-col items-center justify-center mt-10">
        <NotFoundIcon />
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
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}
