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

      ![create-solution](https://user-images.githubusercontent.com/9082423/58258467-617a6d80-7da5-11e9-8ffc-14b2b3a60772.gif)
    </details>
    <details>
    <summary>Demo remove exist solution</summary>

      ![remove-solution](https://user-images.githubusercontent.com/9082423/58258468-617a6d80-7da5-11e9-8261-893f693d52c2.gif)
    </details>

## 📚**Contents**
| # | Problem | Difficulty | Solution | Readme | Test Case |
| :---: | :--- | :---: | :---: | :---: | :---: |
|001|[Two Sum](https://leetcode.com/problems/two-sum)|easy|[Link](./src/easy/001-two-sum/index.js)|[Link](./src/easy/001-two-sum/README.md)|[Link](./__tests__/easy/001-two-sum.test.js)|
|007|[Reverse Integer](https://leetcode.com/problems/reverse-integer)|easy|[Link](./src/easy/007-reverse-integer/index.js)|[Link](./src/easy/007-reverse-integer/README.md)|[Link](./__tests__/easy/007-reverse-integer.test.js)|
|009|[Palindrome Number](https://leetcode.com/problems/palindrome-number)|easy|[Link](./src/easy/009-palindrome-number/index.js)|[Link](./src/easy/009-palindrome-number/README.md)|[Link](./__tests__/easy/009-palindrome-number.test.js)|
|013|[Roman to Integer](https://leetcode.com/problems/roman-to-integer)|easy|[Link](./src/easy/013-roman-to-integer/index.js)|[Link](./src/easy/013-roman-to-integer/README.md)|[Link](./__tests__/easy/013-roman-to-integer.test.js)|
|014|[Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix)|easy|[Link](./src/easy/014-longest-common-prefix/index.js)|[Link](./src/easy/014-longest-common-prefix/README.md)|[Link](./__tests__/easy/014-longest-common-prefix.test.js)|
|020|[Valid Parentheses](https://leetcode.com/problems/valid-parentheses)|easy|[Link](./src/easy/020-valid-parentheses/index.js)|[Link](./src/easy/020-valid-parentheses/README.md)|[Link](./__tests__/easy/020-valid-parentheses.test.js)|
|021|[Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists)|easy|[Link](./src/easy/021-merge-two-sorted-lists/index.js)|[Link](./src/easy/021-merge-two-sorted-lists/README.md)|[Link](./__tests__/easy/021-merge-two-sorted-lists.test.js)|
|026|[Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array)|easy|[Link](./src/easy/026-remove-duplicates-from-sorted-array/index.js)|[Link](./src/easy/026-remove-duplicates-from-sorted-array/README.md)|[Link](./__tests__/easy/026-remove-duplicates-from-sorted-array.test.js)|
|027|[Remove Element](https://leetcode.com/problems/remove-element)|easy|[Link](./src/easy/027-remove-element/index.js)|[Link](./src/easy/027-remove-element/README.md)|[Link](./__tests__/easy/027-remove-element.test.js)|
|028|[Implement strStr()](https://leetcode.com/problems/implement-strstr)|easy|[Link](./src/easy/028-implement-strstr/index.js)|[Link](./src/easy/028-implement-strstr/README.md)|[Link](./__tests__/easy/028-implement-strstr.test.js)|
|035|[Search Insert Position](https://leetcode.com/problems/search-insert-position)|easy|[Link](./src/easy/035-search-insert-position/index.js)|[Link](./src/easy/035-search-insert-position/README.md)|[Link](./__tests__/easy/035-search-insert-position.test.js)|
|038|[Count and Say](https://leetcode.com/problems/count-and-say)|easy|[Link](./src/easy/038-count-and-say/index.js)|[Link](./src/easy/038-count-and-say/README.md)|[Link](./__tests__/easy/038-count-and-say.test.js)|
|053|[Maximum Subarray](https://leetcode.com/problems/maximum-subarray)|easy|[Link](./src/easy/053-maximum-subarray/index.js)|[Link](./src/easy/053-maximum-subarray/README.md)|[Link](./__tests__/easy/053-maximum-subarray.test.js)|
|058|[Length of Last Word](https://leetcode.com/problems/length-of-last-word)|easy|[Link](./src/easy/058-length-of-last-word/index.js)|[Link](./src/easy/058-length-of-last-word/README.md)|[Link](./__tests__/easy/058-length-of-last-word.test.js)|
|066|[Plus One](https://leetcode.com/problems/plus-one)|easy|[Link](./src/easy/066-plus-one/index.js)|[Link](./src/easy/066-plus-one/README.md)|[Link](./__tests__/easy/066-plus-one.test.js)|
|067|[Add Binary](https://leetcode.com/problems/add-binary)|easy|[Link](./src/easy/067-add-binary/index.js)|[Link](./src/easy/067-add-binary/README.md)|[Link](./__tests__/easy/067-add-binary.test.js)|
|069|[Sqrt(x)](https://leetcode.com/problems/sqrtx)|easy|[Link](./src/easy/069-sqrtx/index.js)|[Link](./src/easy/069-sqrtx/README.md)|[Link](./__tests__/easy/069-sqrtx.test.js)|
|070|[Climbing Stairs](https://leetcode.com/problems/climbing-stairs)|easy|[Link](./src/easy/070-climbing-stairs/index.js)|[Link](./src/easy/070-climbing-stairs/README.md)|[Link](./__tests__/easy/070-climbing-stairs.test.js)|
|083|[Remove Duplicates from Sorted List](https://leetcode.com/problems/remove-duplicates-from-sorted-list)|easy|[Link](./src/easy/083-remove-duplicates-from-sorted-list/index.js)|[Link](./src/easy/083-remove-duplicates-from-sorted-list/README.md)|[Link](./__tests__/easy/083-remove-duplicates-from-sorted-list.test.js)|
|088|[Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array)|easy|[Link](./src/easy/088-merge-sorted-array/index.js)|[Link](./src/easy/088-merge-sorted-array/README.md)|[Link](./__tests__/easy/088-merge-sorted-array.test.js)|
|100|[Same Tree](https://leetcode.com/problems/same-tree)|easy|[Link](./src/easy/100-same-tree/index.js)|[Link](./src/easy/100-same-tree/README.md)|[Link](./__tests__/easy/100-same-tree.test.js)|
