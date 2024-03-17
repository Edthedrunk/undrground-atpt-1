import { MinterOne } from "@/components/minter/minter-one";
import { getSession } from "@/app/server/session";

export default async function Home() {
  await getSession();
  
  return (
    <div className="flex justify-center">
      <div className="h-4" />
      <div className="w-full max-w-4x1"> {/* Adjust max-width as needed */}
        <MinterOne />
      </div>
    </div>
  );
}
