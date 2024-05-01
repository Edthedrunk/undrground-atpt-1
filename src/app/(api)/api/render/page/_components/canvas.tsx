"use client";

import { ContactShadows, Environment } from "@react-three/drei";
import { Canvas as Rcanvas } from "@react-three/fiber";
import { BlokModel } from "./blok-model";
import { Suspense } from "react";

export default function Canvas({ seed }: { seed: string }) {
  const colorMap: Record<string, string> = {
    o: "Orange",
    b: "Blue",
    w: "White",
    l: "Lime",
    p: "Pink",
    g: "Gold",
    B: "Black",
  };

  const links = [];
  for (let i = 0; i < 42; i++) {
    links.push(colorMap[seed[i]] || "white");
  }

  return (
    <Rcanvas
      gl={{ preserveDrawingBuffer: true }}
      camera={{ position: [0, 1.5, 4] }}
      style={{
        width: 1000,
        height: 1000,
      }}
      className="bg-gradient-to-b from-background to-muted-foreground"
    >
      <Suspense fallback={null}>
        <group dispose={null} position={[0, 0.5, 0]}>
          {links.map((value, i) => (
            <BlokModel
              key={i}
              rotation={[0, (-2 * Math.PI * i) / 42, 0]}
              flipped={i % 2 === 1}
              color={value as any}
            />
          ))}
        </group>
        <ContactShadows opacity={0.75} blur={3} />
        <Environment preset="city" />
      </Suspense>
    </Rcanvas>
  );
}
