function singleGeneration(p = 0.6, offspring = 5, constraints) {
    const q = 1 - p
    let results = {
        pp: 0,
        pq: 0,
        qq: 0
    }

    let totalOffspring = 0

    for (i = 0; i < offspring; i++) {
        const a = Math.random()
        const b = Math.random()
        let aAllele = ''
        let bAllele = ''

        if (a <= p) {
            aAllele = 'p'
        } else {
            aAllele = 'q'
        }

        if (b <= p) {
            bAllele = 'p'
        } else {
            bAllele = 'q'
        }

        if (aAllele + bAllele == 'qp') {
            aAllele = 'p'
            bAllele = 'q'
        }

        if (Math.random() <= constraints.survivalRate[aAllele + bAllele]) {
            results[aAllele + bAllele] += 1
            totalOffspring ++
        }
    }

    results.p = (results.pp * 2 + results.pq) / (totalOffspring * 2)
    results.q = (results.qq * 2 + results.pq) / (totalOffspring * 2)
    results.pp = results.pp / totalOffspring
    results.pq = results.pq / totalOffspring
    results.qq = results.qq / totalOffspring
    results.totalPP = results.pp
    results.totalPQ = results.pq
    results.totalQQ = results.qq
    results.totalOffspring = totalOffspring

    return results
}

function singleExport(p, offspring) {
    return singleGeneration(p, offspring, {
        survivalRate: {
            pp: 1,
            pq: 1,
            qq: 1
        }
    })
}

module.exports = { singleGeneration, singleExport }