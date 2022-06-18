import React, { FC } from 'react'
import { CodeBlock, vs2015 } from 'react-code-blocks'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import SubHeader from '../../components/PostComponents/SubHeader'
import Paragraph from '../../components/PostComponents/Paragraph'
import PostContainer from '../../components/PostComponents/PostContainer'

const PrefixVsPostfix: FC = () => {
  return (
    <PostContainer>
      <Header />
      <div className="flex w-full flex-grow mt-8 justify-center">
        <div className="w-full p-4 md:w-2/3">
          <SubHeader postTitle="Prefix Vs Postfix" date="February 8th, 2021 1:19am" />
          <Paragraph>
            This is a concept that often confused me when I first started programming. What is the
            difference between line 2 and 3 below:{' '}
            <CodeBlock
              text={' let num = 1; \n console.log(++num);\n console.log(num++);'}
              language="javascript"
              showLineNumbers={true}
              theme={vs2015}
              wrapLines
            />
            When we put the incrementor before the variable name (known as Prefix) we are saying
            increment the value of the variable num, by 1 then evaluate it. Evaluation in this case
            just means to get the value stored in num which will result in:{' '}
            <CodeBlock
              text={'console.log(++num) //2'}
              language="javascript"
              showLineNumbers={true}
              theme={vs2015}
            />
            1. Increment num's value by 1 so 1 + 1 = 2 <br /> 2. Look up num's value which is 2{' '}
            <br /> 3. Print the value of num which is 2 <br /> <br /> When it's put after the
            variable name (PostFix), we are saying evaluate the expression and then add 1.{' '}
            <CodeBlock
              text={'console.log(num++) //1'}
              language="javascript"
              showLineNumbers={true}
              theme={vs2015}
            />
            1. Look up num's value which is 1 <br /> 2. Print the value of num which is 1 <br /> 3.
            Increment the value of num by 1 which equals 2 <br /> <br /> Consider this other
            example:
            <CodeBlock
              text={
                'let num = 1;\nif (++num === 2){\n // This prints! \n}if (num++ === 2){\n // This does not print\n}'
              }
              language="javascript"
              showLineNumbers={true}
              theme={vs2015}
            />
            Because num is incremented first and then evaluated the if statement returns true. As
            opposed to line 5 where the value of num is read first (1) and then compared to 2
            resulting in false. I hope this clears up the difference between Prefix and Postfix!
          </Paragraph>
        </div>
      </div>
      <Footer />
    </PostContainer>
  )
}

export default PrefixVsPostfix
