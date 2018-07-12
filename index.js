const { nMatrix } = require('./nMatrix')
const { dMatrix } = require('./dMatrix')
const { floydWarshallMatrix } = require('./floydWarshallMatrix')
const { shortestPath } = require('./shortestPath')

const vertices = 4

// let distMatrix be a array of minimum distances initialized to infinity
const distMatrix = dMatrix(vertices)
// let nextMatrix be an array of vertex indices initialized to null
const nextMatrix = nMatrix(vertices)

// [ <source_exchange> <destination_exchange> <rate> ]
const data = [
    { source: 0, destination: 2, value: -2 },
    { source: 2, destination: 3, value: 2 },
    { source: 3, destination: 1, value: -1 },
    { source: 1, destination: 0, value: 4 },
    { source: 1, destination: 2, value: 3 }
]

// loop through data to and update matrix
for (i in data) {
    const source = data[i].source
    const destination = data[i].destination
    const value = data[i].value

    // updating matrix
    distMatrix[source][destination] = value
    nextMatrix[source][destination] = destination
}

const floydWarshall = floydWarshallMatrix(distMatrix, nextMatrix)

const test = `{"distMatrix":[[0,-1,-2,0],[4,0,2,4],[5,1,0,2],[3,-1,1,0]],"nextMatrix":[[null,2,2,2],[0,null,0,0],[3,3,null,3],[1,1,1,null]]}`
console.log(JSON.stringify(floydWarshall) === test)

const path = shortestPath(1, 0, floydWarshall.nextMatrix)
