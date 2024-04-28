"use client";

import Image from "next/image";
import { useBuilderContext } from "./builder-context";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const colors = ["Black", "White", "Orange", "Lime", "Blue", "Gold", "Pink"];

const Inventory = () => {
  const [ctrShift, setCtrShift] = useState(false);
  const {
    editMode,
    linkOrder,
    currentLink,
    inventory,
    nextLink,
    resetLinkOrder,
    setLink,
  } = useBuilderContext();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "Shift" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setCtrShift((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <div className="w-full flex gap-2 sm:mx-auto justify-center">
      {colors.map((color) => {
        const colorCount = inventory[color]?.length ?? 0;
        return (
          <div key={color} className="w-full flex flex-col justify-start">
            <div className="text-sm capitalize font-mono font-semibold hidden sm:flex items-center text-foreground md:text-foreground">
              <p className="">{color}</p>
              <p className="ml-auto">{colorCount}</p>
            </div>
            <button
              disabled={!editMode}
              className={cn(
                "grow sm:grow-0 overflow-hidden aspect-square rounded relative font-mono font-semibold md:text-lg",
                {
                  "border-[2px] border-foreground":
                    color === linkOrder[currentLink] && editMode,
                }
              )}
              key={color}
              onClick={() => {
                if (ctrShift) {
                  resetLinkOrder(color);
                } else {
                  setLink(`${currentLink}`, color);
                  nextLink();
                }
              }}
            >
              <Image
                alt="Token"
                className="pointer-events-none z-0 w-full right-0 absolute bottom-0 [mask]"
                height={200}
                src={`/${color.toLowerCase()}.png`}
                width={200}
              />
            </button>
            <div
              className={cn(
                "hidden sm:flex items-center text-foreground font-mono font-semibold",
                {
                  "text-red-700 font-black":
                    Object.values(linkOrder).filter((c) => c === color).length >
                    inventory[color]?.length,
                }
              )}
            >
              <p className="text-sm capitalize">Used</p>
              <p className="ml-auto text-sm capitalize">
                {Object.values(linkOrder).filter((c) => c === color).length}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export { Inventory };
