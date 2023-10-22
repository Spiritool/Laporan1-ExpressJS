const express = require('express')
const bodyPrs = require("body-parser")
const app = express()
const port = 3000
const cors = require("cors")

app.use(cors())

const path = require("path")
app.use("/static", express.static(path.join(__dirname, 'public/images')))


// app.get('/', (req, res) => {
//     res.send('Halo decks')
// })

const bodyPs = require('body-parser');
app.use(bodyPs.urlencoded({ extended: false}));
app.use(bodyPs.json());

const mhsRouter = require('./routes/mahasiswa.js');
app.use('/api/mhs', mhsRouter);

const jrsRouter = require('./routes/jurusan.js');
app.use('/api/jrs', jrsRouter);

app.listen(port, () => {
    console.log(`aplikasi berjalan di http:://localhost:${port}`)
})