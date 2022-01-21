import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

function Home() {
  return (
    <div className='styles.container'>
      <Head>
        <title>记账神器 Beancount 学习及模板</title>
        <meta name="description" content="这个博客主要是个人 Beancount 学习及模板分享。" />
        <meta property="og:description" content="这个博客主要是个人 Beancount 学习及模板分享。" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://panshiji.vercel.app/" />
        <meta property="og:url" content="https://panshiji.vercel.app/" />
        <meta property="og:site_name" content="panshiji" />
        <meta property="twitter:title" content="记账神器 Beancount 学习及模板" />
      </Head>

      <main className={styles.main}>
          <h2 className={styles.h2}>
            记账神器 Beancount 学习及模板
          </h2>
      </main>
      <footer className={styles.footer}> © 2018 – 2021
               Powered by{' Panshi '}
               <span className={styles.logo}>
                 <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
               </span>
           </footer>
    </div>
  )
}

export default Home
