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

  const remove = function (num) {
    let NodeToRemove = get(num);
    let NodeToRedirect = get(num-1);
    console.log(head);
    NodeToRedirect.next = NodeToRemove.next;
    console.log(head);

    return NodeToRedirect;

  }

  const get = function (num) {

    let curObj = head;
    let nextObj = curObj;

    let i = 0;
    while (i<num && curObj !== null) {
      nextObj = curObj.next;
      curObj = nextObj;
      i++
    }
    if (nextObj===null) return false;

    return nextObj;
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