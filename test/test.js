var MyMethods = require('../removeduplicates.js');
var dateSort = MyMethods.dateSort;
var removeDuplicates = MyMethods.removeDuplicates;

var assert = require('assert');

describe('date sort function', function() {

  it('Returns true if the dates are identical.', function() {
    let x = {entryDate:"2014-05-07T17:31:20+00:00"};
    let y = {entryDate:"2014-05-07T17:31:20+00:00"};
    const result = dateSort(x, y);
    assert.equal(result, true);
  });

  it('Returns negative if date in first entry is after date in second entry.', function() {
    let x = {entryDate:"2015-05-07T17:31:20+00:00"};
    let y = {entryDate:"2014-05-07T17:31:20+00:00"};
    const result = dateSort(x, y);
    assert(result < 0);

  });

  it('Returns positive if date in first entry is before date in second entry.', function() {
    let x = {entryDate:"2013-05-07T17:31:20+00:00"};
    let y = {entryDate:"2014-05-07T17:31:20+00:00"};
    const result = dateSort(x, y);
    assert(result > 0);
  });

  it('Fails with one parameter.', () => {
    assert.throws(() => {
      dateSort("foobar");
    });
  });

});

describe('remove duplicates function', function() {

  it('Removes duplicate values from array of objects based on property passed.', function() {
    let array = [{foo:"bar"}, {foo:"bar"}, {foo:"foo"}];
    let property = "foo";
    const result = removeDuplicates(array, property);
    assert(result.length === 2);
  });

  it('Leaves it unchanged if no duplicate values are found.', function() {
    let array = [{foo:"bar"}, {foo:"foo"}];
    let property = "foo";
    const result = removeDuplicates(array, property);
    assert(result.length === 2);
  });

});
