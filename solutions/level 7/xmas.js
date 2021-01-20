function xMasTree(n){
    // this array represents the entire tree
    let tree = [];
    // this array represent a specific row of the tree
    let xMas = [];
    

    for(let i = 0; i < n*2 -1; i ++) {
        // this starts the string with all underscores ___
      xMas[i] = '_';
    }

     for(let i = 0; i < n; i++) {
         // this changes the left side of the array to a hashtag
    xMas[n + i - 1 ] = '#';
    // this changes the right side of the array to hashtags 
       xMas[n - i -1] = '#';
       // this converts the array , adds it to a string then throws it back into an array
       tree.push(xMas.join(''));
    }
    // create the steam, the top row of the tree repeated twice
    tree.push(tree[0]);
    tree.push(tree[0]);
    return tree;
  }
    