// create a client context so we dont have to prop
// drill the client to every component that needs it
// for count and profile balance
"use client";

import { createContext, useContext, useState } from "react";

export const MintContext = createContext<{
  count: number;
  setCount: (count: number) => void;
  balance: { amount: number; currency: string };
  image: string;
  setImage: (image: string) => void;
}>({
  count: 0,
  setCount: () => {},
  balance: { amount: 0, currency: "" },
  image: "",
  setImage: () => {},
});

export const MintProvider = ({
  children,
  balance,
}: {
  children: React.ReactNode;
  balance?: { amount: number; currency: string };
}) => {
  const [count, setCount] = useState(0);
  const [image, setImage] = useState("");
  const balanceValue = balance || { amount: 0, currency: "" };

  return (
    <MintContext.Provider
      value={{ count, setCount, balance: balanceValue, setImage, image }}
    >
      {children}
    </MintContext.Provider>
  );
};

export const useMintContext = () => {
  return useContext(MintContext);
};
