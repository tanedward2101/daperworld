import Link from 'next/link'
import { useState } from 'react'
import styles from '../styles/Layout.module.css'
import styles2 from '../styles/Home.module.css'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Button from '@material-ui/core/Button'
import ConnectBtn from './ConnectBtn'
export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const openMenu = () => setIsOpen(!isOpen)
  return (
    <>
      <header className={styles.header}>
        <motion.nav
          className={styles.navbar}
          initial={{ y: '-20vw' }}
          animate={{ y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 100,
            duration: 2,
          }}
        >
          <div className={styles.headlogo}>{''}</div>
          <ul
            className={
              isOpen === false
                ? styles.navmenu
                : styles.navmenu + ' ' + styles.active
            }
          >
            <li className={styles.navitem}>
              <a
                className={
                  isOpen === false
                    ? styles.navlink
                    : styles.navlink + ' ' + styles.active
                }
                onClick={openMenu}
                href="https://deadlarvaz.com"
              >
                Home
              </a>
            </li>
            <li className={styles.navitem}>
              <a
                className={
                  isOpen === false
                    ? styles.navlink
                    : styles.navlink + ' ' + styles.active
                }
                onClick={openMenu}
                href="https://deadlarvaz.com"
              >
                Daper
              </a>
            </li>
            <li className={styles.navitem}>
              <a
                className={
                  isOpen === false
                    ? styles.navlink
                    : styles.navlink + ' ' + styles.active
                }
                onClick={openMenu}
                href="https://deadlarvaz.com"
              >
                Team
              </a>
            </li>
          </ul>

          <div className={styles.iconic}>
            <div className={styles.iconchild}>
              <ConnectBtn></ConnectBtn>
            </div>
            <div className={styles.iconchild}>
              <a href="https://discord.gg/p7ZAUWy9NP">
                <Image
                  src="/discord.svg"
                  alt="Vercel Logo"
                  width={30}
                  height={30}
                />
              </a>
            </div>
            <div className={styles.iconchild}>
              <a href="https://twitter.com/DeadLarvaz" target="_blank">
                <Image
                  src="/twitter.svg"
                  alt="Vercel Logo"
                  width={30}
                  height={30}
                />
              </a>
            </div>
            {/* <div className={styles.iconchild}>
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
          <button
            className={
              isOpen === false
                ? styles.hamburger
                : styles.hamburger + ' ' + styles.active
            }
            onClick={openMenu}
          >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </button>
        </motion.nav>
      </header>
    </>
  )
}
