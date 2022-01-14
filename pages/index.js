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
          <motion.div
            initial={{ opacity: 0, y: '10vw' }}
            animate={{ opacity: 1, y: '1vw' }}
            transition={{
              type: 'tween',
              duration: 1.5,
            }}
            className={styles.titleone}
          >
            {' '}
            6,666 undead larva NFTs on the Ethereum blockchain
          </motion.div>
          <br />
          <br />
          <br />
          <br />
          <Countdown date={new Date(1642157700000)} renderer={renderer}>
            <Completionist />
          </Countdown>

        </div>


        <div className={styles.gridl} id="about">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: 'tween',
              duration: 1.5,
              delay: 1,
            }}
          >
            <Image
              src="/Larva.gif"
              alt="Vercel Logo"
              width={400}
              height={400}
            />
          </motion.div>
          <motion.div
            className={styles.texter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: 'tween',
              duration: 1.5,
              delay: 1,
            }}
          >
            <h1 className={styles.headtext}> Dead Larvaz</h1>
            <p className={styles.ptext}>
              We are making a Deadfellaz+Larva Lads derivative project. That’s
              right, 6666 cute DearLarvaz is born! and dont forget the first{' '}
              <b>666 ARE FREE! </b>
              We feel beyond blessed to be able to combine 2 of our favorite
              project and push this far
              <br />
              <br />
              Our Dream: to be able to wake up from nightmare
              <br />
              <br />
              As some of us may know too well, This few years had been rough for
              all of us. We want to change this and be there for our
              communities. Our dream is to create a home, a safe place to be who
              you are and together we can wake up from nightmare like our
              DeadLarvaz from the grave! 🐛 We create our LarvazDAO to support
              our cause
            </p>
          </motion.div>
        </div>
        <br />

        <h1 className={styles.headtext} id="roadmap">ROADMAP</h1>
        <div className={styles.grid}>
          <motion.div
            className={styles.largecard}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: 'tween',
              duration: 1.5,
              delay: 1,
            }}
          >
            <h4 className={styles.bamat}>🐛 DeadLarvaz discord open! 🎊</h4>
          </motion.div>
          <motion.div
            className={styles.largecard}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: 'tween',
              duration: 1.5,
              delay: 1,
            }}
          >
            <h4 className={styles.bamat}>
              🐛 Stealth Launch!<br></br>
              6,666 Larvaz NFTs minted on our website. Each cost 0.03 ETH{' '}
              <br></br>
              And first 666 can be minted for FREE!
            </h4>
          </motion.div>
          <motion.div
            className={styles.largecard}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: 'tween',
              duration: 1.5,
              delay: 1,
            }}
          >
            <h4 className={styles.bamat}>
              🐛 The holder of DeadLarvaz will lead the DeadLarvaz treasury and
              has the abiliy to vote for next phase Did anyone said metaverse?
            </h4>
          </motion.div>
          <motion.div
            className={styles.largecard}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: 'tween',
              duration: 1.5,
              delay: 1,
            }}
          >
            <h4 className={styles.bamat}>
              🐛 Every 20% token minted we will get a Deadfellaz to the
              treasury. Which will then be all given away to DeadLarvaz holder
              you can see how much we love you and deadfellaz
            </h4>
          </motion.div>
        </div>

        <h1 className={styles.headtext} id="team">Team</h1>
        <div className={styles.gridl}>
          <motion.div
            className={styles.smallcard}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: 'tween',
              duration: 1.5,
              delay: 1,
            }}
          >
            <Image
              src="/loryane.png"
              alt="Vercel Logo"
              width={600}
              height={600}
            />
            <center className={styles.headtext}>
              <h4>Loryane</h4>
            </center>
            <center>Community Leader Larva</center>
          </motion.div>
          <motion.div
            className={styles.smallcard}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: 'tween',
              duration: 1.5,
              delay: 1,
            }}
          >
            <Image
              src="/dario.png"
              alt="Vercel Logo"
              width={600}
              height={600}
            />
            <center className={styles.headtext}>
              {' '}
              <h4>DarioDLZ</h4>
            </center>
            <center>Art Designer Larva</center>
          </motion.div>
          <motion.div
            className={styles.smallcard}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: 'tween',
              duration: 1.5,
              delay: 1,
            }}
          >
            <Image
              src="/claireluna.png"
              alt="Vercel Logo"
              width={600}
              height={600}
            />
            <center className={styles.headtext}>
              <h4>ClaireLuna</h4>
            </center>
            <center>Tech Specialist Larva</center>
          </motion.div>
        </div>
      </main>
    </div>
  )
}
