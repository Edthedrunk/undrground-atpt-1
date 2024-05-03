"use client";

import {
  ContactShadows,
  Environment,
  GradientTexture,
  Preload,
} from "@react-three/drei";
import { Canvas as Rcanvas } from "@react-three/fiber";
import { useBuilderContext } from "./builder-context";
import { BlokModel } from "./blok-model";

export default function RenderCanvas() {
  const { renderRef, linkOrder } = useBuilderContext();

  return (
    <Rcanvas
      ref={renderRef}
      gl={{ preserveDrawingBuffer: true }}
      camera={{ position: [0, 1.5, 4] }}
      style={{
        width: "1000px",
        height: "1000px",
      }}
    >
      <mesh scale={[15, 15, 15]} position={[0, 0, -3]}>
        <planeGeometry />
        <meshBasicMaterial>
          <GradientTexture stops={[0, 1]} colors={["#F2F2F2", "#595959"]} />
        </meshBasicMaterial>
      </mesh>
      <group dispose={null} position={[0, 0.7, -0.1]}>
        {Object.values(linkOrder!).map((value, i) => (
          <BlokModel
            key={i}
            rotation={[0, (-2 * Math.PI * i) / 42, 0]}
            flipped={i % 2 === 1}
            color={value as any}
          />
        ))}
      </group>
      <directionalLight position={[0, 5, 10]} intensity={2} />
      <ContactShadows opacity={0.75} blur={3} />
      <Environment preset="city" />\
      <Preload all />
    </Rcanvas>
  );
}
