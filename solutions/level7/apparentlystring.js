function apparently(string) {
    let a = '';
    let b = string.split(' ');

    for(let i = 0; i < b.length; i++) {
        if ((b[i] == 'and' || b[i] == 'but') && (b[i + 1] != 'apparently'))
    
    b.splice(i, 0, 'apparently')
    }
    return b.join(' ');
  }

  console.log(apparently('and'));


  // wrong answer  ... 