import React, { FC } from 'react'
import Footer from '../../components/Footer'
import SubHeader from '../../components/PostComponents/SubHeader'
import Paragraph from '../../components/PostComponents/Paragraph'
import PostHead from '../../components/PostComponents/PostHead'
import BackToHomeButton from '../../components/PostComponents/BackToHomeButton'

const Stacks: FC = () => {
  return (
    <div className="flex flex-col h-full">
      <PostHead title="Stacks" />
      <div className="flex w-full flex-grow mt-8 justify-center">
        <div className="w-full p-4 md:w-2/3">
          <SubHeader postTitle="Stacks" date="March 8th, 2021 12:41PM" />
          <Paragraph>
            <img
              style={{ height: '300px;', width: '300px' }}
              src="https://cdn11.bigcommerce.com/s-ek50668lzs/images/stencil/1280x1280/products/2940/3204/2701_1947_detail__26664.1577651753.jpg?c=1?imbypass=on"
            />{' '}
            Pancakes??? I thought this was a blog about software! Pancakes certainly warrant a blog
            post on their own but the reason they're in this post is because we're going to be
            talking about another data structure called stacks. <br /> <br /> So its not really
            about the pancakes themselves but the formation they are placed in. Each pancake is
            placed on top of each other. We can see that it would be easy to remove the pancake from
            the top of the stack but would be difficult to remove any other (maybe the second or
            third down wouldn't be too hard in real life) but if were to try to remove the pancake
            at the bottom of the stack it would be difficult. So if we wanted to remove items from
            the stack we'd start at the top and continue removing each item. This is known as LIFO,
            Last in First out (this is NOT how you stock groceries at a super market!) <br /> <br />{' '}
            Cool, so why would we want to use a stack? <br /> <br /> Since we have to start from the
            top of the stack, order is important. If we were performing an operation where the order
            mattered we could do so by implmenting a stack. This would ensure that we'd start from
            the top and only proceed when that operation was finished. This also ensures that your
            data is being manipulated by first removing the top most item before proceeding to
            others. Think of the undo function available in most apps. As we are working, actions we
            performed are pushed onto the stack. If for whatever reason we want to go back a step we
            hit undo, causing the most recent action to be removed from the stack. <br /> <br /> The
            two common methods on stacks are push and pop. And like with JavaScript arrays, they
            work similary. Pushing to the stack will add an item to the top while pop will remove
            the item from the top.
          </Paragraph>
          <BackToHomeButton />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Stacks
