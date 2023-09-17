import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";
import Dialog from "../dialog/Dialog";

type Props = PropsWithChildren;

const queryClient = new QueryClient();

export default function AppContainer({ children }: Props) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <Dialog />
    </QueryClientProvider>
  );
}
