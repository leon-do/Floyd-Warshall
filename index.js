const { shortestPath } = require('./shortestPath')
const { vertexMatrix } = require('./vertexMatrix')
const { minDistanceMatrix } = require('./minDistanceMatrix')

// let distMatrix be a array of minimum distances initialized to infinity
const distMatrix = minDistanceMatrix(4)
// let nextMatrix be an array of vertex indices initialized to null
const nextMatrix = vertexMatrix(4)

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

// Floyd-Warshall logic: https://www.youtube.com/watch?v=4OQeCuLYj-4&vl=en
for (let k = 0; k < 4; k++) {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (distMatrix[i][j] > distMatrix[i][k] + distMatrix[k][j]) {
                distMatrix[i][j] = distMatrix[i][k] + distMatrix[k][j]
                nextMatrix[i][j] = nextMatrix[i][k]
            }
        }
    }
}

/*
shortest distances
[ [ 0, -1, -2, 0 ],
  [ 4, 0, 2, 4 ],
  [ 5, 1, 0, 2 ],
  [ 3, -1, 1, 0 ] ]
*/
console.log('\n distMatrix \n', distMatrix)
/*
possible paths
[ [ null, 2, 2, 2 ],
  [ 0, null, 0, 0 ],
  [ 3, 3, null, 3 ],
  [ 1, 1, 1, null ] ]
*/
console.log('\n nextMatrix \n', nextMatrix)

const path = shortestPath(1, 3, nextMatrix)
console.log(`the best path from 1 to 3 is ${path}`)
