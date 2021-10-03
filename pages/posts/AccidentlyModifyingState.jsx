import React from 'react'
import { CodeBlock, vs2015 } from 'react-code-blocks'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

const AccidentlyModifyingState = () => {
  return (
    <div className="flex flex-col h-full">
      <Header />
      <div className="flex  w-full  flex-grow m-16 justify-center">
        <div className="text-xl w-2/3">
          <div className="flex flex-col mb-10">
            <span className="text-2xl underline">Accidently Modifying State</span>
            <span className="text-sm">August 15th, 2:54 PM</span>
          </div>
          <p className="mb-10">
            React has one important rule I want to go over in this post, don&apos;t modify state
            directly. This article{' '}
            <a href="https://daveceddia.com/why-not-modify-react-state-directly/">here</a> covers
            the reasons why. It seems straightforward, however I&apos;ve been in a few situations
            where I didn&apos;t even realize I was breaking it.
          </p>
          <p>
            To understand how/when this might happen, let&apos;s first go over assigning by value
            and assigning by reference in JavaScript:
          </p>
          <CodeBlock
            text={
              'const myNum = 1;\nconst copyOfMyNum = myNum;\nconsole.log(myNum === copyOfMyNum); //true\n\nconst myArr = [1, 2, 3];\nconst copyOfMyArr = myArr;\nconsole.log(myArr === copyOfMyArr); //true\n'
            }
            language={'javascript'}
            showLineNumbers={true}
            theme={vs2015}
          />
          <p className="mt-10">
            In the first example, myNum&apos;s value is copied and then assigned to copyOfMyNum. But
            in the second example copyOfMyArr is a reference to myArr. Meaning that any changes we
            make to copyOfMyArr will also affect myArr:
          </p>
          <CodeBlock
            text={
              'const myArr = [1, 2, 3];\nconst copyOfMyArr = myArr;\n\ncopyOfMyArr[0] = 100;\n\nconsole.log(myArr, copyOfMyArr);\n//[ 100, 2, 3 ] [ 100, 2, 3 ]'
            }
            language={'javascript'}
            showLineNumbers={true}
            theme={vs2015}
          />
          <p className="mt-10">
            This is known as assigning a value by reference. And while its intentions are good, it
            can sometimes hurt us when working with React or any other ideology where we&apos;re
            maintaining immutability. There are a few ways to copy the data over to the new object.
            One way is using the spread operator:
          </p>
          <CodeBlock
            text={
              'const myArr = [1, 2, 3];\nconst copyOfMyArr = [...myArr];\ncopyOfMyArr[0] = 100;\n\nconsole.log(myArr, copyOfMyArr);\n//[ 1, 2, 3 ] [ 100, 2, 3 ]}'
            }
            language={'javascript'}
            showLineNumbers={true}
            theme={vs2015}
          />
          <p className="mt-10">
            This will work for primitive data types like numbers or strings. But what if we were
            copying complex data types like arrays or objects? The spread operator performs a
            shallow copy. Which means it will only copy primitive data types over to the new array.
            If there was an array or an object inside myArr then a reference to the original would
            be created. Not a copy. Let&apos;s go over an example with an object, as I think
            that&apos;s easier to reason with:
          </p>
          <CodeBlock
            text={
              "const myObj = {\n firstName: 'Henry',\n lastName: 'Bam',\n favoriteDrinks: ['Iced Tea', 'Warm Milk', 'Rolling Rock'];\n}\nconst copyOfMyObj = { ...myObj };\n\nconsole.log(myObj === copyOfMyObj); //false\nconsole.log(myObj.favoriteDrinks === copyOfMyObj.favoriteDrinks); //true"
            }
            language={'javascript'}
            showLineNumbers={true}
            theme={vs2015}
          />
          <p className="mt-10">
            As you can see the favoriteDrinks in the copied object is just a reference to the array
            in the original. Now tying this back to React, we&apos;d be modifying state if we were
            to make any changes to the favoriteDrinks array in the copied object:
          </p>
          <CodeBlock
            text={
              'let copyOfStudentObj = { ...studentObj }\ncopyOfStudentObj.grades.push(40)\nsetStudent(copyOfStudentObj)}'
            }
            language={'javascript'}
            showLineNumbers={true}
            theme={vs2015}
          />
          <p className="mt-10">
            In the above example, I have modified the state directly here since copyOfStudentObjâ€™s
            grades array is just a reference to the original. Libraries like
            <a href="https://immerjs.github.io/immer/"> immer</a>
            and <a href="https://lodash.com/docs/4.17.15#cloneDeep">lodash&apos;s cloneDeep </a>
            exist for this reason. These utilities allow us to deeply copy the data so we are not
            modifying the original. Once copied, we could then set state without fear of having
            modified the original value.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AccidentlyModifyingState
