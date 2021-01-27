//Minimum Waiting Time
//You're given a non-empty array of positive integers representing the amounts of time that specific queries
//take to execute. Only one query can be executed at a time, but the queries can be executed in any order.

//A query's waiting time is defined as the amount of time that it must wait before its execution starts.
//In order words, if a query is executed second, then its waiting time is the duration of the first query;
//if a query is executed third, then its waiting time is the sum of all the durations of the first two 
//queries.


//Write a function that returns the minimum amount of total waiting time for all of the quereies. 
//For example, if you're given the queries of durations [1, 4, 5], then the total waiting time if 
//the queries were executed in the order of [5, 1, 4] would be (0) + (5) + (5 + 1) = 11. 
//The first query of duration 5 would be executed immediately, so its waiting time would be 0, 
//the second query of duration 1 would have to wait 5 seconds (the duration of the first query) to be 
//executed, and the last query would have to wait the duration of the first two queries before being 
//exeucuted. 

//Note: You're allowed to mutate the input array

//Sample Input
//queries = [3, 2, 1, 2, 6]



// 0 + 3 , 3 + 2, 3 + 2 + 1, 3 + 2 + 1 + 2 = 17

//Sample Output 
//17

// need to sort the query to get the smallest number in front



function minimumWaitingTime(queries) {
    let totalTime = 0;
    let accumulator = 0;
    let sorted
    for (let i = 0; i < queries.sort((a, b) => a - b).length - 1; i++) {
        console.log(queriesi);
    }


}



// minimum waiting time