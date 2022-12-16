const { singleExport } = require('./singleGeneration')
const { multiExport } = require('./multiGeneration')
const dynamicGeneration = require('./dynamicGeneration')
const nonEquilibrium = require('./nonEquilibrium')

module.exports = {
    singleGeneration: singleExport,
    multiGeneration: multiExport,
    dynamicGeneration,
    nonEquilibrium
}