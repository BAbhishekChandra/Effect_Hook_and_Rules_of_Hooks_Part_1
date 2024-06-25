import {useState, useEffect} from 'react'

// Initial Code
// const Welcome = () => <h1>Welcome</h1>

// First Error
// const Welcome = () => {
//   if (true) {
//     const [count, setCount] = useState(0)
//   }
//   return <h1>Welcome</h1>
// }

// Second Error
// const Welcome = () => {
//   for (let i = 0; i <= 0; i += 1) {
//     useEffect(() => {
//       document.title = 'Welcome'
//     })
//   }

//   return <h1>Welcome</h1>
// }

// Third Error

const add = (a, b) => {
  useEffect(() => {
    document.title = 'Welcome'
  })
  return a + b
}

const Welcome = () => <h1>{add(1, 2)}</h1>

export default Welcome
