// Copyright 2018 the Deno authors. All rights reserved. MIT license.
import { test, testPerm, assert, assertEqual } from "./test_util.ts";
import * as deno from "deno";

testPerm({ net: true }, async function fetchJsonSuccess() {
  const response = await fetch("http://localhost:4545/package.json");
  const json = await response.json();
  assertEqual(json.name, "deno");
})

test(async function fetchPerm() {
  try {
    await fetch("http://localhost:4545/package.json");
  } catch (err_) {
    console.log("You should see this line.");
  }
});
