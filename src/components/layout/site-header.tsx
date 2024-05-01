import { site, navigation } from "@/config/site";
import AuthSwap from "../auth/auth-swap";
import Link from "next/link";

const SiteHeader = () => {
  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur-lg">
      <div className="py-2 container mx-auto flex items-center justify-between">
        <div className="flex flex-row gap-4 items-center">
          <Link href="/" className="text-lg font-black">
            {site.title}
          </Link>
          {navigation.map((item) => (
            <Link
              key={item.url}
              href={item.url}
              className="hover:opacity-80 transition-opacity"
            >
              {item.title}
            </Link>
          ))}
        </div>
        <AuthSwap />
      </div>
    </header>
  );
};

export { SiteHeader };
