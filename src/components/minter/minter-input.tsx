"use client";

import { Button } from "../ui/button";
import { MinusIcon, PlusIcon } from "lucide-react";
import { useMintContext } from "./mint-context";

const MinterInput = ({ className }: { className?: string }) => {
  const {setCount, count} = useMintContext();

  const handleClick = (amount: number) => {
    if (count + amount < 0) return;
    setCount(count + amount);
  };

  return (
    <div className="flex">
      <Button
        onClick={() => handleClick(-1)}
        size="sm"
        className="p-2 rounded-r-none"
      >
        <MinusIcon className="size-5" />
      </Button>
      <div className="w-20 border grid place-content-center text-lg">
        {count}
      </div>
      <Button
        onClick={() => handleClick(1)}
        size="sm"
        className="p-2 rounded-l-none"
      >
        <PlusIcon className="size-5" />
      </Button>
    </div>
  );
};

export { MinterInput };
