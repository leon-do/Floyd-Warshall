const { nMatrix } = require('./nMatrix')
const { dMatrix } = require('./dMatrix')
const { shortestPath } = require('./shortestPath')
const { requestData } = require('./requestData')

const vertices = 4

// let distMatrix be a array of minimum distances initialized to infinity
const distMatrix = dMatrix(vertices)

// let nextMatrix be an array of vertex indices initialized to null
const nextMatrix = nMatrix(vertices)

// request data
const requests = requestData()

// map source_name to an index

// loop through to construct all the paths
const paths = []
for (let i in requests) {
    paths.push({
        source: requests[i].source_name,
        destination: requests[i].destination_name,
        value: requests[i].source_value / requests[i].destination_value
    })
}

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
const expecrtedDistMatrix = '[[0,-1,-2,0],[4,0,2,4],[5,1,0,2],[3,-1,1,0]]'
const expectedNextMatric = '[[null,2,2,2],[0,null,0,0],[3,3,null,3],[1,1,1,null]]'
console.log(JSON.stringify(distMatrix) === expecrtedDistMatrix)
console.log(JSON.stringify(nextMatrix) === expectedNextMatric)

const path = shortestPath(1, 0, nextMatrix)
