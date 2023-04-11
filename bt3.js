/**
 * Where do I Belong
    Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

    For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

    Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
 */
function getIndexToIns(arr, num) {
    var chuoi =[];
    var a=0;
    for(var i=0; i<arr.length; i++){
        chuoi[a]= arr[i];
        a++;
    }
    chuoi[chuoi.length] = num;
    console.log(chuoi);

    var temp;
    for (var i=0; i<chuoi.length-1; i++){
        for(var j=0; j<chuoi.length-1; j++){
            if(chuoi[j]>chuoi[j+1]){
                temp = chuoi[j];
                chuoi[j] = chuoi[j+1];
                chuoi[j+1] = temp;
            }
        }
    }
    console.log("Chuoi sau khi đuoc săp xep là: "+ chuoi);

    for(var i=0; i<chuoi.length; i++){
        if(chuoi[i]==num){
            console.log( "Sau khi mảng được sắp xếp thì " + num + " ở vị trí thứ " + i);
        }
    }
}
    
getIndexToIns([40, 60, 70, 90, 80], 50);


