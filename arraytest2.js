let fruits = ['banana'];
let arr = fruits;
fruits.push('orange'); //배열에 넣기 
console.log(arr);

console.log(arr==fruits); //둘 다 true

//전개 연산자 
//중요: 배열의 깊은 복사(전개연산자(...)사용하여 복사한다)
//갖고온 데이터를 변경됐는지 인지하려면 전개 연산자 사용
let carr = [...fruits];
fruits.push('strawberry');
console.log(fruits);
console.log(carr);
console.log(carr==fruits);

//pop 뒤에서 빼는