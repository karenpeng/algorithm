/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    var result = []
    var list = []
    helper(result, list, nums)
    return result
};

function helper(result, list, nums){
    if(nums === null || nums.length < 1) return result
    
    if(list.length === nums.length) {
       result.push(deepCopy(list))
       return
    }
    
    for(var i = 0; i < nums.length; i++){
        var contain = list.some(function(el){
            return el === nums[i]
        });
        if(contain) continue
        list.push(nums[i])
        //把以list开头的所有排列都加到Result里面去
        helper(result, list, nums)
        list.pop()
    }
}

function deepCopy(arr){
    var newArr = []
    arr.forEach(function(el){
        newArr.push(el)
    })
    return newArr
}
