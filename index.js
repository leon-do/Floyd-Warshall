/*
[ [ 0, Infinity, Infinity, Infinity ],
  [ Infinity, 0, Infinity, Infinity ],
  [ Infinity, Infinity, 0, Infinity ],
  [ Infinity, Infinity, Infinity, 0 ] ]
*/
function minDistanceMatrix(vertices) {
    // create a 2 dimensional matrix
    const matrix = []
    for (let u = 0; u < vertices; u++) {
        matrix[u] = []
        for (let v = 0; v < vertices; v++) {
            // if tis the same vertex
            if (u === v) {
                // zero movement
                matrix[u][v] = 0
            } else {
                // will get replaced
                matrix[u][v] = Infinity
            }
        }
    }
    return matrix
}

/*
[ [ null, null, null, null ],
  [ null, null, null, null ],
  [ null, null, null, null ],
  [ null, null, null, null ] ]
*/
function vertexMatrix(vertices) {
    // create a 2 dimensional matrix
    const matrix = []
    for (let u = 0; u < vertices; u++) {
        matrix[u] = []
        for (let v = 0; v < vertices; v++) {
            // all is null
            matrix[u][v] = null
        }
    }
    return matrix
}

// let distMatrix be a array of minimum distances initialized to infinity
const distMatrix = new minDistanceMatrix(4)
// let nextMatrix be an array of vertex indices initialized to null
const nextMatrix = new vertexMatrix(4)

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
console.log(distMatrix)
/*
possible paths
[ [ null, 2, 2, 2 ],
  [ 0, null, 0, 0 ],
  [ 3, 3, null, 3 ],
  [ 1, 1, 1, null ] ]
*/
console.log(nextMatrix)

const path = getPath(1, 3)
console.log(`the best path from 1 to 3 is ${path}`)

// https://en.wikipedia.org/wiki/Floyd%E2%80%93Warshall_algorithm#Path_reconstruction
function getPath(u, v) {
    if (nextMatrix[u][v] === null) {
        return []
    }
    const path = [u]
    while (u !== v) {
        u = nextMatrix[u][v]
        path.push(u)
    }
    return path
}
