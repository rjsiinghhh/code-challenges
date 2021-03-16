function warnTheSheep(queue) {
    let N = queue.length - queue.indexOf('wolf') - 1;
    for (let i = queue.length - 1; i >= 0; i--) {
        if (queue[i] === 'wolf') {
            return "Pls go away and stop eating my sheep";
        } else {
            return `Oi! Sheep number ${N}! You are about to be eaten by a wolf!`
        }
    }
}