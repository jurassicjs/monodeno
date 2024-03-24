import { parseArgs } from "https://deno.land/std@0.220.1/cli/parse_args.ts";
import {monorun}  from "../commands/monodeno.ts";



const parsedArgs = parseArgs(Deno.args);
console.log('parsedArgs', parsedArgs);
// const command = parsedArgs._[0] as string;

// if (command === "task") {
  await monorun();
// } 
