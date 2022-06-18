import React, { FC } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Anchor from '../../components/Anchor'
import SubHeader from '../../components/PostComponents/SubHeader'
import Paragraph from '../../components/PostComponents/Paragraph'

const ServerlessInfrastructure: FC = () => {
  return (
    <div className="flex flex-col h-full">
      <Header />
      <div className="flex w-full flex-grow mt-8 justify-center">
        <div className="w-full p-4 md:w-2/3">
          <SubHeader postTitle="Serverless Infrastructure" date="June 16th, 2021 8:57PM" />
          <Paragraph>
            I&apos;ve recently got the chance to work with serverless cloud infrastructure and
            it&apos;s been quite exciting! I wanted to break down what this technology is and why
            it&apos;s so hot right now.
            <br />
            <br />
            So what is serverless and does it really mean no servers? Not really. Serverless simply
            means that you can host a piece of code (like an API endpoint) on a cloud platform (AWS,
            Azure) without having to manage any server. There is a server on the backend hosting
            your code but you as the developer don&apos;t need to worry about that, the cloud
            provider does. This is great for the following reasons:
            <br />
            <br />
            The management/maintenance of the server is all done through the cloud portal. You may
            need to hire someone to manage the cloud but there are no onsite visits, replacing
            drives, updating operating systems, etc. In reality, these procedures are still
            happening but it&apos;s the cloud provider&apos;s responsibility. The server&apos;s
            upkeep is entirely done through the cloud provider.
            <br />
            <br />
            High availability and redundancy. Need to open up an API endpoint on the west coast?
            Easy! It&apos;s just a few clicks away as well as adding another multiple instances of
            your functions.
            <br />
            <br />
            Scalability. Functions stored in cloud providers are very scalable. You can easily scale
            up/down for whatever you need through a few clicks.
            <br />
            <br />
            As someone who used to replace servers, hard drives, and other hardware components this
            is refreshing to see and from a development perspective, I can get my code deployed to
            the cloud with just a few commands which is super appealing. I really like the
            serverless framework, which makes this process even simpler. Check out this{' '}
            <Anchor
              url="https://bitbucket.org/blog/deploy-an-express-js-app-to-aws-lambda-using-the-serverless-framework"
              external={true}
            >
              walkthrough
            </Anchor>{' '}
            which guides you through deploying a simple Express server to AWS.
          </Paragraph>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ServerlessInfrastructure
