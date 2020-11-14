#!/usr/bin/env node
const path = require('path')
const fs = require('fs-extra')
const {
    exec,
} = require('child_process')


function initApplication() {
    const projectPath = process.argv[2] || 'app'
    
    console.log('Creating folder and installing npm modules')

    if(!fs.existsSync(projectPath)) {
        fs.mkdirSync(projectPath)
    }

    console.log('copieng files')

    const templateFolder = path.join(
        __dirname.slice(0, __dirname.length-4),
        'template',
        'v0',
        '.'
    )
    fs.copySync(templateFolder, projectPath)

    console.log('installing node_modules')

    exec(
        `cd ${projectPath} && npm i`,
        (
            initErr,
            initStdout,
            initStderr,
        ) => {
            initErr && console.error(initErr)
            initStdout && console.log(initStdout)
            initStderr && console.error(initStderr)
        },
    )
}


initApplication()
