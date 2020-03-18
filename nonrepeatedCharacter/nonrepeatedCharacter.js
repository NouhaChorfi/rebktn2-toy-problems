/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

<<<<<<< HEAD

var firstNonRepeatedCharacter = function(string) {
  var characterRepetance={}
  var charToReturn=''
  var order=0
  var min=string.length

  for(var i =0 ;  i< string.length ; i++){
    if(string[i] in characterRepetance){
      characterRepetance[string[i]].occurance++;
    }
    else{
      characterRepetance[string[i]]={}
      characterRepetance[string[i]].occurance = 1
      order++
      characterRepetance[string[i]].order=order
    }
  }

  for ( var item in characterRepetance){
    if (characterRepetance[item].occurance  === 1){
      if (characterRepetance[item].order < min)
        charToReturn= item
        min= characterRepetance[item].order
    }
    
  }
 return charToReturn
 
=======
var firstNonRepeatedCharacter = function(string) {
  // TODO: your solution here
>>>>>>> 6f7905d626af11493567ec55d4599c3d34fe0c82
};
