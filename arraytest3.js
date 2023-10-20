let arr = ['사과','오렌지','바나나'];
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}

for(let f of arr){
    console.log(f);
}

for(let idx in arr){
    console.log(arr[idx])
}

let info = {name: 'hong', age:30, nickname:'honghong'};
for(let key in info ){
    console.log(key, info[key]);
}

