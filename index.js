const inquirer = require('inquirer');
const jest = require('jest');
const fs = require('fs');

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');


const addEngineer = [
    {
name: 'name',
type: 'input',
message: 'Enter Manager Name',

    },
    {
name: 'id',
type: 'input',
message: 'Enter Engineer employee ID',

    },
    {
name: 'email',
type: 'input',
message: 'Enter Engineer Email',

    },
    {
name: 'github',
type: 'input',
message: 'Enter Engineer Office Number',

    }

];

const addIntern = [
    {
        name: 'name',
        type: 'input',
        message: 'Enter Intern Name',
        
            },
            {
        name: 'id',
        type: 'input',
        message: 'Enter Intern employee ID',
        
            },
            {
        name: 'email',
        type: 'input',
        message: 'Enter Intern Email',
        
            },
            {
        name: 'school',
        type: 'input',
        message: 'Enter Intern\'s school',
        
            },

];

const addManager = [
    {
        name: 'name',
        type: 'input',
        message: 'Enter Intern Name',
        
            },
            {
        name: 'id',
        type: 'input',
        message: 'Enter Intern employee ID',
        
            },
            {
        name: 'email',
        type: 'input',
        message: 'Enter Intern Email',
        
            },
]

// inquirer.prompt(questions).then((response) => {
//     generateMarkdown(response);
//     fs.writeFile('README.md', generateMarkdown(response), 'utf-8', (err) => {
//         if (err) return console.log(err);
//         console.log('Success!')
//     });
//   });



module.exports = { outputHTML, }