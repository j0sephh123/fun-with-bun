import { PropsWithChildren } from "react";
import Dialog from "../dialog/Dialog";
import TheNavbar from "../TheNavbar";

type Props = PropsWithChildren;

export default function AppContainer({ children }: Props) {
  return (
    <>
      <TheNavbar />
      {children}
      <Dialog />
    </>
  );
}
