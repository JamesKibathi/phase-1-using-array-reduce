const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

let totalBatteries=batteryBatches.reduce(sum,0);

function sum(total,elem,ind,arr){
    return total+=elem;
}
