// This file can me imported on client or server

export const site = {
  // Replace with your own title
  title: "BLOK",

  // Replace with your own description
  description: "The beginning of your very own Blok Chain",

  // Replace with your own domain
  url: "https://www.blokcharms.com/",

  // Replace with your twitter handle
  twitter: "@Blokcharms",

  // Replace with keywords relevant to your project
  keywords: ["Lukso", "Blockchain", "BLOK", "Blokcharms"],
};

// An array of object that will display in the navigation bar
export const navigation = [
  { title: "Mint", url: "/mint" },
  { title: "Inventory", url: "/inventory" }
];

// Siwe message text
export const siweMessageText =
  "By signing in, you agree to our terms and conditions and have read about and understand how the Blokcharms project works.";

// Minting Variables
export const contractAddress = "0x...";
export const mintCost = 0.1;
