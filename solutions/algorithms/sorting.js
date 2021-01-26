//SELECTION SORT
//Write a function that takes in an array of integers and returns a sorted version of that array. Use the 
//Selection Sort algorithm to sort the array.

//Sample Input
//array = [8, 5, 3, 9, 5, 6, 3]

//Sample Output
//[2, 3, 5, 5, 6, 8, 9]



// wrong SOLUTION
function selectionSort(array) {
    // Write your code here.
    let newArr = [];
    // making an empty array for the answer 
    for (i = 0; i < array.length; i++) {
        // iterating the first array
        for (let j = 0; j < i + 1; j++) {
            if (array[i] < array[j]) {
                newArr.push(array[i]);
            } else {
                newArr.push(array[j]);
            }
            //newArr = array[i]
        }
        console.log(newArr);
    }

    //   LOOOP
    //   SMALL TO BIG
    //   NEW ARRAY
    //   PUSH TO NEW ARRAY


    // correct solution 

    function selectionSort(array) {
        let startIdx = 0;
        while (startIdx < array.length - 1) {
            let smallestIdx = startIdx;
            for (let i = startIdx + 1; i < array.length; i++) {
                if (array[smallestIdx] > array[i])
                    smallest = i;
            }
            swap(startIdx, smallestIdx, array);
            startIdx++;
        }
        return array;
    }

    function swap(i, j, array) {
        const temp = array[j];
        array[j] = array[i];
        array[i] = temp;
    }