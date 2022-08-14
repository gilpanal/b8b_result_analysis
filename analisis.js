const fetch = require('node-fetch')
const RESULTS_ENPOINT = 'http://localhost:3001/files'

start = async () => {
    let fetchCurrentData = await fetch(RESULTS_ENPOINT)
    let jsonIs = await fetchCurrentData.json()
    const files = Object.keys(jsonIs)
    console.log(files)

    let averageExtractTime = 0
    let averagePredictTime = 0
    let averageAccuracy = 0
    let currentFamily = null
    let numInstFiles = 0
    for (const [i, fileIs] of files.entries()) {

        let instrument_name = jsonIs[fileIs].instrument
        instrument_name.slice(0, -1)

        if (!currentFamily) {
            currentFamily = instrument_name
            numInstFiles++
        } else {
            if (currentFamily !== instrument_name) {
                calculateAverages(currentFamily, averageExtractTime, averagePredictTime, averageAccuracy, numInstFiles)
                currentFamily = instrument_name
                numInstFiles = 0
                averageExtractTime = 0
                averagePredictTime = 0
                averageAccuracy = 0
            } else {
                numInstFiles++
            }
        }

        console.log(jsonIs[fileIs].file_name)
        const execs = jsonIs[fileIs].execs
        let sumExtractTime = 0
        let sumPredictTime = 0
        for (let pos in execs) {
            sumExtractTime += execs[pos].extract_time
            sumPredictTime += execs[pos].predict_time
        }

        sumExtractTime = sumExtractTime / execs.length
        sumPredictTime = sumPredictTime / execs.length
        console.log('sumExtractTime', sumExtractTime)
        console.log('sumPredictTime', sumPredictTime)
        console.log('execs', execs.length)

        averageExtractTime += sumExtractTime
        averagePredictTime += sumPredictTime
        // For Accuracy we don't need to check all
        // executions due all inferences (labels) 
        // are the same for each execution

        if (execs[0].labels) {
            // here? 

            //console.log(instrument_name)
            let acc = 0
            //console.log(execs[0].labels)
            if (execs[0].labels.length === 1) {
                // finds one class and sound is not mixed
                if (execs[0].labels[0].label === instrument_name) {
                    acc++
                }
            } else if (!jsonIs[fileIs].mixed && execs[0].labels.length > 1) {

                // only one instrument declared but more that one label is found
                for (let instrum in execs[0].labels) {
                    if (instrument_name === execs[0].labels[instrum].label) {

                        acc = 1 / execs[0].labels.length
                    }
                }

            } else if (jsonIs[fileIs].mixed && execs[0].labels.length > 1) {
                for (let inst in execs[0].labels) {
                    if (instrument_name === execs[0].labels[inst].label) {
                        acc++
                    }
                }
            }

            console.log('accuracy', acc)
            console.log('', '')
            averageAccuracy += acc
        }
        if (i === files.length - 1) {
            numInstFiles++
            calculateAverages(currentFamily, averageExtractTime, averagePredictTime, averageAccuracy, numInstFiles)
        }
    }
}

calculateAverages = (currentFamily, averageExtractTime, averagePredictTime, averageAccuracy, numInstFiles) => {

    averageExtractTime = averageExtractTime / numInstFiles
    averagePredictTime = averagePredictTime / numInstFiles
    averageAccuracy = averageAccuracy / numInstFiles

    console.log('', '')
    console.log('currentFamily', currentFamily)
    console.log('averageExtractTime', averageExtractTime)
    console.log('averagePredictTime', averagePredictTime)
    console.log('averageAccuracy', averageAccuracy)
    console.log('numInstFiles', numInstFiles)
    console.log('', '')
}

start()