"use client";

import { useTransition } from "react";
import { LoaderButton } from "@/components/ui/loader-button";
import { mint } from "@/lib/mint";
import { useMintContext } from "./mint-context";
import { env } from "@/env";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const MintButton = ({ disabled }: { disabled?: boolean }) => {
  const [isPending, startTransition] = useTransition();
  const { balance, count } = useMintContext();
  const router = useRouter();

  if (balance.amount < parseInt(env.NEXT_PUBLIC_MINT_PRICE) * count)
    return null;

  const handleClick = () => {
    startTransition(async () => {
      if (count === 0) return;
      const mintCall = await mint(count);
      if (mintCall.status) {
        toast.success("Minted");
        router.push("/inventory");
      } else {
        toast.error("Error Minting");
      }
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
