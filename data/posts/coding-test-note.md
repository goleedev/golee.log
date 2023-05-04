![코딩 테스트](/images/coding-test-note.png)

---

# 📌 목차

- **📝 짤막 정리**

- **🗓️ Date 객체**

- **➗ Math 객체**

- **👬 배열에서 중복 제거**

- **📈 배열에서 오름차순/내림차순 정렬**

- **⚖️ 순서를 고려한 두 숫자 비교**

- **📚 사전순 or 대소문자 정렬**

- **🔤 문자열 대소문자 관계없이 개수**

- **🔖 배열의 해당 아이템 인덱스 찾기**

- **🔄 반복되는 문자열**

- **🔢 문자열을 정수로 변환**

- **🗃️ Range 배열 만들기**

- **🤲 배열 내용 모두 합산**

- **⚒️ 진법 변환**

- **💇🏻️ 배열 자르기**

- **🪄 문자열에서 배열로 변환**

---

# 📝 짤막 정리

- 알고리즘 문제는 크게 두 가지: 하나는 공식이나 규칙을 찾아서 쉽게 푸는 문제, 다른 하나는 모든 경우의 수를 구해서 푸는 문제

- 1대1 변환을 하는 문제는 map으로 다 커버 가능

- 반복은 재귀로 처리

- 문자열의 반복은 repeat

- 배열 만들기는 Array.fill으로 시작

- 제곱근이 정수이면 약수가 홀수

---

# 🗓️ Date 객체

```javascript
new Date() // 현재 날짜 및 시간
new Date(1991, 11, 25, 3, 50) // 1991년 12월 25일 3:50:00 - (월 +1 주의)
new Date("2014-6-4") // 2002년 1월 1일 09:00:00
new Date("2012-05-17 10:20:30") // 2012년 5월 17일 10:20:30
```

---

# ➗ Math 객체

```javascript
Math.round() // 소수점 첫 번째 자리에서 반올림
Math.floor() // 전달받은 값과 같거나 작은수 중 가장 큰 정수 - 예: 1.2 -> 1, - .95 -> -1
Math.ceil() // 전달받은 값과 같거나 작은수 중 가장 작은 정수 - 예: 1.2 -> 2, - .95 -> 0
Math.min(...arr) // 배열에서 가장 작은 값
Math.max(...arr) // 배열에서 가장 큰 값
Math.max() // 절대값
Math.sqrt() // 루트값 (제곱근)
```

---

# 👬 배열에서 중복 제거

```javascript

const array = ['a', 1, 2, 'a', 'a', 3]

// 1: 'Set'
[...new Set(array)]

// 2: 'Filter'
array.filter((item, index) => array.indexOf(item) === index)

// 3: 'Reduce'
array.reduce((unique, item) => (unique.includes(item) ? unique : [...unique, item]), [])

// 4. forEach + includes
array.forEach((element) => {
  if (!array.includes(element)) {
    array.push(element)
  }
})

// RESULT:
// ['a', 1, 2, 3]

```

---

# 📈 배열에서 오름차순/내림차순 정렬

```javascript
// 순차
answer.sort((a, b) => a - b)

// 역순
answer.sort((a, b) => b - a)
```

---

# ⚖️ 순서를 고려한 두 숫자 비교

```javascript
;[a, b] = [b, a]
```

---

# 📚 사전순 or 대소문자 정렬

```javascript
// 사전순
"apple"
	.localeCompare("banana")(
		// -1
		"banana"
	)
	.localeCompare("apple") // 1

// 대소문자
array.map((a, b) => a.charCodeAt() - b.charCodeAt())

// 아스키코드에서 문자열로 변환
// charCodeAt의 반대로 String.fromCharCode()
```

---

# 🔤 문자열 대소문자 관계없이 개수

```javascript
function solution(s) {
	const a = s.split("").filter((v) => ["a", "A"].includes(v))
	return a.length
}
```

---

# 🔖 배열의 해당 아이템 인덱스 찾기

```javascript
array.indexOf("item")
```

---

# 🔄 반복되는 문자열

```javascript
"수박".repeat(n).substr(0, n)
```

---

# 🔢 문자열을 정수로 변환

```javascript
parseInt(str) + str
str * 1
str / 1
Number(str)
```

---

# 🗃️ Range 배열 만들기

```javascript
Array(n)
	.fill()
	.map((v, i) => i + 1)

// 출력: [1,2,3,...,n]
```

---

# 🤲 배열 내용 모두 합산

```javascript
array.reduce((acc, cur) => acc + cur, 0)
array.reduce((acc, cur) => (acc += cur))
```

---

# ⚒️ 진법 변환

```javascript
num.toString(2) // 2진수
num.toString(8) // 8진수
num.toString(16) // 16진수
```

---

# 💇🏻️ 배열 자르기

```javascript
const arr = ["1", "2", "3"]

arr.slice(1, 2) // ['2']
arr.slice(-2) // 뒤에서 부터 자르기

arr.splice(1, 2, "a") // ['2', '3', 'a']
```

---

# 🪄 문자열에서 배열로 변환

```javascript
const str = "hello"

str.split("") // ['h','e','l','l','o']
```

---

### 🔗 References

[프로그래머스 문제 풀이 Level 1](https://www.zerocho.com/category/Algorithm/post/5b79898d337215001b3a18eb)

[프로그래머스 문제 풀이 Level 2](https://www.zerocho.com/category/Algorithm/post/5b7bf396b35bf5001b940dc5)

[프로그래머스 문제 풀이 Level 3](https://www.zerocho.com/category/Algorithm/post/5b87ccc1553b47001bb08d2b)
