import Web3 from "web3";

export const getWeb3 = (library) => {
  const provider = `https://mainnet.infura.io/v3/10475d80c3ba4b3d8f768b09dd3faafc`;
  return new Web3(
    // Replace YOUR-PROJECT-ID with a Project ID from your Infura Dashboard
    library || new Web3.providers.HttpProvider(provider),
  );
};

export default getWeb3;
