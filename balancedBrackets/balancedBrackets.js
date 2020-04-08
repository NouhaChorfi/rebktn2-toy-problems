/*
Balanced Brackets
Given a string, return true if its arrangement of parenthesis (), curly-brackets {}, and square-brackets [] would be considered valid in code and mathematics (is balanced).

isBalanced("(x + y) - (4)") // true
isBalanced("(((10 ) ()) ((?)(:)))") // true
isBalanced("[{()}]") // true
isBalanced("(50)(") // false
isBalanced("[{]}") // false
*/

var isBalanced = function(str) {
    var strBrakets=[]
    var brakets={
        "{":"}",
        "[":"]",
        "(":")",
        '"':'"',
    }
    var closed={
        "}":"}",
        "]":"]",
        ")":")",
        '"':'"'
    }
    for (var i=0 ; i<str.length ; i++){
        if(str[i] in brakets || str[i] in closed){
            strBrakets.push(str[i])
        }
    }
    for (var i=0 ; i<strBrakets.length ; i++){
        if( strBrakets[i] in closed){
            if(brakets[strBrakets[i-1]]=== strBrakets[i]){
                strBrakets.splice(i-1, 2);
                i=i-2
            }else{
                return false
            }
        }
    }
    if(strBrakets.length === 0){
        return true
    }
    return false

};