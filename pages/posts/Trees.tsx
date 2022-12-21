import React, { FC } from 'react'
import Footer from '../../components/Footer'
import SubHeader from '../../components/PostComponents/SubHeader'
import Paragraph from '../../components/PostComponents/Paragraph'
import BackToHomeButton from '../../components/PostComponents/BackToHomeButton'

const Trees: FC = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex w-full flex-grow mt-8 justify-center">
        <div className="w-full p-4 md:w-2/5">
          <SubHeader postTitle="Trees" date="March 8th, 2021 12:41PM" />
          <Paragraph>
            Ah we've finally made it to the data structure that has confused me the most. (thus far
            at least). Trees! <br />
            <img
              style={{ height: '300px;', width: '300px', transform: 'rotate(180deg)' }}
              src="https://greatplainsnursery.com/wp-content/uploads/2016/12/oak-tree-pic-1080x675.jpg"
            />{' '}
            <br />
            Why is the tree flipped on its head? I think trees in CS are better represented like
            this as the root is on top. <br /> <br />
            So firstly, what are trees? Trees are non-linear data structures, which means they don't
            have a start and an end like arrays and linked lists. They have multiple nodes that
            connect to each other in some meaningful way. What this means is that trees will often
            adhere to a certain set of rules that will dictate how and where nodes are placed. They
            are usually traversed using recursion. <br /> <br /> Trees generally have at least,
            these properties:
            <br /> Root node <br /> Parent node <br /> Child node <br />
            <br /> Let's take a look at an example: <br />{' '}
            <img
              style={{ height: '300px;', width: '300px' }}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Tree_%28computer_science%29.svg/800px-Tree_%28computer_science%29.svg.png"
            />{' '}
            <br /> The root node (see it's at the top!) is 2. It has 2 children, 7 and 5 and those
            also have children. Parents are defined from the perspective of the child. So 7's parent
            is 2 as well as 5's. Likewise 10's parent is 7. <br /> <br /> Trees are good at
            representing hierarchical data. Think of JSON format and the DOM. These formats often
            have several nested components representing one branch of the tree. Binary Search Trees
            are also a type of tree used for efficient searching. This is a good example to show how
            some trees obey certain rules. Take a look at the Binary Search Tree below: <br />{' '}
            <img
              style={{ height: '300px;', width: '300px' }}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Binary_search_tree.svg/1280px-Binary_search_tree.svg.png"
            />{' '}
            <br /> Notice we have 8 as our root and 3 and 10 as its children. In a Binary Search
            Tree, the parents left child has to be less than its value and likewise its right value
            must be greater. 3 is less than 8 and 10 is greater than 8. This is the basic rule of a
            Binary Search Tree and if you take a look you'll notice it happens throughout the entire
            tree. You'll also notice that everything to the right of 8 (10 and all its children) are
            greater than 8. And everything to left of 8 (3 and all its children) are less than 8.
            This is important for insertion and I may cover this in another post. <br /> <br />
          </Paragraph>
          <BackToHomeButton />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Trees
