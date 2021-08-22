// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer=require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = ()=>{
    return inquirer.prompt([
        {
            type:'input',
            name:'username',
            message:'What is your GitHub user name?',
        },
        {
            type:'input',
            name:'email',
            message:'What is your email address?'
        },
        {
            type:'input',
            name:'title',
            message:'What is your project name?'
        },
        {
            type:'input',
            name:'description',
            message:'Please write a short description of your project.'
        },
        {
            type:'input',
            name:'usage',
            message:'What is this project used for?'
        },
        {
            type:'input',
            name:'contribution',
            message:'Who are the contributors?'
        },
        {
            type:'list',
            name:'lisence',
            message:'What kind of license should your project have?',
            choices:['MIT','APACHE 2.0','GPL 3.0','BSD 3','None'],
        },
        {
            type:'input',
            name:'dependencies',
            message:'What command should be run to install dependencies?'
        },
        {
            type:'input',
            name:'test',
            message:'What command should be run to run test?',
        }
    ])
};

// TODO: Create a function to write README file
const writeToFile=(data)=> {
    return new Promise((resolve,reject)=>{
        fs.writeFile('Readme.md',data,err=>{
            if(err){
                reject(err);
                return;
            }
            resolve({
                ok:true,
                message:'File created!'
            })
        })
    })
}

// TODO: Create a function to initialize app
const init=()=> {
    questions()
    .then((answers)=>{
        return generateMarkdown(answers);
    })
    .then((content)=>{
        return writeToFile(content);
    })
    .catch((err)=>{
        console.log(err);
    })
}

// Function call to initialize app
init();

