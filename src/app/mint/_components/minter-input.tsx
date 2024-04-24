"use client";

import { Button } from "@/components/ui/button";
import { MinusIcon, PlusIcon } from "lucide-react";
import { useMintContext } from "./mint-context";
import { env } from "@/env";

const MinterInput = ({ className }: { className?: string }) => {
  const { balance, setCount, count } = useMintContext();

  const handleClick = (amount: number) => {
    if (count + amount < 0) return;
    setCount(count + amount);
  };

  return (
    <div className="flex flex-col">
      <p className="text-primary text-sm">
        {`${env.NEXT_PUBLIC_MINT_PRICE} ${balance.currency} Per`}
      </p>
      <div className="flex grow">
        <Button
          variant="secondary"
          onClick={() => handleClick(-1)}
          size="icon"
          className="p-2 rounded-r-none"
        >
          <MinusIcon className="size-5" />
        </Button>
        <input
          value={count}
          type="number"
          min={0}
          onChange={(e) => setCount(parseInt(e.target.value))}
          className="w-full bg-background grid place-content-center text-lg px-4"
        />
        <Button
          variant="secondary"
          onClick={() => handleClick(1)}
          size="icon"
          className="p-2 rounded-l-none"
        >
          <PlusIcon className="size-5" />
        </Button>
      </div>
      <p className="text-primary text-sm">
        {`Total: ${(Number(env.NEXT_PUBLIC_MINT_PRICE) * count).toFixed(2)} ${
          balance.currency
        }`}
      </p>
    </div>
  );
};

export { MinterInput };
