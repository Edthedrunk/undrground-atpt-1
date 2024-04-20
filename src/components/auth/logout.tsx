"use client";

import { Button, ButtonProps } from "@/components/ui/button";
import { destroySession } from "@/app/actions/session";

export default function LogoutButton(props: ButtonProps) {
  const handleLogout = async () => {
    await destroySession();
  };
  return (
    <Button variant="ghost" onClick={handleLogout} {...props}>
      Logout
    </Button>
  );
}
