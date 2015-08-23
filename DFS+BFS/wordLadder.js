/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {set<string>} wordDict
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordDict) {
    if(wordDict.length < 0) return 0
    return BFS(beginWord, endWord, wordDict)
};

function BFS(beginWord, endWord, wordDict){
    var queue = []
    var hash = {}
    queue.push(beginWord)
    hash[beginWord] = 0
    var len = 1
    
    while(queue.length > 0){
        var size = queue.length
        for(var i = 0; i < size; i++){
            var node = queue.shift()
            for(var j = 65; j <= 90; j++){
                for(var k = 0; k < node.length; k++){
                    if(String.fromCharCode(j) === node[k]) continue
                        //fromCharCode 's output is always in Cap!!!!
                        //remember to lowercase it
                    var tmp = replace(node, k, String.fromCharCode(j)).toLowerCase()
                    console.log(tmp, node)
                    if(tmp === endWord) return len + 1
                    if(contain(wordDict, tmp) && !hash.hasOwnProperty(tmp)){
                        queue.push(tmp)
                        hash[tmp] = 0
                    }
                }
            }
        }
        len++
    }
    return 0
}

function replace(str, index, c2){
    return str.substring(0, index) + c2 + str.substring(index+1, str.length)
}

function contain(arr, word){
    return arr.some(function(e){
        return e === word
    })
}


//Agu23
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {set<string>} wordDict
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordDict) {
    if(wordDict.length < 0) return 0
    return BFS(beginWord, endWord, wordDict)
};

function BFS(beginWord, endWord, wordDict){
    var queue = []
    var hash = {}
    queue.push(beginWord)
    hash[beginWord] = 0
    var len = 1
    
    while(queue.length > 0){
        var size = queue.length
        for(var i = 0; i < size; i++){
            var node = queue.shift()
            for(var j = 0; j < node.length; j++){
                for(var k = 97; k <= 122; k++){
                    if(String.fromCharCode(k) === node[j]) continue
                    var newWord = replace(node, j, String.fromCharCode(k)) 
                    if(newWord === endWord) return ++len
                    if(wordDict.has(newWord) && !hash.hasOwnProperty(newWord)) {
                        queue.push(newWord)
                        hash[newWord] = true
                    }
                }
            }
        }
        len++
    }
    return 0
}

function replace(word1, index, char){
    var output = ''
    for(var i = 0; i < word1.length; i++){
        if(i === index) {
            output += char
            continue
        }
        output += word1[i]
    }
    return output
}

console.log(ladderLength('a', 'c', ['a', 'b', 'c']))
