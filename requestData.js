/*
Requests will be:
<source_name> <source_value> <destination_name> <destination_value>
*/
function requestData() {
    const request0 = {
        source_name: 'one',
        source_value: -2,
        destination_name: 'three',
        destination_value: 1
    }

    const request1 = {
        source_name: 'three',
        source_value: 2,
        destination_name: 'four',
        destination_value: 1
    }

    const request2 = {
        source_name: 'four',
        source_value: -1,
        destination_name: 'two',
        destination_value: 1
    }

    const request3 = {
        source_name: 'two',
        source_value: 4,
        destination_name: 'one',
        destination_value: 1
    }

    const request4 = {
        source_name: 'two',
        source_value: 3,
        destination_name: 'three',
        destination_value: 1
    }

    // combine requests
    return [request0, request1, request2, request3, request4]
}

module.exports = { requestData }
