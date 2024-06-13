/* ---------------------------------------------------------------------- */
/* Iterable Object                                                        */
/* ---------------------------------------------------------------------- */

// 배열을 일반화 한 객체
// for-of 문을 사용할 수 있는 객체
// Symbol.Iterator 메서드가 필히 구현되어야 함
// Symbol.Iterator 메서드는 이터레이터 객체를 반환하며
// 이터레이터 객체는 next() 메서드를 가짐 ({ done: Boolean, value: any } 타입 반환)



const arr = '1 2 3 4 5 6'.split(' ');


// console.log( arr.next() );

const iter = arr[Symbol.iterator]();

// for(const a of iter){
//   console.log( a );
// }

console.log( iter.next().value );
console.log( iter.next().value );
console.log( iter.next().value );
console.log( iter.next().value );
console.log( iter.next().value );
console.log( iter.next().value );
console.log( iter.next().value );



const range = {
  from:1,
  to:5,
  length:5,
  [Symbol.iterator](){
    let current = this.from;
    let last = this.to;

    return {
      next(){
        if(current <= last){
          return {value: current++, done:false}
        }else{
          return {done:true}
        }
      }
    }
  }
}









// 유사배열 vs. 이터러블
// - 유사배열 : 인덱스 키와 length 속성을 가진 객체
// - 이터러블 : Symbol.Iterator 메서드를 가지는 객체


// 유사배열, 이터러블 배열화