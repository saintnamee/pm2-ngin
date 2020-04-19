let express = require('express')
let app = express ()

app.get('/', (req, res) =>{
    console.log('Hello world')
    res.send('checkpoint: lab9 ID:58355121069')
})

app.get('/crash', (req, res) => {

    console.log('Crash!!!')
    res.send('crash')
    process.exit(1)
})

app.listen(process.env.PORT, () => console.log('SV is running at', process.env.Port))