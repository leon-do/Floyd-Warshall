/*
generates a two dimentional array
nMatrix = next Matrix
u is the start vertex
v is the end vertex
[u][v] is number of jumps required to get to end vertex

[ [ null, null, null, null ],
  [ null, null, null, null ],
  [ null, null, null, null ],
  [ null, null, null, null ] ]
*/
function nMatrix(vertices) {
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

module.exports = { nMatrix }
