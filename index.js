/*A construction company is building a new neighborhood, and they are currently working on the
design. Each house will be built using one of three main materials (e.g., wood, brick, or
concrete), but no side-by-side houses can be made of the same material. Because each house
will be of varying size and complexity, the cost of the materials for each house varies. Given the
cost of using each material for each house, what is the minimum cost needed to
complete the neighborhood?
For example, let's say there are n = 3 houses to be built. Also, cost = [[1, 2, 3], [1, 2, 3], [3, 3,
1]], denoting the cost of materials for each of the 3 houses. The minimum cost to build all the
houses is 4.
Write a function minCost which:
1.has a parameter cost : a 2-dimensional array of integers where cost[i][j] denotes the cost
of using the jth material on the ith house, and
2. returns minimumCost (an integer which is the minimum cost to build all the houses in
the neighborhood)
*/

function minCost(cost){
    var maxCons = 100;
    var array = [];
    for(var i = 0; i < cost.length; i++){
    for(var j =0; j < cost[i].length; j++){
    if(cost[i][j] < maxCons && array[i-1] !== cost[i][j]){
    array[i] = cost[i][j];
    maxCons = cost[i][j];
    }
    }
    maxCons = 100;
    }
    const mincostreduced = array.reduce((total,number) => total + number);
    return `The minimum cost to build the three houses in the
    neighborhood is ` +  mincostreduced;
    }
    minCost([[1, 2, 3], [1, 2, 3], [3, 3, 1]]);
    