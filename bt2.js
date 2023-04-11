/**
 * Reverse a String
 * Reverse the provided string and return the reversed string.
 * For example, "hello" should become "olleh".
 */

function reverseString(str) {
    var tmp = "";
    for (var i=str.length-1; i>=0; i--){
        tmp += str[i];
    }
    console.log(tmp);
}

//  
reverseString("Hello halo");