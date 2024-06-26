import { getSession } from "@/app/actions/session";
import { BrowserProvider, parseEther, toBigInt } from "ethers";
import { Contract } from "ethers";
import { env } from "@/env";
import abi from "@/contracts/abis/blokcharms.json";
import { ErrorDecoder } from 'ethers-decode-error'
import type { DecodedError } from 'ethers-decode-error'

export const mint = async (count: number) => {
  try {
    const profile = await getSession();
    const browserProvider = window.lukso;

    if (!profile || !browserProvider) {
      throw new Error("No profile found");
    }

    const mintTotal = (Number(env.NEXT_PUBLIC_MINT_PRICE) * count).toFixed(2);
    const formattedMintTotal = parseEther(`${mintTotal}`);
    const provider = new BrowserProvider(browserProvider);
    const signer = await provider.getSigner();
    const contract = new Contract(env.NEXT_PUBLIC_CONTRACT_ADDRESS, abi, signer);

    await contract.mint(toBigInt(count), {
      value: formattedMintTotal,
      gasLimit: 1000000,
    });

    return { status: true };
  } catch (error) {
    console.log(error)
    const errorDecoder = ErrorDecoder.create([abi])
    const { name } = await errorDecoder.decode(error as DecodedError)

    return { status: false, error: name };
  }
};
