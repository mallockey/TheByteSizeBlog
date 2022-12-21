import React, { FC } from 'react'
import { CodeBlock, vs2015 } from 'react-code-blocks'
import Footer from '../../components/Footer'
import SubHeader from '../../components/PostComponents/SubHeader'
import Paragraph from '../../components/PostComponents/Paragraph'
import PostContainer from '../../components/PostComponents/PostContainer'
import PostHead from '../../components/PostComponents/PostHead'
import BackToHomeButton from '../../components/PostComponents/BackToHomeButton'

const LinkedLists: FC = () => {
  return (
    <PostContainer>
      <PostHead title="Linked Lists" />
      <div className="flex w-full flex-grow mt-8 justify-center">
        <div className="w-full p-4 md:w-2/5">
          <SubHeader postTitle="Linked Lists" date="February 18th, 2021 11:45pm" />
          <Paragraph>
            As I study computer science (and for job interviews), I thought it would be wise to
            write about what I'm learning. This helps us learn and recall the information. Recently
            I've been reviewing common data structures and algorithms with linked lists being first
            on the list! (no pun!) <br /> <br /> First off, what is a linked list? <br /> <br /> A
            linked list is a collection of elements stored in a list like fashion. There are many
            different types of linked lists but I will only be going over singly linked in this
            post. These elements are referred to as nodes and I will call them that from now on.
            This sounds similar to arrays and in some ways they are, but the difference between the
            two is that the nodes are not stored directly next to each other in memory, also known
            as non-contiguous. This is beneficial because we don't need to allocate all the data in
            one big block like an array. Nodes can be stored all over with just a reference to the
            next node. <br /> <br /> Imagine we wanted to store a bed in a small room(memory). The
            bed in its current state won't fit in the room but if we were disassemble the bed into
            small parts(nodes) and note which piece connects to the other, we could store the bed in
            the room and still be able to know which pieces connect. This saves space! (probably not
            a bed you'd want to sleep on though) <br /> <br /> Each node in a linked list has a
            reference to the next node and only the next node:{' '}
            <img src="/images/posts/LinkedLists/linkedlistplain.jpg"></img> A linked list will have
            at least one property called head and sometimes tail. The head refers to the first node
            in the list and the tail refers to the last node.{' '}
            <img src="/images/posts/LinkedLists/linkedlist.jpg"></img> It's important to note that
            the head and tail are still just nodes. We need a head because we need a place to start
            when using the linked list. <br /> <br /> Time for the code. Lets start with the node,
            the building blocks of a linked list:{' '}
            <CodeBlock
              text={
                'class Node {\n  constructor(data){\n    this.value = data;\n    this.next = null;\n  }\n};'
              }
              language="javascript"
              showLineNumbers={true}
              theme={vs2015}
            />{' '}
            The node has a value and a reference to the next node. <br /> <br /> This is the linked
            list:{' '}
            <CodeBlock
              text={
                'class LinkedList {\n  constructor(node){\n    this.head = node; \n    this.tail = null; \n  } \n};'
              }
              language="javascript"
              showLineNumbers={true}
              theme={vs2015}
            />{' '}
            When the linked list is initialized with a node, that node will be considered the head.
            In the next post, I'll go over traversing the linked list.
          </Paragraph>
          <BackToHomeButton />
        </div>
      </div>
      <Footer />
    </PostContainer>
  )
}

export default LinkedLists
