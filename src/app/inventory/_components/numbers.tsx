"use client";

import React from "react";
import { Html, meshBounds } from "@react-three/drei";
import { Text } from "@react-three/drei";
import { useBuilderContext } from "./builder-context";
import { group } from "console";

export function Numbers(props: JSX.IntrinsicElements["group"]) {
  const { editMode } = useBuilderContext();

  return (
    <group {...props} dispose={null} position={[0, 0.5, 0]}>
      {[...Array(42)].map((_, i) => (
        <mesh key={i}>
          <group rotation={[0, (-2 * Math.PI * i) / 42, 0]}>
            <Text
              fillOpacity={editMode ? 1 : 0}
              castShadow={editMode}
              scale={[0.2, 0.2, 0.2]}
              color="black"
              fontWeight={700}
              position={i % 2 === 1 ? [0, 0.3, 2] : [0, -0.2, 2.5]}
              rotation={
                i % 2 === 1 ? [-Math.PI / 4, 0, 0] : [-Math.PI / 4, 0, 0]
              }
            >
              {i + 1}
            </Text>
          </group>
        </mesh>
      ))}
    </group>
  );
}
