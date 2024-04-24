import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { TokenSupply } from "@/components/layout/token-supply";

export default function Home() {
  return (
    <div>
      <section
        aria-label="Create Your Blok Chain"
        className="w-full pt-20 min-h-[650px] max-h-[85vh] h-[75vw] bg-gradient-to-b from-background to-muted-foreground"
      >
        <div className="[mask-image:_linear-gradient(to_right,transparent_0,_black_20px,_black_calc(100%-10px),transparent_100%)] h-full relative py-5 z-10 container px-4 md:px-6 border-rounded">
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="space-y-4 text-center">
              <h1 className="text-5xl font-bold tracking-tighter md:text-5xl lg:text-6xl">
                CREATE YOUR BLOK CHAIN
              </h1>
              <p className="font-mono mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                This is the beginning of your journey with the Blokchain You
                will need 42 Bloks to create your Blokchain in the second phase
                of the process!
              </p>
            </div>
            <Link className={buttonVariants()} href="/mint">
              MINT YOUR BLOCKS
            </Link>
          </div>
          <Image
            alt="Hero"
            className="pointer-events-none z-0 w-full right-0 absolute bottom-0 [mask]"
            height={300}
            src="/hero.png"
            width={1980}
          />
        </div>
      </section>
      <section
        aria-label="Step #1"
        className="flex flex-col container mx-auto py-12"
      >
        <div className="items-center flex flex-col md:flex-row">
          <div className="flex flex-col items-start">
            <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
              STEP #1
            </h2>
            <div className="h-1" />
            <p className="text-muted-foreground font-semibold font-lg font-mono">
              :: Minting Your Bloks
            </p>
            <div className="h-4" />
            <p className="text-muted-foreground font-mono text-sm md:text-base">
              The process of minting your Bloks is simple, connect your
              universal profile. Click mint you will be redirected to the
              minting page and from there you can select how many Bloks you want
              and click mint! Each Blok will be assigned a random color from the
              available colors left in supply, when the transaction completes
              you will be redirected to the inventory page where you can see the
              total number of Bloks you have minted and their colors.
            </p>
            <div className="h-4" />
            <Link className={buttonVariants()} href="/mint">
              MINT YOUR BLOCKS
            </Link>
          </div>
          <Image
            src="/step1.png"
            priority
            alt="Step 1"
            width={600}
            height={600}
            className="md:min-w-[400px] lg:min-w-[500px] w-full max-w-[500px]"
          />
        </div>
        <div className="h-12" />
        <TokenSupply />
      </section>
      <section className="relative py-12 bg-foreground bg-grid-white/5">
        <div
          aria-label="Step #2"
          className="relative z-10 flex flex-col container mx-auto text-muted"
        >
          <div className="flex flex-col items-start">
            <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
              STEP #2
            </h2>
            <div className="h-1" />
            <p className="text-muted font-semibold font-lg font-mono">
              :: Crafting your Blok Chain{" "}
              <span className="text-bold">(Coming Soon)</span>
            </p>
            <div className="h-4" />
            <p className="text-muted font-mono text-sm md:text-base">
              In phase two you will be able to select 42 of the Bloks in your
              inventory to create your Chain. The color order you choose will be
              the order in which the Bloks will be added to your final Chain.
              Please note that this is one way process, once you mint your Chain
              and burn your Bloks you cannot undo the process. So proceed with
              care when crafting your desired Blok Chain.
            </p>
            <div className="h-4" />
            <Link
              className={buttonVariants({
                variant: "secondary",
              })}
              href="/mint"
            >
              MINT YOUR BLOCKS
            </Link>
          </div>
          <Image
            src="/step2.png"
            alt="Step 2"
            width={1980}
            height={600}
            className=""
          />
        </div>
        <div className="z-0 absolute pointer-events-none inset-0 flex items-center justify-center bg-foreground [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </section>
      <section className="relative py-12 bg-primary bg-grid-white/20">
        <div
          aria-label="Step #3"
          className="relative z-10 flex flex-col container mx-auto"
        >
          <div className="flex flex-col items-start">
            <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
              STEP #3
            </h2>
            <div className="h-1" />
            <p className="text-muted-foreground font-semibold font-lg font-mono">
              :: Claiming your charms{" "}
              <span className="text-bold">(coming slightly less soon)</span>
            </p>
            <div className="h-4" />
            <p className="text-muted-foreground font-mono text-sm md:text-base">
              Phase 3 is the backbone of the BlokCharms ecosystem. Your
              BlokChain will only be able to claim each BlokCharm once. Most
              BlokCharms will be token gated by the partnering project, 1
              Blokchain + ANY Partner NFT = 1 Partner Charm Charms will be
              separately tradeable Free Claims with rarity structures similar to
              BLOKS
            </p>
            <div className="h-4" />
            <Link className={buttonVariants()} href="/mint">
              MINT YOUR BLOCKS
            </Link>
          </div>
        </div>
        <div className="z-0 absolute pointer-events-none inset-0 flex items-center justify-center bg-primary [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </section>
    </div>
  );
}
