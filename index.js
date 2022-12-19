// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

inquirer.prompt([
    {
        type: 'input',
        message: 'Enter your project name',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Enter your project description',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Describe how to install your project',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Explain how to use your project',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Give any contributions here',
        name: 'contribution',
    },
    {
        type: 'list',
        message: 'What liscense do you want to use?',
        name: 'license',
        choices: ['IBM', 'Mozilla', 'Apache'],
    },
    {
        type: 'input',
        message: 'Give extra information about your project',
        name: 'licenseinfo',
    },
    {
        type: 'input',
        message: 'Explain what the tests do',
        name: 'testinstructions',
    },
    {
        type: 'input',
        message: 'Enter your Github username',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Enter your email address',
        name: 'email',
    }
])
    .then((response) => {
        if (response.license = 'IBM') {
            response.license = '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'
        }
        else if (response.license = 'Mozilla') {
            response.license = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
        }
        else {
            response.license = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
        };
        fs.writeFile('readme.md', `#${response.title} ${response.license}
    # Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [Contributing](#contributing)
6. [Test](#tests)
7. [Questions](#questions)
## Description
${response.description}
        
## Installation 
${response.installation}
## Usage
${response.usage}
## License
${response.licenseinfo}
## Contributing 
${response.contribution}
## tests
${response.testinstructions}
## Questions 
${response.github}
${response.email}`,

            (err) => err ? console.error(err) : console.log('Success!'))
    })
