"use client";

import React from "react";
import { Html, meshBounds } from "@react-three/drei";
import { Text } from "@react-three/drei";
import { useBuilderContext } from "./builder-context";
import { group } from "console";

export function Numbers(props: JSX.IntrinsicElements["group"]) {
  const { editMode, linkOrder } = useBuilderContext();
  const colorRemap = (color: string) => {
    switch (color) {
      case "White":
        return "#FFFFFF";
      case "Black":
        return "#000000";
      case "Orange":
        return "#FF5733";
      case "Lime":
        return "#32CD32";
      case "Blue":
        return "#4169e1";
      case "Gold":
        return "#bf9b30";
      case "Pink":
        return "#ff0074";
      default:
        return "#FFFFFF";
    }
  };
  return (
    <group {...props} dispose={null} position={[0, 1.5, 0]}>
      {Object.values(linkOrder).map((value, i) => (
        <mesh key={i}>
          <group rotation={[0, (-2 * Math.PI * i) / 42, 0]}>
            <Text
              fillOpacity={editMode ? 1 : 0}
              castShadow={editMode}
              scale={[0.15, 0.15, 0.15]}
              color={colorRemap(value as any)}
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
