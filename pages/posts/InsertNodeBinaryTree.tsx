import React, { FC } from 'react'
import { CodeBlock, vs2015 } from 'react-code-blocks'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import SubHeader from '../../components/SubHeader'

const InsertNodeBinaryTree: FC = () => {
  return (
    <div className="flex flex-col h-full">
      <Header />
      <div className="flex w-full flex-grow mt-16 justify-center">
        <div className=" w-2/3">
          <SubHeader
            postTitle="Inserting a node into a binary tree"
            date="March 11th, 2021 3:03PM"
          />
          Let&apos;s take a look at how you would go about inserting a new node in a Binary Tree.{' '}
          <br /> <br />
          Quick Recap, a Binary Search Tree is a type of tree where each node can have at most 2
          children. The left node will be smaller than the current node and the right node will be
          larger than the current node.
          <img src="/images/posts/InsertNodeBinaryTree/bin1.PNG"></img>
          In the diagram above the current node is 5. 5&apos;s left node is 3 and its right is 8,
          adhering to the set of rules we defined above. Side note: A Binary Tree is considered full
          when each node has 2 children. BST&apos;s are efficient at searching. Let&apos;s say were
          looking for a particular value in the tree. We can eliminate half of the numbers with each
          iteration since the data is sorted in this fashion.
          <br /> <br />
          Let&apos;s insert 2 to this tree. How could we do that? <br />
          <br />
          1. Start at the root node (5)
          <br />
          2. We&apos;ll need to first check if 2 is less than 5.
          <br />
          3. 2 is less than 5 so we know we&apos;ll will be inserting 2 to the left of the root
          node. <br />
          4. Now if there were no node to the left of 5, we&apos;d be done. But there is a node so
          we need to repeat step 2 with the current node being 3.
          <br />
          5. 2 is less than 3 and since 3 has no left node, we can insert 2 as 3&apos;s left.
          <br /> <img src="/images/posts/InsertNodeBinaryTree/bin2.PNG"></img>
          Here&apos;s the code for the insert method:
          <CodeBlock
            text={
              ' insert(newNode){\n 	let currentNode = this.root\n  	while(currentNode){\n 	  if(newNode.value < currentNode.value){\n 		if(currentNode.left === null){\n 		  currentNode.left = newNode\n 		  break\n 		}else{\n 		  currentNode = currentNode.left\n 		}\n 	  }else if (newNode.value > currentNode.value){\n 		if(currentNode.right === null){\n 		  currentNode.right = newNode\n 		  break\n 		}else{\n 		  currentNode = currentNode.right\n 		}\n 	  }\n 	}\n }\n'
            }
            language={'javascript'}
            showLineNumbers={true}
            theme={vs2015}
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default InsertNodeBinaryTree
