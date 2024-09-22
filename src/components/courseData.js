const courses = {
  'course 1: github action setup': {
    title: 'Course 1: GitHub Action Setup',
    image: 'https://dummyimage.com/600x400/000/fff&text=GitHub+Action',
    description: 'Learn how to automate your development workflows with GitHub Actions.',
    ytb_vid:`https://www.youtube.com/watch?v=8lEsbcUSoU8`,
    content: `
      This course will cover:
      \n- Setting up GitHub Actions
      \n- Automating CI/CD pipelines
      \n- Managing workflows with YAML files
      \n- Integrating with third-party services
      \n So, Lets get started
    `,
  },
  'course 2: github pages guide': {
    title: 'Course 2: GitHub Pages Guide',
    image: 'https://dummyimage.com/600x400/000/fff&text=GitHub+Pages',
    description: 'Deploy static websites using GitHub Pages.',
    ytb_vid:`https://www.youtube.com/watch?v=8lEsbcUSoU8`,
    content: `
      Learn how to:
      \n- Host websites on GitHub Pages
      \n- Use custom domains
      \n- Automate deployment with GitHub Actions
      \n- Debug common issues
    `,
  },
  'course 3: introduction to firebase': {
    title: 'Course 3: Introduction to Firebase',
    image: 'https://dummyimage.com/600x400/000/fff&text=Firebase',
    description: 'Get started with Firebase to build modern web and mobile apps.',
    ytb_vid:`https://www.youtube.com/watch?v=8lEsbcUSoU8`,
    content: `
      This course covers:
      \n- Setting up Firebase projects
      \n- Using Firestore for real-time databases
      \n- Firebase Authentication
      \n- Hosting web apps with Firebase Hosting
    `,
  },
  'course 4: working with cloudflare': {
    title: 'Course 4: Working with Cloudflare',
    image: 'https://dummyimage.com/600x400/000/fff&text=Cloudflare',
    description: 'Learn how to use Cloudflare to enhance website performance and security.',
    ytb_vid:`https://www.youtube.com/watch?v=8lEsbcUSoU8`,
    content: `
      In this course, you will learn:
      \n- DNS management
      \n- Cloudflare CDN
      \n- DDoS protection
      \n- Security features like SSL/TLS
    `,
  },
  'course 5: everything you need to know about domain hosting': {
    title: 'Course 5: Everything You Need to Know About Domain Hosting',
    image: 'https://dummyimage.com/600x400/000/fff&text=Domain+Hosting',
    description: 'A comprehensive guide to understanding domain registration and hosting.',
    ytb_vid:`https://www.youtube.com/watch?v=8lEsbcUSoU8`,
    content: `
      Learn about:
      \n- Domain registration
      \n- Hosting options and services
      \n- DNS configuration
      \n- Connecting domains with GitHub Pages or other platforms
    `,
  },
  'course 6: how to: discord bot': {
    title: 'Course 6: How to Build a Discord Bot?',
    image: 'https://dummyimage.com/600x400/000/fff&text=Discord+Bot',
    description: 'Learn how to create and deploy a Discord bot using JavaScript.',
    ytb_vid:`https://www.youtube.com/watch?v=8lEsbcUSoU8`,
    content: `
      This course will cover:
      \n- Setting up a Discord bot
      \n- Using Discord.js library
      \n- Handling events and commands
      \n- Deploying the bot to a server
    `,
  },
  'course 7: how to: telegram bot': {
    title: 'Course 7: How to Build a Telegram Bot?',
    image: 'https://dummyimage.com/600x400/000/fff&text=Telegram+Bot',
    description: 'Create and manage a Telegram bot using the Telegram Bot API.',
    ytb_vid:`https://www.youtube.com/watch?v=8lEsbcUSoU8`,
    content: `
      Learn how to:
      \n- Set up a Telegram bot
      \n- Handle messages and commands
      \n- Integrate webhooks for real-time responses
      \n- Deploy your bot
    `,
  },
  'course 8: using webhooks for dev': {
    title: 'Course 8: Using Webhooks for Dev',
    image: 'https://dummyimage.com/600x400/000/fff&text=Webhooks',
    description: 'Master the art of integrating webhooks into your applications.',
    ytb_vid:`https://www.youtube.com/watch?v=8lEsbcUSoU8`,
    content: `
      This course will teach:
      \n- What webhooks are and how they work
      \n- Setting up webhooks in your application
      \n- Handling incoming requests
      \n- Webhook security and verification
    `,
  },
  'course 9: oh my zsh setup': {
    title: 'Course 9: OH MY ZSH Setup',
    image: 'https://dummyimage.com/600x400/000/fff&text=ZSH+Setup',
    description: 'Enhance your terminal experience with OH MY ZSH.',
    ytb_vid:`https://www.youtube.com/watch?v=8lEsbcUSoU8`,
    content: `
      This course covers:
      \n- Installing and configuring OH MY ZSH
      \n- Customizing ZSH themes and plugins
      \n- Productivity tips for terminal users
    `,
  },
  'course 10: learn to customize terminal': {
    title: 'Course 10: Learn to Customize Terminal',
    image: 'https://dummyimage.com/600x400/000/fff&text=Customize+Terminal',
    description: 'Learn how to create a productive and visually appealing terminal environment.',
    ytb_vid:`https://www.youtube.com/watch?v=8lEsbcUSoU8`,
    content: `
      This course will teach you:
      \n- Customizing terminal prompts and colors
      \n- Installing and using terminal extensions
      \n- Workflow automation in terminal
    `,
  },
  'course 11: windows operational': {
    title: 'Course 11: Windows Operational',
    image: 'https://dummyimage.com/600x400/000/fff&text=Windows+Operational',
    description: 'A complete guide to operating and optimizing your Windows system for development.',
    ytb_vid:`https://www.youtube.com/watch?v=8lEsbcUSoU8`,
    content: `
      This course covers:
      \n- Essential Windows commands and shortcuts
      \n- Setting up a development environment
      \n- Optimizing system performance for coding
    `,
  },
  'course 12: linux for devs': {
    title: 'Course 12: Linux for Devs',
    image: 'https://dummyimage.com/600x400/000/fff&text=Linux+for+Devs',
    description: 'Master Linux commands and workflows for software development.',
    ytb_vid:`https://www.youtube.com/watch?v=8lEsbcUSoU8`,
    content: `
      Learn how to:
      \n- Navigate Linux file systems
      \n- Work with terminal commands
      \n- Set up environments for coding and deployment
    `,
  },
  'course 13: portfolio development': {
    title: 'Course 13: Portfolio Development',
    image: 'https://dummyimage.com/600x400/000/fff&text=Portfolio+Development',
    description: 'Build and showcase your skills with a professional online portfolio.',
    ytb_vid:`https://www.youtube.com/watch?v=8lEsbcUSoU8`,
    content: `
      This course will teach:
      \n- Structuring and designing portfolios
      \n- Using frameworks like Bootstrap or Tailwind
      \n- Hosting and deploying your portfolio site
    `,
  },
  'course 14: guide to page indexing': {
    title: 'Course 14: Guide to Page Indexing',
    image: 'https://dummyimage.com/600x400/000/fff&text=Page+Indexing',
    description: 'Understand the process and importance of search engine indexing.',
    ytb_vid:`https://www.youtube.com/watch?v=8lEsbcUSoU8`,
    content: `
      Learn about:
      \n- SEO basics
      \n- Best practices for indexing
      \n- Tools for monitoring and improving indexing
    `,
  },
  'course 15: why to use codespace': {
    title: 'Course 15: Why Use Codespace?',
    image: 'https://dummyimage.com/600x400/000/fff&text=Codespace',
    description: 'Learn why Codespace is essential for cloud-based development.',
    ytb_vid:`https://www.youtube.com/watch?v=8lEsbcUSoU8`,
    content: `
      This course covers:
      \n- Setting up Codespace for remote development
      \n- Collaboration features
      \n- Benefits of cloud-based development environments
    `,
  },
  'course 16: website prototype designing': {
    title: 'Course 16: Website Prototype Designing',
    image: 'https://dummyimage.com/600x400/000/fff&text=Prototype+Designing',
    description: 'Learn the principles of website prototyping and user interface design.',
    ytb_vid:`https://www.youtube.com/watch?v=8lEsbcUSoU8`,
    content: `
      This course will teach:
      \n- Creating wireframes
      \n- Using tools like Figma and Adobe XD
      \n- Prototyping workflows for web development
    `,
  },
  'course 17: how to request a pull request': {
    title: 'Course 17: How to Request a Pull Request?',
    image: 'https://dummyimage.com/600x400/000/fff&text=Pull+Request',
    description: 'Master the process of contributing to open-source projects via pull requests.',
    ytb_vid:`https://www.youtube.com/watch?v=8lEsbcUSoU8`,
    content: `
      Learn how to:
      \n- Submit pull requests
      \n- Manage merge conflicts
      \n- Review and respond to feedback on pull requests
    `,
  },
  'course 18: working with readme': {
    title: 'Course 18: Working with README',
    image: 'https://dummyimage.com/600x400/000/fff&text=README',
    description: 'Learn to create clear and effective README files for your projects.',
    ytb_vid:`https://www.youtube.com/watch?v=8lEsbcUSoU8`,
    content: `
      This course will teach:
      \n- Structuring a README file
      \n- Best practices for writing documentation
      \n- Using markdown to format README files
    `,
  },
  'course 19: code websites in snaps (bootstrap)': {
    title: 'Course 19: Code Websites in Snaps (Bootstrap)',
    image: 'https://dummyimage.com/600x400/000/fff&text=Bootstrap',
    description: 'Learn to build responsive websites quickly using Bootstrap.',
    ytb_vid:`https://www.youtube.com/watch?v=8lEsbcUSoU8`,
    content: `
      This course covers:
      \n- Using Bootstrap for fast layout creation
      \n- Mobile-first design
      \n- Customizing Bootstrap components
    `,
  },
  'course 20: code websites in snaps (tailwind)': {
    title: 'Course 20: Code Websites in Snaps (Tailwind)',
    image: 'https://dummyimage.com/600x400/000/fff&text=Tailwind',
    description: 'Create modern websites quickly with Tailwind CSS.',
    ytb_vid:`https://www.youtube.com/watch?v=8lEsbcUSoU8`,
    content: `
      Learn how to:
      \n- Set up Tailwind in your project
      \n- Build custom designs using utility classes
      \n- Optimize performance with Tailwind’s features
    `,
  },
  'course 21: fix browser routing in gh pages': {
    title: 'Course 21: Fix Browser Routing in GH Pages',
    image: 'https://dummyimage.com/600x400/000/fff&text=Browser+Routing',
    description: 'Learn how to fix common routing issues in GitHub Pages.',
    ytb_vid:`https://www.youtube.com/watch?v=8lEsbcUSoU8`,
    content: `
      This course covers:
      \n- Issues with single-page applications (SPA) routing
      \n- Solutions for fixing broken URLs in GH Pages
    `,
  },
  'course 22: centering an element': {
    title: 'Course 22: Centering an Element',
    image: 'https://dummyimage.com/600x400/000/fff&text=Centering',
    description: 'Learn how to center elements using CSS.',
    ytb_vid:`https://www.youtube.com/watch?v=8lEsbcUSoU8`,
    content: `
      This course will teach:
      \n- Centering elements with Flexbox
      \n- Using CSS Grid for centering
      \n- Handling various layout challenges
    `,
  },
  'course 23: convert raw json data to web interface': {
    title: 'Course 23: Convert Raw JSON Data to Web Interface',
    image: 'https://dummyimage.com/600x400/000/fff&text=JSON+to+Web',
    description: 'Learn to display and manipulate JSON data on your website.',
    ytb_vid:`https://www.youtube.com/watch?v=8lEsbcUSoU8`,
    content: `
      This course covers:
      \n- Parsing and displaying JSON data
      \n- Using JavaScript to handle data transformations
      \n- Creating dynamic web content from JSON
    `,
  },
  'course 24: working with linux in windows wsl': {
    title: 'Course 24: Working with Linux in Windows WSL',
    image: 'https://dummyimage.com/600x400/000/fff&text=WSL',
    description: 'Learn to use the Windows Subsystem for Linux (WSL) for development.',
    ytb_vid:`https://www.youtube.com/watch?v=8lEsbcUSoU8`,
    content: `
      Learn how to:
      \n- Set up WSL on Windows
      \n- Use Linux commands on Windows
      \n- Work with files across both systems
    `,
  },
  'course 25: designing cli with ascii characters': {
    title: 'Course 25: Designing CLI with ASCII Characters',
    image: 'https://dummyimage.com/600x400/000/fff&text=CLI+Design',
    description: 'Learn how to make your CLI programs visually appealing with ASCII.',
    ytb_vid:`https://www.youtube.com/watch?v=8lEsbcUSoU8`,
    content: `
      This course will cover:
      \n- Using ASCII art for CLI branding
      \n- Designing interactive CLI interfaces
      \n- ASCII art tools and libraries
    `,
  },
  'course 26: hosting a free site': {
    title: 'Course 26: Hosting a Free Site',
    image: 'https://dummyimage.com/600x400/000/fff&text=Free+Hosting',
    description: 'Learn how to host a website for free using popular platforms.',
    ytb_vid:`https://www.youtube.com/watch?v=8lEsbcUSoU8`,
    content: `
      This course covers:
      \n- Free hosting platforms (GitHub Pages, Netlify, Vercel)
      \n- Setting up your site and deploying
      \n- Managing hosting settings
    `,
  },
  'course 27: registering a free domain': {
    title: 'Course 27: Registering a Free Domain',
    image: 'https://dummyimage.com/600x400/000/fff&text=Free+Domain',
    description: 'Learn how to get a free domain for your website.',
    ytb_vid:`https://www.youtube.com/watch?v=8lEsbcUSoU8`,
    content: `
      Learn about:
      \n- Free domain providers
      \n- Connecting free domains to hosting
      \n- Pros and cons of free domains
    `,
  },
  'course 28: using modules in several languages': {
    title: 'Course 28: Using Modules in Several Languages',
    image: 'https://dummyimage.com/600x400/000/fff&text=Modules',
    description: 'Learn to use and create modules across different programming languages.',
    ytb_vid:`https://www.youtube.com/watch?v=8lEsbcUSoU8`,
    content: `
      This course will teach:
      \n- Importing and exporting modules in JavaScript, Python, and more
      \n- Structuring code for modularity
      \n- Module management tools
    `,
  },
  'course 29: getting started in cybersec: kid package': {
    title: 'Course 29: Getting Started in Cybersecurity: Kid Package',
    image: 'https://dummyimage.com/600x400/000/fff&text=Cybersecurity+Basics',
    description: 'An introductory guide to cybersecurity for beginners.',
    ytb_vid:`https://www.youtube.com/watch?v=8lEsbcUSoU8`,
    content: `
      Learn about:
      \n- Basic cybersecurity principles
      \n- Tools and techniques for beginners
      \n- Understanding digital threats
    `,
  },
  'course 30: python for web scraping': {
    title: 'Course 30: Python for Web Scraping',
    image: 'https://dummyimage.com/600x400/000/fff&text=Web+Scraping',
    description: 'Learn to extract data from websites using Python.',
    ytb_vid:`https://www.youtube.com/watch?v=8lEsbcUSoU8`,
    content: `
      This course covers:
      \n- Using libraries like BeautifulSoup and Scrapy
      \n- Extracting data from websites
      \n- Handling web scraping challenges and restrictions
    `,
  },
  'course 31: automate arduino speech recognition based project': {
    title: 'Course 31: Automate Arduino Speech Recognition Based Project',
    image: 'https://dummyimage.com/600x400/000/fff&text=Arduino+Speech+Recognition',
    description: 'Learn to create an Arduino project with speech recognition features.',
    ytb_vid:`https://www.youtube.com/watch?v=8lEsbcUSoU8`,
    content: `
      Learn how to:
      \n- Integrate speech recognition modules with Arduino
      \n- Automate tasks using voice commands
      \n- Work with Arduino libraries for speech
    `,
  },
  'course 32: android debug bridge for devs': {
    title: 'Course 32: Android Debug Bridge (ADB) for Devs',
    image: 'https://dummyimage.com/600x400/000/fff&text=Android+ADB',
    description: 'Learn how to use Android Debug Bridge (ADB) for app development and debugging.',
    ytb_vid:`https://www.youtube.com/watch?v=8lEsbcUSoU8`,
    content: `
      This course covers:
      \n- Setting up ADB
      \n- Debugging Android apps with ADB commands
      \n- Using ADB for testing and deployment
    `,
  },
};

export default courses;
