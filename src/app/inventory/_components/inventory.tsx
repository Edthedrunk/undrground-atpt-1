"use client";

import Image from "next/image";
import { useBuilderContext } from "./builder-context";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";

const colors = ["Black", "White", "Orange", "Lime", "Blue", "Gold", "Pink"];

const Inventory = () => {
  const { editMode, linkOrder, setLink, currentLink, inventory, nextLink } =
    useBuilderContext();
  return (
    <div className="">
      <div className="flex gap-2 sm:mx-auto justify-center">
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
                  setLink(`${currentLink}`, color);
                  nextLink();
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
                      Object.values(linkOrder).filter((c) => c === color)
                        .length > inventory[color]?.length,
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
    </div>
  );
};

export { Inventory };
