const badges = require('./badges')

const getTitleContent = () => {
  return [
    [
      '# LeetCode ',
      '[![Written by javaScript][javascript-image]][javascript-url]',
      '[![LeetCode coverage][leetcode-image]][leetcode-url]'
    ].join(' '),
    '[javascript-image]: https://img.shields.io/badge/Language-JavaScript-yellow.svg',
    '[javascript-url]: https://zh.wikipedia.org/wiki/JavaScript',
    '[leetcode-image]: https://leetcode-badge.chyroc.cn/?name=sky172839465&leetcode_badge_style=Solved/Total-{{.solved_question}}/{{.all_question}}-green.svg',
    '[leetcode-url]: https://leetcode.com/sky172839465\n'
  ].join('\n')
}

const getBadgesContent = () => {
  return badges
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
}
const getDescriptionContent = () => 'LeetCode solution in JavaScript. ✍️'

const getProjectSetupContent = () => `
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
    $ npm run test __tests__/easy/0001-two-sum.test.js
    \`\`\`
    **Run all solutions**
    \`\`\`sh
    $ npm run test
    \`\`\`
4.  **Create / Remove solution**
    \`\`\`sh
    $ npm run solution
    \`\`\`
    <details>
      <summary>Demo create new solution</summary>

      ![create-solution](https://user-images.githubusercontent.com/9082423/58757240-7391a400-853b-11e9-9716-f2d13b286fbf.gif)
    </details>
    <details>
    <summary>Demo remove exist solution</summary>

      ![remove-solution](https://user-images.githubusercontent.com/9082423/58757241-742a3a80-853b-11e9-873e-e1bc0feb6a8c.gif)
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
      const { difficulty, problemIndex, problemName, kebabName } = solution
      const kebabNameWithoutIndex = kebabName.replace(`${problemIndex}-`, '')
      return [
        '',
        problemIndex,
        `[${problemName}](https://leetcode.com/problems/${kebabNameWithoutIndex})`,
        difficulty,
        `[Solution](./src/easy/${kebabName}/index.js)`,
        `[Readme](./src/easy/${kebabName}/README.md)`,
        `[Test Case](./__tests__/easy/${kebabName}.test.js)`,
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

module.exports = {
  getTitleContent,
  getBadgesContent,
  getDescriptionContent,
  getProjectSetupContent,
  getTableOfContents
}
