function countSheeps(list) {
    let totalSheep = 0;
    for (let i = 0; i < list.length; i++) {
        if (list[i] === true) {
            totalSheep++;
        }
    }

    if (totalSheep > 0) {
        console.log(`There are ${totalSheep} sheep in total`);
    } else {
        console.log("UPS!!! Wolfs eaten Sheeps");
    }
}


const list1 = [true, true, true, false, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, true, false, false, true, true];
const list2 = [false, false, false];

countSheeps(list1);
countSheeps(list2); 