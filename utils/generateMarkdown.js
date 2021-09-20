const license=(data)=>{
  if(data.lisence=='MIT'){
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  }
  else if(data.license=='APACHE 2.0'){
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  }
  else if(data.license=='GPL 3.0'){
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  }
  else if(data.license=='BSD 3'){
    return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
  }
  else{
    return;
  }
}

// TODO: Create a function to generate markdown for README
const generateMarkdown=(data)=>{
  return `
  # ${data.title} ${license(data)}
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
