import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dev News</title>
        <meta name="description" content="Dev News" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <h1>Welcome to Dev News</h1>
    </div>
  )
}

export default Home
