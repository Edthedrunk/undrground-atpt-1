import { env } from "@/env";
import { initialDistribution, testnetRPC } from "@/lib/utils";
import { Contract, JsonRpcProvider } from "ethers";
import abi from "@/contracts/abis/blokcharms.json";

export const getDistribution = async () => {
    const provider = new JsonRpcProvider(testnetRPC);
    const contract = new Contract(env.NEXT_PUBLIC_CONTRACT_ADDRESS, abi, provider);

    const currentContractDistribution = await Promise.all(
        initialDistribution.map(async (token) => {
            const totalMinted = await contract.totalMinted(token.type);
            return {
                ...token,
                distributed: Number(totalMinted),
            };
        })
    );

    return currentContractDistribution
}