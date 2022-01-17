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
import { gasstationInfo } from 'eth-gasprice-estimator'
import WalletModal from '../component/WalletModal'
import Countdown from 'react-countdown'
import Button from 'react-bootstrap/Button'
import ReactNotification from 'react-notifications-component'
let Web3 = require('web3')

export default function Home() {
  useEagerConnect()

  const [minted, setMinted] = useState(0)
  const [amount, setAmount] = useState(1)

  const { account, library, chainId } = useWeb3React()
  const web3 = getWeb3(library)
  useEffect(() => {
    fetchMyAPI()
  }, account)

  async function fetchMyAPI() {
    const contract = new web3.eth.Contract(
      CC_ABI,
      '0xA7f5BEd28c596afEc2980C29874963A974461Cf1',
    )
    const amount = await contract.methods.totalSupply().call()
    setMinted(amount)
  }

  const mint = async () => {
    if (account === undefined) {
      alert('Please connect your wallet')
    }
    var gasPriceResult = await gasstationInfo('average')
    const contracts = new web3.eth.Contract(
      CC_ABI,
      '0xA7f5BEd28c596afEc2980C29874963A974461Cf1',
    )
    fetchMyAPI()
    var estGas = 0
    const Price = await contracts.methods.price().call()
    console.log('Price', Price)
    const amounts = await contracts.methods.totalSupply().call()
    setMinted(amounts)
    if (minted < 666) {
      const gasAmount = await contracts.methods
        .freeMint()
        .estimateGas({ from: account })
        .then(function (result) {
          estGas = result
        })

      const mintres = await contracts.methods.freeMint().send({
        from: account,
      })
    } else {
      const gasAmount = await contracts.methods
        .minttest(amount)
        .estimateGas({ from: account, value: amount * Price })
        .then(function (result) {
          estGas = result
        })

      const mintres = await contracts.methods.minttest(amount).send({
        from: account,
        value: amount * Price,
      })
    }

    fetchMyAPI()
  }

  const spring = {
    type: 'spring',
    damping: 10,
    stiffness: 100,
  }
  const handleClickP = () => {
    var a = amount + 1
    if (minted < 666) {

      if (a <= 2) {
        setAmount(a)
      }
    }
    else
    {
      if (a <= 15) {
        setAmount(a)
      }
    }
  }

    const handleClickM = () => {
      var a = amount - 1

      if (a > 0) {
        setAmount(a)
      }

    }

    const Completionist = () => (
      <div>
        {' '}
        <center>
          {minted < 666 ? (
            <div className={styles.free}>Free Mint</div>
          ) : (
            <div className={styles.free}>0.03 ETH each</div>
          )}
          <span className={styles.titleone}>
            <br />
            {minted}/6666 minted
            <br />
            <div className={styles.grid}>
              <div className={styles.tcard}>

                <Button className={styles.valbutton} onClick={handleClickM}>
                  -
                </Button>

              </div>
              <div className={styles.tcard}>{amount}</div>
              <div className={styles.tcard}>

                <Button className={styles.valbutton} onClick={handleClickP}>
                  +
                </Button>

              </div>
            </div>
          </span>

          <Button className={styles2.cntButton} onClick={mint}>
            Mint
          </Button>
        </center>
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
            <center>
              {' '}
              {day}:{hou}:{min}:{sec}
            </center>
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
                width={175}
                height={175}
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
                width={175}
                height={175}
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
                width={175}
                height={175}
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
                width={175}
                height={175}
              />
            </motion.div>
          </div>

          <div className={styles.grid}>
            <br />
            <br />
            {/* <Countdown date={new Date(1642265100000)} renderer={renderer}>
            <Completionist />
          </Countdown> */}
          </div>
        </main>
      </div>
    )
  }
