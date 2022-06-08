const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 8000

app.use(cors())

const woodSpecies = {
    'douglas fir': {
        'name' : 'Pseudotsuga menziesii',
        'location' : 'western North America',
        'Janka Hardness' : '620'
    },
    'red oak' : {
        'name' : 'Quercus rubra',
        'location' : 'United States and Canada',
        'Janka Hardness' : '1220'
    },
    'eucalyptus' : {
        'name' : 'Eucalyptus urograndis',
        'location' : 'Brazil',
        'Janka Hardness' : '1420'
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