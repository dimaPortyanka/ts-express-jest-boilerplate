# ATENTION
Dosn't work on windows.

# typescript + express + jest + supertest + swagger boilerplate

## Getting started

Run these command in console
+ npm i -g express-typescript-jest-supertest
+ npx express-typescript-jest-supertest nameOfyourAwesomeServer
*use tab in bash not to enter full package name*
after you run this commands you will have folder with all required files to write express server

## Why do you need it
The purpose of this boilerplate is to have fully configured express project with linter, typescript and integrational testing ready to go.
So to start working with application just:
* npm i
* npm run dev
and local server with live reload would be started for you.

- [typescript](#typescript)
- [Code example](#code-example)
- [https://jestjs.io/](https://jestjs.io/)
- [https://github.com/visionmedia/supertest](https://github.com/visionmedia/supertest)
- [https://swagger.io](https://swagger.io), [https://www.npmjs.com/package/swagger-jsdoc](https://www.npmjs.com/package/swagger-jsdoc)


## typescript
It is your friend it will show when you sending wrong arguments to function or trying to call a property that doesnt exists.
All the type checks is done also in tests and during the development step. So if you made the error in types you got the feedback immediatly.

### tsconfig.json
```
{
    "compilerOptions": {
        "moduleResolution": "node",
        "target": "ES2019",
        "noImplicitAny": true,
        "module": "CommonJS",
        "baseUrl": "./src",
        "rootDir": "./src",
        "outDir": "./build",
        "esModuleInterop": true,
        "allowSyntheticDefaultImports": true,
        "strict": true,
        "paths": {
            "src/*": [
                "./src/*"
            ]
        }
    },
    "include": ["./src"],
    "exclude": ["node_modules"]
}
```

## Code example

### users.ts
```
import {
    Request,
    Response,
    Router,
} from 'express'

const router = Router()

/**
 * @swagger
 *
 * /users:
 *   get:
 *     description: get users
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: array of users
 */
router.post(
    '/',
    (req: Request, res: Response): void => {
        res.send([{name: 'user1'}, {name: 'user2'}])
    },
)

export default router
```

### users.spec.ts
```
import path from 'path'
import supertest from 'supertest'

import app from 'server'

describe('Test html root', () => {
    it('success scenario', async (done) => {
        const res = await supertest(app)
            .get('/users')

        expect(res.status).toBe(200)
        expect(res.body).toEqual([{name: 'user1'}, {name: 'user2'}])

        done()
    })
})
```
