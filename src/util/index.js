import ListNode from './ListNode'
import TreeNode from './TreeNode'

const getFullNodeValues = listNode => {
  let result = []
  let currentNode = listNode
  while (currentNode) {
    result.push(currentNode.val)
    currentNode = currentNode.next
  }
  return result
}

const getObjectRef = (obj, path) => {
  return path
    .split('.')
    .reduce((o, key) => o && o[key] ? o[key] : null, obj)
}

const createListNode = list => {
  if (list.length === 0) {
    return null
  }
  let listNode = new ListNode()
  let currentNode = listNode
  let unprocessList = list
  while (unprocessList.length > 0) {
    currentNode.val = unprocessList[0]
    if (unprocessList.length !== 1) {
      currentNode.next = new ListNode()
      currentNode = currentNode.next
    }
    unprocessList = unprocessList.slice(1)
  }
  return listNode
}

const createCircleLinkedList = (list, pos) => {
  let linkedList = createListNode(list)
  if (pos > -1) {
    const circlePath = [...Array(list.length - 1).keys()].map(() => 'next').join('.')
    const targetPath = [...Array(pos).keys()].map(() => 'next').join('.')
    let circledTarget = getObjectRef(linkedList, circlePath)
    circledTarget.next = targetPath
      ? getObjectRef(linkedList, targetPath)
      : linkedList
  }
  return linkedList
}

const createTreeNode = nums => {
  if (nums.length === 0) {
    return null
  }
  const SIDE = {
    LEFT: 'left',
    RIGHT: 'right'
  }
  // 紀錄目前處理過左右二元樹的節點數量
  let DEPTH_MAP = {
    [SIDE.LEFT]: {},
    [SIDE.RIGHT]: {}
  }
  const getTreeNode = (depth, side) => {
    if (depth in DEPTH_MAP[side]) {
      DEPTH_MAP[side][depth] += 1
    } else {
      // 右二元樹起點需要扣掉左二元樹的數量
      DEPTH_MAP[side][depth] = side === SIDE.LEFT ? -1 : depth - 1
    }
    const currentPosition = DEPTH_MAP[side][depth]
    // NODE位置為 2^ 階層 + 從 -1 開始的順位
    const nodeValue = nums[Math.pow(2, depth) + currentPosition]

    if (!nodeValue && nodeValue !== 0) {
      return null
    }
    const nextDepth = depth + 1
    let treeNode = new TreeNode(nodeValue)
    treeNode.left = getTreeNode(nextDepth, side)
    treeNode.right = getTreeNode(nextDepth, side)
    return treeNode
  }
  let root = new TreeNode(nums[0])
  root.left = getTreeNode(1, SIDE.LEFT)
  root.right = getTreeNode(1, SIDE.RIGHT)
  return root
}

export {
  ListNode,
  getFullNodeValues,
  getObjectRef,
  createListNode,
  createCircleLinkedList,
  createTreeNode
}
