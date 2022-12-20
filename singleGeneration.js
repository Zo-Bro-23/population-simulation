function singleGeneration(p = 0.6, starting = 2000, offspring = 2) {
    const multiGeneration = require('./multiGeneration')
    return multiGeneration(p, starting, offspring, 1, false, false)
}

module.exports = singleGeneration