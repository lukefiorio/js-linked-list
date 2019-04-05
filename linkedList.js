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
    // if (obj) {
    //   while (obj.next !== null) {
    //     nextObj = obj.next;
    //     obj = nextObj;
    //   }
    // return nextObj;
    // }
    return tail;
  }

  const add = function (val) {
    let newNode = {};
    newNode.value = val;
    newNode.next = null;
    tail = newNode;
    if (!head) head = newNode;
    return newNode;
  }

  const remove = function () { }
  const get = function () { }
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