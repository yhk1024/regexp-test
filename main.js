// // 정규식 생성

// const str = `
// 010-1234-5678
// thesecon@gmail.com
// http://www.omdbapi.com/?apikey=7035c60c&s=frozen
// The quick brown fox jumps over the lazy dog.
// abbcccdddd
// `

// // const regexp = new RegExp('the', 'gi')
// const regexp = /the/gi
// console.log(str.match(regexp))



// // 메소드

// let str = `
// 010-1234-5678
// thesecon@gmail.com
// http://www.omdbapi.com/?apikey=7035c60c&s=frozen
// The quick brown fox jumps over the lazy dog.
// abbcccdddd
// `

// const regexp = /fox/gi
// // console.log(regexp.test(str))
// str = str.replace(regexp, 'AAA')
// console.log(str)


// // 플래그(옵션)

// let str = `
// 010-1234-5678
// thesecon@gmail.com
// http://www.omdbapi.com/?apikey=7035c60c&s=frozen
// The quick brown fox jumps over the lazy dog.
// abbcccdddd
// `

// console.log(str.match(/\.$/gim))


//패턴(표현)

// let str = `
// 010-1234-5678
// thesecon@gmail.com
// https://www.omdbapi.com/?apikey=7035c60c&s=frozen
// The quick brown fox jumps over the lazy dog.
// abbcccdddd
// http://localhost:1234
// 동해물과_백두산이 마르고 닳도록
// `

// // console.log(
// //   // str.match(/d$/gm)
// //   // str.match(/^T/gm)
// //   // str.match(/h..p/g)
// //   // str.match(/dog|fox/)
// //   // str.match(/https?/g)
// //   // str.match(/d{2,3}/g)
// //   str.match(/\b\w{2,3}\b/g)
// // )


// const h = `  the hello world!  !

// `
// console.log(
//   // str.match(/[0-9]{1,}/g)
//   // str.match(/[가-힣]{1,}/g)
//   // str.match(/\b/g)
//   // str.match(/\bf\w{1,}\b/g)
//   // str.match(/\d{1,}/g)
//   // str.match(/\s/g)
//   h.replace(/\s/g, '')
// )

const str = `
010-1234-5678
thesecon@gmail.com
http://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

console.log(
  // str.match(/.{1,}(?=@)/g)
  // str.match(/.(?<=@)/g)
  str.match(/(?<=@).{1,}/g)
)