const { expect } = require("chai");

describe("BlokCharms Contract", function () {
  let BlokCharms;
  let blokCharms;
  let owner;
  let addr1;

  beforeEach(async function () {
    [owner, addr1] = await ethers.getSigners();
    BlokCharms = await ethers.getContractFactory("BlokCharms");
    blokCharms = await BlokCharms.deploy();
    await blokCharms.deployed();
  });

  describe("Minting", function () {
    it("Should mint a new Blok and assign a color", async function () {
      const mintTx = await blokCharms.connect(addr1).mint(1, { value: ethers.utils.parseEther("0.1") });

      await expect(mintTx).to.emit(blokCharms, "Transfer").withArgs(ethers.constants.AddressZero, addr1.address, 1);
      // Check the color of the minted token
      const color = await blokCharms.tokenColors(1);
      console.log("Minted Blok Color:", color); // This line is just to show the color in the console
      expect(color).to.be.a('string'); // This is a very basic check, just to ensure a color string is returned
    });
  });
});
