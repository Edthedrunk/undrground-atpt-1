"use client";

import { useTransition } from "react";
import { LoaderButton } from "../ui/loader-button";
import { mint } from "@/lib/mint";
import { useMintContext } from "./mint-context";
import { env } from "@/env";

const MintButton = ({ disabled }: {
  disabled?: boolean
}) => {
  const [isPending, startTransition] = useTransition();
  const { balance, count } = useMintContext();

  if (balance.amount < parseInt(env.NEXT_PUBLIC_MINT_PRICE) * count)
    return null;

  const handleClick = () => {
    startTransition(async () => {
      if (count === 0) return;
      const mintCall = await mint(count);
    });
  };

  return (
    <LoaderButton
      disabled={disabled}
      isLoading={isPending}
      onClick={handleClick}
    >
      Mint
    </LoaderButton>
  );
};

export { MintButton };
