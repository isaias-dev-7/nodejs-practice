import fs from "node:fs"

export function config({ path = ".env"} = {}){
    try {
        const env =  fs.readFileSync(path,'utf-8');
        const lines = env.split('\n').filter((value) => value != '\r');

        lines.forEach( line => {
            const [key , ...value] = line.split('=');
            const jValue = value.join('=');
          
            const valueToSave = (jValue.startsWith('"') && jValue.endsWith('"')) 
            ? jValue.slice(1,-1) 
            : jValue;
            
            process.env[key] = valueToSave;
        });
    } catch (error) {console.error(error.message)}
}

//support for commonjs
const dotenv = {
    config,
}

export default dotenv;

