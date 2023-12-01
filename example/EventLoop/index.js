console.log("start");

setTimeout(() => {
  console.log("setTimeout");
}, 0);

setImmediate(() => {
  console.log("immediate");
});

new Promise((resolve) => {
  console.log("promise");
  resolve();
}).then(() => {
  console.log("then");
});

process.nextTick(() => {
  console.log("nextTick");
});

console.log("end");
