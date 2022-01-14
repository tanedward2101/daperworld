import React from 'react'
import { useWeb3React } from '@web3-react/core'
import Button from 'react-bootstrap/Button'
import styles from '../styles/Layout.module.css'
import useConnectHandler from '../hooks/useConnectHandler'

const parseAddress = (address) => {
    if (address) {
        const frontTail = address.substring(0, 4)
        const endTail = address.substring(address.length - 4, address.length)
        const addresses = frontTail + '...' + endTail
        return <div >{addresses}</div>
    }
    return (
        <div>
            Connect Wallet
        </div>
    )
}

export default function ConnectBtn() {
    const { account, chainId } = useWeb3React()

    const chainSupported = chainId !== process.env.CHAINID

    const { onConnectClick } = useConnectHandler()

    return (

        <Button
            className={styles.cntButton}
            variant={`outline-${!chainId || chainSupported ? 'info' : 'danger'}`}
            onClick={onConnectClick}
      
        >
            {!chainId || chainSupported ? parseAddress(account) : 'Wrong Network'}
        </Button>
    )
}
