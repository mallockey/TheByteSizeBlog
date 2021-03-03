import React, { useEffect, useState } from 'react'
import JumpToPost from './JumpToPost'
import BlogPost from '../components/BlogPost'
import MorePostsButton from '../components/MorePostsButton'
import { createClient } from '@supabase/supabase-js'

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
        .from('posts_dev')
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
    setTimeout(() => fetchPosts(), 50)
  }, [page])

  return (
    <div className="flex m-24 text-black sm:flex-col sm:m-0 sm:h-full">
      <div id="allPostContainer" className="flex w-2/3 flex-col mr-6 sm:w-full">
        {blogPosts.length > 0
          ? blogPosts.map((post, index) => {
              return <BlogPost key={index} post={post} />
            })
          : ''}
        <div id="morePostsBtn" className="flex flex-col pt-12 sm:pb-8 sm:items-center">
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
      <div className="rightSideBar sm:w-full sm:h-full">
        <JumpToPost blogPosts={blogPosts} />
      </div>
    </div>
  )
}

export default Main
