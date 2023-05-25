const populationSimulation = require('./index')

console.log(populationSimulation.nonEquilibrium({ generations: 1, verbose: log => console.log(log) }))