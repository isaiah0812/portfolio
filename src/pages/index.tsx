import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Menu from '@/components/menu'

export default function Home() {
  return (
    <>
      <Head>
        <title>Isaiah Bullard Developer Portfolio</title>
        <meta name="description" content="Isaiah Bullard's Developer Portfolio, containing contact information and project demos and descriptions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <div className={styles.introduction}>
          <div>
            <h1>Hey! I'm Isaiah.</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              doeiusmod tempor incididunt ut labore et dolore magna aliqua. Id
              ornare arcu odio ut sem nulla pharetra diam sit. Auctor elit sed
              vulputate mi.
            </p>
            <div className={styles.switch}>
              <button>Click Here for a Video Introduction!</button>
            </div>
          </div>
        </div>
        <div className={styles.menu}>
          <Menu />
        </div>
      </main>
    </>
  )
}
