import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Main from '../components/Main'

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
      <div className="flex flex-col min-h-full items-stretch">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  )
}
