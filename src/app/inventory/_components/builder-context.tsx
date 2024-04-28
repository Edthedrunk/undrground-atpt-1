"use client";

import { createContext, useContext, useMemo, useRef, useState } from "react";

interface ContextProps {
  linkOrder: {
    [key: string]: string;
  };
  setLink: (link: string, color: string) => void;
  currentLink: number;
  nextLink: () => void;
  prevLink: () => void;
  resetLinkOrder: () => void;
  editMode: boolean;
  setEditMode: (editMode: boolean) => void;
  inventory: {
    [key: string]: string[];
  };
}

const defaultOrder = Object.fromEntries(
  [...Array(42)].map((i, index) => [index + 1, index == 0 ? "White" : "Black"])
);

export const BuilderContext = createContext<ContextProps>({
  linkOrder: {},
  setLink: function (link: string, color: string): void {
    throw new Error("Function not implemented.");
  },
  currentLink: 1,
  nextLink: function (): void {
    throw new Error("Function not implemented.");
  },
  prevLink: function (): void {
    throw new Error("Function not implemented.");
  },
  resetLinkOrder: function (): void {
    throw new Error("Function not implemented.");
  },
  editMode: false,
  setEditMode: function (editMode: boolean): void {
    throw new Error("Function not implemented.");
  },
  inventory: {},
});

export const BuilderProvider = ({
  children,
  inventory,
}: {
  children: React.ReactNode;
  inventory: { [key: string]: string[] };
}) => {
  const _inventory = inventory;
  const [editMode, setEditMode] = useState(false);
  const [currentLink, setCurrentLink] = useState(1);
  const [linkOrder, setLinkOrder] = useState<{ [key: string]: string }>(
    defaultOrder
  );

  const nextLink = () => {
    if (currentLink === 42) {
      setCurrentLink(1);
    } else {
      setCurrentLink((prev) => prev + 1);
    }
  };

  const prevLink = () => {
    if (currentLink === 1) {
      setCurrentLink(42);
    } else {
      setCurrentLink((prev) => prev - 1);
    }
  };

  const resetLinkOrder = () => {
    setLinkOrder(defaultOrder);
    setCurrentLink(1);
  };

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
      currentLink,
      nextLink,
      prevLink,
      resetLinkOrder,
      editMode,
      setEditMode,
      inventory: _inventory,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [linkOrder, currentLink, editMode]
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
