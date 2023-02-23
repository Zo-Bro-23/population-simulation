function nonEquilibrium(options) {
    const {
        p = 0.6,
        starting = 20000,
        offspring = 2,
        generations = 3,
        variation = [0.01, 3],
        survivalRate = {
            pp: 1,
            pq: 1,
            qq: 0.9
        },
        limitPopulation = false,
        verbose = false
    } = options

    return processResults(singleGeneration(p, starting, 1, 0))

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

        results.population = population
        results.totalOffspring = totalOffspring

        if (xindex < generations) {
            if (verbose) {
                verbose(processResults(results))
            }
            return singleGeneration((results.pp * 2 + results.pq) / (totalOffspring * 2), offspring, limitPopulation ? starting : totalOffspring, xindex + 1)
        } else {
            return results
        }
    }
}

function processResults(results) {
    let qresults = { ...results }
    qresults.p = (qresults.pp * 2 + qresults.pq) / (qresults.totalOffspring * 2)
    qresults.q = (qresults.qq * 2 + qresults.pq) / (qresults.totalOffspring * 2)
    qresults.totalPP = qresults.pp
    qresults.totalPQ = qresults.pq
    qresults.totalQQ = qresults.qq
    qresults.pp = qresults.pp / qresults.totalOffspring
    qresults.pq = qresults.pq / qresults.totalOffspring
    qresults.qq = qresults.qq / qresults.totalOffspring

    return qresults
}

module.exports = nonEquilibrium