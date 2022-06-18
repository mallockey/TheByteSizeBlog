const listOfPosts = [
  {
    title: 'Recreating my childhood home Part 2',
    date: 'February 23rd 2022, 6:00PM',
    previewText:
      "When I started this project, I wanted to make an exact replica of the house that I remembered but soon realized some sacrifices would have to be made to better the gameplay.In the off chance that people would play this map, I decided it was better to provide somecover and chokepoints even if they didn’t exist in real life. Here's a few notable examples:",
    link: 'posts/RecreatingMyChildHoodHomePart2',
    dateStamp: '2022-02-23',
  },
  {
    title: 'Recreating my childhood home',
    date: 'October 11th, 2021 2:09 AM',
    previewText:
      'Back in 2006 I became obsessed with making maps in Counter Strike 1.6. I spent hours atempting to perfect every crevice of the map, aligning every polygon and attempting to make an atmosphere. When I thought the map was good enough, I’d even try to get people to put it on their servers. There are really some amazing virtual environments out there in the game world. Some of the big ones like Half Life, Resident Evil, GTA, or any of the Zelda’s come to mind. A lesser known one',
    link: 'posts/RecreatingMyChildHoodHome',
    dateStamp: '2021-10-16',
  },
  {
    title: 'Site Updates',
    date: 'October 4th, 2021 11:29PM',
    previewText:
      'I just wanted to take the time to list a of the updates I put into the site. A lot of these are backend changes and could be better understood by browsing the codebase.',
    link: 'posts/SiteUpdates',
    dateStamp: '2021-10-05',
  },
  {
    title: 'Accidently Modifying State',
    date: 'August 15th, 2021 2:54 PM',
    previewText:
      'React has one important rule I want to go over in this post, dont modify state directly. This article covers the reasons why. It seems straightforward, however Ive been in a few situations where I didnt even realize I was breaking it.           To understand how/when this might happen, lets first go over assigning by value and assigning by reference in JavaScript:',
    link: 'posts/AccidentlyModifyingState',
    dateStamp: '2021-08-15',
  },
  {
    title: 'Card Shuffle',
    date: 'June 24th, 2021 6:20PM',
    previewText:
      'I was recently asked the question of how I would shuffle a deck of cards. This is an interesting question for a number of reasons but the idea that a random number would need to be generated was at the top of my list. The very idea of randomness being exhibited by a computer is quite perplexing in its own right. The first time I thought about random numbers in computing, I got fixated on the idea of how does a computer (something we program how to perform certain tasks with explicit detail) pick a random number (do something that feels arbitrary). Weve been told that a computer is only going to do what we tell it to do. The answer lies in Math but that is not what this post is about.',
    link: 'posts/CardShuffle',
    dateStamp: '2021-06-24',
  },
  {
    title: 'Serverless Infrastructure',
    date: 'June 16th, 2021 8:57PM',
    previewText:
      'So what is serverless and does it really mean no servers? Not really. Serverless simply means that you can host a piece of code (like an API endpoint) on a cloud platform (AWS, Azure) without having to manage any server. There is a server on the backend hosting your code but you as the developer dont need to worry about that, the cloud provider does. This is great for the following reasons:',
    link: 'posts/ServerlessInfrastructure',
    dateStamp: '2021-06-16',
  },
  {
    title: 'My First Month as a Software Engineer',
    date: 'April 25th, 2021 12:54 PM',
    previewText:
      'I just started my first job as a Software Engineer last month and have been super busy so I havent been posting as much lately. I thought this would be a good time to reflect on how much Ive learned in just one month. This is mostly from a soft skills perspective.',
    link: 'posts/MyFirstMonth',
    dateStamp: '2021-04-25',
  },
  {
    title: 'Inserting a node into a Binary Search Tree',
    date: 'March 11th, 2021 3:03PM',
    previewText:
      'Lets take a look at how you would go about inserting a new node in a Binary Tree. Quick Recap, a Binary Search Tree is a type of tree where each node can have at most 2 children. The left node will be smaller than the current node and the right node will be larger than the current node.',
    link: 'posts/InsertNodeBinaryTree',
    dateStamp: '2021-03-11',
  },
  {
    title: 'Trees',
    date: 'March 8th, 2021 12:41PM',
    previewText:
      'Ah weve finally made it to the data structure that has confused me the most. (thus far at least). Trees!',
    link: 'posts/Trees',
    dateStamp: '2021-03-08',
  },
  {
    title: 'Stacks - Common Methods',
    date: 'March 4th, 2021 1:21 PM',
    previewText:
      'Heres a simple implementation of a stack. We are using an array as the storage for the items and keeping track of the length as we add and remove from it. The two most important methods are push and pop which behave the same way they do on the array,',
    link: 'posts/StacksCommonMethods',
    dateStamp: '2021-03-04',
  },
  {
    title: 'Stacks',
    date: 'March 3, 2021 2:35pm',
    previewText:
      'Pancakes??? I thought this was a blog about software! Pancakes certainly warrant a blog post on their own but the reason theyre in this post is because were going to be talking about another data structure called stacks.',
    link: 'posts/Stacks',
    dateStamp: '2021-03-03',
  },
  {
    title: 'Traversing LinkedLists',
    date: 'March 2nd, 2021 12:49pm',
    previewText:
      'In the previous post, I went over the basics of linked lists and what they are used for. In this post, Ill be going over traversing a singly linked list.',
    link: 'posts/TraversingLinkedLists',
    dateStamp: '2021-03-02',
  },
  {
    title: 'Linked Lists',
    date: 'February 18th, 2021 11:45pm',
    previewText:
      'As I study computer science (and for job interviews), I thought it would be wise to write about what Im learning. This helps us learn and recall the information. Recently Ive been reviewing common data structures and algorithms with linked lists being first on the list! (no pun!)',
    link: 'posts/LinkedLists',
    dateStamp: '2021-02-19',
  },
  {
    title: 'Rushing Into Projects',
    date: 'February 10th, 2021 4:24pm',
    previewText:
      'When I started writing code professionally, I was writing PowerShell scripts for an IT company. The job itself was more DevOps than what Im doing now with Front end development but it was quite fun and I was happy to be coding full time.',
    link: 'posts/RushingIntoProjects',
    dateStamp: '2021-02-10',
  },
  {
    title: 'Prefix vs Postfix',
    date: 'February 8th, 2021 1:19am',
    previewText:
      'This is a concept that often confused me when I first started programming. What is the difference between line 2 and 3 below:',
    link: 'posts/PrefixVsPostfix',
    dateStamp: '2021-02-08',
  },
]

export default listOfPosts
