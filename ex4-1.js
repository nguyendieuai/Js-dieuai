const array1 = [1,2,3,4];
const array2 = [...array1,5,6,7];

const name = {
    name1: 'Hoang Nam',
    name2: 'Hoang Dieu'
};

const dsLop = {
    ...name,
    name3: 'Hoang Tu',
    name4: 'Hoang De'
}
console.log(name);
console.log(dsLop);

console.log(array1);
console.log(array2);