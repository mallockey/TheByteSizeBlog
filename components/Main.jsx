import React, { useEffect, useState } from 'react'
import JumpToPost from './JumpToPost'
import BlogPost from '../components/BlogPost'
import MorePostsButton from '../components/MorePostsButton'
import { createClient } from '@supabase/supabase-js'
import { supabase_url, supabase_key } from '../supabase_keys'

const Main = () => {
  const POST_PER_PAGE = 2
  const [blogPosts, setBlogPosts] = useState([])
  const [isLoading, setLoading] = useState(false)
  const [noMorePosts, setNoMorePosts] = useState(false)
  const [page, setPage] = useState(1)

  useEffect(() => {
    const supabase = createClient(supabase_url, supabase_key)
    async function fetchPosts() {
      let { data: posts, error } = await supabase
        .from('posts')
        .select('*')
        .order('date', { ascending: false })
        .range((page - 1) * POST_PER_PAGE, POST_PER_PAGE * page - 1)

      if (error) {
        setBlogPosts([])
      }

      if (posts.length === 0) {
        setNoMorePosts(true)
        setLoading(false)
        return
      }

      if (blogPosts.length > 0) {
        setBlogPosts(blogPosts.concat(posts))
      } else {
        setBlogPosts(posts)
      }
      setLoading(false)
      if (page !== 1) {
        //If the user just launched the page, don't scroll, only when they press the More Posts button
        const elementToScrollTo = document.getElementById(`${posts[0].id}`)
        elementToScrollTo.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setLoading(true)
    setTimeout(() => fetchPosts(), 200)
  }, [page])

  return (
    <div className="flex rounded-lg m-24 text-black sm:flex-col md:m-0 md:flex-col md:w-full sm:m-0 lg:m-0 lg:flex-col">
      <div id="allPostContainer" className="flex w-2/3 flex-col mr-6">
        {blogPosts.length > 0
          ? blogPosts.map((post, index) => {
              return <BlogPost key={index} post={post} />
            })
          : ''}
        <div id="morePostsBtn" className="flex flex-col pt-12 sm:pb-8">
          <MorePostsButton
            page={page}
            setPage={setPage}
            noMorePosts={noMorePosts}
            onClick={() => {
              setPage(page + 1)
            }}
          />
          <div className="h-14">
            {isLoading ? <div className="loader animate-spin mt-10"></div> : ''}
          </div>
        </div>
      </div>
      <div className=" w-1/3">
        <div className="top-0 items-center flex flex-col sticky sm:hidden md:hidden lg:hidden">
          <JumpToPost blogPosts={blogPosts} />
        </div>
      </div>
    </div>
  )
}

export default Main
