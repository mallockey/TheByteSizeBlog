import React, { FC } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import SubHeader from '../../components/PostComponents/SubHeader'
import Paragraph from '../../components/PostComponents/Paragraph'
import PostContainer from '../../components/PostComponents/PostContainer'
import PostHead from '../../components/PostComponents/PostHead'

const MyFirstMonth: FC = () => {
  return (
    <PostContainer>
      <PostHead title="My First Month as a Software Engineer" />
      <Header />
      <div className="flex w-full flex-grow mt-8 justify-center">
        <div className="w-full p-4 md:w-2/3">
          <SubHeader
            postTitle="My First Month as a Software Engineer"
            date="April 25th, 2021 12:54 PM"
          />
          <Paragraph>
            I just started my first job as a Software Engineer last month and have been super busy
            so I haven&apos;t been posting as much lately. I thought this would be a good time to
            reflect on how much I&apos;ve learned in just one month. This is mostly from a soft
            skills perspective. <br /> <br />
            <div className="ml-8">
              1. Listen <br />
              <br /> One thing I&apos;ve noticed in my 29 years of living is that you can learn
              something from anyone. Older, younger, different skillset, race, gender, it
              doesn&apos;t matter. We as individuals have unique experiences and can gain a lot by
              just listening to each other. <br />
              <br /> 2. Don&apos;t be afraid to ask for help. <br />
              <br /> But also do your own research. I&apos;ve found myself in many situations where
              I had no idea how to move on to the next step and I wanted to ask another engineer for
              help. If you can answer the question by doing some research in a reasonable amount of
              time, then do just that. If you&apos;re seriously blocked on an issue with no path
              forward, then reach out to someone.
              <br />
              <br /> 3. Clarify.
              <br />
              <br /> If you don&apos;t understand something someone tells you, ask them to rephrase
              it. Or if you think you understand but not sure, summarize what you think they are
              saying and say it back to them. This leaves less room for communication errors.
              <br />
              <br /> 4. Be open-minded. <br />
              <br /> This idea should be applied in all areas of life but especially in tech.
              I&apos;ve found many people like to bash languages/frameworks and other tech quite
              often. While they do raise valid points occasionally, it more often than not feels
              like an ego boost. What we tend to forget is that these languages are just tools.
              Tools to accomplish a task. Some accomplish a task better than others. I wouldn&apos;t
              use a wrench to hammer a nail in the wall in the same way I wouldn&apos;t write C to
              build a website. Both ways can be done but one is going to be much more difficult. At
              the end of the day, you will likely have to use one of these languages and it will be
              a much more pleasant experience if you go into it with an open mind. <br /> <br />
            </div>
            Now I have to get back to learning Vue!
          </Paragraph>
        </div>
      </div>
      <Footer />
    </PostContainer>
  )
}

export default MyFirstMonth
