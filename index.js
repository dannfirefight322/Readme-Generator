const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
inquirer
    .prompt([
        {
            type: "input",
            message: "What is your project title?",
            name: "title",
        },
        {
            type: "input",
            message: "Give a brief descripton of the project.",
            name: "description",
        },
        {
            type: "input",
            message: "Give brief installation instructions.",
            name: "install",
        },
        {
            type: "input",
            message: "Enter usage information.",
            name: "usage",
        },
        {
            type: "input",
            message: "Who else contributed?",
            name: "contribution",
        },
        {
            type: "input",
            message: "How did you test the code?",
            name: "test",
        },
        {
            type: 'checkbox',
            message: 'What license do you have?',
            name: 'license',
            choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT license', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revise License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesse General Public License v2.1', 'Mozilla Publi License 2.0', 'The Unlicense', 'NONE'],
        },
        {
            type: "input",
            message: "Enter Github URL",
            name: "github",
        },
        {
            type: "input",
            message: "Enter email address",
            name: "email",
        },
        {
            type: "input",
            message: "Press Enter to generate readme file.",
            name: "enter",
        },
    ])

    //   .then((response) => JSON.stringify(response, null, "\t"))
    .then((response) => writeFileAsync("README.md", content(response)))
    .then(() => console.log("README generated"));



const content = function (response) {
    const readMe = `
  #Title: ${response.title}
  ## Table Of  Contents
  1.[Description](#desc)</br>
  2.[Install Information](#install)</br>
  3.[Usage Information](#use)</br>
  4.[Contributions](#cont)</br>
  5.[Testing Information](#test)</br>
  6.[License Information](#lic)</br>
  7.[Questions](#ques)</br> 
  # <span id="desc"></span>
  # Description
  ### ${response.description}
  # <span id="install"></span>
  # Install Information
  ### ${response.install}
  # <span id="use"></span>
  # Usage Information
  ### ${response.usage}
  # <span id="cont"></span>
  # Contribution
  ### ${response.contribution}
  # <span id="test"></span>
  # Testing Information
  ### ${response.test}
  # <span id="lic"></span>
  # License
  ### ${response.license}
  # <span id="ques"></span>
  # Questions
  ### Github: ${response.github} 
  ### Email: ${response.email}
  ${response.enter}
  `;
    return readMe;
};