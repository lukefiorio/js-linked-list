/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator() {
  let head = null;
  let tail = null;

  const getHead = function () {
    return head;
  };
  const getTail = function () {
    return tail;
  };

  const add = function (val) {
    let newNode = {};
    newNode.value = val;
    newNode.next = null;

    if (head) {
      tail.next = newNode;
      tail = newNode;
    }

    if (!head) {
      head = newNode;
      tail = newNode;
    }

    linkedList = head;

    return head;
  };

  const get = function (index) {
    let curObj = head;

    let i = 0;
    while (i < index && curObj !== null) {
      curObj = curObj.next;
      i++;
    }

    if (curObj === null) {
      return false;
    }

    return curObj;
  };

  const remove = function (index) {
    // index not in range
    if (get(index) === false) {
      return false;
    }
    // remove head
    if (index === 0) {
      head = head.next;
    }

    // find node to remove & prior node; reassign prior node redirect
    let NodeToRedirect = get(index - 1);
    let NodeToRemove = get(index);
    NodeToRedirect.next = NodeToRemove.next;

    // if removed node was tail; reassign prior node as tail
    if (NodeToRemove.next === null) {
      tail = NodeToRedirect;
    }
  };

  const insert = function (val, index) {
    // index not in range
    if (index < 0) {
      return false;
    }
    if (get(index) === false && get(index - 1) === false) {
      return false;
    }

    // index in range
    let newNode = {};
    newNode.value = val;

    // insert as new head
    if (index === 0) {
      newNode.next = head;
      head = newNode;
    }

    // insert in middle
    let frontNode = get(index - 1);
    let backNode = get(index);
    if (index > 0 && backNode !== false) {
      newNode.next = backNode;
      frontNode.next = newNode;
    }

    // insert as new tail
    if (backNode === false && frontNode === tail) {
      add(val);
    }
  };

  return {
    getHead: getHead,
    getTail: getTail,
    add: add,
    remove: remove,
    get: get,
    insert: insert
  };
}
