# 알고리즘 JS 문법

### Math

```tsx
7 / 3 === 3.5 이다.
몫만 구하기 위해서는 버림을 해줘야 한다!

1. parseInt()
문자열 -> 숫자
floot -> int

2. Math**.floor()**
-> 소숫점 버림

Math.ceil(7.5) => 8
-> 올림

Math.trunc()???

Math.max(...array);
-> 이럼 여러개중에 젤 큰거 알려줌!

Math.sqrt(n)
-> 제곱근 구함요!
//for(let i=1; i<=Math.sqrt(n); i++){

정수인지 확인!!
Number.isInteger(n/i)

3. String(num)
4. Number()

String.fromCharCode(n)
a.codeCharAt()
Array.from

진법 변환
1. parseInt(num,2) //2진수를 10진수로 변환
2. num.toString(2) //10진수 -> 2진수로 변환
```

### 배열, for문

```tsx
numbers.length   (o) 
numbers.length() (x)

배열의 원소를 직접 입력할 때!

for (let = i; i<numbers.length; i++) (not good)
	ans+=numbers[i]

for (i in numbers)
	ans+=numbers[i] //i는 index값, 그리고 문자...!

for(let arr of numbers) // i는 진짜 값

//반복하고 싶을 때!
'*'.repeat(3);

맨앞의 원소 추가
num = array.shift() //맨 앞에  제거, num은 제거한 값 <-> pop
array.unshift(last) // 맨  앞에 추가                     <-> push

i를 n 만큼 더하고 싶을 때
for(let i=0; i<my_str.length; i+=n)
```

### Array.reduce() ← 공부하기!!!!

```tsx
reduce를 사용

Array 의 모든 요소들을 체크, 누적된 값 확인
누산기 기능

// reduce 구조
array.reduce(콜백함수 [, initialValue])
// reduce 콜백함수 인자
arr.reduce((acc, cur, idx)=> ~~ )
// - acc(Accumulator 누산기
- currentValue 현재값
- currentIndex 현재 인덱스

const sum = sides.reduce((a,b) => a + b, 0) - max;(작은 두개의 합이라는데 뭔뜻임)
sides.sort((a,b)=>a-b);
    return sides[0] + sides[1] > sides[2] ? 1 : 2;
```

### Array.sort()

Compare로 오름차순, 내림차순 정렬을 할 수 있다

```jsx
const num = [3,2,5,1,4];
num.sort((a,b) => a-b); //1,2,3,4,5
num.sort((a,b) => b-a); //5,4,3,2,1

.sort() //값이 생략되면, 문자열 정렬로 유니코 순서대로 정렬
.sort(a,b) // 두개가 들어오면 리턴값이 0보다 작으면 a,b 순서로 /0보다 크면 b,a 순서로 정렬한다
```

### Array.filter()

배열에서 특정한 조건만 뽑아낼 때 씀

```jsx
a = [1,2,3]
a.filter(v=>v===2);
[2]

/// filter 와 map 의 차이???( 대문자와 소문자)
문자열에 filter, map 쓸때는
1. 'string'.split('').map()
2. [...string].map()
둘다 배열로 return 
.join('')하면 다시 붙음!!

-> 이중배열은  join으로 한줄로 붙일 수 있다!
```

map() ⇒ 배열 내의 모든 요소에 대해, 새로운 배열을 만듦(애들을 변형)

filter() ⇒ 배열 내의 모든 요소에 대해,  조건에 맞는 애들을 출력!

### 문자열(****Regexp 알아야해?→ 알아야 하나봄…)****

```tsx

array.split('')
-> 문자열 분리

arr = array.splice(idx,num)
-> 배열의 idx 값에서 num개 만큼 삭제

console.log(array) -> 남은배열
console.log(arr) -> 삭제된 값

reverse().join('');

'munjayeol'.indexOf('yeol')
-> 문자열없으면 -1
-> 있으면 첫글자의 index 반환

includes 
contains -> 자바스크립트 에서는 지원하지 않음! indexOf 사용
lastIndexOf(c)<= 마지막 같은 값 indexOf 와 비교 가능

arr = arr.replace('바꿀대상','')//바꿀값 삭제 하나만!

모든값 바꾸기(정규표현식 사용)
return arr.replace(/[aeiou]/g,'')

string = str.toUpperCase()

lit의 길이 구하기

return ~~ ? 1 : 2 <-한줄로 return

```

### .slice(), .splice() ???

```jsx
slice(idx,몇개+1)

splice(idx, )

////
자리 바꾸기
my_string = my_string.split('');
    [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];
    return my_string.join('');
```

배열에 push 가눙

```tsx

javascript 의 if 문!

if
else if 
else

js의 for 문!
-> int가 아닌 let을  쓴다

for(let i=0; i<n; i++)

+=
/= 
이런거 가능
++ 
이것도 가능

거듭제곱 
**
```

### ETC

```jsx
eval()
//문자로 표현된 js 코드를 실행시켜줌!!
```

### 1일차 다시 풀어볼 문제 

- 머쓱이보다 키큰사람
- 배열의 평균값
- 몫 구하기
- 점의 위치 구하기( 삼항연산자, 변수사용)
- A로 b 만들기
- 영어가 싫어요
- 외계어사전
- 문자열 밀기(이상한거!!!!!)

