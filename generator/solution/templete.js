const getTestContent = (difficulty, solutionFnName) =>
  `import { ${solutionFnName} } from '../../src/${difficulty}'

test('${solutionFnName} test case', () => {
  expect(${solutionFnName}()).toEqual()
})
`

const getSolutionContent = (solutionFnName, solutionArgs) =>
  `const ${solutionFnName} = (${solutionArgs}) => {
}

export default ${solutionFnName}
`

const getReadmeContent = title =>
  `# ${title}
1. 
`

const getProblemMapContent = problemMap => {
  const rows = JSON.stringify(problemMap, null, 2).replace(/"/g, '\'')
  return [
    `const problemMap = ${rows}`,
    '',
    'module.exports = problemMap',
    ''
  ].join('\n')
}

const getNewProblemMapContent = (problemMap, newMap) => {
  const newProblemMap = {
    ...problemMap,
    ...newMap
  }
  return getProblemMapContent(newProblemMap)
}

const getPrevProblemMapContent = (problemMap = {}, problemIndex) => {
  let newProblemMap = { ...problemMap }
  delete newProblemMap[problemIndex]
  return getProblemMapContent(newProblemMap)
}

module.exports = {
  getSolutionContent,
  getReadmeContent,
  getTestContent,
  getNewProblemMapContent,
  getPrevProblemMapContent
}
