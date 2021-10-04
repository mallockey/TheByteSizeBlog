import React, { FC } from 'react'
import { CodeBlock, vs2015 } from 'react-code-blocks'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import SubHeader from '../../components/SubHeader'
import Paragraph from '../../components/Paragraph'

const StacksCommonMethods: FC = () => {
  return (
    <div className="flex flex-col h-full">
      <Header />
      <div className="flex w-full flex-grow mt-8 justify-center">
        <div className="w-full p-4 md:w-2/3">
          <SubHeader postTitle="Stacks - Common Methods" date="March 4th, 2021 1:21 PM" />
          <Paragraph>
            Since JavaScript arrays already have the two main methods associated with stacks (push
            and pop) we will use them to implement a stack.
            <CodeBlock
              text={
                'class Stack { \n   constructor(){ \n     this.items = [] \n     this.length = 0 \n   } \n    push(element){ \n     this.items.push(element) \n      this.length = this.length + 1 \n   } \n   pop(){ \n     this.items.length = this.items.length - 1 \n     return this.items.pop() \n   } \n   peek(){ \n     return this.items[this.items.length -1] \n   } \n   print(){ \n     for(let i = 0; i < this.items.length; i++){ \n       console.log(this.items[i]) \n     }\n    }\n  }\n  '
              }
              language="javascript"
              showLineNumbers={true}
              theme={vs2015}
            />
            Here's a simple implementation of a stack. We are using an array as the storage for the
            items and keeping track of the length as we add and remove from it. The two most
            important methods are push and pop which behave the same way they do on the array,
            adding an item to the top of the stack and removing an item from the top respectively.{' '}
            <br /> <br /> The peek method is used to retrieve the item on the top of the stack but
            not remove it. And finally we have the print function that prints every item in the
            stack. It's important to note that we are able to print so easily because we are using
            an array as the underlying data structure of our stack. This means we have the luxury of
            using indexes and can easily iterate through the array with a for loop. This may not
            always be the case. <br /> <br /> Possibly the most well-known example of a stack is the
            call stack. Function calls are pushed onto a stack in the order in which they are called
            and popped off the stack when they have executed. This is especially important when
            calling functions from within functions.
          </Paragraph>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default StacksCommonMethods
