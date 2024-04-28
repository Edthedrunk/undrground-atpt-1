"use client";

import Image from "next/image";
import { useBuilderContext } from "./builder-context";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";

const colors = ["Black", "White", "Orange", "Lime", "Blue", "Gold", "Pink"];

const Inventory = () => {
  const {
    editMode,
    linkOrder,
    setLink,
    currentLink,
    inventory,
    nextLink,
    prevLink,
  } = useBuilderContext();
  return (
    <div className="p-2 bottom-14 sm:top-0 absolute w-full z-10 flex flex-col items-center gap-2">
      <div className="flex gap-2 w-full sm:mx-auto justify-center">
        {colors.map((color) => {
          const colorCount = inventory[color]?.length ?? 0;
          return (
            <div
              key={color}
              className="w-full max-w-[60px] flex flex-col justify-start"
            >
              <div className="hidden sm:flex items-center text-foreground md:text-muted-foreground">
                <p className="text-xs sm:text-sm capitalize font-mono font-semibold">
                  {color}
                </p>
                <p className="ml-auto text-sm  capitalize font-mono font-semibold">
                  {colorCount}
                </p>
              </div>
              <button
                disabled={!editMode}
                className={cn(
                  "grow sm:grow-0 overflow-hidden aspect-square rounded relative font-mono font-semibold md:text-lg",
                  {
                    "border-[2px] border-foreground md:border-muted-foreground":
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
                  "hidden sm:flex items-center text-muted-foreground font-mono font-semibold",
                  {
                    "text-red-500 font-black":
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
      {editMode && (
        <div className="w-full flex gap-2 items-center justify-between sm:justify-center">
          <Button onClick={nextLink}>
            <ArrowLeftCircle />
          </Button>
          <Button onClick={prevLink}>
            <ArrowRightCircle />
          </Button>
        </div>
      )}
    </div>
  );
};

export { Inventory };
