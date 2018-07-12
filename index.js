const { nMatrix } = require('./nMatrix')
const { dMatrix } = require('./dMatrix')
const { shortestPath } = require('./shortestPath')
const { requestData } = require('./requestData')

// request data
const requests = requestData()

// map source_name and destination_name to an index for machine readability
// map index to source_name and destination_name for human readability
const nameToIndex = {}
const indexToName = {}
let index = 0
for (let i in requests) {
    sourceName = requests[i].source_name
    destinationName = requests[i].destination_name
    // only map unique names
    if (nameToIndex[sourceName] === undefined) {
        nameToIndex[sourceName] = index
        indexToName[index] = sourceName
        index++
    }
    // only map unique names
    if (nameToIndex[destinationName] === undefined) {
        nameToIndex[destinationName] = index
        indexToName[index] = sourceName
        index++
    }
}

nameToIndex.one = 0
nameToIndex.two = 1
nameToIndex.three = 2
nameToIndex.four = 3
indexToName[0] = 'one'
indexToName[1] = 'two'
indexToName[2] = 'three'
indexToName[3] = 'four'

// loop through to construct all the paths
const paths = []
for (let i in requests) {
    const sourceName = requests[i].source_name
    const destinationName = requests[i].destination_name
    paths.push({
        source: nameToIndex[sourceName],
        destination: nameToIndex[destinationName],
        value: requests[i].source_value / requests[i].destination_value
    })
}

// let nextMatrix be an array of vertex indices initialized to null
const nextMatrix = nMatrix(index) // index is also total number of verticies 🤯

// let distMatrix be a array of minimum distances initialized to infinity
const distMatrix = dMatrix(index)

// loop through paths to update matrix
for (i in paths) {
    const source = paths[i].source
    const destination = paths[i].destination
    const value = paths[i].value

    // updating matrix
    distMatrix[source][destination] = value
    nextMatrix[source][destination] = destination
}

// Floyd-Warshall magic:
for (let k = 0; k < distMatrix.length; k++) {
    for (let i = 0; i < distMatrix.length; i++) {
        for (let j = 0; j < distMatrix.length; j++) {
            if (distMatrix[i][j] > distMatrix[i][k] + distMatrix[k][j]) {
                distMatrix[i][j] = distMatrix[i][k] + distMatrix[k][j]
                nextMatrix[i][j] = nextMatrix[i][k]
            }
        }
    }
}

console.log('\n distMatrix', distMatrix)
console.log('\n nextMatrix', nextMatrix)

const expecrtedDistMatrix = '[[0,-1,-2,0],[4,0,2,4],[5,1,0,2],[3,-1,1,0]]'
const expectedNextMatric = '[[null,2,2,2],[0,null,0,0],[3,3,null,3],[1,1,1,null]]'
console.log(JSON.stringify(distMatrix) === expecrtedDistMatrix)
console.log(JSON.stringify(nextMatrix) === expectedNextMatric)

// print the paths
for (let i = 0; i < index; i++) {
    for (let j = 0; j < index; j++) {
        const sourceName = indexToName[i]
        const destinationName = indexToName[j]
        const path = shortestPath(i, j, nextMatrix).map(val => indexToName[val])
        const distance = distMatrix[i][j]
        // prettier-ignore
        console.log(`the best path from ${sourceName} to ${destinationName} is ${JSON.stringify(path)} at a distance of ${distance}`)
    }
}
