const list1 = ['a', 'b', 'c'];
const list2 = [1, 2, 3];

// eslint-disable-next-line no-shadow
function zipList(list1, list2) {
  const result = [];
  for (let i = 0; i < list1.length; ++i) {
    result.push(list1[i], list2[i]);
  }

  return result;
}

console.log(zipList(list1, list2));

// eslint-disable-next-line no-shadow
// Using Underscore.js with _.zip
// eslint-disable-next-line no-shadow
function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

console.log(zipListTheSimpleWay(list1, list2));
