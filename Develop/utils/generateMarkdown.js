// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
}
if (license === 'Apache2.0') {
    return '![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
}
return ''; // no license badge shown
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return 'https://opensource.org/licenses/MIT'
} if (license === 'Apache2.0') {
  return 'https://opensource.org/license/apache-2-0/'
}
return ''; // no link rendered
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'none') {
    return `This application is covered under the ${license} license`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have questions please contact me via email @ ${data.email} or please
visit  https://www.github.com/${data.username}

## License
${renderLicenseSection(data.license)}

${renderLicenseLink(data.license)}

`;
}

module.exports = generateMarkdown;
