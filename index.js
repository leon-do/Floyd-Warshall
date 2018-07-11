const { nMatrix } = require('./nMatrix')
const { dMatrix } = require('./dMatrix')
const { floydWarshallMatrix } = require('./floydWarshallMatrix')
const { shortestPath } = require('./shortestPath')

const vertices = 4

// let distMatrix be a array of minimum distances initialized to infinity
const distMatrix = dMatrix(vertices)
// let nextMatrix be an array of vertex indices initialized to null
const nextMatrix = nMatrix(vertices)

// fill in data
distMatrix[0][2] = -2
nextMatrix[0][2] = 2

distMatrix[2][3] = 2
nextMatrix[2][3] = 3

distMatrix[3][1] = -1
nextMatrix[3][1] = 1

distMatrix[1][0] = 4
nextMatrix[1][0] = 0

distMatrix[1][2] = 3
nextMatrix[1][2] = 2

const floydWarshall = floydWarshallMatrix(distMatrix, nextMatrix)
console.log(floydWarshall)

const path = shortestPath(1, 0, floydWarshall.nextMatrix)
console.log(`the best path from 0 to 2 is ${path}`)
