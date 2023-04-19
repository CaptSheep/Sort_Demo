
function bubbleSort(arr: number[]): number[] {
    // Sort tu lon den be
    // for (let i = 0; i < arr.length; i++) {
    //     for (let j: number = arr.length - i - 1; j >= i; j--) {
    //         if (arr[j] > arr[j - 1]) {
    //             // let temp = arr[j]
    //             // arr[j] = arr[j - 1]
    //             // arr[j - 1] = temp
    //             [arr[j],arr[j - 1]] = [arr[j-1],arr[j]]
    //         }
    //     }
    // }
    //Sort tu be den lon
    for (let i: number = 0; i < arr.length; i++) {
        for (let j: number = 0; j < arr.length - i - 1; j++) {
            if(arr[j] > arr[j + 1]){
                // let temp = arr[j]
                // arr[j] = arr[j + 1]
                // arr[j + 1] = temp
            [arr[j],arr[j + 1]] = [arr[j+ 1],arr[j]]
            }
        }
    }
    return arr
}

const unsortedArray : number[] = [64, 34, 25, 12, 22, 11, 90,64];
console.log(bubbleSort(unsortedArray))

