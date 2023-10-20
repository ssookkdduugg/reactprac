let user = {id:1,name:'hong',age:30};
let user2 = user;
let user3 = {...user} //특정 요소만 바꾸고싶을때, 전개식 새로만들어진 객체. 

user.name='song';
console.log(user);
console.log(user2); // 이렇게만 하면 둘 다 song뜸
console.log(user3);

let user4 = {...user, age:40};
console.log(user4); //name: 'song', age: 40 

 
