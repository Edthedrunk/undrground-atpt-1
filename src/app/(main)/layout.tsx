import { NetworkLock } from "@/components/auth/network-lock";
import { SiteHeader } from "@/components/layout/site-header";
import { Toaster } from "sonner";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteHeader />
      <main>{children}</main>
      <Toaster position="top-center" />
      <NetworkLock />
    </>
  );
}
