function pointsPer48 (ppg, mpg) {
    // 48 min per quarter, 4 quarters
    // ppg if 48 min played 
    // divide ppg/mpg * 48
    // if ppg || mpg === 0, return 0

    if(ppg === 0 || mpg === 0) return 0;
    return Number((ppg / mpg * 48).toFixed(1));
}