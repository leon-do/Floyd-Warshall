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

module.exports = { minDistanceMatrix }
