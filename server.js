const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 8000

app.use(cors())

const woodSpecies = {
    'property1': {
        'dataset1' : 12345,
        'dataset2' : 'asdf',
        'dataset3' : 'asdf'
    },
    'property2' : {
        'dataset1' : 12345,
        'dataset2' : 'asdf',
        'dataset3' : 'asdf'
    },
    'unknown' : {
        'dataset1' : 12345,
        'dataset2' : '?',
        'dataset3' : 'asdf'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const treeName = request.params.name.toLowerCase()
    // console.log(woodSpecies[treename].dataset1)
    if( woodSpecies[treeName] ){
        response.json(woodSpecies[treeName])
    }else{
        response.json(woodSpecies['unknown'])
    }
})

app.listen(PORT, ()=>{
    console.log(`The server is now running on port ${PORT}!`)
})