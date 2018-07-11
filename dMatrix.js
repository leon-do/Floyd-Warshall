/*
generates a two dimentional array
dMatrix = distance Matrix
u is the starting vertex
v is the ending vertex
[u][v] is the distance between u and v

[ [ 0, Infinity, Infinity, Infinity ],
  [ Infinity, 0, Infinity, Infinity ],
  [ Infinity, Infinity, 0, Infinity ],
  [ Infinity, Infinity, Infinity, 0 ] ]
*/
function dMatrix(vertices) {
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

module.exports = { dMatrix }
