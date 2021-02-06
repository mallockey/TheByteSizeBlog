import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>The Byte Size Blog</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="mainContainer">
        <Header />
        <Main />
      </div>
      <Footer />
    </>
  )
}
