
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![Github License]`;
  }
  return '';
}

function renderLicenseLink(license) {
  if (license !== 'None') {
    return `\n* [License](#license)\n`;
  }
  return '';
}

function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License
    
    This project is licensed under ${license}.`
  }
  return '';
}

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
