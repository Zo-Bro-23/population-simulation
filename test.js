const populationSimulation = require('./index')
// console.log('Single', populationSimulation.singleGeneration())
// console.log('Multi', populationSimulation.multiGeneration())
// console.log('Dynamic', populationSimulation.dynamicGeneration())
console.log('test1')
populationSimulation.nonEquilibrium(0.6, 20000, 2, 8)
    .then(results => {
        console.log(results)
    })
// console.log(populationSimulation.nonEquilibrium(0.6, 20000, 2, 8))
console.log('test')