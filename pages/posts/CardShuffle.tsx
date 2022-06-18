import React, { FC } from 'react'
import { CodeBlock, vs2015 } from 'react-code-blocks'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import SubHeader from '../../components/PostComponents/SubHeader'
import Paragraph from '../../components/PostComponents/Paragraph'
import Anchor from '../../components/Anchor'
import PostContainer from '../../components/PostComponents/PostContainer'

const CardShuffle: FC = () => {
  return (
    <PostContainer>
      <Header />
      <div className="flex w-full flex-grow mt-8 justify-center">
        <div className="w-full p-4 md:w-2/3">
          <SubHeader
            postTitle="How do you shuffle a deck of cards?"
            date="June 24th, 2021 6:20PM"
          />
          <Paragraph>
            I was recently asked the question of how I would shuffle a deck of cards. This is an
            interesting question for a number of reasons but the idea that a random number would
            need to be generated was at the top of my list. The very idea of randomness being
            exhibited by a computer is quite perplexing in its own right. The first time I thought
            about random numbers in computing, I got fixated on the idea of how does a computer
            (something we program how to perform certain tasks with explicit detail) pick a random
            number (do something that feels arbitrary). We&apos;ve been told that a computer is only
            going to do what we tell it to do. The answer lies in Math but that is not what this
            post is about.
          </Paragraph>
          <Paragraph>
            Going back to the original question, I thought about how to perform the above process. I
            figured I&apos;d need to take care of a few things in order to simulate a shuffle. The
            first being generating a random number. I would need to generate a random number 52
            times to cover the indexes and only within the range of 1 and 52. Since I can&apos;t
            predict what number will be generated I will likely end up with duplicates and will need
            to account for that. I will also need another array to store the results. With that
            process in mind, I wrote the below code:
          </Paragraph>
          <CodeBlock
            text={
              'function inEfficentShuffle(array){\n const shuffledCards = []\n let isValidIndex = false\n let currentIndex = 0\n   array.forEach(card => {\n   isValidIndex = false\n     while(isValidIndex === false){\n      currentIndex = getRandomInt(array.length)\n      if(!shuffledCards[currentIndex]){\n         shuffledCards[currentIndex] = card\n         isValidIndex = true\n      }\n     }   \n   })\n  return shuffledCards\n }'
            }
            language={'javascript'}
            showLineNumbers={true}
            theme={vs2015}
          />
          <Paragraph>
            There are two main issues with this function. Firstly, we are creating a separate array
            to store the results. This results in O(n) space complexity and we can likely just
            rearrange the elements in the existing array resulting in negligible auxiliary space.
            The second issue is the collisions. As stated above since we cannot predict what number
            is going to be generated, we have to simply generate the number, then check in our array
            if we&apos;ve already generated it causing unnecessary calculations.
          </Paragraph>
          <Paragraph>
            I figured there must be a better way, so I turned to the internet and behold I
            discovered the{' '}
            <Anchor
              url="https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle"
              external={true}
            >
              Fisher Yates shuffle
            </Anchor>
            . This algorithm solves both of the issues above by performing the shuffle in place as
            well as only generating a random number within the range of valid index numbers. What
            does that mean? Well let&apos;s say we had the following:
          </Paragraph>
          <CodeBlock
            text={'let array = [1,2,3,4,5] \nlet numsLeftToSort = array.length - 1'}
            language={'javascript'}
            showLineNumbers={true}
            theme={vs2015}
          />
          <span>
            We pick a random number index in our array within the range of valid numbers. Let&apos;s
            say we picked index 3. Which means we will move 4 to the end of our list. Our new list
            is now:
          </span>
          <br />
          <br />
          <span>1, 2, 3, 5, 4</span>
          <br />
          <span>
            We now decrement numsLeftToSort by 1. It was originally 4 now its 3 since we shuffled
            one of the numbers. So the range of valid indexes is 0 through 3 because that&apos;s how
            many items we have left to shuffle. Notice now that our range reflects ONLY numbers that
            haven&apos;t been shuffled yet. This is neat! We don&apos;t have to worry anymore about
            generating duplicate indexes. We continue this process, picking a random number for our
            index within the valid range, moving that number to the end of our array and
            decrementing the range until our array is fully shuffled.
          </span>
          <CodeBlock
            text={
              'function shuffleCards(array) {\n let numElementsRemaining = array.length \n let tmp = 0 \n let randomNum = 0 \n while (numElementsRemaining) { \n    randomNum = Math.floor(Math.random() * numElementsRemaining--); \n    tmp = array[numElementsRemaining]; \n    array[numElementsRemaining] = array[randomNum]; \n    array[randomNum] = tmp; \n  } \n return array;\n}'
            }
            language={'javascript'}
            showLineNumbers={true}
            theme={vs2015}
          />
          <Paragraph>
            By increasing the number of cards in the deck to 1248 you can start to see the
            inefficient algorithm begin to slow down:
          </Paragraph>
          <span className="text-red-600">originalAlgo: 2.307ms</span>
          <br />
          <span>fisherYates: 0.213ms</span>
          <Paragraph>
            Measuring the time was done by using console.time. I love learning about algorithms like
            these. Little by little you learn how to more effectively solve these issues and
            recognize the appropriate data structures / methods for solving them.
          </Paragraph>
        </div>
      </div>
      <Footer />
    </PostContainer>
  )
}

export default CardShuffle
