const courses = {
  'course 1: github action setup': {
    title: 'Course 1: GitHub Action Setup',
    author: 'Dev Gautam Kumar',
    image: 'https://dummyimage.com/600x400/4CAF50/fff&text=GitHub+Action', // Green for productivity
    description: 'Learn how to automate your development workflows with GitHub Actions.',
    ytb_vid: 'C7bHn1ZZCXI',
    content: `
      This course will cover:
      \n- Setting up GitHub Actions
      \n- Automating CI/CD pipelines
      \n- Managing workflows with YAML files
      \n- Integrating with third-party services
      \nSo, let's get started!
    `,
  },
  'course 2: github pages guide': {
    title: 'Course 2: GitHub Pages Guide',
    author: 'Dev Gautam Kumar',
    image: 'https://dummyimage.com/600x400/2196F3/fff&text=GitHub+Pages', // Blue for trust
    description: 'Deploy static websites using GitHub Pages.',
    ytb_vid: 'C7bHn1ZZCXI',
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
    author: 'Dev Gautam Kumar',
    image: 'https://dummyimage.com/600x400/FF5722/fff&text=Firebase', // Orange for enthusiasm
    description: 'Get started with Firebase to build modern web and mobile apps.',
    ytb_vid: 'C7bHn1ZZCXI',
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
    author: 'Dev Gautam Kumar',
    image: 'https://dummyimage.com/600x400/9C27B0/fff&text=Cloudflare', // Purple for creativity
    description: 'Learn how to use Cloudflare to enhance website performance and security.',
    ytb_vid: 'C7bHn1ZZCXI',
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
    author: 'Dev Gautam Kumar',
    image: 'https://dummyimage.com/600x400/FF9800/fff&text=Domain+Hosting', // Amber for warmth
    description: 'A comprehensive guide to understanding domain registration and hosting.',
    ytb_vid: 'C7bHn1ZZCXI',
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
    author: 'Dev Gautam Kumar',
    image: 'https://dummyimage.com/600x400/3F51B5/fff&text=Discord+Bot', // Indigo for professionalism
    description: 'Learn how to create and deploy a Discord bot using JavaScript.',
    ytb_vid: 'C7bHn1ZZCXI',
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
    author: 'Dev Gautam Kumar',
    image: 'https://dummyimage.com/600x400/4CAF50/fff&text=Telegram+Bot', // Green for growth
    description: 'Create and manage a Telegram bot using the Telegram Bot API.',
    ytb_vid: 'C7bHn1ZZCXI',
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
    author: 'Dev Gautam Kumar',
    image: 'https://dummyimage.com/600x400/FFC107/fff&text=Webhooks', // Yellow for clarity
    description: 'Master the art of integrating webhooks into your applications.',
    ytb_vid: 'C7bHn1ZZCXI',
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
    author: 'Dev Gautam Kumar',
    image: 'https://dummyimage.com/600x400/00BCD4/fff&text=ZSH+Setup', // Cyan for tranquility
    description: 'Enhance your terminal experience with OH MY ZSH.',
    ytb_vid: 'C7bHn1ZZCXI',
    content: `
      This course covers:
      \n- Installing and configuring OH MY ZSH
      \n- Customizing ZSH themes and plugins
      \n- Productivity tips for terminal users
    `,
  },
  'course 10: learn to customize terminal': {
    title: 'Course 10: Learn to Customize Terminal',
    author: 'Dev Gautam Kumar',
    image: 'https://dummyimage.com/600x400/673AB7/fff&text=Customize+Terminal', // Deep Purple for creativity
    description: 'Learn how to create a productive and visually appealing terminal environment.',
    ytb_vid: 'C7bHn1ZZCXI',
    content: `
      This course will teach you:
      \n- Customizing terminal prompts and colors
      \n- Installing and using terminal extensions
      \n- Workflow automation in terminal
    `,
  },
  'course 11: windows operational': {
    title: 'Course 11: Windows Operational',
    author: 'Dev Gautam Kumar',
    image: 'https://dummyimage.com/600x400/FFEB3B/000&text=Windows+Operational', // Yellow for clarity
    description: 'A complete guide to operating and optimizing your Windows system for development.',
    ytb_vid: 'C7bHn1ZZCXI',
    content: `
      This course covers:
      \n- Essential Windows commands and shortcuts
      \n- Setting up a development environment
      \n- Optimizing system performance for coding
    `,
  },
  'course 12: linux for devs': {
    title: 'Course 12: Linux for Devs',
    author: 'Dev Gautam Kumar',
    image: 'https://dummyimage.com/600x400/4CAF50/fff&text=Linux+for+Devs', // Green for productivity
    description: 'Master Linux commands and workflows for software development.',
    ytb_vid: 'C7bHn1ZZCXI',
    content: `
      Learn how to:
      \n- Navigate Linux file systems
      \n- Work with terminal commands
      \n- Set up environments for coding and deployment
    `,
  },
  'course 13: portfolio development': {
    title: 'Course 13: Portfolio Development',
    author: 'Dev Gautam Kumar',
    image: 'https://dummyimage.com/600x400/FF5722/fff&text=Portfolio+Development', // Orange for enthusiasm
    description: 'Build and showcase your skills with a professional online portfolio.',
    ytb_vid: 'C7bHn1ZZCXI',
    content: `
      This course will teach:
      \n- Structuring and designing portfolios
      \n- Using frameworks like Bootstrap or Tailwind
      \n- Hosting and deploying your portfolio site
    `,
  },
  'course 14: indexing techniques': {
    title: 'Course 14: Indexing Techniques',
    author: 'Dev Gautam Kumar',
    image: 'https://dummyimage.com/600x400/3F51B5/fff&text=Indexing', // Indigo for professionalism
    description: 'Learn about effective indexing strategies for databases.',
    ytb_vid: 'C7bHn1ZZCXI',
    content: `
      In this course, you will learn:
      \n- Types of indexing methods
      \n- Implementing indexing in databases
      \n- Optimizing queries with indexing
    `,
  },
  'course 15: advanced github': {
    title: 'Course 15: Advanced GitHub',
    author: 'Dev Gautam Kumar',
    image: 'https://dummyimage.com/600x400/FF9800/fff&text=Advanced+GitHub', // Amber for warmth
    description: 'Dive deeper into GitHub features and best practices.',
    ytb_vid: 'C7bHn1ZZCXI',
    content: `
      This course covers:
      \n- Advanced branching strategies
      \n- Managing pull requests and code reviews
      \n- Leveraging GitHub Actions for CI/CD
    `,
  },
  'course 16: app development with flutter': {
    title: 'Course 16: App Development with Flutter',
    author: 'Dev Gautam Kumar',
    image: 'https://dummyimage.com/600x400/2196F3/fff&text=Flutter+App+Dev', // Blue for trust
    description: 'Learn how to build cross-platform apps with Flutter.',
    ytb_vid: 'C7bHn1ZZCXI',
    content: `
      This course will teach:
      \n- Setting up Flutter environment
      \n- Building layouts and navigation
      \n- Integrating APIs and services
    `,
  },
  'course 17: data structures and algorithms': {
    title: 'Course 17: Data Structures and Algorithms',
    author: 'Dev Gautam Kumar',
    image: 'https://dummyimage.com/600x400/9C27B0/fff&text=DSA', // Purple for creativity
    description: 'Master the fundamentals of data structures and algorithms.',
    ytb_vid: 'C7bHn1ZZCXI',
    content: `
      In this course, you will learn:
      \n- Common data structures
      \n- Algorithm design techniques
      \n- Complexity analysis
    `,
  },
  'course 18: machine learning basics': {
    title: 'Course 18: Machine Learning Basics',
    author: 'Dev Gautam Kumar',
    image: 'https://dummyimage.com/600x400/FF5722/fff&text=Machine+Learning', // Orange for enthusiasm
    description: 'Get introduced to the world of machine learning.',
    ytb_vid: 'C7bHn1ZZCXI',
    content: `
      This course covers:
      \n- Key concepts of machine learning
      \n- Supervised vs unsupervised learning
      \n- Implementing basic algorithms in Python
    `,
  },
  'course 19: cyber security fundamentals': {
    title: 'Course 19: Cyber Security Fundamentals',
    author: 'Dev Gautam Kumar',
    image: 'https://dummyimage.com/600x400/FF9800/fff&text=Cyber+Security', // Amber for warmth
    description: 'Understand the basics of cyber security and how to protect systems.',
    ytb_vid: 'C7bHn1ZZCXI',
    content: `
      Learn about:
      \n- Common threats and vulnerabilities
      \n- Security measures and best practices
      \n- Incident response strategies
    `,
  },
  'course 20: web scraping with python': {
    title: 'Course 20: Web Scraping with Python',
    author: 'Dev Gautam Kumar',
    image: 'https://dummyimage.com/600x400/3F51B5/fff&text=Web+Scraping', // Indigo for professionalism
    description: 'Learn how to scrape web data using Python libraries.',
    ytb_vid: 'C7bHn1ZZCXI',
    content: `
      This course will teach you:
      \n- Using BeautifulSoup and Scrapy
      \n- Handling web requests and responses
      \n- Storing scraped data for analysis
    `,
  },
  'course 21: building apis with flask': {
    title: 'Course 21: Building APIs with Flask',
    author: 'Dev Gautam Kumar',
    image: 'https://dummyimage.com/600x400/FFEB3B/000&text=Flask+API', // Yellow for clarity
    description: 'Create RESTful APIs using Flask in Python.',
    ytb_vid: 'C7bHn1ZZCXI',
    content: `
      In this course, you will learn:
      \n- Setting up Flask environment
      \n- Creating routes and handling requests
      \n- Integrating with databases
    `,
  },
  'course 22: front-end frameworks': {
    title: 'Course 22: Front-End Frameworks',
    author: 'Dev Gautam Kumar',
    image: 'https://dummyimage.com/600x400/4CAF50/fff&text=Front-End+Frameworks', // Green for productivity
    description: 'Explore popular front-end frameworks like React, Angular, and Vue.js.',
    ytb_vid: 'C7bHn1ZZCXI',
    content: `
      Learn about:
      \n- Comparing different frameworks
      \n- Setting up development environments
      \n- Building projects with chosen frameworks
    `,
  },
  'course 23: backend development with node.js': {
    title: 'Course 23: Backend Development with Node.js',
    author: 'Dev Gautam Kumar',
    image: 'https://dummyimage.com/600x400/FF5722/fff&text=Node.js', // Orange for enthusiasm
    description: 'Learn to build scalable applications using Node.js.',
    ytb_vid: 'C7bHn1ZZCXI',
    content: `
      This course covers:
      \n- Setting up Node.js environment
      \n- Creating servers and APIs
      \n- Handling asynchronous programming
    `,
  },
  'course 24: testing and debugging': {
    title: 'Course 24: Testing and Debugging',
    author: 'Dev Gautam Kumar',
    image: 'https://dummyimage.com/600x400/9C27B0/fff&text=Testing+Debugging', // Purple for creativity
    description: 'Master testing and debugging techniques for software development.',
    ytb_vid: 'C7bHn1ZZCXI',
    content: `
      Learn how to:
      \n- Write unit and integration tests
      \n- Use testing frameworks
      \n- Debugging techniques and tools
    `,
  },
  'course 25: devops fundamentals': {
    title: 'Course 25: DevOps Fundamentals',
    author: 'Dev Gautam Kumar',
    image: 'https://dummyimage.com/600x400/00BCD4/fff&text=DevOps', // Cyan for tranquility
    description: 'Understand DevOps practices and principles for better collaboration.',
    ytb_vid: 'C7bHn1ZZCXI',
    content: `
      This course will teach:
      \n- Continuous integration and delivery
      \n- Infrastructure as code
      \n- Monitoring and logging best practices
    `,
  },
  'course 26: docker for beginners': {
    title: 'Course 26: Docker for Beginners',
    author: 'Dev Gautam Kumar',
    image: 'https://dummyimage.com/600x400/FFEB3B/000&text=Docker', // Yellow for clarity
    description: 'Learn the basics of containerization using Docker.',
    ytb_vid: 'C7bHn1ZZCXI',
    content: `
      In this course, you will learn:
      \n- Setting up Docker environment
      \n- Building and running containers
      \n- Managing container orchestration
    `,
  },
  'course 27: mobile development with react native': {
    title: 'Course 27: Mobile Development with React Native',
    author: 'Dev Gautam Kumar',
    image: 'https://dummyimage.com/600x400/4CAF50/fff&text=React+Native', // Green for productivity
    description: 'Build mobile applications using React Native framework.',
    ytb_vid: 'C7bHn1ZZCXI',
    content: `
      This course covers:
      \n- Setting up React Native environment
      \n- Building UI components
      \n- Managing state and navigation
    `,
  },
  'course 28: working with apis': {
    title: 'Course 28: Working with APIs',
    author: 'Dev Gautam Kumar',
    image: 'https://dummyimage.com/600x400/FF9800/fff&text=APIs', // Amber for warmth
    description: 'Learn how to work with APIs for integrating services.',
    ytb_vid: 'C7bHn1ZZCXI',
    content: `
      Learn about:
      \n- Types of APIs (REST, SOAP)
      \n- Consuming APIs in applications
      \n- API authentication and security
    `,
  },
  'course 29: automation with python': {
    title: 'Course 29: Automation with Python',
    author: 'Dev Gautam Kumar',
    image: 'https://dummyimage.com/600x400/4CAF50/fff&text=Automation', // Green for productivity
    description: 'Automate repetitive tasks using Python scripts.',
    ytb_vid: 'C7bHn1ZZCXI',
    content: `
      This course will teach you:
      \n- Writing scripts for automation
      \n- Using libraries for web scraping and API calls
      \n- Scheduling tasks with cron jobs
    `,
  },
  'course 30: effective communication in tech': {
    title: 'Course 30: Effective Communication in Tech',
    author: 'Dev Gautam Kumar',
    image: 'https://dummyimage.com/600x400/9C27B0/fff&text=Communication', // Purple for creativity
    description: 'Enhance your communication skills in technical environments.',
    ytb_vid: 'C7bHn1ZZCXI',
    content: `
      Learn how to:
      \n- Communicate technical concepts clearly
      \n- Collaborate with teams effectively
      \n- Present ideas and projects
    `,
  },
  'course 31: ethical hacking basics': {
    title: 'Course 31: Ethical Hacking Basics',
    author: 'Dev Gautam Kumar',
    image: 'https://dummyimage.com/600x400/FF5722/fff&text=Ethical+Hacking', // Orange for enthusiasm
    description: 'Understand the basics of ethical hacking and cybersecurity.',
    ytb_vid: 'C7bHn1ZZCXI',
    content: `
      This course covers:
      \n- Key concepts of ethical hacking
      \n- Common tools and techniques
      \n- Legal and ethical considerations
    `,
  },
  'course 32: virtual reality development': {
    title: 'Course 32: Virtual Reality Development',
    author: 'Dev Gautam Kumar',
    image: 'https://dummyimage.com/600x400/4CAF50/fff&text=VR+Development', // Green for productivity
    description: 'Learn to create immersive experiences in virtual reality.',
    ytb_vid: 'C7bHn1ZZCXI',
    content: `
      This course will teach you:
      \n- Basics of VR technologies
      \n- Creating VR applications using Unity
      \n- Designing immersive user experiences
    `,
  },
'course 33: introduction to programming': {
    title: 'Course 33: Introduction to Programming',
    author: 'Dev Gautam Kumar',
    image: 'https://dummyimage.com/600x400/FF9800/fff&text=Programming+Basics', // Orange for creativity
    description: 'Learn the fundamentals of programming and problem-solving techniques.',
    ytb_vid: 'Z1Yd7upQsXY',
    content: `
      This course will introduce you to:
      \n- Basic programming concepts and logic
      \n- Writing your first code in Python
      \n- Problem-solving strategies
    `,
},
};
export default courses;
