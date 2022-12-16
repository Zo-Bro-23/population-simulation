function multiGeneration(p = 0.6, offspring = 5, generations = 100) {
    const singleGeneration = require('./singleGeneration')
    let currentp = p
    let results

    for (j = 0; j < generations; j++) {
        results = singleGeneration(currentp, offspring)
        currentp = results.p
    }

    return results
}

function multiExport(p, offspring, generations) {
    return multiGeneration(p, offspring, generations, {
        reproductiveSuccess: {
            pp: 1,
            pq: 1,
            qq: 1
        }
    })
}

module.exports = { multiGeneration, multiExport }