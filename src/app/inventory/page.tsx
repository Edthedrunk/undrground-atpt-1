import { getInventory } from "../actions/contract";
import { getSession } from "../actions/session";
import Image from "next/image";

export default async function InventoryPage() {
  const profile = await getSession();
  const tokens = await getInventory(profile?.address);
  const colors = ["black", "white", "orange", "lime", "blue", "gold", "pink"];

  return (
    <div className="flex flex-col h-screen">
      <section
        aria-label="Inventory"
        className="w-full pt-20 pb-10 bg-gradient-to-b from-background to-muted-foreground"
      >
        <div className="[mask-image:_linear-gradient(to_right,transparent_0,_black_20px,_black_calc(100%-10px),transparent_100%)] h-full relative py-5 z-10 container px-4 md:px-6 border-rounded">
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="space-y-4 text-center">
              <h1 className="text-5xl font-bold tracking-tighter lg:text-6xl">
                INVENTORY
              </h1>
              <p className="font-mono mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                This is where you can view your Bloks.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        aria-label="Builder"
        className="flex flex-col grow relative bg-foreground bg-grid-white/5 py-12"
      >
        <div className="h-full grid place-content-center">
          <h2 className="text-muted-foreground animate-pulse text-center text-5xl md:text-6xl">
            Builder Coming Soon...
          </h2>
        </div>
        <div className="relative z-10 container mx-auto flex flex-col">
          <div className="flex justify-center items-center flex-wrap md:flex-nowrap gap-2">
            <div className="grid gap-2 grid-cols-4">
              {colors.slice(0, 4).map((color) => {
                const colorCount = tokens[color]?.length ?? 0;
                return (
                  <div
                    key={color}
                    className="min-w-[50px] w-[10vw] max-w-[150px] flex flex-col justify-start"
                  >
                    <p className="text-sm text-muted-foreground capitalize font-mono font-semibold">
                      {color}
                    </p>
                    <div
                      className="overflow-hidden aspect-square rounded relative font-mono font-semibold md:text-lg"
                      key={color}
                    >
                      <Image
                        alt="Hero"
                        className="pointer-events-none z-0 w-full right-0 absolute bottom-0 [mask]"
                        height={200}
                        src={`/${color}.png`}
                        width={200}
                      />
                      <p className="absolute top-1 right-[10px] text-foreground">
                        {colorCount}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="grid gap-2 grid-cols-3">
              {colors.slice(4, 7).map((color) => {
                const colorCount = tokens[color]?.length ?? 0;
                return (
                  <div
                    key={color}
                    className="min-w-[50px] w-[10vw] max-w-[150px] flex flex-col justify-start"
                  >
                    <p className="text-sm text-muted-foreground capitalize font-mono font-semibold">
                      {color}
                    </p>
                    <div
                      className="overflow-hidden aspect-square rounded relative font-mono font-semibold md:text-lg"
                      key={color}
                    >
                      <Image
                        alt="Hero"
                        className="pointer-events-none z-0 w-full right-0 absolute bottom-0 [mask]"
                        height={200}
                        src={`/${color}.png`}
                        width={200}
                      />
                      <p className="absolute top-1 right-[10px] text-foreground">
                        {colorCount}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="z-0 absolute pointer-events-none inset-0 flex items-center justify-center bg-foreground [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </section>
    </div>
  );
}
