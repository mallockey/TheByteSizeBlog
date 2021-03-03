import React, { useEffect, useState } from 'react'
import BlogPost from '../../components/BlogPost'
import Header from '../../components/Header'
import { useRouter } from 'next/router'
import { createClient } from '@supabase/supabase-js'

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
      <Header />
      {singleBlogPost.id ? <BlogPost post={singleBlogPost} /> : 'No'}
    </div>
  )
}

export default SinglePost
