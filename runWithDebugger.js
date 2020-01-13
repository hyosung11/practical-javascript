function runWithDebugger(ourFunction) {
  debugger;
  ourFunction();
}

runWithDebugger(function logTenNumbers() {
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
});
