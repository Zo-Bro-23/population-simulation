function singleGeneration(options) {
    const {
        p = 0.6,
        starting = 2000,
        offspring = 2
    } = options
    const multiGeneration = require('./multiGeneration')
    return multiGeneration({ p, starting, offspring, generations: 1, limitPopulation: false, verbose: false })
}

module.exports = singleGeneration