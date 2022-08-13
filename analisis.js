const fetch = require('node-fetch')
const RESULTS_ENPOINT = 'http://localhost:3001/files'

start = async () =>{
    let fetchCurrentData = await fetch(RESULTS_ENPOINT)
    let jsonIs = await fetchCurrentData.json()
    console.log(jsonIs)
}

start()