import { assertEquals } from "jsr:@std/assert";
import { roar } from "./mod.ts";


/**
* @module
*
* This module contains functions to search the database.
*
* ```ts
* import { roar } from "jsr:@jurassicjs/roar";
* const input = "hello world";
* const mightyRoar = roar(input);
* ```
*/
Deno.test("Test Jurassic Roar ", () => {
  const result = roar("hello");
  assertEquals(result, "HELLO !!! ROAR!");
});
