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
import ConnectBtn from '../component/ConnectBtn'
import Header from '../component/header'
let Web3 = require('web3')

export default function Home() {
  useEagerConnect()
  const [isOpen, setIsOpen] = useState(false)

  const iChat =
    ' This Subtle Art NFT drop is the first book of many that you’ll be able to co-own, share and engage with a community around your favorite titles and authors. Build your Subtle Art collection to  own more of the overall title, expand into other titles and  enjoy the benefits of being on the ground floor of the first #bookNFT library!'
  const openMenu = () => setIsOpen(!isOpen)
  const setImg = () => setLink('/chat1.png')
  const [minted, setMinted] = useState(0)
  const [amount, setAmount] = useState(1)
  const [textChat, setChat] = useState(iChat)
  const [number, setNumber] = useState(0)
  const [imglink, setLink] = useState('/chat1.png')
  const [faded, setFaded] = useState(1)
  const [monkeyimg, setMonkey] = useState('/1.png')
  const [location, setLocation] = useState(0)
  const { account, library, chainId } = useWeb3React()
  const web3 = getWeb3(library)
  useEffect(() => {
    fetchMyAPI()
  }, account)

  async function fetchMyAPI() {
    const contract = new web3.eth.Contract(
      CC_ABI,
      '0xc3c95ccbed978fd2915ffa1883f5ede2590512e7',
    )
    const amount = await contract.methods.totalSupply().call()
    setMinted(amount)
  }

  function setChater() {
    console.log(number)
    if (number == 0) {
      setChat(
        'alami tanpa bahan kimia untuk mengatasi gangguan nyamuk membandel tanpa mengandung parafin. Aroma Citronela / Sereh alami yang juga menyegarkan dalam kemasan praktis mudah dibawa.',
      )
      setNumber(1)
      setMonkey('/2.png')
    }

    if (number == 1) {
      setChat(
        'Cari Semua yang Kamu Butuhkan di Tokopedia. Bebas Ongkir Hingga 40Rb. Belanja Sekarang! Selalu Ada, Selalu Bisa. Bebas Ongkir. Bisa Bayar di Minimarket.',
      )
      setNumber(2)
      setMonkey('/3.png')
    }
    if (number == 2) {
      setChat(
        'Berita Tokopedia - Kemendag meminta seluruh pemain e-commerce mulai dari Shopee hingga Tokopedia untuk men-take down para seller yang jual minyak goreng di ...',
      )
      setNumber(0)
      setMonkey('/4.png')
    }
  }

  function makeid(length) {
    var result = ''

    var characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()'
    var charactersLength = characters.length
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result
  }

  const mint = async () => {
    var nonce = makeid(8)
    var data = { accounts: account, amount: amount, nonce: nonce }

    const res = await fetch('http://localhost:3001/api/whitelistcheck', {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain',
      },
      body: JSON.stringify(data),
    })
    // const content = await res.json()
    // console.log(content)
    // if (account === undefined) {
    //   alert('Please connect your wallet')
    // }
    // var gasPriceResult = await gasstationInfo('average')
    // const contracts = new web3.eth.Contract(
    //   CC_ABI,
    //   '0xc3c95ccbed978fd2915ffa1883f5ede2590512e7',
    // )

    // fetchMyAPI()

    // var estGas = 0
    // const Price = await contracts.methods.price().call()
    // console.log('Price', Price)
    // const amounts = await contracts.methods.totalSupply().call()
    // setMinted(amounts)
    // if (minted < 666) {
    //   const gasAmount = await contracts.methods
    //     .freeMint(amount)
    //     .estimateGas({ from: account })
    //     .then(function (result) {
    //       estGas = result
    //     })

    //   const mintres = await contracts.methods.freeMint(amount).send({
    //     from: account,
    //   })
    // } else {
    //   const gasAmount = await contracts.methods
    //     .mintlarvaz(amount)
    //     .estimateGas({ from: account, value: amount * Price })
    //     .then(function (result) {
    //       estGas = result
    //     })

    //   const mintres = await contracts.methods.mintlarvaz(amount).send({
    //     from: account,
    //     value: amount * Price,
    //   })
    // }

    // fetchMyAPI()
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
    } else {
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

  const fadenew = () => {
    setFaded(0)
    setLocation(200)
    setTimeout(function () {
      setChater()
      fadeold()
    }, 2000)
  }

  const fadeold = () => {
    setFaded(1)
    setLocation(0)
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
        <title>Daper House of Gentleman</title>
        <meta
          name="description"
          content="Place for every gentleman to hang out"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles2.header}>
        <motion.nav
          className={styles2.navbar}
          initial={{ y: '-20vw' }}
          animate={{ y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 100,
            duration: 2,
          }}
        >
          <div className={styles2.headlogo}>{''}</div>
          {/* <ul
            className={
              isOpen === false
                ? styles2.navmenu
                : styles2.navmenu + ' ' + styles2.active
            }
          >
            <li className={styles2.navitem}>
              <a
                className={
                  isOpen === false
                    ? styles2.navlink
                    : styles2.navlink + ' ' + styles2.active
                }
                onClick={setImg}
              >
                Home
              </a>
            </li>
            <li className={styles2.navitem}>
              <a
                className={
                  isOpen === false
                    ? styles2.navlink
                    : styles2.navlink + ' ' + styles2.active
                }
                onClick={setImg}
              >
                Daper
              </a>
            </li>
            <li className={styles2.navitem}>
              <a
                className={
                  isOpen === false
                    ? styles2.navlink
                    : styles2.navlink + ' ' + styles2.active
                }
                onClick={setImg}
              >
                Team
              </a>
            </li>
          </ul> */}

          <div className={styles2.iconic}>
            <div className={styles2.iconchild}>
              <ConnectBtn></ConnectBtn>
            </div>
            <div className={styles2.iconchild}>
              <a href="https://discord.gg/p7ZAUWy9NP">
                <Image
                  src="/discord.svg"
                  alt="Vercel Logo"
                  width={30}
                  height={30}
                />
              </a>
            </div>
            <div className={styles2.iconchild}>
              <a href="https://twitter.com/DeadLarvaz">
                <Image
                  src="/twitter.svg"
                  alt="Vercel Logo"
                  width={30}
                  height={30}
                />
              </a>
            </div>
            {/* <div className={styles2.iconchild}>
              <Link href="/">
                <Image
                  src="/opensea.svg"
                  alt="Vercel Logo"
                  width={30}
                  height={30}
                />
              </Link>
            </div> */}
          </div>
          {/* <button
            className={
              isOpen === false
                ? styles2.hamburger
                : styles2.hamburger + ' ' + styles2.active
            }
            onClick={openMenu}
          >
            <span className={styles2.bar}></span>
            <span className={styles2.bar}></span>
            <span className={styles2.bar}></span>
          </button> */}
        </motion.nav>
      </header>
      <main className={styles.main}>
        <WalletModal></WalletModal>
        <ReactNotification />

        <div className={styles.grid}>
          <div className={styles.videoparent}>
            <video autoPlay loop muted id="myVideo" width="100%" height="100%">
              <source src="/tvfr.mp4" type="video/mp4" />
            </video>
            <div className={styles.videotitle}>
              <Image
                src="/logo.png"
                alt="Vercel Logo"
                width={400}
                height={200}
              />
            </div>
            <div className={styles.videoimg}>
              <motion.div
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: faded, x: location }}
                onClick={() => {
                  fadenew()
                }}
                transition={{
                  type: 'tween',
                  duration: 1,
                  delay: 1,
                }}
                exit={{ opacity: 0 }}
              >
                <Image
                  src={monkeyimg}
                  alt="Vercel Logo"
                  width={350}
                  height={350}
                  onClick={setImg}
                />
              </motion.div>
            </div>
            <div className={styles.videochat}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: faded }}
                onClick={() => {
                  fadenew()
                }}
                transition={{
                  type: 'tween',
                  duration: 1,
                  delay: 1,
                }}
              >
                <Image
                  src={imglink}
                  alt="Vercel Logo"
                  width={880}
                  height={700}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: faded }}
                transition={{
                  type: 'tween',
                  duration: 1,
                  delay: 1,
                }}
                className={styles.chat}
              >
                {textChat}
              </motion.div>
            </div>
          </div>
        </div>

        {/* <div className={styles.grid}>
          <br />
          <br />
          <Countdown date={new Date(1642423200000)} renderer={renderer}>
            <Completionist />
          </Countdown>
        </div> */}
      </main>
    </div>
  )
}
