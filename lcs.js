let a = process.argv.slice(2)
if (!a.length) return console.log('')
let s = a.reduce((a,b)=>a.length<b.length?a:b)
for (let l = s.length; l; l--)
  for (let i = 0; i <= s.length - l; i++) {
    let sub = s.slice(i,i+l)
    if (a.every(e => e.includes(sub)))
      return console.log(sub)
  }
console.log('')

