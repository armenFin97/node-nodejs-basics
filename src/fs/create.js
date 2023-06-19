import 
const fs = require('fs');



const create = async () => {
    // Write your code here 

    // create.js - реализовать функцию, которая создает новый файл fresh.txt с содержимым
    //  I am fresh and youngвнутри files папки(если файл уже существует, Errorсообщение 
    //     FS operation failedдолжно быть выброшено)

    fs.writeFileSync('./files/resh.txt', 'I am fresh and young', (err) => {
        err ? console.log(err) : null;
    })

};

await create();