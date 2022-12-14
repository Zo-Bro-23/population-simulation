function multiGeneration(p = 0.6, starting = 2000, offspring = 2, generations = 3, limitPopulation = false, verbose = false) {
    const dynamicGeneration = require('./dynamicGeneration')
    return dynamicGeneration(p, starting, offspring, generations, [0, 0], limitPopulation, verbose)
}

module.exports = multiGeneration