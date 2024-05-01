"use client";

import {
  ContactShadows,
  Environment,
  PresentationControls,
} from "@react-three/drei";
import { Canvas as Rcanvas } from "@react-three/fiber";
import { ChainModel } from "./chain";
import { useBuilderContext } from "./builder-context";
import { Numbers } from "./numbers";

export default function Canvas() {
  const { currentLink, editMode, rotation } = useBuilderContext();

  return (
    <Rcanvas
      gl={{ preserveDrawingBuffer: true }}
      camera={{ position: [0, 2.5, 4] }}
    >
      <PresentationControls
        global
        polar={[-0.4, 0.1]}
        rotation={[currentLink % 2 === 1 ? 0 : 0.2, rotation, 0]}
        snap={editMode ? { mass: 2, tension: 100 } : false}
      >
        <Numbers />
        <ChainModel />
      </PresentationControls>
      <directionalLight
        position={[0, 5, 10]}
        rotation={[
          currentLink % 2 === 1 ? 0 : 0.2,
          (2 * Math.PI * (currentLink - 1)) / 42,
          0,
        ]}
        intensity={2}
      />
      <ContactShadows opacity={0.75} blur={3} />
      <Environment preset="city" />
    </Rcanvas>
  );
}
