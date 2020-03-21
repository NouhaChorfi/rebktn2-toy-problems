/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
*/

var rockPaperScissors = function () {
  var st=""
  var str1="RRR"
  var str2="PPP"
  var str3="SSS"
  var result=[]
  for(var i=0 ; i<str1.length; i++){
    st=str1[i]
    for(var j=0 ; j<str2.length; j++){
        st=st+str2[j]
      for(var k=0 ; k<str3.length; k++){
        st=st+str3[k]
        result.push(st)
      }

    } 
  }
  return result

  }
