"use client";

import { Environment, OrbitControls, Stage } from "@react-three/drei";
import { Canvas as Rcanvas } from "@react-three/fiber";
import { ChainModel } from "./chain";

export default function Canvas() {
  return (
    <Rcanvas
      // ref={_renderRef}
      gl={{ preserveDrawingBuffer: true }}
      shadows
      camera={{ position: [0, 0.1, 0.5] }}
      // style={{
      //   width: 1000,
      //   height: 1000,
      // }}
    >
      {/* <color attach={"background"} args={["#CCCCCC"]} /> */}
      <Stage receiveShadow>
        <ChainModel />
        <OrbitControls enableZoom={false} />
      </Stage>
      <Environment preset="city" />
    </Rcanvas>
  );
}
