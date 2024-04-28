import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  shared: {
    NEXT_PUBLIC_CONTRACT_ADDRESS: z.string(),
    NEXT_PUBLIC_MINT_PRICE: z.string(),
    NODE_ENV: z
      .enum(["development", "production", "test"])
      .default("development"),
    VERCEL_ENV: z.enum(["development", "preview", "production"]).optional(),
  },
  server: {
    SESSION_PASS: z.string().min(32),
    // IPFS_KEY: z.string(),
  },
  runtimeEnv: {
    // IPFS_KEY: process.env.IPFS_KEY,
    SESSION_PASS: process.env.SESSION_PASS,
    NEXT_PUBLIC_CONTRACT_ADDRESS: process.env
      .NEXT_PUBLIC_CONTRACT_ADDRESS,
    NEXT_PUBLIC_MINT_PRICE: process.env.NEXT_PUBLIC_MINT_PRICE,
    NODE_ENV: process.env.NODE_ENV,
    VERCEL_ENV: process.env.VERCEL_ENV,
  },
});
