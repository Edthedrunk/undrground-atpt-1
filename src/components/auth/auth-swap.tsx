import { getSession } from "@/app/actions/session";
import SignIn from "./signin";
import { Suspense } from "react";
import LogoutButton from "./logout";
import { LoaderButton } from "../ui/loader-button";
import { buttonVariants } from "../ui/button";
import Link from "next/link";

export default async function AuthSwap() {
  const profile = await getSession();

  return (
    <Suspense fallback={<LoaderButton isLoading>Loading...</LoaderButton>}>
      {profile ? (
        <LogoutButton />
      ) : (
        <div className="flex items-center gap-2">
          <Link
            href="https://my.universalprofile.cloud/"
            target="_blank"
            className={buttonVariants({
              variant: "outline",
              className: "hidden sm:block",
            })}
          >
            Create UP
          </Link>
          <SignIn />
        </div>
      )}
    </Suspense>
  );
}
