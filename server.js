
const express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())

const port = 8081

app.get('/api/data', (req, res) => {
    result = {
        'data':[
            {
                'id': 1,
                'name': 'john',
                'dept': 'admin'
            },
            {
                'id': 2,
                'name': 'sam',
                'dept': 'manager'
            },
            {
                'id': 3,
                'name': 'mike',
                'dept': 'dba'
            }
        ]
    }
    res.json(result)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})