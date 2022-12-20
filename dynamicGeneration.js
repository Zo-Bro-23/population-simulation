function dynamicGeneration(p = 0.6, starting = 2000, offspring = 2, generations = 3, variation = [0.01, 3], limitPopulation = false, verbose = false) {
    const nonEquilibrium = require('./nonEquilibrium')
    return nonEquilibrium(p, starting, offspring, generations, variation, {
        pp: 1,
        pq: 1,
        qq: 1
    }, limitPopulation, verbose)
}

module.exports = dynamicGeneration