function toCsvText(array) {
    let newArr = '';
    // counting forwards
    for(let i =0; i < array.length; i++) {
    // concatenate into a string
        for(let j = 0; j < array[i].length; j++){
            newArr += array[i][j]
            if(j == array[i].length -1){
              if(i < array.length-1){
                newArr+='\n'
              } 
              }
            else {
                newArr +=','
            }
        } 
    }
  return newArr;
 }