"use client";

import { mintCost } from "@/config/site";
import { Button } from "../ui/button";
import { MintedImage } from "./minted-image";
import { MinterInput } from "./minter-input";
import { MintButton } from "./mint-button";

const MinterOne = () => {
  return (
    <div className="w-full lg:w-2/3 flex flex-col sm:flex-row gap-4 bg-muted/40 backdrop-blur border p-4 rounded-lg">
      <div className="flex-col w-2/3">
        <h2 className="font-bold text-3xl">COLLECT YOUR BLOKS</h2>
        <div className="font-mono text-muted-foreground">
  This is the beginning of your journey with the Blokchain<br />
  You will need 42 Bloks to create your Blokchain in phase 2!<br />
  The colour of the bloks you mint are chosen randomly by the contract<br />
  and will be revealed instantly on the collecting page and in your UP!<br />
  <br />
  Current supplies are -<br />
  <div className="flex justify-between"><span>Pink</span><span>xxxx / 1319</span></div>
  <div className="flex justify-between"><span>Blue</span><span>xxxx / 1764</span></div>
  <div className="flex justify-between"><span>Lime</span><span>xxxx / 2898</span></div>
  <div className="flex justify-between"><span>Orange</span><span>xxxx / 3045</span></div>
  <div className="flex justify-between"><span>Red</span><span>xxxx / 5002</span></div>
  <div className="flex justify-between"><span>Black</span><span>xxxx / 13986</span></div>
  <div className="flex justify-between"><span>White</span><span>xxxx / 13986</span></div>
  <br />
  <div className="flex justify-between"><span>total</span><span>xxxx / 42000</span></div>
</div>
      </div>
      <div className="aspect-w-16 aspect-h-9 w-full max-w-screen-auto">
  <MintedImage className="shrink-0 w-auto h-auto object-cover" />



        <div className="flex flex-row gap-4 justify-center">
          <div className="shrink-0 border rounded-lg px-4 grid place-content-center bg-background">
            <span>{`${mintCost} Per`}</span>
          </div>
          <MinterInput />
        </div>
        <MintButton />
      </div>
    </div>
  );
};

export { MinterOne };
