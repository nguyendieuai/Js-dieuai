// ham
function hello(name){
    console.log(name);
}
// cach viet khac
const hello1 = function(name){
    console.log(name + " den tu hello1");
}
// cach viet ham trong JS ES6
const hello2 = (name) => {
    console.log(name+' den tu hello hien dai')
}
// truong hop co duy nhat mot tham so
const hello2 = name => {
    console.log(name+' den tu hello hien dai')
}
// neu chi co mot tham so va mot gia tri return
const tinhBinhPhuong = so => so * so ;
console.log(tinhBinhPhuong(2));

hello('Hoang Nam');
hello1('Hoang Nu');
hello2('Hoang BD'); 