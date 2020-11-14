import server from './server'

const PORT = 8080

server.listen(PORT, () => {
    console.log(`⚡️ [server]: Server is running at https://localhost:${PORT} ⚡️`) // eslint-disable-line
})
