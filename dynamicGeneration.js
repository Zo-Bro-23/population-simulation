function dynamicGeneration(p = 0.6, offspring = 5, generations = 100, variation = [0.01, 3]) {
    const singleGeneration = require('./singleGeneration')
    let currentp = p
    let results
    let totalOffspring = 0

    for (j = 0; j < generations; j++) {
        let currentOffspring = offspring
        const upOrDown = Math.random()
        for (k = 0; k < variation[1]; k++) {
            const chances = Math.random()
            if (chances <= variation[0]) {
                if (upOrDown <= 0.5) {
                    currentOffspring += 1
                } else {
                    currentOffspring -= 1
                }
            } else {
                break
            }
        }
        results = singleGeneration(currentp, currentOffspring, constraints)
        totalOffspring += results.totalOffspring
        currentp = results.p
    }

    results.totalOffspring = totalOffspring
    return results
}

module.exports = dynamicGeneration