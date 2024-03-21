"use client";

import { Button } from "@/components/ui/button";
import { trackEvent } from "@/components/TrackComponents";
import { signOut } from "next-auth/react";

export function SignOutButton() {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={async () => {
        trackEvent("sign_out");
        await signOut();
      }}
    >
      Sign out
    </Button>
  );
}
