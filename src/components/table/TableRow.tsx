import { ReactNode } from "react";

type Props = { elements: ReactNode[] };

export default function TableRow({ elements }: Props) {
  return (
    <tr>
      {elements.map((element, index) => (
        <td key={index}>{element}</td>
      ))}
    </tr>
  );
}
