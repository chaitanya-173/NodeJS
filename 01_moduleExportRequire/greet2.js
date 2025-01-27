module.exports.greeting = function () {
  console.log("This is second greet");
};

const greeting = function () {
  console.log("This is second greet");
};

module.exports = {
  greeting: greeting,
};
