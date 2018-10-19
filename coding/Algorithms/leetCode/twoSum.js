var twoSum = function(nums, target) {
  var hash = {};

  for (var i = 0; i < nums.length; i++) {
    var res = hash[target - nums[i]];

    if (res !== undefined) {
      return [res, i];
    }
    hash[nums[i]] = i;
  }
};