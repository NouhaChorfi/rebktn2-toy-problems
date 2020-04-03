/*
Balanced Parenthesis
Given a string, return true if it contains balanced parentheses ().

isBalanced("(x + y) - (4)")	// true
isBalanced("(((10 ) ()) ((?)(:)))")	// true
isBalanced("(50)(")	// false
isBalanced("") //	true
*/

var isBalanced = function(str) {
    var paratheses=str.match(/\(|\)/g)
    for (var i=0 ; i< paratheses.length ; i++){
        if(/\)/.test(paratheses[i])){
            if(/\(/.test(paratheses[i-1])){
                paratheses.splice(i-1,2)
                i=i-2
            }
            if(/\)/.test(paratheses[0])){
               return false
            }
        }
    }
   if( paratheses.length>0){
       return false
    }
    return true

}
