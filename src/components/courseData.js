const courses = {
  'course 1: github action setup': {
    title: 'Course 1: GitHub Action Setup',
    image: 'https://dummyimage.com/600x400/000/fff&text=GitHub+Action',
    description: 'Learn how to automate your development workflows with GitHub Actions.',
    content: `
      This course will cover:
      - Setting up GitHub Actions
      - Automating CI/CD pipelines
      - Managing workflows with YAML files
      - Integrating with third-party services
    `,
  },
  'course 2: github pages guide': {
    title: 'Course 2: GitHub Pages Guide',
    image: 'https://dummyimage.com/600x400/000/fff&text=GitHub+Pages',
    description: 'Deploy static websites using GitHub Pages.',
    content: `
      Learn how to:
      - Host websites on GitHub Pages
      - Use custom domains
      - Automate deployment with GitHub Actions
      - Debug common issues
    `,
  },
  'course 3: introduction to firebase': {
    title: 'Course 3: Introduction to Firebase',
    image: 'https://dummyimage.com/600x400/000/fff&text=Firebase',
    description: 'Get started with Firebase to build modern web and mobile apps.',
    content: `
      This course covers:
      - Setting up Firebase projects
      - Using Firestore for real-time databases
      - Firebase Authentication
      - Hosting web apps with Firebase Hosting
    `,
  },
  'course 4: working with cloudflare': {
    title: 'Course 4: Working with Cloudflare',
    image: 'https://dummyimage.com/600x400/000/fff&text=Cloudflare',
    description: 'Learn how to use Cloudflare to enhance website performance and security.',
    content: `
      In this course, you will learn:
      - DNS management
      - Cloudflare CDN
      - DDoS protection
      - Security features like SSL/TLS
    `,
  },
  'course 5: everything you need to know about domain hosting': {
    title: 'Course 5: Everything You Need to Know About Domain Hosting',
    image: 'https://dummyimage.com/600x400/000/fff&text=Domain+Hosting',
    description: 'A comprehensive guide to understanding domain registration and hosting.',
    content: `
      Learn about:
      - Domain registration
      - Hosting options and services
      - DNS configuration
      - Connecting domains with GitHub Pages or other platforms
    `,
  },
  'course 6: how to: discord bot?': {
    title: 'Course 6: How to Build a Discord Bot?',
    image: 'https://dummyimage.com/600x400/000/fff&text=Discord+Bot',
    description: 'Learn how to create and deploy a Discord bot using JavaScript.',
    content: `
      This course will cover:
      - Setting up a Discord bot
      - Using Discord.js library
      - Handling events and commands
      - Deploying the bot to a server
    `,
  },
  'course 7: how to: telegram bot?': {
    title: 'Course 7: How to Build a Telegram Bot?',
    image: 'https://dummyimage.com/600x400/000/fff&text=Telegram+Bot',
    description: 'Create and manage a Telegram bot using the Telegram Bot API.',
    content: `
      Learn how to:
      - Set up a Telegram bot
      - Handle messages and commands
      - Integrate webhooks for real-time responses
      - Deploy your bot
    `,
  },
  'course 8: using webhooks for dev': {
    title: 'Course 8: Using Webhooks for Dev',
    image: 'https://dummyimage.com/600x400/000/fff&text=Webhooks',
    description: 'Master the art of integrating webhooks into your applications.',
    content: `
      This course will teach:
      - What webhooks are and how they work
      - Setting up webhooks in your application
      - Handling incoming requests
      - Webhook security and verification
    `,
  },
  'course 9: oh my zsh setup': {
    title: 'Course 9: OH MY ZSH Setup',
    image: 'https://dummyimage.com/600x400/000/fff&text=ZSH+Setup',
    description: 'Enhance your terminal experience with OH MY ZSH.',
    content: `
      This course covers:
      - Installing and configuring OH MY ZSH
      - Customizing ZSH themes and plugins
      - Productivity tips for terminal users
    `,
  },
  'course 10: learn to customize terminal': {
    title: 'Course 10: Learn to Customize Terminal',
    image: 'https://dummyimage.com/600x400/000/fff&text=Customize+Terminal',
    description: 'Learn how to create a productive and visually appealing terminal environment.',
    content: `
      This course will teach you:
      - Customizing terminal prompts and colors
      - Installing and using terminal extensions
      - Workflow automation in terminal
    `,
  },
  'course 11: windows operational': {
    title: 'Course 11: Windows Operational',
    image: 'https://dummyimage.com/600x400/000/fff&text=Windows+Operational',
    description: 'A complete guide to operating and optimizing your Windows system for development.',
    content: `
      This course covers:
      - Essential Windows commands and shortcuts
      - Setting up a development environment
      - Optimizing system performance for coding
    `,
  },
  'course 12: linux for devs': {
    title: 'Course 12: Linux for Devs',
    image: 'https://dummyimage.com/600x400/000/fff&text=Linux+for+Devs',
    description: 'Master Linux commands and workflows for software development.',
    content: `
      Learn how to:
      - Navigate Linux file systems
      - Work with terminal commands
      - Set up environments for coding and deployment
    `,
  },
  'course 13: portfolio development': {
    title: 'Course 13: Portfolio Development',
    image: 'https://dummyimage.com/600x400/000/fff&text=Portfolio+Development',
    description: 'Build and showcase your skills with a professional online portfolio.',
    content: `
      This course will teach:
      - Structuring and designing portfolios
      - Using frameworks like Bootstrap or Tailwind
      - Hosting and deploying your portfolio site
    `,
  },
  'course 14: guide to page indexing': {
    title: 'Course 14: Guide to Page Indexing',
    image: 'https://dummyimage.com/600x400/000/fff&text=Page+Indexing',
    description: 'Understand the process and importance of search engine indexing.',
    content: `
      Learn about:
      - SEO basics
      - Best practices for indexing
      - Tools for monitoring and improving indexing
    `,
  },
  'course 15: why to use codespace?': {
    title: 'Course 15: Why Use Codespace?',
    image: 'https://dummyimage.com/600x400/000/fff&text=Codespace',
    description: 'Learn why Codespace is essential for cloud-based development.',
    content: `
      This course covers:
      - Setting up Codespace for remote development
      - Collaboration features
      - Benefits of cloud-based development environments
    `,
  },
  'course 16: website prototype designing': {
    title: 'Course 16: Website Prototype Designing',
    image: 'https://dummyimage.com/600x400/000/fff&text=Prototype+Designing',
    description: 'Learn the principles of website prototyping and user interface design.',
    content: `
      This course will teach:
      - Creating wireframes
      - Using tools like Figma and Adobe XD
      - Prototyping workflows for web development
    `,
  },
  'course 17: how to request a pull request?': {
    title: 'Course 17: How to Request a Pull Request?',
    image: 'https://dummyimage.com/600x400/000/fff&text=Pull+Request',
    description: 'Master the process of contributing to open-source projects via pull requests.',
    content: `
      Learn how to:
      - Submit pull requests
      - Manage merge conflicts
      - Review and respond to feedback on pull requests
    `,
  },
  'course 18: working with readme': {
    title: 'Course 18: Working with README',
    image: 'https://dummyimage.com/600x400/000/fff&text=README',
    description: 'Learn to create clear and effective README files for your projects.',
    content: `
      This course will teach:
      - Structuring a README file
      - Best practices for writing documentation
      - Using markdown to format README files
    `,
  },
  'course 19: code websites in snaps (bootstrap)': {
    title: 'Course 19: Code Websites in Snaps (Bootstrap)',
    image: 'https://dummyimage.com/600x400/000/fff&text=Bootstrap',
    description: 'Learn to build responsive websites quickly using Bootstrap.',
    content: `
      This course covers:
      - Using Bootstrap for fast layout creation
      - Mobile-first design
      - Customizing Bootstrap components
    `,
  },
  'course 20: code websites in snaps (tailwind)': {
    title: 'Course 20: Code Websites in Snaps (Tailwind)',
    image: 'https://dummyimage.com/600x400/000/fff&text=Tailwind',
    description: 'Create modern websites quickly with Tailwind CSS.',
    content: `
      Learn how to:
      - Set up Tailwind in your project
      - Build custom designs using utility classes
      - Optimize performance with Tailwind’s features
    `,
  },
  'course 21: fix browser routing in gh pages': {
    title: 'Course 21: Fix Browser Routing in GH Pages',
    image: 'https://dummyimage.com/600x400/000/fff&text=Browser+Routing',
    description: 'Learn how to fix common routing issues in GitHub Pages.',
    content: `
      This course covers:
      - Issues with single-page applications (SPA) routing
      - Solutions for fixing broken URLs in GH Pages
    `,
  },
  'course 22: centering an element': {
    title: 'Course 22: Centering an Element',
    image: 'https://dummyimage.com/600x400/000/fff&text=Centering',
    description: 'Learn how to center elements using CSS.',
    content: `
      This course will teach:
      - Centering elements with Flexbox
      - Using CSS Grid for centering
      - Handling various layout challenges
    `,
  },
  'course 23: convert raw json data to web interface': {
    title: 'Course 23: Convert Raw JSON Data to Web Interface',
    image: 'https://dummyimage.com/600x400/000/fff&text=JSON+to+Web',
    description: 'Learn to display and manipulate JSON data on your website.',
    content: `
      This course covers:
      - Parsing and displaying JSON data
      - Using JavaScript to handle data transformations
      - Creating dynamic web content from JSON
    `,
  },
  'course 24: working with linux in windows wsl': {
    title: 'Course 24: Working with Linux in Windows WSL',
    image: 'https://dummyimage.com/600x400/000/fff&text=WSL',
    description: 'Learn to use the Windows Subsystem for Linux (WSL) for development.',
    content: `
      Learn how to:
      - Set up WSL on Windows
      - Use Linux commands on Windows
      - Work with files across both systems
    `,
  },
  'course 25: designing cli with ascii characters': {
    title: 'Course 25: Designing CLI with ASCII Characters',
    image: 'https://dummyimage.com/600x400/000/fff&text=CLI+Design',
    description: 'Learn how to make your CLI programs visually appealing with ASCII.',
    content: `
      This course will cover:
      - Using ASCII art for CLI branding
      - Designing interactive CLI interfaces
      - ASCII art tools and libraries
    `,
  },
  'course 26: hosting a free site': {
    title: 'Course 26: Hosting a Free Site',
    image: 'https://dummyimage.com/600x400/000/fff&text=Free+Hosting',
    description: 'Learn how to host a website for free using popular platforms.',
    content: `
      This course covers:
      - Free hosting platforms (GitHub Pages, Netlify, Vercel)
      - Setting up your site and deploying
      - Managing hosting settings
    `,
  },
  'course 27: registering a free domain': {
    title: 'Course 27: Registering a Free Domain',
    image: 'https://dummyimage.com/600x400/000/fff&text=Free+Domain',
    description: 'Learn how to get a free domain for your website.',
    content: `
      Learn about:
      - Free domain providers
      - Connecting free domains to hosting
      - Pros and cons of free domains
    `,
  },
  'course 28: using modules in several languages': {
    title: 'Course 28: Using Modules in Several Languages',
    image: 'https://dummyimage.com/600x400/000/fff&text=Modules',
    description: 'Learn to use and create modules across different programming languages.',
    content: `
      This course will teach:
      - Importing and exporting modules in JavaScript, Python, and more
      - Structuring code for modularity
      - Module management tools
    `,
  },
  'course 29: getting started in cybersec: kid package': {
    title: 'Course 29: Getting Started in Cybersecurity: Kid Package',
    image: 'https://dummyimage.com/600x400/000/fff&text=Cybersecurity+Basics',
    description: 'An introductory guide to cybersecurity for beginners.',
    content: `
      Learn about:
      - Basic cybersecurity principles
      - Tools and techniques for beginners
      - Understanding digital threats
    `,
  },
  'course 30: python for web scraping': {
    title: 'Course 30: Python for Web Scraping',
    image: 'https://dummyimage.com/600x400/000/fff&text=Web+Scraping',
    description: 'Learn to extract data from websites using Python.',
    content: `
      This course covers:
      - Using libraries like BeautifulSoup and Scrapy
      - Extracting data from websites
      - Handling web scraping challenges and restrictions
    `,
  },
  'course 31: automate arduino speech recognition based project': {
    title: 'Course 31: Automate Arduino Speech Recognition Based Project',
    image: 'https://dummyimage.com/600x400/000/fff&text=Arduino+Speech+Recognition',
    description: 'Learn to create an Arduino project with speech recognition features.',
    content: `
      Learn how to:
      - Integrate speech recognition modules with Arduino
      - Automate tasks using voice commands
      - Work with Arduino libraries for speech
    `,
  },
  'course 32: android debug bridge for devs': {
    title: 'Course 32: Android Debug Bridge (ADB) for Devs',
    image: 'https://dummyimage.com/600x400/000/fff&text=Android+ADB',
    description: 'Learn how to use Android Debug Bridge (ADB) for app development and debugging.',
    content: `
      This course covers:
      - Setting up ADB
      - Debugging Android apps with ADB commands
      - Using ADB for testing and deployment
    `,
  },
};

export default courses;
