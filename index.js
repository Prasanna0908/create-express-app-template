#!/usr/bin/env node
const prompts = require('prompts');

function main() {
    const { execSync } = require('child_process');
    const path = require('path');
    const fs = require('fs');

    if (process.argv.length < 3) {
        console.log('You have to provide a name to your app.');
        console.log('For example :');
        console.log('    npx create-my-boilerplate my-app');
        process.exit(1);
    }

    const projectName = process.argv[2];
    const currentPath = process.cwd();
    const projectPath = path.join(currentPath, projectName);
    const git_repo = "git@github.com:Prasanna0908/StarterFiles.git";


    try {
       fs.mkdirSync(projectPath);
    } catch (err) {
    if (err.code === 'EEXIST') {
        console.log(`The file ${projectName} already exist in the current directory, please give it another name.`);
    } else {
        console.log(error);
    }
        process.exit(1);
    }

    async function main() {
        try {
            console.log('Downloading files...');
        
            execSync(`git clone --depth 1 ${git_repo} ${projectPath}`);

            process.chdir(projectPath);

            console.log('Installing dependencies...');
            execSync('npm install');  
            

            console.log('Removing useless files');
            execSync('npx rimraf ./.git');
            fs.rmdirSync(path.join(projectPath, 'bin'), { recursive: true});

            const prompts = require('prompts');

            (async () => {
                const response = await prompts({
                    type: 'select',
                    name: 'JavaScript Framework/Library',
                    message: 'Pick a JavaScript Framework/Library for frontend: ',
                    choices: [
                        { title: 'React', description: 'This is bootstrapped with yarn create react-app my-app', value: 'React' },
                        { title: 'None', value: 'None' }
                    ]
            });


            if(response["JavaScript Framework/Library"] === "React"){
                console.log("Initializing React Template with folder name as client")
                execSync('yarn create react-app client',{stdio: 'inherit'})
            } 
            console.log('The installation is done, this is ready to use !');
        })(); 
        
        } catch (error) {
            console.log(error);
        }
}
    main();
}

if (require.main === module) {
    main();
}