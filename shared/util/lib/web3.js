import Web3 from "web3";

export const getWeb3 = (library) => {
  const provider = `https://mainnet.infura.io/v3/${
    process.env.REACT_APP_INFURA_ID
  }`;
  return new Web3(
    // Replace YOUR-PROJECT-ID with a Project ID from your Infura Dashboard
    library || new Web3.providers.HttpProvider(provider),
  );
};

export default getWeb3;
