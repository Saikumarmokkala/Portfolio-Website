module.exports = {
  siteTitle: 'Hi! I\'m Sai!',
  siteDescription: `Create your online curriculum in just a few minutes with this starter`,
  keyWords: ['gatsbyjs', 'react', 'curriculum'],
  authorName: 'Sai',
  twitterUsername: '_franciscodf',
  githubUsername: 'Saikumarmokkala',
  authorAvatar: '/images/ava1.jpg',
  authorDescription: `
    I'm passionate about building softwares.
    Experienced in building, maintenance of web & mobile, cloud applications. Implemented CI/CD pipelines for cloud and local machines. Used Docker, Kubernetes, GIT and Jenkins in automation, orchestration of applications. 

  
  `,

  authorskills: `
  <b>Programming Skills</b>: Java, C, C#, Python, C++, SQL, R, Pig, Hive <br />
    <b>Web Development</b>: PHP, HTML, CSS, JavaScript, ReactJS, MongoDB, JSON, Bootstrap, Node.js, WordPress  <br />
    <b>Software Skills and Framework </b>: Windows, Linux, Eclipse, Android Studio, Hadoop Map-Reduce, Scala, Laravel <br/>
    <b> Development Methodologies</b>: Agile/Scrum, Waterfall  </br>
    <b>Software Testing</b>: JUnit, JaCoCo, PITMutation, Jenkins, Selenium Automation </br>
    <b> Tools: </b> Google Cloud Platform, Kubernetes, CI/CD pipelines, Vscode, AWS, Docker, Terraform, GIT
  
`,
  skills: [
    {
      name: 'HTML',
      
    },
    {
      name: 'CSS',
      level: 60
    },
    {
      name: 'Javascript',
      level: 50
    },
    {
      name: 'NodeJs',
      level: 40
    },
    {
      name: 'React',
      level: 60
    },
    {
      name: 'Git',
      level: 70
    },
    {
      name: 'NodeJs',
      level: 40
    },
    {
      name: 'React',
      level: 60
    },
    {
      name: 'Git',
      level: 70
    },
    /* more skills here */
  ],
  jobs: [
    /* more jobs here */
      {
      company: "Nexgenux technologies",
      begin: {
        month: 'Jan',
        year: '2018'
      },
      duration: '1 yr- till Dec 2018',
      occupation: "Software Developer (full stack)",
      description: "Performed algorithmic development in Java with modules in MVC architecture, tested in JUnit, JaCoCo, PIT Mutation and Selenium. Used GIT for source code version control and integrated with Jenkins for CI/CD pipelines. Created docker images and orchestrated with kubernetes. Implemented cloud storage backup environment using AWS storage services. Involved in web development team, created analytics dashboards for optimization of real time processes using ReactJS in front-end and Node.js in back-end."
    }, {
      company: "Johnson Controls",
      begin: {
        month: 'May',
        year: '2017'
      },
      duration: '3 months - till Jul 2017',
      occupation: "Software Engineer Intern",
      description: "Worked on optimization and maintenance of dynamic website using HTML, CSS and ReactJS in front-end and Firebase in back-end, that has several modules worldwide"
     
  
    },
    {
      company: "IIM Lucknow",
      begin: {
        month: 'Dec',
        year: '2016'
      },
      duration: '2 months - till Jan 2017',
      occupation: "Research Intern",
      description: "Conducted statistical research on complex data solutions using R Studio."
  
    },
  
   
    {
      company: "Amaron Batteries",
      begin: {
        month: 'May',
        year: '2015'
      },
      duration: '3 months - till Jul 2015',
      occupation: "Software Engineer Intern",
      description: " Implemented Android application using Java that delivers batteries to clients across cities with multiple options including priority delivery, repair maintenance and chat service system for customers."
  
    },
  ],
  portfolio: [
    {
      image: "/images/jenk3.jpg",
      description: "Database to AWS S3 Automation",
      url: "https://github.com/Saikumarmokkala/Database-backup-to-AWS-S3"
      
    },
    {
      image: "/images/net4.jpg",
      description: "Netflix Clone (Full stack)",
      url: "https://github.com/Saikumarmokkala/Netflix-Clone"
      
    },
    {
      image: "/images/dist1.jpg",
      description: "Distributed System Projects",
      url: "https://github.com/Saikumarmokkala/Distributed-System-Projects"
      
    },
    {
      image: "/images/qui2.jpg",
      description: "Online Quiz (AWS) ",
      url: "https://github.com/Saikumarmokkala/Online-Quiz"
      
    },
    {
      image: "/images/ecom1.jpg",
      description: "Ecommerce Price tracker",
      url: "https://github.com/Saikumarmokkala/ecomm-pricetracker"
      
    },
    {
      image: "/images/kube1.jpg",
      description: "Kubernetes Minikube Cluster",
      url: "https://github.com/Saikumarmokkala/Kubernetes-minikube-cluster"
      
    },
    {
      image: "/images/rout1.jpg",
      description: "Shortest route between Cities",
      url: "https://github.com/Saikumarmokkala/Shortest-Route-between-Cities"
      
    },
    {
      image: "/images/li5.png",
      description: "Running EC2 using Docker",
      url: "https://github.com/Saikumarmokkala/Docker-Jenkins-SSH"
      
    },
 
 
    /* more portifolio items here */
  ],
  social: {
    twitter: "https://twitter.com/_franciscodf",
    linkedin: "https://www.linkedin.com/in/saikumarreddymokkala/",
    github: "https://github.com/Saikumarmokkala",
    email: "saimokkala2@gmail.com"
  },
  siteUrl: 'https://santosfrancisco.github.io/gatsbystarter-cv',
  pathPrefix: '/gatsby-starter-cv', // Note: it must *not* have a trailing slash.
  siteCover: '/images/cover.jpeg',
  googleAnalyticsId: 'UA-000000000-1',
  background_color: '#ffffff',
  theme_color: '#25303B',
  fontColor: "#000000cc",
  enableDarkmode: true, // If true, enables dark mode switch
  display: 'minimal-ui',
  icon: 'src/assets/gatsby-icon.png',
  headerLinks: [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'Portfolio',
      url: '/portfolio',
    }
  ]
}