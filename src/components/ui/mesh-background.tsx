"use client";

import { MeshGradient } from "@paper-design/shaders-react";

export function MeshBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div className="sticky top-0 h-screen w-full">
        <MeshGradient
          className="w-full h-full"
          colors={["#F8F5F0", "#EDE8DB", "#D4BCC2", "#B8A4BD"]}
          speed={0.3}
        />
      </div>
    </div>
  );
}
