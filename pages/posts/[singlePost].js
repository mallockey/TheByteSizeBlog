import React, { useEffect, useState } from 'react'
import SingleBlogPost from '../../components/SingleBlogPost'
import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useRouter } from 'next/router'
import { createClient } from '@supabase/supabase-js'
const supabase_url = process.env.NEXT_PUBLIC_supabase_url
const supabase_key = process.env.NEXT_PUBLIC_supabase_key

const SinglePost = () => {
  const router = useRouter()
  const singlePostId = router.query.singlePost
  const [singleBlogPost, setSingleBlogPost] = useState({})
  useEffect(() => {
    const supabase = createClient(supabase_url, supabase_key)
    async function fetchPost() {
      if (singlePostId) {
        let supa = await supabase.from('posts').select('*').filter('id', 'eq', singlePostId)
        setSingleBlogPost(supa.data[0])
      }
    }
    fetchPost()
  }, [singlePostId])

  return (
    <div>
      <Head>
        <title>{singleBlogPost.id ? singleBlogPost.title : 'Loading'}</title>
        <link rel="icon" href="/byte.png" />
        <meta property="og:title" content={singleBlogPost.id ? singleBlogPost.title : ''} />
        <meta property="og:description" content={singleBlogPost.id ? singleBlogPost.title : ''} />
      </Head>
      <Header />
      {singleBlogPost.id ? <SingleBlogPost post={singleBlogPost} /> : ''}
      <Footer />
    </div>
  )
}

export default SinglePost
