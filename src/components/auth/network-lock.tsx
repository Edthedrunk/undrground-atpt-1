"use client";

import { useEffect, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { BrowserProvider } from "ethers";
import { AlertCircleIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const NetworkLock = () => {
  const [open, setOpen] = useState(false);
  const [chainId, setChainId] = useState<number | null>(null);

  useEffect(() => {
    const check = async () => {
      const provider = new BrowserProvider(window.lukso);
      const network = await provider.getNetwork();
      const _chainId = Number(network.chainId);

      setChainId(_chainId);
    };

    check();
  }, []);

  useEffect(() => {
    const check = async () => {
      if (chainId && chainId !== 42) {
        setOpen(true);
      }
    };

    check();
  }, [chainId]);

  const handleChangeNetwork = async () => {
    try {
      await window.lukso.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x2a" }],
      });

      setOpen(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(prev) => {
        setOpen(!prev);
      }}
    >
      <DialogContent className="overflow-x-hidden p-0">
        <div className="relative flex h-64 flex-col">
          <div className="z-10 flex h-full flex-col items-start p-6">
            <div className="flex flex-row items-center gap-2 ">
              <AlertCircleIcon className="h-6 w-6 stroke-[3px] " />
              <h1 className="text-2xl font-semibold">
                You have a network mismatch
              </h1>
            </div>
            <p className="font-mono text-muted-foreground">
              This application is only available on mainnet, please change to
              mainnet in your extension and refresh.
            </p>
            <div className="h-full" />
            <Button onClick={handleChangeNetwork}>Change to Mainnet</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export { NetworkLock };
