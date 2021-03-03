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
        <meta property="og:title" content="The Byte Size Blog" />
        <meta property="og:image" content="/images/pageImage.PNG" />
        <meta property="og:url" content="https://bytesizeblog.vercel.app/" />
        <meta property="og:description" content="Byte sized blog posts about tech." />
      </Head>
      <div className="mainContainer">
        <Header />
        <Main />
      </div>
      <Footer />
    </>
  )
}
