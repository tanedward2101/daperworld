import Link from 'next/link'
import { useState } from 'react'
import styles from '../styles/Layout.module.css'
import styles2 from '../styles/Home.module.css'
import Image from 'next/image'
import Header from './header'
import { WalletContextProvider } from '../context/WalletContext'
import { Web3ReactProvider } from '@web3-react/core'

const getLibrary = (provider) => {
  return provider
}
export default function Layout({ children }) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <WalletContextProvider>{children}</WalletContextProvider>
    </Web3ReactProvider>
  )
}
