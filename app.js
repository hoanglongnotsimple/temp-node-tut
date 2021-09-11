//npm install -g (packageName)
//sudo npm install -g (packageName) (mac)
//npm -golbal command,comes with code
///npm init -y (everything default)

const { readFile } = require('fs')

console.log('started a first task')
//CHECK FILE PATH!!!
readFile('./content/first.txt','utf8', (err, result) => {
    if(err) {
        console.log(err)
        return
    }
    console.log(result)
    console.log('completed first task')
})
console.log('staring next task')


