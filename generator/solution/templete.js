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
  const rows = JSON.stringify(problemMap, null, 2)
    .replace(/'/g, '\\\'')
    .replace(/"/g, '\'')
  return [
    `const problemMap = ${rows}`,
    '',
    'module.exports = problemMap',
    ''
  ].join('\n')
}

const getNewProblemMap = (problemMap, newMap) => {
  const newProblemMap = {
    ...problemMap,
    ...newMap
  }
  return newProblemMap
}

const getPrevProblemMap = (problemMap = {}, problemIndex) => {
  let newProblemMap = { ...problemMap }
  delete newProblemMap[problemIndex]
  return newProblemMap
}

const getExporterContent = (exporter = {}, targetDifficulty) => {
  const [importStatements, exportStatements] = Object.keys(exporter).reduce((collect, key) => {
    const {
      difficulty,
      solutionFnName,
      kebabName
    } = exporter[key]
    if (difficulty === targetDifficulty) {
      collect[0].push(`import ${solutionFnName} from './${kebabName}'`)
      collect[1].push(`  ${solutionFnName}`)
    }
    return collect
  }, [[], []])
  if (importStatements.length > 0) {
    return [
      importStatements.join('\n'),
      '\nexport {',
      exportStatements.join(',\n'),
      '}',
      ''
    ].join('\n')
  } else {
    return `export {}\n`
  }
}

module.exports = {
  getSolutionContent,
  getReadmeContent,
  getTestContent,
  getNewProblemMap,
  getPrevProblemMap,
  getProblemMapContent,
  getExporterContent
}
