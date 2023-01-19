import Head from 'next/head';
import styles from '@/styles/About.module.css'

export default function About() {
  return (
    <>
      <Head>
        <title>About - Isaiah Bullard Developer Portfolio</title>
      </Head>
      <main className={styles.main}>
        <div>About</div>
      </main>
    </>
  );
}