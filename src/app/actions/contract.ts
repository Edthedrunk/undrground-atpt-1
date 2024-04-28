import { env } from "@/env";
import { initialDistribution, mainnetRPC } from "@/lib/utils";
import { Contract, JsonRpcProvider } from "ethers";
import abi from "@/contracts/abis/blokcharms.json";

export const getDistribution = async () => {
    const provider = new JsonRpcProvider(mainnetRPC);
    const contract = new Contract(env.NEXT_PUBLIC_CONTRACT_ADDRESS, abi, provider);

    const currentContractDistribution = await Promise.all(
        initialDistribution.map(async (token) => {
            const totalMinted = await contract.totalMinted(token.type);
            return {
                ...token,
                distributed: Number(totalMinted) ?? 0,
            };
        })
    );

    const total = currentContractDistribution.reduce(
        (acc, cur) => acc + (cur.distributed ?? 0),
        0
    )

    return {
        current: currentContractDistribution,
        total
    }
}

export const getInventory = async (address: string = "") => {
    const provider = new JsonRpcProvider(mainnetRPC);
    const contract = new Contract(env.NEXT_PUBLIC_CONTRACT_ADDRESS, abi, provider);

    if (address === "") {
        return {}
    }

    const tokenIds = await contract.tokenIdsOf(address);
    const inventory: { [key: string]: string[] } = {}
    await Promise.all(
        tokenIds.map(async (tokenId: string) => {
            const tokentype: string = await contract.blokTypes(tokenId).then((type: string) => type.charAt(0).toUpperCase() + type.slice(1))
            if (!inventory[tokentype]) {
                inventory[tokentype] = []
            }
            inventory[tokentype].push(tokenId)
            return {
                tokenId,
                type: tokentype
            }
        })
    )
    return inventory ?? {}
}

export const mintEnabled = async (): Promise<boolean> => {
    const provider = new JsonRpcProvider(mainnetRPC);
    const contract = new Contract(env.NEXT_PUBLIC_CONTRACT_ADDRESS, abi, provider);
    const mintEnabled = await contract.mintSet();
    return mintEnabled
}