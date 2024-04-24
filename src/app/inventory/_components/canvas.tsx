"use client";

import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas as Rcanvas } from "@react-three/fiber";
import { Suspense } from "react";
import { ChainModel } from "./chain";

export function Canvas({ children }: any) {
  return (
    <Rcanvas
      className="w-full h-full absolute inset-0"
      shadows
      camera={{ position: [0, 1.2, 6], fov: 35 }}
    >
      <Suspense fallback={null}>
        <OrbitControls enablePan={false} enableZoom={false} />
        <ChainModel />
        <Environment preset="city" />
      </Suspense>
    </Rcanvas>
  );
}
