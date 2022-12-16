const populationSimulation = require('./index')
const results = populationSimulation.nonEquilibrium(0.6, 10000000, 10, [0.1, 1], {
    survivalRate: {
        pp: 1,
        pq: 1,
        qq: 1
    }
})

console.log('pp', results.pp)
console.log('pq', results.pq)
console.log('qq', results.qq)
console.log('p', results.p)
console.log('q', results.q)
console.log('totalOffspring', results.totalOffspring)