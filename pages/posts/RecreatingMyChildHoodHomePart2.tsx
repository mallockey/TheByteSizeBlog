import React, { FC } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import SubHeader from '../../components/PostComponents/SubHeader'
import Paragraph from '../../components/PostComponents/Paragraph'
import Anchor from '../../components/Anchor'
import PostSubHeader from '../../components/PostSubHeader'
import PostHead from '../../components/PostComponents/PostHead'

const RecreatingMyChildHoodHomePart2: FC = () => {
  return (
    <div className="flex flex-col h-full">
      <PostHead title="Recreating my childhood home: Part 2" />
      <Header />
      <div className="flex w-full flex-grow mt-8 justify-center">
        <div className="w-full p-4 md:w-2/3">
          <SubHeader postTitle="Recreating my childhood home: Part 2" date="February 23rd, 2022" />
          <Paragraph>
            <Anchor
              url="https://steamcommunity.com/sharedfiles/filedetails/?id=2762639768"
              external
            >
              Link to Workshop map
            </Anchor>
            <br />
            <br />
            It’s been awhile since my last post and I’ll pick up right where it left off. My last
            post was about rebuilding my childhood home in{' '}
            <Anchor
              url="https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/"
              external
            >
              Counter-Strike: Global Offensive{' '}
            </Anchor>
            using Valve's Hammer Editor.
          </Paragraph>
          <br />
          <PostSubHeader title="Accurate...or not?" />
          When I started this project, I wanted to make an exact replica of the house that I
          remembered but soon realized some sacrifices would have to be made to better the gameplay.
          In the off chance that people would play this map, I decided it was better to provide some
          cover and chokepoints even if they didn’t exist in real life. Here's a few notable
          examples:
          <img
            src="/images/posts/RecreatingMyChildHoodHomePart2/driveway.jpg"
            className="rounded-lg mt-4"
          ></img>
          <div className="flex justify-center text-sm">
            <span className="italic mb-4">
              {' '}
              The bushes on the right and the small fence on the left didn’t actually exist but
              offer cover for each team
            </span>
          </div>
          <img
            src="/images/posts/RecreatingMyChildHoodHomePart2/basement.jpg"
            className="rounded-lg mt-4"
          ></img>
          <div className="flex justify-center text-sm">
            <span className="italic mb-4">
              {' '}
              These wooden boards in the basement also didn't exist but made the bombsite less open
              and provides cover for both teams
            </span>
          </div>
          <Paragraph>
            <PostSubHeader title="Optimizing" />
            Optimzation is something I often neglected in my past maps but it becomes clear early on
            why this is absolutely necessary. Last week when I was building the club house in the
            backyard, I started to notice the map was taking about an hour to compile. After some
            research, one of the suggested solutions was to make every non boundary brush a{' '}
            <Anchor url="https://developer.valvesoftware.com/wiki/Func_detail" external>
              func_detail
            </Anchor>
            .
            <br /> <br /> This cuts down the number of visleafs (visleaves?) in the map which
            reduces compile time. What is a visleaf and why do I not want a lot of them? According
            to{' '}
            <Anchor url="https://developer.valvesoftware.com/wiki/Visleaf" external>
              Valve
            </Anchor>
            , a{' '}
            <span className="bg-yellow-100">
              {' '}
              visleaf is a hollow volume in a map which defines a cluster of visible surfaces. Every
              visible surface of a map is part of one visleaf or another. Visleafs are used
              primarily by the Rendering Engine to determine (before rendering each frame) which
              areas of the map might need to be rendered on screen.
            </span>{' '}
            In other words, the more visleafs the more work the rendering engine needs to do because
            the map has been broken up into so many of these hollow spaces.
          </Paragraph>
          <Paragraph>
            Another technique that came up was using{' '}
            <Anchor url="https://developer.valvesoftware.com/wiki/Tool_textures" external>
              Nodraw
            </Anchor>{' '}
            on faces of brushes that can't be seen by the player. This will make the the face of the
            brush not have any texture at all which is less work for our computer. This should be
            done on walls that the player will never see.
            <img
              src="/images/posts/RecreatingMyChildHoodHomePart2/nodraw.jpg"
              className="rounded-lg mt-4"
            ></img>
            <div className="flex justify-center text-sm">
              <span className="italic mb-4">
                {' '}
                You can see nodraw take effect if you're ever flying around the boundary of a map as
                a spectator and see these hollow looking walls
              </span>
            </div>
            I've only scratched the surface of optimization techniques and its not just for compile
            time but also helps to accomodate players with lower end computers. In the end, my
            compile time went from 1 hour to 5 minutes...Thanks{' '}
            <Anchor url="https://developer.valvesoftware.com/wiki/Func_detail" external>
              func_detail
            </Anchor>
            !!!
          </Paragraph>
          <Paragraph>
            <PostSubHeader title="What's next?" />
            I'm happy with the way the map came out and don't plan to add anything else unless the
            community requests other features. I'd be more than happy to to follow through. The
            truth is that I haven't been consistently working on this since my last post. I only
            picked it back up about a month ago when I decided I wanted to start on a new
            project...a 3D psychological horror game. But I told myself I'd have to finish this
            first in order to start on that. So here we are. See you in the next one!
            <br />
            <br />
            P.S. The garage is my favorite part of the map :-)
            <img
              src="/images/posts/RecreatingMyChildHoodHomePart2/garage.jpg"
              className="rounded-lg mt-4"
            ></img>
          </Paragraph>
          <br />
          <Anchor url="https://steamcommunity.com/sharedfiles/filedetails/?id=2762639768" external>
            Link to map
          </Anchor>{' '}
          in case you missed it
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default RecreatingMyChildHoodHomePart2
