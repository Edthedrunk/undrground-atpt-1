import { getInventory } from "../../actions/contract";
import { getSession } from "../../actions/session";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowRight, Loader2 } from "lucide-react";
import { BuilderProvider } from "./_components/builder-context";
import { Controls } from "./_components/controls";
import { Inventory } from "./_components/inventory";
import { Keybinds } from "./_components/keybinds";
import RenderCanvas from "./_components/render-canvas";

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

  return (
    <div className="relative flex flex-col h-screen">
      <section
        aria-label="Inventory"
        className="w-full pt-20 pb-10 bg-gradient-to-b from-background to-muted-foreground"
      >
        <div className="[mask-image:_linear-gradient(to_right,transparent_0,_black_20px,_black_calc(100%-10px),transparent_100%)] h-full relative py-5 z-10 container px-4 md:px-6 border-rounded">
          <div className="flex flex-col items-center justify-center">
            <div className="text-center flex flex-col items-center justify-center">
              <h1 className="text-5xl font-bold tracking-tighter lg:text-4xl">
                INVENTORY
              </h1>
              <p className="font-mono mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                This is where you can view your Bloks and eventually where you
                will craft your BlokChain.
              </p>
              <div className="h-4" />
              <div className="flex gap-2 items-center">
                <Link
                  className={buttonVariants()}
                  target="_blank"
                  href="https://drive.google.com/drive/folders/1sQ1r7If9CRgsdtC8-0KCflcHrbO3AiUM?usp=drive_link"
                >
                  MODELS
                </Link>
                <Link
                  className={buttonVariants({
                    variant: "outline",
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
        </div>
      </section>
      <BuilderProvider inventory={tokens}>
        <section
          aria-label="Builder"
          className="overflow-hidden h-full min-h-[1100px] py-10 flex flex-col grow bg-foreground bg-grid-white/5"
        >
          <RenderCanvas />
          <div className="p-4 gap-4 relative z-10 container mx-auto flex flex-col md:flex-row items-center justify-center">
            <div className="min-h-[800px] relative aspect-square bg-gradient-to-b from-background to-muted-foreground rounded-md drop-shadow w-full max-w-[800px]">
              <Keybinds />
              <div className="z-10 p-4 w-full  bottom-0 absolute flex flex-col gap-2">
                <Inventory />
                <Controls />
              </div>
              <Canvas />
            </div>
          </div>
        </section>
      </BuilderProvider>
    </div>
  );
}
