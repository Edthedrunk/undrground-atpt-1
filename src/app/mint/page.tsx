// import { MintButtonPopup } from "@/components/minter/mint-button-popup";
// import { MintProvider } from "@/components/minter/mint-context";
// import { MintedImage } from "@/components/minter/minted-image";
import { getSession } from "@/app/actions/session";
import { MintProvider } from "@/components/minter/mint-context";
import { TokenSupply } from "@/components/ui/token-supply";
import myGif from "@/assets/multispin.gif";
import Image from "next/image";

export default async function MintPage() {
  const profile = await getSession();

  return (
    <div className="pt-20">
      <section
        aria-label="Create Your Blok Chain"
        className="bg-grid-white/50 relative pb-10 w-full"
      >
        <div className="h-full relative py-5 z-10 container px-4 md:px-6 gap-10 flex flex-col md:flex-row">
          <div className="backdrop-blur-sm bg-foreground/20 shadow-[0px_0px_20px_rgba(0,0,0,0.5)] rounded overflow-hidden aspect-square relative w-full md:max-w-[400px] mx-auto">
            <video
              className="shrink-0 absolute object-cover inset-0 w-full aspect-square"
              height={500}
              src="/mintpage.mkv"
              autoPlay={true}
              loop={true}
              playsInline={true}
              muted={true}
              width={500}
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
              MINT YOUR BLOKS
            </h1>
            <p className="font-mono max-w-[700px] text-muted-foreground md:text-xl">
              Each Blok you mint will randomly be assigned on of these colors
              from the remaining supply.
            </p>
            <div className="h-4"/>
            <div className="backdrop-blur-sm flex flex-col md:flex-row gap-4 h-full p-4 rounded bg-foreground/20 w-full shadow-[0px_0px_20px_rgba(0,0,0,0.5)]">
              <MintProvider balance={profile?.balance}>
                <span>Text</span>
              </MintProvider>
            </div>
          </div>
        </div>
        <div className="z-0 absolute pointer-events-none inset-0 flex items-center justify-center bg-primary [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
      </section>
      <section className="relative py-12">
        <div className="z-10 relative container mx-auto">
          <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
            CURRENT
          </h2>
          <TokenSupply />
        </div>
      </section>
    </div>
  );
}
