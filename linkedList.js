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
  }
  const getTail = function () {
    return tail;
  }

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
  }

  const get = function (num) {

    let curObj = head;
    let nextObj = curObj;

    let i = 0;
    while (i < num && curObj !== null) {
      nextObj = curObj.next;
      curObj = nextObj;
      i++
    }
    if (nextObj === null) return false;

    return nextObj;
  }

  const remove = function (num) {
    // index not in range
    if (get(num)===false) return false;
    // remove head
    if (num===0) head = head.next;

    // find node to remove & prior node; reassign prior node redirect
    let NodeToRedirect = get(num - 1);
    let NodeToRemove = get(num);
    NodeToRedirect.next = NodeToRemove.next;

    // if removed node was tail; reassign prior node as tail
    if (NodeToRemove.next === null) tail = NodeToRedirect;
  }

  const insert = function () { }

  return {
    getHead: getHead,
    getTail: getTail,
    add: add,
    remove: remove,
    get: get,
    insert: insert
  };
}