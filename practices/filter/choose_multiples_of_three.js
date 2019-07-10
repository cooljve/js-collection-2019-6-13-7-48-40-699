'use strict';

function choose_multiples_of_three(collection) {
  const condition= num=>num%3===0;
  return collection.filter(condition);
}

module.exports = choose_multiples_of_three;
