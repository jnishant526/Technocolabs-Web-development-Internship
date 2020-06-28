function monitorCount(rows, columns){
    return rows * columns
}
const numOfmonitors =monitorCount(4,5);

function costOfMonitors(){
    return monitorCount(rows,columns) * 200;
}

const totalCost = monitorCount(4,5);
totalCost= costOfMonitors();
console.log(totalCost);