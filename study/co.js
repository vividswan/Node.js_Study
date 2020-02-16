const co = require("co");

function wait(delay) {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
}

function failingWait(delay) {
  return Promise.reject(new Error("Failed!"));
}

function somethingAsync() {
  return Promise.resolve(1);
}

co(function*() {
  // co모듈에선 then 없이 그냥 쓰면 됌!, err=> try, catch
  try {
    console.log("1");
    yield wait(1000);
    console.log("2");
    yield wait(1000);
    console.log("3");
    yield wait(1000);

    const value = yield somethingAsync();
    console.log(value);
    console.log("End");
  } catch (err) {
    console.log("Got Error:", err);
  }
});
