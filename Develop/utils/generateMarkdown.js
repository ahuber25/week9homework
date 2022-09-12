// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return ``;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return ``;
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of contents

* [Languages](#languages)
${renderLicenseLink(data.license)}
* [Installation](#install)
* [Testing](#test)
* [Questions](#questions)

## Languages

${data.languages}

## Installation

To Install, run the following command

\`\`\`
${data.install}
\`\`\`

## Testing

To Run

\`\`\`
${data.test}
\`\`\`

## Questions

If you have any questions, contact me at ${data.email}. You can find more of my work and repositories at ${data.github} (https://github.com/${data.github}/).

`;
}

module.exports = generateMarkdown;
