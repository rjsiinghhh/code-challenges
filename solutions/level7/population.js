function nbYear(p0, percent, aug, p) {
    let years = 0;
    while (p0 < p) {
        // while the number is less than the goal number 
        p0 += p0 * (percent / 100) + aug;
        // the population is currently equal to this number 
        years += 1
    }
    return years;
}