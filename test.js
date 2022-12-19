const populationSimulation = require('./index')
const { multiGeneration } = require('./multiGeneration')
const results = multiGeneration(0.6, 2, 10, 5, {
    survivalRate: {
        pp: 1,
        pq: 1,
        qq: 0.5
    }
})

console.log('pp', results.pp)
console.log('pq', results.pq)
console.log('qq', results.qq)
console.log('p', results.p)
console.log('q', results.q)
console.log('totalOffspring', results.totalOffspring)