# Population-Simulation
NPM package that runs population (genetics) simulations based on Hardy-Weinberg principles.

- [Installation](#installation)
    - [For Devs](#for-devs)
    - [For Beginners](#for-beginners)
- [Sample Code](#sample-code)
    - [Code](#code)
    - [Expected Results](#expected-results)
- [Documentation](#documentation)

## Installation
### For Devs
- Run `npm i population-simulation` within a NodeJS project to install

### For Beginners
- Install [NodeJS](https://nodejs.org/en/download/) (and make sure *Add to Path* is selected)
- Create a folder called `population-simulation` in your home directory (`C:\Users\USERNAME` in Windows and `/home/USERNAME` in Linux/Mac)
- Inside the folder, create a file called `index.js`
- Edit the file with code from [below](#sample-code), making changes as necessary
- Open Command Prompt (Windows) or Terminal (Linux/Mac)
- Run `cd population-simulation`
- Run `npm init`, and press `enter` repeatedly
- Run `npm i population-simulation`
- Run `node index.js`
- The console should print out the simulation results

## Sample Code
### Code:
```js
const populationSimulation = require('population-simulation')
console.log(populationSimulation.nonEquilibrium())
```
### Expected results:
```js
{
  pp: 0.4030500800910788,
  pq: 0.4721005043752234,
  qq: 0.12484941553369783,
  population: [
    "pp", "pp", "pp", "pp", "pp", "pq", "pq", "pq", "pp", "pq",
    "pq", "qq", "pq", "qq", "qq", "pp", "pp", "pp", "pq", "qq",
    "pp", "pp", "qq", "qq", "pp", "pp", "pq", "pp", "pq", "pp",
    "pp", "pp", "pq", "pq", "pp", "pp", "pq", "pp", "pq", "pp",
    "pp", "pq", "pp", "pp", "qq", "pq", "pp", "pq", "pp", "pq",
    "pp", "pq", "pq", "pp", "qq", "pp", "pq", "pp", "pq", "pp",
    "pp", "pq", "pp", "pq", "pp", "pq", "pq", "pq", "pq", "pp",
    "pq", "pp", "pq", "pq", "pq", "qq", "pp", "pp", "pq", "pq",
    "pq", "pq", "pq", "pp", "pq", "qq", "pq", "pq", "pp", "pp",
    "pp", "pq", "qq", "pp", "pq", "qq", "pp", "pq", "pp", "pp",
    ... 150978 more items
  ],
  totalOffspring: 151078,
  p: 0.6391003322786905,
  q: 0.36089966772130955,
  totalPP: 60892,
  totalPQ: 71324,
  totalQQ: 18862
}
```
## Documentation
```js
// Simulates a population that is not in Hardy-Weinberg Equilibrium
nonEquilibrium(p = 0.6, starting = 20000, offspring = 2, generations = 3, variation = [0.01, 3], survivalRate = {
    pp: 1,
    pq: 1,
    qq: 0.9
}, limitPopulation = false, verbose = false)

/* Parameters */
p = "The initial frequency of the dominant allele (0-1)"
starting = "The number of individuals in the starting population"
offspring = "The number of offspring that each individual has (in order to account for males who technically have zero offspring, use half the fertility rate for accurate results)"
generations = "The number of generations to run the simulation for"
variation = [a, b] = ["Percentage of deviation allowed from the offspring value (0-1)", "±offspring deviation allowed from the set value"]
survivalRate = {
    pp: "Percentage of pp individuals that reach reproductive maturity (0-1) - Can also be used to simulate nonrandom mating",
    pq: "Same for pq (0-1)",
    qq: "Same for qq (0-1)"
}
limitPopulation = "Will limit the population after each generation so that the simulation doesn't run for months on end"
verbose = "Prints the results after each generation (except the last) - Use for debugging and for advanced analysis"
/* */
```
There is currently no error handling in place. You can skip all inputs (they are optional), but if you choose to give an input and it's not in the format specified above, I can't predict what the program will do.