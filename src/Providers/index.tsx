import { ReactNode } from "react";
import { CartProvider } from "./Cart/index";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return <CartProvider>{children}</CartProvider>;
};

export default Providers;
