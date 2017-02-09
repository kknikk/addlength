/**
 * WOD
 * Created by kurtnikaitani on 2/9/17.
 */

function addLength(words) {
  return _.map(words, function (word) { return `${word} ${word.length}`; });
}

console.log(addLength(['apple', 'pear', 'peach']));
