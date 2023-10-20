let arr = [10,20,30,40];
console.log(arr.length);
arr.splice(1,1); //배열의 특정 요소 삭제 ,뒤에 숫자 인덱스가 아니라 개수 
console.log(arr.length);

arr.splice(1,2,100,200); //1번째부터 2개 삭제후 100,200 삽입
                        //삭제뿐만이아니라 대체도 가능 
console.log(arr)

//10,100,300,400,200
arr.splice(2,0,30,400);//2번째에 300,400 삽입
console.log(arr)

//slice: 배열의 부분 요소 가져오기 
let narr = [10,20,30,40,50,60,70,80];
let subarr = narr.slice(2,5); //2번째부터 index 5번째는 제외 하고 2,3,4번째 
console.log(narr);
console.log(subarr);

//concat : 배열에 이어붙이기 
let arr2=[1,2];
let totarr = arr2.concat(3,4);
console.log(arr2);
console.log(totarr);


let totarr2 = arr2.concat([3,4]);
console.log(totarr2);
let arr3 =[10,20];
let totarr3 = arr2.concat(arr3);
console.log(totarr3);
let totarr4 = arr2.concat(3,4,[5,6],arr3); //각 숫자써도 되고 , [ ] 안에 넣어도되고, 변수에담아서 써도되고
console.log(totarr4);

