// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown=(data)=>{
  return `
  # ${data.title}
  ## Description
  ${data.description}
  ## License
  ${data.lisence}
  ## Dependencies
  ${data.dependencies}
  ## How to run test
  ${data.test}
  ## For further Questions send me an E-mail
  ${data.email}

`;
}

module.exports = generateMarkdown;