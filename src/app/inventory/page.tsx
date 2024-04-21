import { redirect } from "next/navigation";
import { getInventory } from "../actions/contract";
import { getSession } from "../actions/session";
import Image from "next/image";

export default async function InventoryPage() {
  const profile = await getSession();

  if (!profile) {
    redirect("/auth/login");
  }
  const tokens = await getInventory(profile?.address);
  const colors = ["black", "white", "orange", "lime", "blue", "gold", "pink"];

  return (
    <div>
      <section
        aria-label="Inventory"
        className="w-full pt-20 h-72 bg-gradient-to-b from-background to-muted-foreground"
      >
        <div className="[mask-image:_linear-gradient(to_right,transparent_0,_black_20px,_black_calc(100%-10px),transparent_100%)] h-full relative py-5 z-10 container px-4 md:px-6 border-rounded">
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
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
        aria-label="Step #1"
        className="flex flex-col container mx-auto py-12"
      >
        <div className="items-center flex flex-col">
          <div className="flex flex-row flex-wrap item-center justify-center gap-4">
            {colors.map((color) => {
              const colorCount = tokens[color]?.length ?? 0;
              return (
                <div key={color} className="flex flex-col">
                  <div className="flex items-center justify-between">
                    <p className="capitalize text-muted-foreground">{color}</p>
                    <p className="capitalize text-muted-foreground">
                      {colorCount}
                    </p>
                  </div>
                  <div
                    className="border-muted-foreground border-[2px] overflow-hidden aspect-square rounded relative w-[150px]"
                    key="color"
                  >
                    <Image
                      alt="Hero"
                      className="rounded pointer-events-none z-0 w-full right-0 absolute bottom-0 [mask]"
                      height={300}
                      src={`/${color}.png`}
                      width={300}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
