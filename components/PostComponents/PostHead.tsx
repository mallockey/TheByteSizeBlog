import React from 'react'
import Head from 'next/head'

const PostHead = ({ title }: { title: string }) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/images/site/byte.png" />
    </Head>
  )
}

export default PostHead
