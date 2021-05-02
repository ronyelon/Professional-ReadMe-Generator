// Create a function to generate markdown for README
function generateMarkdown(data) {
return `# ${data.title}
  ----
  <a href="https://img.shields.io/badge/License-${data.license[0]}-brightgreen"><img src="https://img.shields.io/badge/License-${data.license[0]}-brightgreen"></a>

  
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Test Instructions](#test-instructions)
  - [License](#license)
  - [Questions](#questions?-contact-me-below)

  ### Description
  ${data.description}

  ### Installation
  ${data.installation}

  ### Usage
  ${data.usage}

  ### Contribution
  ${data.contribution}

  ### Test-Instructions
  ${data.tests}

  ### License
  ${data.license}

  ### Questions? Contact me below
  - [Github Profile](https://github.com/${data.username})
  - ${data.email}

  `;
  }


  module.exports = generateMarkdown;