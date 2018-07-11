// https://en.wikipedia.org/wiki/Floyd%E2%80%93Warshall_algorithm#Path_reconstruction
function shortestPath(u, v, nextMatrix) {
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

module.exports = { shortestPath }
