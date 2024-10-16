/**
 * 0: 
 * 1: With Operators
 * 2: With Methods
 * 
 */
/*
ACCESS
String positions are ordered on an index, 
index count starts at 0
index count includes each string character
    letters ('a' 'B')
    puntuation (',' '!')
    spaces, tabs, line breaks (' ' '    ')

  Brackets

  like the methods because you're using the index
  */


// EXTRACTION


// 3 METHODS

// .slice(start, end)
// .substring(start, end)
// .substr(start, length)

/** Slice
 text.slice(start, end)
start : index
end : non inclusive


Wrong Order = empty string
Same Number? (results in empty string)
Non sequential? (results in empty string)
    text.slice(3, 2) = ''
    text.slice(2, 3) = 'x'
    text.slice(2) = 'xt'
    text.slice(-2, -1) = 'x'
    text.slice(-1, -2) // ''
    text.slice(-2) // 'xt'

count starts at 0
negative numbers counted from end of string
    sequential counting down to zero (-2, -1) // valid vs (-1, -2) (empty string)
 */

/*.slice vs .substring
  2 key differences
    1) negative integers computed as 0 index
        text.substring(-2) // 'text'
        text.substring(0) // 'text'
        text.substring(0, -2) // '' 
        text.substring(-2, 0) // ''
        text.substring(-2, 1) // 't'
    2) if non sequential, start value is ignored
        text.substring(3, 2) // 'x'
        text.substring(2, 3) // 'x'
*/

/***
 Substr vs the world
    
 text.substr(start, length)
 start : index
 length : character count
 */


/**
  replaceAll
 
Replace String Elements with Something Else

str.replaceAll(strElement, somethingElse)
    stringElement = string character(s) to be removed from Input String (not the index position)  
     
    somethingElse = string character(s) you want in place of the stringElement 

**/
    var thisStr = "This,string,is,short."

    thisStr.replaceAll(",", " ") // => "This string is short."





    
 