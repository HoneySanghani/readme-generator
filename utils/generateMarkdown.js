

// TODO: Create a function to generate markdown for README
const generateMarkdown=(data)=>{
  return `
  # ${data.title} ![no](https://img.shields.io/node/v/no)
  ## Description
  ${data.description}
  ## Table of Content
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [License](#license)
  * [How to run test](#test)
  * [For Further Questions](#questions)
  ## Installation
  ${data.dependencies}
  ## Usage
  ${data.usage}
  ## Contribution
  ${data.contribution}
  ## License
  ${data.lisence}
  ## How to run test
  To run the code use ${data.test} command
  ## For further Questions
  E-mail: ${data.email}
  GitHub: https://github.com/${data.username}

`;
}

module.exports = generateMarkdown;
