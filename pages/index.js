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
        <link rel="icon" href="/byte.png" />
        <meta property="og:title" content="The Byte Size Blog" />
        <meta property="og:image" content="/images/pageImage.PNG" />
        <meta property="og:url" content="https://bytesizeblog.vercel.app/" />

        <meta property="og:description" content="Byte sized blog posts about tech." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Cousine:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="mainContainer">
        <Header />
        <Main />
      </div>
      <Footer showBorder={true} />
    </>
  )
}
