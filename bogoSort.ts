function Bogosort(arr : number[]){
    var isSorted = function(arr : number[]){
        for(var i = 1; i < arr.length; i++){
            if (arr[i-1] > arr[i]) {
                return false;
            }
        }
        return true;
    };

    function shuffle(arr: number[]){
        var count = arr.length, temp, index;

        while(count > 0){
            index = Math.floor(Math.random() * count);
            count--;

            temp = arr[count];
            arr[count] = arr[index];
            arr[index] = temp;
        }

        return arr;
    }

    function sort(arr : number[]){
        var sorted :boolean = false;
        while(!sorted){
            arr = shuffle(arr);
            sorted = isSorted(arr);
        }
        return arr;
    }

    return sort(arr);
}


var arra : number[] = [3, 0, 2, 5, -1, 4, 1];
console.log("Original Array Elements");
console.log(arra);
console.log("Sorted Array Elements");
console.log(Bogosort(arra));

