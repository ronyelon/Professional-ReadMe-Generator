// creates markdown for read me
function generateMarkdown(data) {

    // returns inquirer data.
    return `# ${data.title}
  ----
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Test Instructions](#test-instructions)
  - [Contact Information](#contact-information)

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

  `;
  }

  // exports the createMarkdown information
  module.exports = generateMarkdown;