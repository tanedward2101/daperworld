import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styles2 from '../styles/Layout.module.css'
import { motion } from 'framer-motion'
import React, { useState, useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'
import useEagerConnect from '../hooks/useEagerConnect'
import { TOKEN_CONTRACTS, CC_ABI } from '../utils/global.data'
import useNotification from '../hooks/useNotification'
import { getWeb3 } from '../shared/util'
import WalletModal from '../component/WalletModal'
import Countdown from 'react-countdown'
import Button from 'react-bootstrap/Button'
import ReactNotification from 'react-notifications-component'
let Web3 = require('web3')

export default function Home() {
  useEagerConnect()

  const { account, library, chainId } = useWeb3React()
  const [value, setValue] = useState('')
  const [amount, setAmount] = useState(0)
  const web3 = getWeb3(library)
  const spring = {
    type: 'spring',
    damping: 10,
    stiffness: 100,
  }
  const Completionist = () => (
    <div>
      <span className={styles.titleone}>
        Mint
        <input
          className="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="numberimg"
        ></input>{' '}

      </span>
      <br />
      <br />
      <Button
        className={styles2.cntButton}
      >
        Mint
      </Button>
    </div>
  )
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />
    } else {
      // Render a countdown
      const min = minutes < 10 ? '0' + minutes : minutes
      const hou = hours < 10 ? '0' + hours : hours
      const day = days < 10 ? '0' + days : days
      const sec = seconds < 10 ? '0' + seconds : seconds
      return (
        <span className={styles.countdown}>
          MINTING COUNTDOWN
          <br />
          <center> {day}:{hou}:{min}:{sec}</center>
        </span>
      )
    }
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Dead Larvaz</title>
        <meta name="description" content="Gentle " />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <WalletModal></WalletModal>
        <ReactNotification />
        <div className={styles.gridl} id="home">
          <motion.div
            initial={{ opacity: 0, y: '10vw' }}
            animate={{ opacity: 1, y: '1vw' }}
            transition={{
              type: 'tween',
              duration: 1.5,
            }}
            className={styles.card2}
          >
            <Image
              src="/sample/2.png"
              alt="Vercel Logo"
              width={250}
              height={250}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: '10vw' }}
            animate={{ opacity: 1, y: '1vw' }}
            transition={{
              type: 'tween',
              duration: 1.5,
            }}
            className={styles.card2}
          >
            <Image
              src="/sample/3.png"
              alt="Vercel Logo"
              width={250}
              height={250}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: '10vw' }}
            animate={{ opacity: 1, y: '1vw' }}
            transition={{
              type: 'tween',
              duration: 1.5,
            }}
            className={styles.card2}
          >
            <Image
              src="/sample/1.png"
              alt="Vercel Logo"
              width={250}
              height={250}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: '10vw' }}
            animate={{ opacity: 1, y: '1vw' }}
            transition={{
              type: 'tween',
              duration: 1.5,
            }}
            className={styles.card2}
          >
            <Image
              src="/sample/4.png"
              alt="Vercel Logo"
              width={250}
              height={250}
            />
          </motion.div>
        </div>


        <div className={styles.grid}>
          <br />
          <br />
          <Countdown date={new Date(1642157700000)} renderer={renderer}>
            <Completionist />
          </Countdown>

        </div>


     
      </main>
    </div>
  )
}
