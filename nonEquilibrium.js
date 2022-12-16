function nonEquilibrium(p = 0.6, offspring = 5, generations = 100, variation = [0.01, 3], constraints = {
    survivalRate: {
        pp: 1,
        pq: 1,
        qq: 1
    },
    reproductiveSuccess: {
        pp: 1,
        pq: 1,
        qq: 1
    }
}) {
    const { singleGeneration } = require('./singleGeneration')
    return singleGeneration(p, offspring, constraints)
}

module.exports = nonEquilibrium