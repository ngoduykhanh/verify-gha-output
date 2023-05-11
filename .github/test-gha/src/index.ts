import * as core from '@actions/core';
import {setOutput} from "@actions/core";

async function run() {
  console.log("This is a test GHA");
  setOutput("number", 123);
}

run();
