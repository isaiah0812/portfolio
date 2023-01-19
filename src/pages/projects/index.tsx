import Head from 'next/head';
import styles from '@/styles/Projects.module.css'

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Isaiah Bullard Developer Portfolio</title>
      </Head>
      <main className={styles.main}>
        <div>Projects</div>
      </main>
    </>
  );
}