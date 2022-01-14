import React, { useContext } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useWeb3React } from '@web3-react/core';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import styles from "../styles/Layout.module.css";
import { connectorLocalStorageKey, ConnectorNames, WalletContext } from '../context/WalletContext';
import METAMASK_ICON_URL from '../public/metamask.png';
import { motion } from 'framer-motion'
import styled from 'styled-components';
import useAuth from '../hooks/useAuth';
import useNotification from '../hooks/useNotification';
import { StylesContext } from '@material-ui/styles';

const SUPPORTED_WALLETS = [
    {
        label: 'MetaMask',
        icon: METAMASK_ICON_URL,
        connectorId: ConnectorNames.MetaMask,
        injected: true,
    }

];

const WalletCard = styled.div`
  display: flex !important;
  align-items: center;
  justify-content: space-between;
  padding: 1em;
  margin: 2em 0;
  border-radius: 4px;
  background-color: rgb(5, 13, 24);
  border: 1px solid rgb(16,185,129);
  color: #fff;
  font-family: 'Bamat', cursive;
  &:hover {
    cursor: pointer;
    border: 1px solid white;
    
  }

  img {
    width: 20px;
    height: 20px;
  }
`;

const AccountActions = styled.div`
  display: flex;
  align-items: center;
  margin-top: 12px;

  a {
    color: black;
  }
`;

const CopyWrapper = styled.span`
  cursor: pointer;
`;

const ProviderOptions = () => {
    const { login } = useAuth();
    const { setShowWalletModal } = useContext(WalletContext);

    const wallets = SUPPORTED_WALLETS.filter((option) => {
        if (option.injected) {
            return window.ethereum ? true : false;
        }

        return true;
    });

    return (
        <div>
            {wallets.map(({ label, icon, connectorId }) => {
                return (
                    <WalletCard
                        key={label}
                        onClick={() => {
                            login(connectorId);
                            window.localStorage.setItem(connectorLocalStorageKey, connectorId);
                            setShowWalletModal(false);
                        }}
                    >

                        <img src="/metamask.png" alt="option" width="20%" />
                        &nbsp;{label}
                    </WalletCard>
                );
            })}
        </div>
    );
};

const AccountInformation = () => {
    const { account, chainId } = useWeb3React();
    const { addNotification } = useNotification();
    const { logout } = useAuth();
    const { setShowWalletModal } = useContext(WalletContext);

    return (
        <div>
            {account}

            <div>
                <Button
                    variant="outline-success"
                    type="button"
                    style={{ padding: 10, marginTop: 20, borderRadius: 30, backgroundColor: '#10B981', fontFamily: 'Bamat', color: 'white' }}
                    onClick={() => {
                        logout();
                        window.localStorage.removeItem(connectorLocalStorageKey);
                        setShowWalletModal(false);
                    }}
                >
                    Logout
                </Button>
            </div>


        </div>
    );
};

export default function WalletModal() {
    const { showWalletModal, setShowWalletModal } = useContext(WalletContext);
    const { account } = useWeb3React();

    return (
        <motion.div initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                type: 'tween',
                duration: 1.5,
                delay: 1,
            }}>
            <Modal
                show={showWalletModal}
                onHide={() => setShowWalletModal(false)}
                backdrop="static"
                keyboard={false}
                className={styles.modal}
                centered
            >
                <div><button className={styles.modalclose} onClick={() => setShowWalletModal(false)}>X</button></div>
                <Modal.Header>
                    <Modal.Title className={styles.modalhead}>{account ? 'Wallet Address' : ''}</Modal.Title>
                </Modal.Header>
                <Modal.Body className={styles.modaltext}>
                    {!account && <ProviderOptions />}
                    {account && <AccountInformation />}
                </Modal.Body>
            </Modal>
        </motion.div>
    );
}
