"use client";

import React from "react";
import { BlokModel } from "./blok-model";
import { useBuilderContext } from "./builder-context";

export function ChainModel(
  props: JSX.IntrinsicElements["group"] & { seed?: string }
) {
  const { linkOrder } = useBuilderContext();

  return (
    <group {...props} dispose={null} position={[0, 1.5, 0]}>
      {Object.values(linkOrder).map((value, i) => (
        <BlokModel
          key={i}
          rotation={[0, (-2 * Math.PI * i) / 42, 0]}
          flipped={i % 2 === 1}
          color={value as any}
        />
      ))}
    </group>
  );
}
