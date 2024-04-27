import { getInventory } from "../actions/contract";
import { getSession } from "../actions/session";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { ArrowRight, Loader2 } from "lucide-react";

const Canvas = dynamic(
  () => import("./_components/canvas").then((mod) => mod.default),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full grid place-content-center">
        <Loader2 className="size-10 animate-spin text-muted-foreground/50" />
      </div>
    ),
  }
);

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
                This is where you can view your Bloks and eventually where you will craft your BlokChain.
              </p>
              <Link
                className={buttonVariants({
                  className: "flex items-center gap-2",
                })}
                target="_blank"
                href="https://universal.page/collections/0x1f35651b7f36ec91804b6cc603652a12d7cb87c6"
              >
                COLLECTION
                <ArrowRight className="size-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section
        aria-label="Builder"
        className="pt-20 flex flex-col grow relative bg-foreground bg-grid-white/5"
      >
        <div className="relative z-10 container mx-auto flex flex-col">
          <div className="flex-wrap w-full h-full flex flex-row items-center justify-center gap-2">
            {colors.map((color) => {
              const colorCount = tokens[color]?.length ?? 0;
              return (
                <div
                  key={color}
                  className="min-w-[85px] w-[10vw] max-w-[150px] flex flex-col justify-start"
                >
                  <div className="flex items-center">
                    <p className="text-sm text-muted-foreground capitalize font-mono font-semibold">
                      {color}
                    </p>
                    <p className="ml-auto text-sm text-muted-foreground capitalize font-mono font-semibold">
                      {colorCount}
                    </p>
                  </div>
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
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="overflow-hidden z-0 absolute pointer-events-none inset-0 flex items-center justify-center bg-foreground [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
          <div className="opacity-50 overflow-hidden pointer-events-none absolute flex flex-col gap-2 rotate-3 top-10">
            <div className="flex flex-row gap-2">
              <div className="shrink-0 text-4xl font-bold flex-nowrap text-muted-foreground animate-infinite-scroll flex flex-row gap-2 items-center">
                <span>BUILDER COMING SOON</span>
                <span>BUILDER COMING SOON</span>
                <span>BUILDER COMING SOON</span>
                <span>BUILDER COMING SOON</span>
              </div>
              <div
                aria-hidden="true"
                className="shrink-0 text-4xl font-bold flex-nowrap text-muted-foreground animate-infinite-scroll flex flex-row gap-2 items-center"
              >
                <span>BUILDER COMING SOON</span>
                <span>BUILDER COMING SOON</span>
                <span>BUILDER COMING SOON</span>
                <span>BUILDER COMING SOON</span>
              </div>
            </div>
            <div className="flex flex-row gap-2">
              <div
                aria-hidden="true"
                className="shrink-0 text-4xl font-bold flex-nowrap text-muted-foreground animate-infinite-scroll flex flex-row gap-2 items-center"
              >
                <span>BUILDER COMING SOON</span>
                <span>BUILDER COMING SOON</span>
                <span>BUILDER COMING SOON</span>
                <span>BUILDER COMING SOON</span>
                <span>BUILDER COMING SOON</span>
                <span>BUILDER COMING SOON</span>
              </div>
              <div
                aria-hidden="true"
                className="shrink-0 text-4xl font-bold flex-nowrap text-muted-foreground animate-infinite-scroll flex flex-row gap-2 items-center"
              >
                <span>BUILDER COMING SOON</span>
                <span>BUILDER COMING SOON</span>
                <span>BUILDER COMING SOON</span>
                <span>BUILDER COMING SOON</span>
                <span>BUILDER COMING SOON</span>
                <span>BUILDER COMING SOON</span>
              </div>
            </div>
            <div className="flex flex-row gap-2">
              <div
                aria-hidden="true"
                className="shrink-0 text-4xl font-bold flex-nowrap text-muted-foreground animate-infinite-scroll flex flex-row gap-2 items-center"
              >
                <span>BUILDER COMING SOON</span>
                <span>BUILDER COMING SOON</span>
                <span>BUILDER COMING SOON</span>
                <span>BUILDER COMING SOON</span>
                <span>BUILDER COMING SOON</span>
              </div>
              <div
                aria-hidden="true"
                className="shrink-0 text-4xl font-bold flex-nowrap text-muted-foreground animate-infinite-scroll flex flex-row gap-2 items-center"
              >
                <span>BUILDER COMING SOON</span>
                <span>BUILDER COMING SOON</span>
                <span>BUILDER COMING SOON</span>
                <span>BUILDER COMING SOON</span>
                <span>BUILDER COMING SOON</span>
              </div>
            </div>
          </div>
        </div>
        <Canvas />
      </section>
    </div>
  );
}
