import React, { Fragment } from 'react'
import Head from 'next/head'
import Footer from '../components/Footer'
import Main from '../components/Main'

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>The Byte Size Blog</title>
        <link rel="icon" href="/images/site/byte.png" />
        <meta property="og:title" content="The Byte Size Blog" />
        <meta property="og:image" content="/images/site/pageImage.png" />
        <meta property="og:url" content="https://bytesizeblog.dev/" />
        <meta property="og:description" content="Byte sized blog posts about tech." />
      </Head>
      <div className="flex flex-col min-h-full items-stretch">
        <Main />
        <Footer />
      </div>
    </Fragment>
  )
}
