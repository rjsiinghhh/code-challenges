var number=function(array){
    let newArr = [];
    // write a loop that itterates upwards for the array  
    for(let i = 0; i < array.length; i++) {
        newArr += array[i]
        for (let j = 0; j < array.length; j++){
            newArr += array[i][j]
             if(j == array[i].length -1){
                if(i < array.length-1){
                  newArr+=`{number:}`
        }
    }
    return newArr;
  }