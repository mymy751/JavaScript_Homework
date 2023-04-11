// Cho 2 mang so khac nhau, tim cac so trong mang B ma khong co trong mang A
// In ket qua duoi dang mang
const arrayA = [1, 2, 3, 4, 9, 5, 6, 7, 8, 10];
const arrayB = [1, 2, 5, 6, 7, 8];

// Viet Logic trong day
const main = () => {
    var arrayNew =[];
    
    for(var i=0; i<arrayA.length; i++){
        var res = false;
        for(var j=0; j<arrayB.length; j++){           
            if(arrayA[i] == arrayB[j]){
                res = true;
                break;
            }
        }
        if(!res){
            arrayNew[arrayNew.length] = arrayA[i];
        }
        
    }
    console.log(arrayNew);
};

// ***
// Expect output would be [3, 4]
main(arrayA, arrayB);
