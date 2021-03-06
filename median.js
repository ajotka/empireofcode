/*
Median

We need an accurate census of our troops as this data is vital to our security in the region. To get started, let's make sure that our census takers are up on their statistics skills.

A median is a numerical value separating the upper half of a sorted array of numbers from the lower half. In a list where there are an odd number of entities, the median is the number found in the middle of the array. If the array contains an even number of entities, then there is no single middle value, instead the median becomes the average of the two numbers found in the middle.

For this mission, you are given a non-empty array of natural numbers (X). With it, you must separate the upper half of the numbers from the lower half and find the median.

Input: An array of integers.
Output: The median as a float or an integer.

Example:
median([1, 2, 3, 4, 5]) == 3
median([3, 1, 2, 5, 3]) == 3
median([1, 300, 2, 200, 1]) == 2
median((3, 6, 20, 99, 10, 15)) == 12.5

Precondition:
1 < |data| ≤ 1000

How it is used:
The median has usage for Statistics and Probability theory, it has especially significant value for skewed distribution. Here's an example: we want to know the average income of people from a set of data and 100 people earn $100 in month while 10 people earn $1,000,000. If we average it out we get $91,000. This is weird value and does nothing to show us the real picture.
In this case the median would give to us more useful value and a better picture. The Article at Wikipedia.
*/

"use strict";

function median(data) {
  data.sort(
    function(a,b) {
      return a - b;
    }
  );

  var half = Math.floor(data.length/2);

  if(data.length % 2) {
    return data[half];
  } else {
    return (data[half-1] + data[half]) / 2.0;
  }
}

var assert = require('assert');

if (!global.is_checking) {
    // These "asserts" using only for self-checking and not necessary for auto-testing
    assert.equal(median([1, 2, 3, 4, 5]), 3, "Sorted list");
    assert.equal(median([3, 1, 2, 5, 3]), 3, "Not sorted list");
    assert.equal(median([1, 300, 2, 200, 1]), 2, "It's not an average");
    assert.equal(median([3, 6, 20, 99, 10, 15]), 12.5, "Even length");
    //assert.equal(median(list(range(1000000))), 499999.5, "Long.");
    console.log("All set? Click 'Check' to review your code and earn rewards!");
}
