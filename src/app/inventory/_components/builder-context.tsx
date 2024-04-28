"use client";

import { createContext, useContext, useMemo, useRef, useState } from "react";

interface ContextProps {
  linkOrder: {
    [key: string]: string;
  };
  setLink: (link: string, color: string) => void;
}

export const BuilderContext = createContext<ContextProps>({
  linkOrder: {},
  setLink: function (link: string, color: string): void {
    throw new Error("Function not implemented.");
  },
});

export const BuilderProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // random color generator
  const pickRandomColor = () => {
    const colors = ["Black", "White", "Blue", "Lime", "Pink", "Orange", "Gold"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const [linkOrder, setLinkOrder] = useState<{ [key: string]: string }>(
    Object.fromEntries([...Array(42)].map((i, index) => [index + 1, pickRandomColor()]))
  );

  const setLink = (link: string, color: string) => {
    setLinkOrder({ ...linkOrder, [link]: color });
  };

  // const getDataURL = () => {
  //   if (!_renderRef.current) {
  //     return undefined;
  //   }
  //   const url = _renderRef.current.toDataURL("image/png");
  //   return url;
  // };

  const contextValue = useMemo(
    () => ({
      linkOrder,
      setLink,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [linkOrder]
  );

  return (
    <BuilderContext.Provider value={contextValue}>
      {children}
    </BuilderContext.Provider>
  );
};

export const useBuilderContext = () => {
  return useContext(BuilderContext);
};
