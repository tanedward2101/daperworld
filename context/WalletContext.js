/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';

const WalletContext = React.createContext({
  showWalletModal: false,
  setShowWalletModal: () => null,
});

const WalletContextProvider = ({ children }) => {
  const [showWalletModal, setShowWalletModal] = useState(false);

  return (
    <WalletContext.Provider value={{ showWalletModal, setShowWalletModal }}>
      {children}
    </WalletContext.Provider>
  );
};

export const connectorLocalStorageKey = 'connectorIdForNFTMINT';
export const ConnectorNames = {
  MetaMask: 'MetaMask'
};

const injected = new InjectedConnector({ supportedChainIds: [1, 4] });
const walletconnect = new WalletConnectConnector({
  infuraId: process.env.REACT_APP_INFURA_ID,
  rpc: `https://${process.env.CHAINID === 4 ? 'rinkeby': 'mainnet'}.infura.io/v3/${process.env.REACT_APP_INFURA_ID}`,
  supportedChainIds: [1, 4],
});

export const connectorsByName = {
  [ConnectorNames.MetaMask]: injected
};

export { WalletContext, WalletContextProvider };
