import { env } from "@/env";
import { initialDistribution, testnetRPC } from "@/lib/utils";
import { Contract, JsonRpcProvider } from "ethers";
import abi from "@/contracts/abis/blokcharms.json";
import ERC725 from "@erc725/erc725.js";
import lsp4 from "@erc725/erc725.js/schemas/LSP4DigitalAsset.json";

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

export const getInventory = async (address: string) => {
    const provider = new JsonRpcProvider(testnetRPC);
    const contract = new Contract(env.NEXT_PUBLIC_CONTRACT_ADDRESS, abi, provider);
    const tokenIds = await contract.tokenIdsOf(address);

    const inventory: { [key: string]: string[] } = {}
    await Promise.all(
        tokenIds.map(async (tokenId: string) => {
            const tokentype: string = await contract.blokTypes(tokenId);
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
    return inventory
}

export const mintEnabled = async (): Promise<boolean> => {
    const provider = new JsonRpcProvider(testnetRPC);
    const contract = new Contract(env.NEXT_PUBLIC_CONTRACT_ADDRESS, abi, provider);
    const mintEnabled = await contract.mintSet();
    return mintEnabled
}