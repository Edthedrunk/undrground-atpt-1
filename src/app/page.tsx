import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export default async function Home() {
  const color = [
    {
      name: "Pink",
      total: 1319,
      mocData: 100,
    },
    {
      name: "Gold",
      total: 1764,
      mocData: 140,
    },
    {
      name: "Blue",
      total: 2898,
      mocData: 180,
    },
    {
      name: "Lime",
      total: 3045,
      mocData: 400,
    },
    {
      name: "Orange",
      total: 5002,
      mocData: 600,
    },
    {
      name: "Black",
      total: 13986,
      mocData: 800,
    },
    {
      name: "White",
      total: 13986,
      mocData: 800,
    },
  ];

  return (
    <div>
      <section
        aria-label="Create Your Blok Chain"
        className="w-full pt-20 min-h-[60vh] max-h-[80vh] h-[75vw] bg-gradient-to-b from-background to-muted-foreground"
      >
        <div className="[mask-image:_linear-gradient(to_right,transparent_0,_black_20px,_black_calc(100%-10px),transparent_100%)] h-full relative py-5 z-10 container px-4 md:px-6 border-rounded">
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Create Your Blok Chain
              </h1>
              <p className="font-mono mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                This is the beginning of your journey with the Blokchain You
                will need 42 Bloks to create your Blokchain in the second phase
                of the process!
              </p>
            </div>
            <Link className={buttonVariants()} href="#">
              Mint Your Bloks
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
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
              Step #1
            </h2>
            <div className="h-1" />
            <p className="text-muted-foreground font-semibold font-lg font-mono">
              :: Minting Your Bloks
            </p>
            <div className="h-4" />
            <p className="text-muted-foreground font-mono text-sm md:text-base">
              The process of minting your Bloks is simple, connect your
              universal profile. Click mint and select how many Bloks you want
              and click mint! Each Blok will be assigned a random color from the
              available colors left in supply, when the transaction completes
              you will be redirected to the inventory page where you can see the
              total number of Bloks you have minted and their colors.
            </p>
          </div>
          <Image
            src="/step1.png"
            alt="Step 1"
            width={600}
            height={600}
            className="md:min-w-[400px] lg:min-w-[500px] w-full max-w-[500px]"
          />
        </div>
        <div className="h-4" />
        <p className="text-muted-foreground font-semibold font-lg font-mono">
          :: Supply Totals
        </p>
        <div className="h-4" />
        <div className="flex flex-col gap-2">
          {color.map((item) => (
            <div key={item.name} className="w-full">
              <p className="font-mono text-muted-foreground text-sm md:text-base">{`${item.name} : ${item.mocData} / ${item.total}`}</p>
              <Progress value={(item.mocData / item.total) * 100} />
            </div>
          ))}
        </div>
      </section>
      <section className="py-12 bg-foreground">
        <div
          aria-label="Step #2"
          className="flex flex-col container mx-auto text-muted"
        >
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
              Step #2
            </h2>
            <div className="h-1" />
            <p className="text-muted font-semibold font-lg font-mono">
              :: Crafting your Blok Chain (Coming Soon)
            </p>
            <div className="h-4" />
            <p className="text-muted font-mono text-sm md:text-base">
              In phase two you will be able to select 42 of the Bloks in your
              inventory to create your Chain. The color order you choose will be
              the order in which the Bloks will be added to your final Chain.
              Please note that this is one way process, once you mint your Chain
              and burn your Bloks you cannot undo the process. Once you create
              your Chain in your desired order that order will not be available
              to be created again, so proceed with care when crafting your
              desired Blok Chain.
            </p>
          </div>
          <Image
            src="/step2.png"
            alt="Step 2"
            width={1980}
            height={600}
            className=""
          />
        </div>
      </section>
      {/* <section
        aria-label="Step #2"
        className="text-background flex bg-primary mx-auto py-12"
        >
        <div>
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
              Step #2
            </h2>
            <p className="text-muted-foreground font-semibold font-lg font-mono">
              :: Crafting your Blok Chain (Coming Soon)
            </p>
            <div className="h-4" />
            <p className="text-muted-foreground font-mono">
              In phase two you will be able to select 42 of the Bloks in your
              inventory to create your Chain. The color order you choose will be
              the order in which the Bloks will be added to your final Chain.
              Please note that this is one way process, once you mint your Chain
              and burn your Bloks you cannot undo the process. Once you create
              your Chain in your desired order that order will not be available
              to be created again, so proceed with care when crafting your
              desired Blok Chain.
            </p>
          </div>
          <Image
            src="/step1.png"
            alt="Step 1"
            width={600}
            height={600}
            className="md:min-w-[400px] lg:min-w-[500px] w-full max-w-[500px]"
          />
        </div>
      </section> */}
    </div>
  );
}

{
  /* <div className="w-full md:w-1/2 flex flex-col gap-4">
  <MintProvider balance={profile?.balance}>
    <MintedImage className="shrink-0 w-auto h-auto object-cover" />
    <MintButtonPopup />
  </MintProvider>
</div> */
}
