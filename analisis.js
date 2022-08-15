const fetch = require('node-fetch')
const RESULTS_ENPOINT = 'http://localhost:3001/files'

const voiceValidClasses = ['vocal', 'female', 'male', 'singing', 'vocals', 'woman', 'male vocal', 'man', 'choir', 'voice', 'male voice', 'female vocal', 'female voice', 'choral']

filterAllByValue = (array, string) => {

    return array.filter(o => { return o.label === string })
}

isThereAny = (array, string) => {

    return array.find(o => { return o.label === string })
}


start = async () => {
    let fetchCurrentData = await fetch(RESULTS_ENPOINT)
    let jsonIs = await fetchCurrentData.json()
    const files = Object.keys(jsonIs)
    console.log(files)
    console.log('', '')
    let AverageTotalExtractTime = 0
    let AverageTotalPredictTime = 0
    let AverageTotalAccuracy = 0
    let averageExtractTime = 0
    let averagePredictTime = 0
    let averageAccuracy = 0
    let currentFamily = null
    let numInstFiles = 0
    for (const [i, fileIs] of files.entries()) {

        let instrument_name = jsonIs[fileIs].instrument

        if (!currentFamily) {
            currentFamily = instrument_name
        } else {
            if (currentFamily !== instrument_name) {
                numInstFiles++
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
        AverageTotalExtractTime += sumExtractTime
        AverageTotalPredictTime += sumPredictTime
        // For Accuracy we don't need to check all
        // executions due all inferences (labels) 
        // are the same for each execution

        if (execs[0] && execs[0].labels) {

            let acc = 0

            if (instrument_name === 'voice') {

                for (let numlabel in execs[0].labels) {
                    const nameLabel = execs[0].labels[numlabel].label
                    if (nameLabel !== 'voice' && voiceValidClasses.includes(nameLabel)) {                        
                        execs[0].labels[numlabel].label = 'voice'
                    }
                }
            }

            if (execs[0].labels.length === 1) {
                // finds one class and sound is not mixed
                if (execs[0].labels[0].label === instrument_name) {
                    acc++
                }
            } else if (!jsonIs[fileIs].mixed && execs[0].labels.length > 1) {

                let num_voice_labels = null
                if (instrument_name === 'voice') {
                    num_voice_labels = filterAllByValue(execs[0].labels, 'voice')                    
                    num_voice_labels = num_voice_labels ? num_voice_labels.length : null                    
                }

                // only one instrument declared but more that one label is found
                const labelFound = isThereAny(execs[0].labels, instrument_name)
                if (labelFound) {
                    // Example - In case sound not mixed and labels found are: voice (male), voice(choir) and guitar => acc = 1 / (voice + guitar)
                    // If there are X number of voice related labels they all count as one
                    const divides = num_voice_labels ? (execs[0].labels.length - num_voice_labels + 1) : execs[0].labels.length
                    acc = 1 / divides
                }

            } else if (jsonIs[fileIs].mixed && execs[0].labels.length > 1) {
                const isLabelPresent = isThereAny(execs[0].labels, instrument_name)
                if (isLabelPresent) {
                    acc++
                }
            }

            console.log('accuracy', acc)
            console.log('', '')
            averageAccuracy += acc
            AverageTotalAccuracy += acc
        }
        if (i === files.length - 1) {
            numInstFiles++
            calculateAverages(currentFamily, averageExtractTime, averagePredictTime, averageAccuracy, numInstFiles)
        }
    }

    calculateAverages('TOTAL', AverageTotalExtractTime, AverageTotalPredictTime, AverageTotalAccuracy, files.length)

}

calculateAverages = (currentFamily, averageExtractTime, averagePredictTime, averageAccuracy, numInstFiles) => {

    averageExtractTime = averageExtractTime / numInstFiles
    averagePredictTime = averagePredictTime / numInstFiles
    averageAccuracy = averageAccuracy / numInstFiles

    console.log('', '')
    console.log('\x1b[33m Group: \x1b[0m', currentFamily)
    console.log('averageExtractTime', averageExtractTime)
    console.log('averagePredictTime', averagePredictTime)
    console.log('averageAccuracy', averageAccuracy)
    console.log('numInstFiles', numInstFiles)
    console.log('', '')
}

start()