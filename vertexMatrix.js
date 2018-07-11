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

module.exports = { vertexMatrix }
