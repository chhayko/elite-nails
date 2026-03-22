"use client";

import { ReactLenis } from "lenis/react";

export function LenisWrapper({ children }: { children: React.ReactNode }) {
  return <ReactLenis root>{children}</ReactLenis>;
}
