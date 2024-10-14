// let x = 10;
// if(1 === 1){
//     var y = 5;
//     console.log('1', x)
//     console.log('2', y)
//     if (1 === 1) {
//         var z = 3;
//         console.log('3', x)
//         console.log('4', y)
//         console.log('3', z)
//     }
//     console.log('!!!', z)
// }

// console.log('4', x)
// console.log('5', y)
// console.log('6', z)



// var x = 10;

// const testFunc = () => {
//     var y = 20;

//     console.log('1', x)
//     console.log('2', y)
// }

// testFunc()

// console.log('3', x)
// console.log('4', y)

//textFunc('test', 3)



// const showText = (str, num) => {
// if(str.length < num) return `string is too short`

// let result = '';

//     for(let i=0; i < str.length ; i++) {
//         result = i <num? result+=str[i] : result
//         }
    
//     console.log(result)
// }

// showText('javascript', 5)



//const arr = ['test', 3, true, {}, [], [[],[]]]



// const arr = [1, 2, 3, 4,5]
// const arr1 = arr
// arr[0] = 99

// console.log(arr.length)
// console.log(arr1)

// delete arr[3]
// arr.length = 3

// const arr1 = [...arr]   //spread operator

// arr1[0] = 99

// console.log(arr)
// console.log(arr1)


// const obj = {
//     name:'alex',
//     job:'developer'
// }

// const obj1 = 'victor'
//or
// const obj1 ={...obj}
// obj1.name = 'victor'

// console.log(obj)
// console.log(obj1)

// const arr = [1, 2, 3, 4, 5]
// arr['indexName']=6
// console.log(arr)


const arr =[1, 2, 3, 4, 5]

const arr1 = ['str1', 'str2', 'str3']

const arr2 = arr.map((item, index, arr) => {
    // console.log(item, index)
    return item + index;

})
// arr[0]=99
console.log(arr2)
// console.log(arr1)