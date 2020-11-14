import supertest from 'supertest'

import app from 'server'

describe('test examp-route', () => {
    it('success scenario', async (done) => {
        const res = await supertest(app)
            .get('/examp-route')

        expect(res.status).toBe(200)
        expect(res.body).toBeTruthy()

        done()
    })
})
