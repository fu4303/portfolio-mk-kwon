// TODO Add a couple lines about each project
const data = [
  {
    title: 'Pro Hub',
    subtitle: 'A group project from Adelaide Uni Coding Bootcamp',
    link: ' http://pro-hub.herokuapp.com/',
    github_link: 'https://github.com/MK-Kwon/Pro-Hub-2020',
    image: '/images/projects/ProHub.png',
    date: '2020-12-15',
    technologies: 'MongoDB, Express, React, NodeJS, Figma',
    desc:
      'A MERN stack app that lets you find real-life team members for any project you plan on. '
      + 'With Pro-Hub-2020 it gives individuals the chance to meet up with '
      + 'local developers to collaborate on a project. '
      + 'Whether you are just building your portfolio, or needing an extra set of hands,'
      + 'ProHub will make your project come alive.',
  },
  {
    title: 'Road Star',
    subtitle: '2nd Groupd Project from Adelaide Uni Coding Bootcamp',
    link: 'http://roadstar2020.herokuapp.com/',
    github_link: 'https://github.com/MK-Kwon/RoadStar',
    image: '/images/projects/RoadStar.png',
    date: '2020-09-23',
    technologies: 'MySQL, Express, NodeJS, Sequelize, JQuery, JavaScript, Figma',
    desc:
      'Road Start helps users to find motorcycle and car events around them '
      + 'as well as keep track of their favourite vehicles. '
      + 'Users can also search car/motorbike info by inputting the VIN and find recalls for a specific vehicle.',
  },
  {
    title: 'AccuZone Weather',
    subtitle: 'The weather forecast app',
    link: 'https://mk-kwon.github.io/AccuZone-Weather/',
    github_link: 'https://github.com/MK-Kwon/AccuZone-Weather',
    image: '/images/projects/Accuzone Weather.png',
    date: '2020-07-05',
    technologies: 'HTML, CSS, Bootstrap, JavaScript, JQuery, Figma',
    desc:
      'The weather app that gives the user real-time current weather and '
      + 'five day weather forecast by searching for the name of the city.  '
      + 'Whenever the user types in new search keyword, it gets saved to the local storage. '
      + 'User can save up to 8 cities. ',
  },
  {
    title: 'Transaction Tracker',
    subtitle: 'An online/offline Web App',
    link: 'https://my-transaction-tracker-mk.herokuapp.com/',
    github_link: 'https://github.com/MK-Kwon/transaction-tracker',
    image: '/images/projects/Transaction Tracker.png',
    date: '2020-10-15',
    technologies: 'MongoDB, Mongoose, Express, NodeJS, Figma',
    desc:
      'An online/offline Progressive Web App that tracks account balance, withdrawals, and deposits.   '
      + 'It can be downloaded and used online or offline due to '
      + 'the inclusion of an app manifest and service worker.  '
      + 'Data entered in offline mode is stored client-side in IndexedDB, '
      + ' then stored server-side in MongoDB once online again. ',
  },
  {
    title: 'Ezy Nav',
    subtitle: '1st Group Project from Adelaide Uni Coding Bootcamp',
    link: 'https://mk-kwon.github.io/Ezy_Nav/',
    github_link: 'https://github.com/MK-Kwon/Ezy_Nav',
    image: '/images/projects/EzyNav.png',
    date: '2020-01-07',
    technologies: 'HTML, CSS, JavaScript, Figma',
    desc:
      'Ezy Nav offers users the best route to get to their destination either by a car or a public transport '
      + 'Additionally the app provides the weather forecast at the starting and the destination. ',
  },
  {
    title: 'Bugger Logger',
    subtitle: 'Responsive, RESTful Node.js/Express app',
    link: 'https://mk-bugger.herokuapp.com/',
    github_link: 'https://github.com/MK-Kwon/Bugger-Logger',
    image: '/images/projects/Bugger Logger.png',
    date: '2020-09-23',
    technologies: 'Node JS, Express, MySQL, Handlebars, Figma',
    desc:
      'Node.js/Express app using MySQL as a database'
      + 'A responsive, RESTful Node.js/Express app using MySQL as a database and Handlebars to generate HTML. '
      + 'The app enables users to read, create, update and delete data of burgers through mobile-friendly browser interface. '
      + 'For this exercise I specifically used CRUD operation to serve MVC and '
      + 'created my own ORM for protecting MySQL database from MySQL injection. ',
  },
  {
    title: 'Employee Directory',
    subtitle: 'Responsive, single-page app',
    link: 'https://react-employee-directory-mk.herokuapp.com/',
    github_link: 'https://github.com/MK-Kwon/React-Employee-Directory',
    image: '/images/projects/Employee Directory.png',
    date: '2020-11-18',
    technologies: 'MongoDB, Mongoose, React, Express, NodeJS, Figma',
    desc:
      'A responsive, single-page React employee directory application that  '
      + 'enables sorting and filtering employee data. '
      + 'Material-UI was used for generating the template table then all employee info was hard coded in it. '
      + 'An employee or manager would benefit greatly from '
      + 'being able to view and filter non-sensitive data about other employees.',
  },
  {
    title: 'My-FitPal',
    subtitle: 'MongoDB with Mongoose Schema',
    link: 'https://fitness-tracker-mk-kwon.herokuapp.com/',
    github_link: 'https://github.com/MK-Kwon/My-FitPal',
    image: '/images/projects/My-Fitpal.png',
    date: '2020-10-03',
    technologies: 'MongoDB, Mongoose, Express, Morgan, NodeJS, Figma',
    desc:
      'A daily workout tracker that uses a Mongo database with a Mongoose schema  '
      + 'and handles routes with Express. '
      + 'Users can create a new workout plan, add exercises to an existing '
      + 'workout plan, and view statistics about previous workouts. ',
  },
  {
    title: 'Employee Management System',
    subtitle: 'A Content Management System that tracks employees.',
    link: 'https://github.com/MK-Kwon/Employee-Management',
    github_link: 'https://github.com/MK-Kwon/Employee-Management',
    image: '/images/projects/Employee Management.png',
    date: '2020-08-15',
    technologies: 'NodeJS, JavaScript, Inquirer, MySQL',
    desc:
      'An employee database with command line app that adds, views,   '
      + 'and updates departments, employees, and roles. '
      + 'A database with a command line application that views, adds, updates, '
      + 'and deletes data obtaining to departments, roles, and employees. ',
  },
  {
    title: 'Google Book Search',
    subtitle: 'A single page MERN app for searching books on Google.',
    link: 'https://google-book-search-mkkwon.herokuapp.com/',
    github_link: 'https://github.com/MK-Kwon/React-Google-Book-Search',
    image: '/images/projects/GBS.png',
    date: '2020-11-29',
    technologies: 'MongoDB, Express, NodeJS, React',
    desc:
      'A responsive, single-page MERN app that uses the Google Books API to search, '
      + 'save and delete books selected by the user to a Mongo database. ',
  },
  {
    title: 'Code Quiz',
    subtitle: 'A quiz site which asks the user JavaScript questions',
    link: 'https://mk-kwon.github.io/Code-Quiz/',
    github_link: 'https://github.com/MK-Kwon/Code-Quiz',
    image: '/images/projects/CodeQuiz.png',
    date: '2020-06-14',
    technologies: 'HTML, CSS, JavaScript',
    desc:
      'A quiz site which asks the user JavaScript questions and counts the time takes to answer them. '
      + 'The user has 10 seconds for each questions to answer if unable to chose the correct answer, '
      + 'the time will be deducted by 10 seconds for each questions.',
  },
  {
    title: 'Day Planner',
    subtitle: 'A calendar app using html, css,Bootstrap, JavaScript & Jquery',
    link: 'https://mk-kwon.github.io/Day-Planner/',
    github_link: 'https://github.com/MK-Kwon/Day-Planner',
    image: '/images/projects/Day Planner.png',
    date: '2020-07-20',
    technologies: 'HTML, CSS, JavaScript, JQuery',
    desc:
      'A calendar app using html, css,Bootstrap, JavaScript & Jquery. '
      + 'It is intended for use as daily schedule organiser to keep track of important events, meetings & deadlines during the work day on an hourly basis. ',
  },
];

export default data;
