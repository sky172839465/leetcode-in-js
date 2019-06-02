# LeetCode  [![Written by javaScript][javascript-image]][javascript-url] [![LeetCode coverage][leetcode-image]][leetcode-url]
[javascript-image]: https://img.shields.io/badge/Language-JavaScript-yellow.svg
[javascript-url]: https://zh.wikipedia.org/wiki/JavaScript
[leetcode-image]: https://leetcode-badge.chyroc.cn/?name=sky172839465&leetcode_badge_style=Solved/Total-{{.solved_question}}/{{.all_question}}-green.svg
[leetcode-url]: https://leetcode.com/sky172839465

[![Build Status][travis-image]][travis-url]
[![Coverage Status][codecov-image]][codecov-url]
[![Tested With Jest][jest-image]][jest-url]
[![JavaScript Style Guide][standard-image]][standard-url]
[![Conventional Commits][conventional-commits-image]][conventional-commits-url]

[travis-image]: https://img.shields.io/travis/sky172839465/leetcode-in-js.svg?branch=master
[travis-url]: https://travis-ci.org/sky172839465/leetcode-in-js
[codecov-image]: https://img.shields.io/codecov/c/github/sky172839465/leetcode-in-js.svg
[codecov-url]: https://codecov.io/gh/sky172839465/leetcode-in-js
[jest-image]: https://img.shields.io/badge/tested_with-jest-99424f.svg
[jest-url]: https://github.com/facebook/jest
[standard-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[standard-url]: https://standardjs.com
[conventional-commits-image]: https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg
[conventional-commits-url]: https://conventionalcommits.org
LeetCode solution in JavaScript. ✍️

## 🚀**Quick Start**
1. **Clone project**
    ```sh
    $ git clone https://github.com/sky172839465/leetcode-in-js.git
    ```
2. **Install dependency**
    ```sh
    $ npm install
    ```
3. **Run single solution**
    ```sh
    $ npm run test __tests__/easy/001-two-sum.test.js
    ```
    **Run all solutions**
    ```sh
    $ npm run test
    ```
4.  **Create / Remove solution**
    ```sh
    $ npm run solution
    ```
    <details>
      <summary>Demo create new solution</summary>

      ![create-solution](https://user-images.githubusercontent.com/9082423/58757240-7391a400-853b-11e9-9716-f2d13b286fbf.gif)
    </details>
    <details>
    <summary>Demo remove exist solution</summary>

      ![remove-solution](https://user-images.githubusercontent.com/9082423/58757241-742a3a80-853b-11e9-873e-e1bc0feb6a8c.gif)
    </details>

## 📚**Contents**
| # | Problem | Difficulty | Solution | Readme | Test Case |
| :---: | :--- | :---: | :---: | :---: | :---: |
|0001|[Two Sum](https://leetcode.com/problems/two-sum)|easy|[Solution](./src/easy/0001-two-sum/index.js)|[Readme](./src/easy/0001-two-sum/README.md)|[Test Case](./__tests__/easy/0001-two-sum.test.js)|
|0007|[Reverse Integer](https://leetcode.com/problems/reverse-integer)|easy|[Solution](./src/easy/0007-reverse-integer/index.js)|[Readme](./src/easy/0007-reverse-integer/README.md)|[Test Case](./__tests__/easy/0007-reverse-integer.test.js)|
|0009|[Palindrome Number](https://leetcode.com/problems/palindrome-number)|easy|[Solution](./src/easy/0009-palindrome-number/index.js)|[Readme](./src/easy/0009-palindrome-number/README.md)|[Test Case](./__tests__/easy/0009-palindrome-number.test.js)|
|0013|[Roman To Integer](https://leetcode.com/problems/roman-to-integer)|easy|[Solution](./src/easy/0013-roman-to-integer/index.js)|[Readme](./src/easy/0013-roman-to-integer/README.md)|[Test Case](./__tests__/easy/0013-roman-to-integer.test.js)|
|0014|[Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix)|easy|[Solution](./src/easy/0014-longest-common-prefix/index.js)|[Readme](./src/easy/0014-longest-common-prefix/README.md)|[Test Case](./__tests__/easy/0014-longest-common-prefix.test.js)|
|0020|[Valid Parentheses](https://leetcode.com/problems/valid-parentheses)|easy|[Solution](./src/easy/0020-valid-parentheses/index.js)|[Readme](./src/easy/0020-valid-parentheses/README.md)|[Test Case](./__tests__/easy/0020-valid-parentheses.test.js)|
|0021|[Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists)|easy|[Solution](./src/easy/0021-merge-two-sorted-lists/index.js)|[Readme](./src/easy/0021-merge-two-sorted-lists/README.md)|[Test Case](./__tests__/easy/0021-merge-two-sorted-lists.test.js)|
|0026|[Remove Duplicates From Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array)|easy|[Solution](./src/easy/0026-remove-duplicates-from-sorted-array/index.js)|[Readme](./src/easy/0026-remove-duplicates-from-sorted-array/README.md)|[Test Case](./__tests__/easy/0026-remove-duplicates-from-sorted-array.test.js)|
|0027|[Remove Element](https://leetcode.com/problems/remove-element)|easy|[Solution](./src/easy/0027-remove-element/index.js)|[Readme](./src/easy/0027-remove-element/README.md)|[Test Case](./__tests__/easy/0027-remove-element.test.js)|
|0028|[Implement Strstr](https://leetcode.com/problems/implement-strstr)|easy|[Solution](./src/easy/0028-implement-strstr/index.js)|[Readme](./src/easy/0028-implement-strstr/README.md)|[Test Case](./__tests__/easy/0028-implement-strstr.test.js)|
|0035|[Search Insert Position](https://leetcode.com/problems/search-insert-position)|easy|[Solution](./src/easy/0035-search-insert-position/index.js)|[Readme](./src/easy/0035-search-insert-position/README.md)|[Test Case](./__tests__/easy/0035-search-insert-position.test.js)|
|0038|[Count And Say](https://leetcode.com/problems/count-and-say)|easy|[Solution](./src/easy/0038-count-and-say/index.js)|[Readme](./src/easy/0038-count-and-say/README.md)|[Test Case](./__tests__/easy/0038-count-and-say.test.js)|
|0053|[Maximum Subarray](https://leetcode.com/problems/maximum-subarray)|easy|[Solution](./src/easy/0053-maximum-subarray/index.js)|[Readme](./src/easy/0053-maximum-subarray/README.md)|[Test Case](./__tests__/easy/0053-maximum-subarray.test.js)|
|0058|[Length Of Last Word](https://leetcode.com/problems/length-of-last-word)|easy|[Solution](./src/easy/0058-length-of-last-word/index.js)|[Readme](./src/easy/0058-length-of-last-word/README.md)|[Test Case](./__tests__/easy/0058-length-of-last-word.test.js)|
|0066|[Plus One](https://leetcode.com/problems/plus-one)|easy|[Solution](./src/easy/0066-plus-one/index.js)|[Readme](./src/easy/0066-plus-one/README.md)|[Test Case](./__tests__/easy/0066-plus-one.test.js)|
|0067|[Add Binary](https://leetcode.com/problems/add-binary)|easy|[Solution](./src/easy/0067-add-binary/index.js)|[Readme](./src/easy/0067-add-binary/README.md)|[Test Case](./__tests__/easy/0067-add-binary.test.js)|
|0069|[Sqrtx](https://leetcode.com/problems/sqrtx)|easy|[Solution](./src/easy/0069-sqrtx/index.js)|[Readme](./src/easy/0069-sqrtx/README.md)|[Test Case](./__tests__/easy/0069-sqrtx.test.js)|
|0070|[Climbing Stairs](https://leetcode.com/problems/climbing-stairs)|easy|[Solution](./src/easy/0070-climbing-stairs/index.js)|[Readme](./src/easy/0070-climbing-stairs/README.md)|[Test Case](./__tests__/easy/0070-climbing-stairs.test.js)|
|0083|[Remove Duplicates From Sorted List](https://leetcode.com/problems/remove-duplicates-from-sorted-list)|easy|[Solution](./src/easy/0083-remove-duplicates-from-sorted-list/index.js)|[Readme](./src/easy/0083-remove-duplicates-from-sorted-list/README.md)|[Test Case](./__tests__/easy/0083-remove-duplicates-from-sorted-list.test.js)|
|0088|[Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array)|easy|[Solution](./src/easy/0088-merge-sorted-array/index.js)|[Readme](./src/easy/0088-merge-sorted-array/README.md)|[Test Case](./__tests__/easy/0088-merge-sorted-array.test.js)|
|0100|[Same Tree](https://leetcode.com/problems/same-tree)|easy|[Solution](./src/easy/0100-same-tree/index.js)|[Readme](./src/easy/0100-same-tree/README.md)|[Test Case](./__tests__/easy/0100-same-tree.test.js)|
|0101|[Symmetric Tree](https://leetcode.com/problems/symmetric-tree)|easy|[Solution](./src/easy/0101-symmetric-tree/index.js)|[Readme](./src/easy/0101-symmetric-tree/README.md)|[Test Case](./__tests__/easy/0101-symmetric-tree.test.js)|
|0104|[Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree)|easy|[Solution](./src/easy/0104-maximum-depth-of-binary-tree/index.js)|[Readme](./src/easy/0104-maximum-depth-of-binary-tree/README.md)|[Test Case](./__tests__/easy/0104-maximum-depth-of-binary-tree.test.js)|
|0107|[Binary Tree Level Order Traversal II](https://leetcode.com/problems/binary-tree-level-order-traversal-ii)|easy|[Solution](./src/easy/0107-binary-tree-level-order-traversal-ii/index.js)|[Readme](./src/easy/0107-binary-tree-level-order-traversal-ii/README.md)|[Test Case](./__tests__/easy/0107-binary-tree-level-order-traversal-ii.test.js)|
|0108|[Convert Sorted Array to Binary Search Tree](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree)|easy|[Solution](./src/easy/0108-convert-sorted-array-to-binary-search-tree/index.js)|[Readme](./src/easy/0108-convert-sorted-array-to-binary-search-tree/README.md)|[Test Case](./__tests__/easy/0108-convert-sorted-array-to-binary-search-tree.test.js)|
|0111|[Minimum Depth of Binary Tree](https://leetcode.com/problems/minimum-depth-of-binary-tree)|easy|[Solution](./src/easy/0111-minimum-depth-of-binary-tree/index.js)|[Readme](./src/easy/0111-minimum-depth-of-binary-tree/README.md)|[Test Case](./__tests__/easy/0111-minimum-depth-of-binary-tree.test.js)|
