// const fs = require("fs");
const inquirer = require("inquirer");

// const generatePage = require("./src/page-template.js");

// const pageHTML = generatePage(portfolioData);

// const profileDataArgs = process.argv.slice(2); // kept for reference

// const [name, github] = profileDataArgs; //array destructuring statement, kept for reference

// fs.writeFile("./index.html", generatePage(name, github), (err) => {
//   if (err) throw new Error(err);

//   console.log(
//     "Portfolio complete! Check out the index.html to see the output!"
//   );
// });
inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
    },
  ])
  .then((answers) => console.log(answers));
