const fs = require('fs')
const {
  generateFile,
  capitalize
} = require('../util')
const color = require('../color')
const problemMap = require('../problemMap')
const badges = require('./badges')

const getSolutionsDir = (dir) => {
  return new Promise(resolve => {
    fs.readdir(`src/${dir}`, (err, files = []) => {
      if (err) throw err
      const solutions = files
        .filter(file => file !== 'index.js')
        .map(file => `${dir}-${file}`)
      resolve(solutions)
    })
  })
}

const titleContent = [
  '# LeetCode [![Written by javaScript][javascript-image]][javascript-url]\n',
  '[javascript-image]: https://img.shields.io/badge/Language-JavaScript-yellow.svg',
  '[javascript-url]: https://zh.wikipedia.org/wiki/JavaScript\n'
].join('\n')
const badgesContent = badges
  .reduce((contents, badge) => {
    const {
      desc,
      badgeKey,
      badgeUrl,
      refKey,
      refUrl
    } = badge
    contents[0].push(`[![${desc}][${badgeKey}]][${refKey}]`)
    contents[1].push(
      `[${badgeKey}]: ${badgeUrl}`,
      `[${refKey}]: ${refUrl}`
    )
    return contents
  }, [[], []])
  .map(content => content.join('\n'))
  .join('\n\n')
const descriptionContent = 'LeetCode solution in JavaScript. ✍️'
const projectSetupContent = `
## 🚀**Quick Start**
1. **Clone project**
    \`\`\`sh
    $ git clone https://github.com/sky172839465/leetcode-in-js.git
    \`\`\`
2. **Install dependency**
    \`\`\`sh
    $ npm install
    \`\`\`
3. **Run single solution**
    \`\`\`sh
    $ npm run test __tests__/easy/001-two-sum.test.js
    \`\`\`
    **Run all solutions**
    \`\`\`sh
    $ npm run test
    \`\`\`
4.  **Solution create / remove**
    \`\`\`sh
    $ npm run solution
    \`\`\`
    <details>
      <summary>Demo create new solution</summary>

      ![create-solution](https://user-images.githubusercontent.com/9082423/57969769-96a14d00-79ac-11e9-982c-9e59fc2a6e3f.gif)
    </details>
    <details>
    <summary>Demo remove exist solution</summary>

      ![remove-solution](https://user-images.githubusercontent.com/9082423/57969768-96a14d00-79ac-11e9-91b3-84fd8dd7dd6d.gif)
    </details>
`
const getTableOfContents = (solutions = []) => {
  const title = '## 📚**Contents**'
  const header = [
    '| # | Problem | Difficulty | Solution | Readme | Test Case |',
    '| :---: | :--- | :---: | :---: | :---: | :---: |'
  ].join('\n')
  const rows = solutions
    .map(solution => {
      const [difficulty, index, ...names] = solution.split('-')
      const problemName = problemMap[index] || names.map(name => capitalize(name)).join(' ')
      const kebabName = names.join('-')
      const kebabNameWithIndexPrefix = `${index}-${kebabName}`
      return [
        '',
        index,
        `[${problemName}](https://leetcode.com/problems/${kebabName})`,
        difficulty,
        `[Link](./src/easy/${kebabNameWithIndexPrefix}/index.js)`,
        `[Link](./src/easy/${kebabNameWithIndexPrefix}/README.md)`,
        `[Link](./__tests__/easy/${kebabNameWithIndexPrefix}.test.js)`,
        ''
      ].join('|')
    })
    .join('\n')
  return [
    title,
    header,
    rows
  ].join('\n')
}

const difficultyPaths = ['easy', 'medium', 'hard']
Promise.all(difficultyPaths.map(path => getSolutionsDir(path)))
  .then(respList => {
    const allSolutions = respList
      .reduce((total, solutions) => [...total, ...solutions], [])
      .sort((a, b) => +a.match(/(\d)+/)[0] - +b.match(/(\d)+/)[0])
    const tableOfContents = getTableOfContents(allSolutions)
    const content = [
      titleContent,
      badgesContent,
      descriptionContent,
      projectSetupContent,
      tableOfContents,
      ''
    ].join('\n')
    generateFile('README.md', content)
    console.log(color.FgYellow, '[FILE] README.md has been updated.')
  })
