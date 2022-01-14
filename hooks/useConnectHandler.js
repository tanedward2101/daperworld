import { useContext } from 'react';
import { useWeb3React } from '@web3-react/core';
import useNotification from './useNotification.js';
import { WalletContext } from '../context/WalletContext.js';

export default function useConnectHandler() {
    const { chainId } = useWeb3React();
    const { addNotification } = useNotification();
    const { setShowWalletModal } = useContext(WalletContext);

    //toggles the wallet modal
    const onConnect = () => {
        setShowWalletModal(true);
    };

    const chainSupported = chainId === process.env.CHAINID;

    const onConnectClick = () => {

        onConnect();
    };

    return { onConnectClick };
}
