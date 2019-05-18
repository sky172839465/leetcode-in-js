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

      ![create](https://user-images.githubusercontent.com/9082423/57968538-87b39e00-799e-11e9-84fd-1a0efafe347c.gif)
    </details>
    <details>
    <summary>Demo remove exist solution</summary>

      ![remove](https://user-images.githubusercontent.com/9082423/57968539-87b39e00-799e-11e9-9ef6-d31414fad8bd.gif)
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
      return [
        '',
        index,
        `[${problemName}](https://leetcode.com/problems/${kebabName})`,
        difficulty,
        `[Link](./src/easy/${index}-${kebabName}/index.js)`,
        `[Link](./src/easy/${index}-${kebabName}/README.md)`,
        `[Link](./__tests__/easy/${kebabName}.test.js)`,
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
    const allSolutions = respList.reduce((total, solutions) => [...total, ...solutions], [])
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
