const inquirer = require('inquirer');
const jest = require('jest');
const fs = require('fs');

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
let employees = [];

function engineer() {
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
    inquirer.prompt(addEngineer).then(({ name, id, email, github }) => {
        employees.push(new Engineer(name, id, email, github));
        newEmployee();
    })

}

function intern() {
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
    inquirer.prompt(addIntern).then(({ name, id, email, school }) => {
        employees.push(new Intern(name, id, email, school));
        newEmployee();
    })
}

function manager(){
const addManager = [
    {
        name: 'name',
        type: 'input',
        message: 'Enter Manager Name',

    },
    {
        name: 'id',
        type: 'input',
        message: 'Enter Manager employee ID',

    },
    {
        name: 'email',
        type: 'input',
        message: 'Enter Manager Email',

    },
    {
        name: 'officeNumber',
        type: 'input',
        message: 'Enter Manager Office Number',

    },

]
    inquirer.prompt(addManager).then(({ name, id, email, officeNumber }) => {
        employees.push(new Manager(name, id, email, officeNumber));
        newEmployee();
    })
}

const createEmployee = [
    {
        name: 'create',
        type: 'list',
        message: 'Add Employee?',
        choices: ['Add Engineer', 'Add Intern', 'Finish building team',]
    }
]


function newEmployee() {
    inquirer.prompt(createEmployee)
        .then((data) => {
        switch (data.create) {
            case 'Add Engineer': engineer();
                break;
            case 'Add Intern': intern();
                break;
            default: createCards();
        }
        return;
    })
}

manager();

module.exports = { outputHTML, }