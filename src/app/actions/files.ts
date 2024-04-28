// "use server"

// import { env } from '@/env';
// import { createThirdwebClient } from "thirdweb";
// import { upload } from "thirdweb/storage";


// export const uploadToIpfs = async (file: string) => {
//     const buffer = Buffer.from(file.split(",")[1], "base64");

//     try {
//         const client = createThirdwebClient({
//             secretKey: env.IPFS_KEY
//         })

//         const uris = await upload({
//             client,
//             files: [buffer],
//             uploadWithoutDirectory: true,
//         })

//         return uris;
//     } catch (error) {
//         console.log(error);
//     }
// };