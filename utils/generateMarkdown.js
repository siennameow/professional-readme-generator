// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'no license') {
    return `
  ![badge](https://img.shields.io/badge/license-${license}-blue)
    `;
  } else {
    return ' ';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'no license') {
    return `
    [${license}](https://choosealicense.com/licenses/${license})
    `;
  } else {
    return ' ';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  return `# ${data.title}

  # Description
  📝 
  ${data.description}
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribution](#contribution)
  - [Test](#test)
  - [Questions](#questions)
  # Installation
  🗳 
  ${data.installation}
  # Usage
  💻 
  ${data.usage}
  # Contribution
  👩🏻‍💻 
  ${data.contribution}
  # Test
  🧩
  ${data.test}
  # License
  🚀
  This application is covered by the ${data.license} license. 
  
  # Questions❓
Contact me at ${data.email}

my github page is [${data.username}](https://github.com/${data.username})

 
`;
}

module.exports = generateMarkdown;
