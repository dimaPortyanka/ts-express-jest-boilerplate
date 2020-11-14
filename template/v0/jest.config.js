module.exports = { // eslint-disable-line
    preset: 'ts-jest',
    testEnvironment: 'node',
    verbose: true,
    bail: true,
    rootDir: 'src',
    moduleDirectories: [
        'src',
        'node_modules',
    ],
}
