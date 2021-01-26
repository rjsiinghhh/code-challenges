function enough(cap, on, wait) {
    let emptySeats = cap - on;
  // find the empty number of seats 
  
      if (wait + on <= cap) {
          // if the wait + on is less than cap then return 0
          return 0;
      } else {
          // otherwise subtract the passengers waiting from the empty seats and return that 
          return wait - emptySeats;
      }
  
    }