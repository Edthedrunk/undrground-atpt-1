"use client";

import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas as Rcanvas } from "@react-three/fiber";
import { ChainModel } from "./chain";

export default function Canvas() {
  return (
    <Rcanvas
      shadows
      style={{
        width: "100%",
        height: "100%",
      }}
      camera={{ position: [0, 1.2, 6], fov: 30 }}
    >
      <OrbitControls enablePan={false} enableZoom={false} />
      <ChainModel />
      <Environment preset="city" />
    </Rcanvas>
  );
}
