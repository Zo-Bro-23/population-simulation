function nonEquilibrium(p = 0.6, starting = 20000, offspring = 2, generations = 3, variation = [0.0, 3], survivalRate = {
    pp: 1,
    pq: 1,
    qq: 1
}) {
    results = singleGeneration(p, starting, 1, 0)

    results.results.p = (results.results.pp * 2 + results.results.pq) / (results.totalOffspring * 2)
    results.results.q = (results.results.qq * 2 + results.results.pq) / (results.totalOffspring * 2)
    results.results.totalPP = results.results.pp
    results.results.totalPQ = results.results.pq
    results.results.totalQQ = results.results.qq
    results.results.pp = results.results.pp / results.totalOffspring
    results.results.pq = results.results.pq / results.totalOffspring
    results.results.qq = results.results.qq / results.totalOffspring
    results.totalOffspring = results.totalOffspring

    return results

    function singleGeneration(xp, xoffspring, xgenerations, xindex) {
        let results = {
            pp: 0,
            pq: 0,
            qq: 0
        }
        let population = []
        let totalOffspring = 0

        for (ko = 0; ko < xgenerations; ko++) {
            let currentOffspring = xoffspring
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
            for (i = 0; i < currentOffspring; i++) {
                const a = Math.random()
                const b = Math.random()
                let aAllele = ''
                let bAllele = ''

                if (a <= xp) {
                    aAllele = 'p'
                } else {
                    aAllele = 'q'
                }

                if (b <= xp) {
                    bAllele = 'p'
                } else {
                    bAllele = 'q'
                }

                if (aAllele + bAllele == 'qp') {
                    aAllele = 'p'
                    bAllele = 'q'
                }

                if (Math.random() <= survivalRate[aAllele + bAllele]) {
                    results[aAllele + bAllele] += 1
                    population.push(aAllele + bAllele)
                    totalOffspring++
                }
            }
        }
        if (xindex < generations) {
            return singleGeneration((results.pp * 2 + results.pq) / (totalOffspring * 2), offspring, totalOffspring, xindex + 1)
        } else {
            return { results, population, totalOffspring }
        }
    }
}

module.exports = nonEquilibrium