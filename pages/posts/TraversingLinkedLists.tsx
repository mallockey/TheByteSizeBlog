import React, { FC } from 'react'
import { CodeBlock, vs2015 } from 'react-code-blocks'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import SubHeader from '../../components/SubHeader'
import Paragraph from '../../components/Paragraph'

const TraversingLinkedLists: FC = () => {
  return (
    <div className="flex flex-col h-full">
      <Header />
      <div className="flex w-full flex-grow mt-8 justify-center">
        <div className="w-full p-4 md:w-2/3">
          <SubHeader
            postTitle="Traversing Linked Lists"
            date="March 2nd, 2021 12:49pm
"
          />
          <Paragraph>
            In the previous post, I went over the basics of linked lists and what they are used for.
            In this post, I'll be going over traversing a singly linked list.
            <br /> <br />
            Unlike an array, a linked list doesn't have indexes. So we wouldn't be able to start
            from 0 and count until 1 less than the length of the list like we do with arrays. We
            need a different method.
            <Paragraph>
              What we do have is the head of the linked list, the starting point, and a next
              property that tells us what the next node is. So we'd probably want to start with
              keeping a reference to the head node like so:
              <CodeBlock
                text={'let currentNode = this.head;'}
                language="javascript"
                showLineNumbers={true}
                theme={vs2015}
              />
            </Paragraph>
            <Paragraph>
              In order to reach each node we would need a loop. The ending condition for this loop
              would be when the next value is null because at that point there is no next node
              meaning we've reached the end of the list.
              <CodeBlock
                text={
                  'let currentNode = this.head; \n  while(currentNode.next !== null){ \n    //do things here\n  }'
                }
                language="javascript"
                showLineNumbers={true}
                theme={vs2015}
              />
            </Paragraph>
            <Paragraph>
              Now if we left this as it is we'd have an infinite loop. We'd simply be looking at the
              head over and over and checking to see if the next is null (it isn't). So what we need
              to do is assign currentNode to the next node:
              <CodeBlock
                text={
                  'let currentNode = this.head; \n  while(currentNode.next !== null){ \n    currentNode = currentNode.next\n  }'
                }
                language="javascript"
                showLineNumbers={true}
                theme={vs2015}
              />
            </Paragraph>
            <Paragraph>
              This will allow us to touch every node in the linked lists. With this method, we'd be
              able to do more complex operations on the list like reversing it, adding/deleting a
              node, etc.
            </Paragraph>
          </Paragraph>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default TraversingLinkedLists
