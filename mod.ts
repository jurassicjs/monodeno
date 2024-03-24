//copy ./monodenot.ts to root of project
// path to this file
import { dirname, fromFileUrl } from "https://deno.land/std@0.220.1/path/mod.ts";

const fileName = fromFileUrl(import.meta.url);
const dirName = dirname(fileName);

console.log("My module's absolute path:", dirName); 


const data = await Deno.readFile(`${dirName}/monodeno.ts`);
await Deno.writeFile("./yo.ts", data)
