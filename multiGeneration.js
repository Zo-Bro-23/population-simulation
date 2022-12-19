function multiGeneration(p = 0.6, offspring = 5, starting = 20000, generations = 100, constraints) {
    const { singleGeneration } = require('./singleGeneration')
    let currentp = p
    let results = singleGeneration(currentp, starting, constraints)
    let previousOffspring = results.totalOffspring
    let currentOffspring = 0

    function runGeneration() {
        for (xi = 0; xi < previousOffspring; xi++) {
            console.log('off', xi)
            results = singleGeneration(currentp, offspring, constraints)
            currentp = results.p
            currentOffspring += results.totalOffspring
        }
        previousOffspring = currentOffspring
    }

    for (j = 0; j < generations - 1; j++) {
        console.log('gen', j)
        currentOffspring = 0
        runGeneration()
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