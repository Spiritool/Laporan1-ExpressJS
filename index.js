const express = require('express')
const app = express()
const port = 3000

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