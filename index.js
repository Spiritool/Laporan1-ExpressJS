const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Halo decks')
})

app.listen(port, () => {
    console.log(`aplikasi berjalan di http:://localhost:${port}`)
})