let arr =['사과','오렌지','바나나'];

arr.forEach(function(item,index,array){
    console.log(`${index}, ${item}, ${array}`);
});

let users = [{id:1,name:'John'},{id:2,name:'Pete'}, {id:3,name:'Mary', age:25},{id:4,name:'Mary', age:30}];


//users.filter로 하면은 값이 같은거라도 다 출력하고 
// users.find로 하면은 해당하는 값 제일 첫번째것만 뜬다. 
let user1 = users.find(function(item){ 
    return item.id == '1'; 
})
console.log(user1);


let user2 = users.filter(function(item){ 
    return item.name == 'Mary'; 
})

console.log(user2);

let user20 = users.filter(item => {
    return item.age >=20 && item.age<30;
})
console.log(user20);

let usersp = users.map(function(item){
     item.age++;
     return item;
})

console.log(usersp);


users.sort(function(item1, item2){
    return item2.age-item1.age;
})

console.log(users);

users.sort(function(item1,item2){
    return item1.name.localeCompare(item2.name);
})

console.log(users);