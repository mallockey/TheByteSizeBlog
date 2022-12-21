import React, { FC } from 'react'
import Footer from '../../components/Footer'
import SubHeader from '../../components/PostComponents/SubHeader'
import Paragraph from '../../components/PostComponents/Paragraph'
import Anchor from '../../components/Anchor'
import Head from 'next/head'
import PostContainer from '../../components/PostComponents/PostContainer'
import PostHead from '../../components/PostComponents/PostHead'
import BackToHomeButton from '../../components/PostComponents/BackToHomeButton'

const RecreatingMyChildHoodHome: FC = () => {
  return (
    <PostContainer>
      <PostHead title="Recreating my childhood home" />
      <div className="flex w-full flex-grow mt-8 justify-center">
        <div className="w-full p-4 md:w-2/5">
          <SubHeader postTitle="Recreating my childhood home" date="October 16th, 2021 2:08 AM" />
          <Paragraph>
            Back in 2006 I became obsessed with making maps in Counter Strike 1.6. I spent hours
            attempting to perfect every crevice of the map, aligning every polygon and attempting to
            make an atmosphere. When I thought the map was good enough, I’d even try to get people
            to put it on their servers. There are really some amazing virtual environments out there
            in the game world. Some of the big ones like Half Life, Resident Evil, GTA, or any of
            the Zelda’s come to mind. A lesser known one,{' '}
            <Anchor url="https://store.steampowered.com/app/203810/Dear_Esther/" external={true}>
              Dear Esther
            </Anchor>
            , really blew me away when I first played through it.
            <br />
            <br />
            Over the years, I’ve actually kept up with it, making replicas of my apartment buildings
            and other scenic views. It’s quite relaxing and it’s one of the few things I can do for
            hours on end aside from coding.
            <img
              src="/images/posts/RecreatingMyChildHoodHome/midwood.jpg"
              className="rounded-lg mt-4"
            ></img>
            <div className="flex justify-center text-sm">
              <span className="italic mb-4">
                {' '}
                cs_midwood for CS:GO. I started working on this when the quarantine first hit
              </span>
            </div>
          </Paragraph>
          <Paragraph>
            For those of us fortunate enough to grow up in a home, a childhood home can hold a lot
            of special memories. Mine was torn down sometime between 2005 - 2007 but I still
            regularly have dreams about that home. I’ve always wanted to see it again. So I decided
            to load up Hammer again for another map that no one asked for.
            <br />
            <br />
            One of the biggest challenges of recreating this entirely from memory is well for one,
            memories lie. I was a lot younger back in those days, so the house probably felt a lot
            bigger than it actually was. On top of that, I couldn’t find any exterior shots of the
            house, Google has failed me as well so I’m stuck with my own memory. Valve Hammer
            Editor, which is the program used to create the 3D worlds you see in Half Life, Counter
            Strike, TF2, L4D and most Valve games, is a relatively simple tool. A new version came
            out recently with the release of{' '}
            <Anchor url="https://store.steampowered.com/app/546560/HalfLife_Alyx/" external={true}>
              Half Life: Alyx
            </Anchor>
            <br />
            <br />
            There are 4 views in the editor, Camera, Top, Front, Side. Camera shows us what will be
            rendered in the game. Top, Front, and Side are just different angles you can use to make
            brushes. A brush is just a block that you apply a texture to. A texture is like the
            painting on the block. If I wanted some grass, I could search for a grass texture and
            apply it to the brush.
            <img
              className="mb-4"
              src="/images/posts/RecreatingMyChildHoodHome/Screenshot 2021-10-16 014716.png"
            ></img>
            Clicking on one of the views, except Camera, allows you to drag the mouse to create a
            brush, which is the basic building block of any map.
            <div className="flex justify-center mt-4">
              <img
                className="mt-4 mb-4"
                src="/images/posts/RecreatingMyChildHoodHome/Screenshot 2021-10-16 015532.png"
              ></img>
            </div>
            Connect enough of these and you’ll start to get something resembling real life
            architecture! So far I’ve gotten the basic layout of the first floor down:
          </Paragraph>
          <img className="mt-4 mb-4" src="/images/posts/RecreatingMyChildHoodHome/house1.png"></img>
          <div className="flex justify-center text-sm">
            <span className="italic mb-4 -mt-4"> First floor exterior shot</span>
          </div>
          <img className="mt-4 mb-4" src="/images/posts/RecreatingMyChildHoodHome/house2.png"></img>
          <div className="flex justify-center text-sm">
            <span className="italic mb-4 -mt-4">
              {' '}
              The first room in the house, my older brothers room
            </span>
          </div>
          <img className="mt-4 mb-4" src="/images/posts/RecreatingMyChildHoodHome/house3.png"></img>
          <div className="flex justify-center text-sm">
            <span className="italic mb-4 -mt-4">
              {' '}
              The living room. It certainly looks bland! Once proper lighting is done and I've added
              more details like trims and windows, the map will start to come to life
            </span>
          </div>
          <img className="mt-4 mb-4" src="/images/posts/RecreatingMyChildHoodHome/house4.png"></img>
          <div className="flex justify-center text-sm">
            <span className="italic mb-4 -mt-4">
              {' '}
              The basement. Circa 1997 you could find me here playing Terminal Velocity or Duke
              Nukem 3D
            </span>
          </div>
          As always with mapping, there is a lot to do. Since I can't find any pictures of the
          exterior I've been struggling to finish the second floor. I've been told it was an{' '}
          <Anchor url="https://en.wikipedia.org/wiki/A-frame" external={true}>
            a frame
          </Anchor>{' '}
          but none of the images on Google have matched what I have in my memory. So I'll continue
          with the first floor, basement, and outside for now as I can remember those pretty well.
          I'll post another update once more progress is done.
          <BackToHomeButton />
        </div>
      </div>
      <Footer />
    </PostContainer>
  )
}

export default RecreatingMyChildHoodHome
