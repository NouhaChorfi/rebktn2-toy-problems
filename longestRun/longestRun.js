/*
Longest Run

Write a function that, given a string, finds the longest run of identical characters 
and returns an array containing the start and end indices of that run. 
If there are two runs of equal length, return the first one. Return [0,0] for no runs.

longestRun("abbbcc") // [ 1, 3 ]
longestRun("aabbc") // [ 0, 1 ]
longestRun("") // [ 0, 0 ]
longestRun("mississippi") // [ 2, 3 ]
longestRun("abcdefgh") // [ 0, 0 ]
longestRun("abccccccc") // [ 2, 8 ]
*/


var longestRun =function(string){
    var acc=[]
    var result=[]
    for (var i=0 ; i< string.length ; i++){
        if(string[i]===string[i+1]){
            var index=i;
           // var counter =0
            while(string[i]==string[index]){                
                acc=[i,index]
                index++
            }
            i=index-1
            if((result.length===0) || (result[1]-result[0])<(acc[1]-acc[0])){
                result=acc
            }
        }
    }
    return result

}



