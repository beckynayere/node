const { readFile, writeFile } = require('fs')

console.log('start')
// const { writeFile } = require('fs/promises');
readFile ('./content/first.txt', 'utf8', (err, result) =>{
    if (err) {
        console.log(err)
        return
    }
    // first debug
    // console.log(result)
    const first = result
    readFile('./content/second.txt', 'utf8', (err, result)=>{
        if (err) {
            console.log(err)
            return
        }
    // })
    
    // })
// readFile ('./content/second.txt', 'utf8', (err, result) =>{
// if (err) {
//     console.log(err)
//     return
//     }
    // first debug
    // console.log(result)
        const second = result
        writeFile(
        './content/second.txt', 
        `Here is the result : ${first}, ${second}`,
        (err, result) => {

            if (err) {
                console.log(err);
                return
            }
            // console.log(result)
            console.log('done with the task')

            }
        )
    })

})  
console.log('Starting next task')







