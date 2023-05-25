function multiGeneration(options) {
    const {
        p = 0.6,
        starting = 2000,
        offspring = 2,
        generations = 3,
        limitPopulation = false,
        verbose = false
    } = options
    const dynamicGeneration = require('./dynamicGeneration')
    return dynamicGeneration({ p, starting, offspring, generations, variation: [0, 0], limitPopulation, verbose })
}

module.exports = multiGeneration