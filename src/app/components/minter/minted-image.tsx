"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import myGif from "@/assets/multispin.gif";
import { useMintContext } from "./mint-context";

const MintedImage = ({ className }: { className?: string }) => {
  const { image } = useMintContext();

  return (
    <div
      className={cn(
        "aspect-square rounded-lg relative bg-muted overflow-hidden",
        className
      )}
    >
      <Image
        src={image == "" ? myGif : image}
        alt=""
        width={500}
        height={500}
        className="absolute object-cover inset-0 w-full h-full"
      />
    </div>
  );
};

export { MintedImage };
