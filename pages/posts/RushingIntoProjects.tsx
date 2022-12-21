import React, { FC } from 'react'
import Anchor from '../../components/Anchor'
import Footer from '../../components/Footer'
import SubHeader from '../../components/PostComponents/SubHeader'
import Paragraph from '../../components/PostComponents/Paragraph'
import PostHead from '../../components/PostComponents/PostHead'
import BackToHomeButton from '../../components/PostComponents/BackToHomeButton'

const RushingIntoProjects: FC = () => {
  return (
    <div className="flex flex-col h-full">
      <PostHead title="Rushing Into Projects" />
      <div className="flex w-full flex-grow mt-8 justify-center">
        <div className="w-full p-4 md:w-2/5">
          <SubHeader postTitle="Rushing Into Projects" date="February 18th, 2021 11:45pm" />
          <Paragraph>
            When I started writing code professionally, I was writing PowerShell scripts for an IT
            company. The job itself was more DevOps than what I&apos;m doing now with Front end
            development but it was quite fun and I was happy to be coding full time. <br /> <br />{' '}
            When my manager would give me a new project, I was so excited I would immediately launch
            VS Code and get to work. While my enthusiasm was in the right place, my process for
            developing software was not ideal. <br /> <br /> When I would rush into projects like
            this, I did see the big picture but would often overlook some of the finer details which
            would make the code less maintainable. I found myself reinventing the wheel and not
            planning for dynamic inputs.
            <br /> <br /> After wasting time having to go back and refactor my code, I realized I
            needed to properly plan out my projects. A very simple way of doing that is to open up
            your favorite document writer and write out exactly what needs to be done. Let&apos;s
            say we are writing a simple Python script to send a text when someone&apos;s birthday is
            coming up. We have a few things to decide:
            <br /> <br />
            1. How will we get the list of people&apos;s birthdays? Dynamically pull it from
            something like Facebook or simply a csv file. <br /> 2. How can we send the text? Surely
            there is probably a service for this so we don&apos;t need to reinvent the wheel here
            (Twillio) <br /> 3. How can we determine if a birthday is coming up? How do we handle
            multiple birthdays coming up? What if there are no birthdays? <br /> <br /> Using this
            process I&apos;ve been able to more easily identify edge cases and limitations I may
            reach. It allows me to plan out exactly what&apos;s needed and not make quick decisions
            that may hinder me in the future.
            <br /> <br /> If interested, I did write the above script in{' '}
            <Anchor
              url="https://github.com/mallockey/Misc-PythonScripts/blob/main/birthdayreminder/sendbirthdayreminder.py"
              external={true}
            >
              Python
            </Anchor>{' '}
            and{' '}
            <Anchor
              url="https://github.com/mallockey/Misc-PowerShellScripts/blob/master/Get-BirthdayReminder.ps1"
              external={true}
            >
              PowerShell
            </Anchor>
            . I went the CSV route but the Facebook route would be really cool!
          </Paragraph>
          <BackToHomeButton />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default RushingIntoProjects
