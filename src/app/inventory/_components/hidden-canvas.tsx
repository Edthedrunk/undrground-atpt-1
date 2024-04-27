"use client";

import { Backdrop, Environment, Stage } from "@react-three/drei";
import { Canvas as Rcanvas } from "@react-three/fiber";
import { ChainModel } from "./chain";
import { useRef } from "react";

export default function HiddenCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  return (
    <>
      <Rcanvas
        id="hidden-canvas"
        ref={canvasRef}
        gl={{ preserveDrawingBuffer: true }}
        shadows
        color="gray"
        style={{
          width: "1000px",
          height: "1000px",
          background: "gray",
        }}
        camera={{ position: [0, 1, 4] }}
      >
        <Stage receiveShadow>
          <ChainModel />
        </Stage>
        <Environment preset="city" />
      </Rcanvas>
      <a href={canvasRef ? canvasRef.current?.toDataURL() : ""} download>
        Download
      </a>
    </>
  );
}
