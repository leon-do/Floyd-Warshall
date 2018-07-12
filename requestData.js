// fetches data and normalizes it
function requestData() {
    const request0 = {
        source_name: 0,
        source_value: -2,
        destination_name: 2,
        destination_value: 1
    }

    const request1 = {
        source_name: 2,
        source_value: 2,
        destination_name: 3,
        destination_value: 1
    }

    const request2 = {
        source_name: 3,
        source_value: -1,
        destination_name: 1,
        destination_value: 1
    }

    const request3 = {
        source_name: 1,
        source_value: 4,
        destination_name: 0,
        destination_value: 1
    }

    const request4 = {
        source_name: 1,
        source_value: 3,
        destination_name: 2,
        destination_value: 1
    }

    // combine requests
    return [request0, request1, request2, request3, request4]
}

module.exports = { requestData }
