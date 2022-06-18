import React, { FC } from 'react'
import Anchor from '../../components/Anchor'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import SubHeader from '../../components/PostComponents/SubHeader'
import PostSubHeader from '../../components/PostSubHeader'
import PostContainer from '../../components/PostComponents/PostContainer'
import Head from 'next/head'

const SiteUpdates: FC = () => {
  return (
    <PostContainer>
      <Head>
        <title>Site Updates</title>
      </Head>
      <Header />
      <div className="flex w-full flex-grow mt-8 justify-center">
        <div className="w-full p-4 md:w-2/3">
          <SubHeader postTitle="Site Updates" date="October 4th, 2021 11:29PM" />I just wanted to
          take the time to list a of the updates I put into the site. A lot of these are backend
          changes and could be better understood by browsing the codebase.
          <div className="ml-8 mt-8 mb-8">
            <PostSubHeader title="Databaseless" />
            When I first sought out creating my own blog, I wanted to make a full stack application.
            The reason mostly was to learn more about full stack technologies. After a bit of
            exploring I landed on{' '}
            <Anchor url="https://supabase.io/" external={true}>
              supabase
            </Anchor>{' '}
            which is a really awesome service that automatically makes API endpoints for you to
            query directly into your database. My design process was to have all my JSX / HTML / CSS
            for each blog post stored in a database. When the frontend would fetch those posts it
            would render them using react-jsx-parser in a generic React component. This became very
            quickly cumbersome and messy. There was a ton of unnecessary CSS/HTML on my pages. And
            of course, there are performance reasons. Considering this is a NextJS app, I could
            easily have each post on its own page and at build time it statically generate HTML
            which would be super fast for the user. Which is exactly what I did!
            <PostSubHeader title="TypeScript" />
            I've wanted to learn TypeScript for awhile now. This{' '}
            <Anchor
              url="https://www.udemy.com/course/understanding-typescript/?utm_source=adwords&utm_medium=udemyads&utm_campaign=Typescript_v.PROF_la.EN_cc.US_ti.8124&utm_content=deal4584&utm_term=_._ag_83329505194_._ad_532194038345_._kw__._de_c_._dm__._pl__._ti_dsa-774930029649_._li_9004372_._pd__._&matchtype=b&gclid=CjwKCAjwzOqKBhAWEiwArQGwaIjFUzHYYdoOvXqdSerJY14wZbIAAMW-9o4NWCHmJ_JGr0_bT5TMKhoClSsQAvD_BwE"
              external={true}
            >
              course
            </Anchor>{' '}
            on Udemy really helped me get up to speed. I was able to see all the benefits fairly
            quickly and get it incorporated on the site. I will say, TypeScript itself is pretty
            straightfoward. Once you start using it with React however, it becomes a bit
            challenging. But definitely worth it!
            <PostSubHeader title="New Home Page" />
            The new home page is much simpler than before. While I thought the jump to post section
            looked cool, it didn't have too much purpose considering I doubt anyone remembered the
            id of each post.
          </div>
          I plan on making further updates in the future so stay tuned!
        </div>
      </div>
      <Footer />
    </PostContainer>
  )
}

export default SiteUpdates
