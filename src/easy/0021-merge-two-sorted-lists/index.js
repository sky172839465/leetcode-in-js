import {
  getFullNodeValues,
  createListNode
} from '../../util'

const mergeTwoLists = (l1, l2) => {
  const nodeValues = [...getFullNodeValues(l1), ...getFullNodeValues(l2)]
  const sortNodeValues = nodeValues.sort((a, b) => a - b)
  return createListNode(sortNodeValues)
}

export default mergeTwoLists
