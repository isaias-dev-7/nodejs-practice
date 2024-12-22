import fs from 'fs/promises';
import { config } from "./dotenv.js";
// Ex #1 
export function getDataPromise() {

    return new Promise((res) => {
        setTimeout(() => {
            res({ data: 'important data' });
        }, 2000);
    });
}

/*========================================================*/

// Ex #2
// export function proccessFile(callback){
//     fs.readFile('input.txt','utf8',(error, content) => {
//         if(error) return callback(error);
//         const text = content.toUpperCase();

//         fs.writeFile('./output.txt', text, error => {
//             if (error) return callback(error);
//         });

//         console.log('File saving an process correctly');
//         callback(null);
//     });

// }
export async function proccessFile(){
   let res = await fs.readFile('input.txt','utf8').catch( error => console.log(error.message) );
   if (res) res = res.toUpperCase();
   await fs.writeFile('./output.txt', res).catch( error => console.log(error.message) );
   console.log('proccess end up');
}

//===================================================================
//ex 3
export async function files(){
    console.time('file');
    
    const [file1, file2, file3] = await Promise.allSettled([
        fs.readFile('./file1.txt','utf8'),
        fs.readFile('./file2.txt','utf8'),
        fs.readFile('./file3.txt','utf8'),
    ]).catch(error => []);  

    const message = [file1.value, file2.value, file3.value]
    .filter(value => typeof value != 'undefine')
    .join(' ');
    console.timeEnd('file');

    return message; 
}

//======================================================================
//ex 4
export function delay(time){
    let timeoutId = '';
    const promise = new Promise( resolve => {
       timeoutId = setTimeout(resolve, time);
    });

    const res = {
        clear: () => {
            clearTimeout(timeoutId); 
            timeoutId = null;
        },
        promise,
    };

    return res;
}

// const { promise, clear } = delay(3000);
// promise.then(()=>{
//     console.log('Hello world');
//     clear();
// });

//=======================================================================
// ex 5 dotenv
export function envConfig(path = {}){
    config(path);
}