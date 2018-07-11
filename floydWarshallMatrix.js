// Floyd-Warshall logic: https://www.youtube.com/watch?v=4OQeCuLYj-4&vl=en
function floydWarshallMatrix(distMatrix, nextMatrix) {
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
    return { distMatrix, nextMatrix }
}

module.exports = { floydWarshallMatrix }
