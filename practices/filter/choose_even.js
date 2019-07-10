'use strict';

function choose_even(collection) {
  const condition= num=>num%2===0;
  return collection.filter(condition);
}

module.exports = choose_even;
