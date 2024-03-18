import { getSession } from "@/app/server/session";
import { MintedImage } from "@/components/minter/minted-image";
import { MintButtonPopup } from "@/components/minter/mint-button-popup";
import { MintProvider } from "@/components/minter/mint-context";

{
  /* 

We can move all the logic into this page to keep
as much on the server as possible instead of all
in the old 'minterone' component. We'll keep the
mint button and mint image components in here, 
so they can provide the client side functionality
for minting and displaying the minted image.

*/
}

export default async function Home() {
  const profile = await getSession();

  return (
    <div className="flex justify-center">
      <div className="h-4" />
      <div className="mx-auto w-full flex flex-col sm:flex-row gap-4 bg-muted/40 backdrop-blur border p-4 rounded-lg">
        <div className="flex-col w-full md:w-1/2">
          <h2 className="font-bold text-3xl">COLLECT YOUR BLOKS</h2>
          <div className="font-mono text-muted-foreground">
            <p>
              This is the beginning of your journey with the Blokchain You will
              need 42 Bloks to create your Blokchain in phase 2! The colour of
              the bloks you mint are chosen randomly by the contract and will be
              revealed instantly on the collecting page and in your UP! Current
              supplies are
            </p>

            {/* use spacers like this intead of <br /> 
            its more controllable */}
            <div className="h-4" />

            <div className="flex justify-between">
              <span>Pink</span>
              <span>xxxx / 1319</span>
            </div>
            <div className="flex justify-between">
              <span>Blue</span>
              <span>xxxx / 1764</span>
            </div>
            <div className="flex justify-between">
              <span>Lime</span>
              <span>xxxx / 2898</span>
            </div>
            <div className="flex justify-between">
              <span>Orange</span>
              <span>xxxx / 3045</span>
            </div>
            <div className="flex justify-between">
              <span>Red</span>
              <span>xxxx / 5002</span>
            </div>
            <div className="flex justify-between">
              <span>Black</span>
              <span>xxxx / 13986</span>
            </div>
            <div className="flex justify-between">
              <span>White</span>
              <span>xxxx / 13986</span>
            </div>
            <br />
            <div className="flex justify-between">
              <span>total</span>
              <span>xxxx / 42000</span>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <MintProvider balance={profile?.balance}>
            <MintedImage className="shrink-0 w-auto h-auto object-cover" />
            <MintButtonPopup />
          </MintProvider>
        </div>
      </div>
    </div>
  );
}
