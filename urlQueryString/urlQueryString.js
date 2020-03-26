/*
URL Query String
Given a properly formatted URL, return the query string 
data as an array of key-value pairs, in the order that they appear.

HINT: You may use decodeURIComponent()

parseQueryString("http://example.com?a=hello&b=99") // [ [ "a", "hello" ], [ "b", "99" ] ]
parseQueryString("http://example.com?msg=hello%20world") // [ [ "msg", "hello world" ] ]
parseQueryString(c) // undefined
*/

function parseQueryString(url) {
    var regexp= /(http[s]?:\/\/)?[^\s(["<,>]*\.[^\s[",><]*/igm
    var result=[]
    if(regexp.test(url)){
        if( url.includes("?")){
            var splittedUrl= url.split ("?")
            var splittedQuery=splittedUrl[1].split("&")
            for(var i=0 ; i<splittedQuery.length; i++){                
                var arr= splittedQuery[i].replace("%20", " ").split("=")
                result.push(arr)
            }
            return result
        }
    }
}
