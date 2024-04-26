import { getSession } from "@/app/actions/session";
import { BrowserProvider, parseEther, toBigInt } from "ethers";
import { Contract } from "ethers";
import { env } from "@/env";
import abi from "@/contracts/abis/blokcharms.json";

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
    return { status: false, error: error };
  }
};
