
function selectionSort(arr: number[]){
    // Sort tu nho den lon
    for (let i = 0; i < arr.length; i++) {
        let index = i
        for (let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[index]){
                index = j
            }
        }
            [arr[index],arr[i]] = [arr[i],arr[index]]

    }

    //Sort tu lon den nho
    // for (let i = 0; i < arr.length; i++) {
    //     let index = i
    //     for (let j = arr.length - 1; j >= i ; j--) {
    //         if(arr[j] > arr[index]){
    //             index = j
    //         }
    //     }
    //     if(index){
    //         [arr[index], arr[i]] = [arr[i], arr[index]]
    //     }
    // }
    return arr
}

const unsortedArray : number[] = [64, 34, 25, 12, 22, 11, 90,64];
console.log(selectionSort(unsortedArray))

