"use client";

import React from "react";
import { BlokModel } from "./blok-model";

export function ChainModel(props: JSX.IntrinsicElements["group"]) {
  const colors = ["Black", "White", "Orange", "Lime", "Blue", "Gold", "Pink"];
  const pickRandomColor = () =>
    colors[Math.floor(Math.random() * colors.length)];

  const [links, setLinks] = React.useState(
    [...Array(42)].map(() => pickRandomColor())
  );

  return (
    <group {...props} dispose={null}>
      {links.map((value, i) => (
        <BlokModel
          key={i}
          rotation={[0, (2 * Math.PI * i) / 42, 0]}
          flipped={i % 2 === 1}
          color={value as any}
        />
      ))}
    </group>
  );
}
