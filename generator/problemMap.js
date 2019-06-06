const problemMap = {
  '0100': {
    'difficulty': 'easy',
    'problemIndex': '0100',
    'problemName': 'Same Tree',
    'solutionFnName': 'isSameTree',
    'solutionArgs': 'p, q',
    'kebabName': '0100-same-tree'
  },
  '0101': {
    'difficulty': 'easy',
    'problemIndex': '0101',
    'problemName': 'Symmetric Tree',
    'solutionFnName': 'isSymmetric',
    'solutionArgs': 'root',
    'kebabName': '0101-symmetric-tree'
  },
  '0001': {
    'difficulty': 'easy',
    'problemIndex': '0001',
    'problemName': 'Two Sum',
    'solutionFnName': 'twoSum',
    'solutionArgs': 'nums',
    'kebabName': '0001-two-sum'
  },
  '0007': {
    'difficulty': 'easy',
    'problemIndex': '0007',
    'problemName': 'Reverse Integer',
    'solutionFnName': 'reverse',
    'solutionArgs': 'x',
    'kebabName': '0007-reverse-integer'
  },
  '0009': {
    'difficulty': 'easy',
    'problemIndex': '0009',
    'problemName': 'Palindrome Number',
    'solutionFnName': 'isPalindrome',
    'solutionArgs': 'x',
    'kebabName': '0009-palindrome-number'
  },
  '0013': {
    'difficulty': 'easy',
    'problemIndex': '0013',
    'problemName': 'Roman to Integer',
    'solutionFnName': 'romanToInt',
    'solutionArgs': 's',
    'kebabName': '0013-roman-to-integer'
  },
  '0014': {
    'difficulty': 'easy',
    'problemIndex': '0014',
    'problemName': 'Longest Common Prefix',
    'solutionFnName': 'longestCommonPrefix',
    'solutionArgs': 'strs',
    'kebabName': '0014-longest-common-prefix'
  },
  '0020': {
    'difficulty': 'easy',
    'problemIndex': '0020',
    'problemName': 'Valid Parentheses',
    'solutionFnName': 'isValid',
    'solutionArgs': 's',
    'kebabName': '0020-valid-parentheses'
  },
  '0021': {
    'difficulty': 'easy',
    'problemIndex': '0021',
    'problemName': 'Merge Two Sorted Lists',
    'solutionFnName': 'mergeTwoLists',
    'solutionArgs': 'l1, l2',
    'kebabName': '0021-merge-two-sorted-lists'
  },
  '0026': {
    'difficulty': 'easy',
    'problemIndex': '0026',
    'problemName': 'Remove Duplicates from Sorted Array',
    'solutionFnName': 'removeDuplicates',
    'solutionArgs': 'nums',
    'kebabName': '0026-remove-duplicates-from-sorted-array'
  },
  '0027': {
    'difficulty': 'easy',
    'problemIndex': '0027',
    'problemName': 'Remove Element',
    'solutionFnName': 'removeElement',
    'solutionArgs': 'nums, val',
    'kebabName': '0027-remove-element'
  },
  '0028': {
    'difficulty': 'easy',
    'problemIndex': '0028',
    'problemName': 'Implement strStr()',
    'solutionFnName': 'strStr',
    'solutionArgs': 'haystack, needle',
    'kebabName': '0028-implement-strstr'
  },
  '0035': {
    'difficulty': 'easy',
    'problemIndex': '0035',
    'problemName': 'Search Insert Position',
    'solutionFnName': 'searchInsert',
    'solutionArgs': 'nums, target',
    'kebabName': '0035-search-insert-position'
  },
  '0038': {
    'difficulty': 'easy',
    'problemIndex': '0038',
    'problemName': 'Count and Say',
    'solutionFnName': 'countAndSay',
    'solutionArgs': 'n',
    'kebabName': '0038-count-and-say'
  },
  '0053': {
    'difficulty': 'easy',
    'problemIndex': '0053',
    'problemName': 'Maximum Subarray',
    'solutionFnName': 'maxSubArray',
    'solutionArgs': 'nums',
    'kebabName': '0053-maximum-subarray'
  },
  '0058': {
    'difficulty': 'easy',
    'problemIndex': '0058',
    'problemName': 'Length of Last Word',
    'solutionFnName': 'lengthOfLastWord',
    'solutionArgs': 's',
    'kebabName': '0058-length-of-last-word'
  },
  '0066': {
    'difficulty': 'easy',
    'problemIndex': '0066',
    'problemName': 'Plus One',
    'solutionFnName': 'plusOne',
    'solutionArgs': 'digits',
    'kebabName': '0066-plus-one'
  },
  '0067': {
    'difficulty': 'easy',
    'problemIndex': '0067',
    'problemName': 'Add Binary',
    'solutionFnName': 'addBinary',
    'solutionArgs': 'a, b',
    'kebabName': '0067-add-binary'
  },
  '0069': {
    'difficulty': 'easy',
    'problemIndex': '0069',
    'problemName': 'Sqrt(x)',
    'solutionFnName': 'mySqrt',
    'solutionArgs': 'x',
    'kebabName': '0069-sqrtx'
  },
  '0070': {
    'difficulty': 'easy',
    'problemIndex': '0070',
    'problemName': 'Climbing Stairs',
    'solutionFnName': 'climbStairs',
    'solutionArgs': 'n',
    'kebabName': '0070-climbing-stairs'
  },
  '0083': {
    'difficulty': 'easy',
    'problemIndex': '0083',
    'problemName': 'Remove Duplicates from Sorted List',
    'solutionFnName': 'deleteDuplicates',
    'solutionArgs': 'head',
    'kebabName': '0083-remove-duplicates-from-sorted-list'
  },
  '0088': {
    'difficulty': 'easy',
    'problemIndex': '0088',
    'problemName': 'Merge Sorted Array',
    'solutionFnName': 'merge',
    'solutionArgs': 'nums1, m, nums2, n',
    'kebabName': '0088-merge-sorted-array'
  },
  '0104': {
    'difficulty': 'easy',
    'problemIndex': '0104',
    'problemName': 'Maximum Depth of Binary Tree',
    'solutionFnName': 'maxDepth',
    'solutionArgs': 'root',
    'kebabName': '0104-maximum-depth-of-binary-tree'
  },
  '0107': {
    'difficulty': 'easy',
    'problemIndex': '0107',
    'problemName': 'Binary Tree Level Order Traversal II',
    'solutionFnName': 'levelOrderBottom',
    'solutionArgs': 'root',
    'kebabName': '0107-binary-tree-level-order-traversal-ii'
  },
  '0108': {
    'difficulty': 'easy',
    'problemIndex': '0108',
    'problemName': 'Convert Sorted Array to Binary Search Tree',
    'solutionFnName': 'sortedArrayToBST',
    'solutionArgs': 'nums',
    'kebabName': '0108-convert-sorted-array-to-binary-search-tree'
  },
  '0111': {
    'difficulty': 'easy',
    'problemIndex': '0111',
    'problemName': 'Minimum Depth of Binary Tree',
    'solutionFnName': 'minDepth',
    'solutionArgs': 'root',
    'kebabName': '0111-minimum-depth-of-binary-tree'
  },
  '0112': {
    'difficulty': 'easy',
    'problemIndex': '0112',
    'problemName': 'Path Sum',
    'solutionFnName': 'hasPathSum',
    'solutionArgs': 'root, sum',
    'kebabName': '0112-path-sum'
  }
}

module.exports = problemMap
