// import { MintButtonPopup } from "@/components/minter/mint-button-popup";
// import { MintProvider } from "@/components/minter/mint-context";
// import { MintedImage } from "@/components/minter/minted-image";
import { getSession } from "@/app/actions/session";
import { MintProvider } from "@/components/minter/mint-context";
import { TokenSupply } from "@/components/ui/token-supply";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MinterInput } from "@/components/minter/minter-input";
import { MintButton } from "@/components/minter/mint-button";
import Image from "next/image";

export default async function MintPage() {
  const profile = await getSession();

  return (
    <div>
      <section
        aria-label="Mint Your Blocks"
        className="w-full pt-20 min-h-[40vh] max-h-[60vh] h-[55vw] bg-gradient-to-b from-background to-muted-foreground"
      >
        <div className="[mask-image:_linear-gradient(to_right,transparent_0,_black_20px,_black_calc(100%-10px),transparent_100%)] h-full relative py-5 z-10 container px-4 md:px-6 border-rounded">
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                MINT YOUR BLOKS
              </h1>
              <p className="font-mono mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Each Blok you mint will randomly be assigned one of these colors
                from the remaining supply.
              </p>
            </div>
          </div>
          <Image
            alt="Mint"
            className="pointer-events-none z-0 w-full right-0 absolute bottom-0 [mask]"
            height={300}
            src="/mintpage.png"
            width={1980}
          />
        </div>
      </section>
      <section
        aria-label="Mint Section"
        className="relative bg-grid-white/20 w-full py-20"
      >
        <div className="relative z-10 container mx-auto">
          <div className="flex flex-col md:flex-row gap-10 w-full">
            <div className="flex flex-col">
              <div className="h-full flex flex-col gap-4 p-4 rounded bg-foreground">
                <div className="flex gap-4">
                  <Avatar>
                    <AvatarImage src={profile?.image} />
                    <AvatarFallback>{profile?.name[0]}</AvatarFallback>
                  </Avatar>
                  {profile ? (
                    <div className="flex flex-col">
                      <p className="capitalize text-background font-semibold font-lg">{`${
                        profile?.name
                      } · ${profile?.address.slice(0, 6)}...`}</p>
                      <p className="text-primary text-sm">
                        {`${profile?.balance.amount.toFixed(2) ?? 0.0} ${
                          profile?.balance.currency
                        }`}
                      </p>
                    </div>
                  ) : (
                    <div className="flex flex-col">
                      <p className="capitalize text-background font-semibold font-lg">
                        Please Sign In
                      </p>
                      <p className="text-primary text-sm">
                        To mint your bloks.
                      </p>
                    </div>
                  )}
                </div>
                <MintProvider balance={profile?.balance}>
                  <MinterInput />
                  <div className="h-full min-h-10" />
                  <MintButton disabled={!profile} />
                </MintProvider>
              </div>
            </div>
            <TokenSupply />
          </div>
        </div>
        <div className="z-0 absolute pointer-events-none inset-0 flex items-center justify-center bg-primary [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </section>
    </div>
  );
}
