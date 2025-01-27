const fs = require("fs");

// Reading file

// console.log("Before reading...");
// fs.readFile("input.txt", "utf-8", (err, data) => {
//   // async (non-blocking)
//   if (err) throw err;
//   console.log(data);
// });
// console.log("After reading...");

// const data = fs.readFileSync("input.txt", "utf-8"); // sync (blocking)
// console.log(data);

// Writing file

// fs.writeFile("input.txt", "Hello World", (err) => {
//   if (err) throw err;
// });

// fs.appendFile("input.txt", "\nHello NodeJS ! How are you ?", (err) => {
//   if (err) throw err;
// });

// fs.unlink("input.txt", (err) => {
//   if (err) throw err;
// });

// ! The above syntax is not recommended for larger files.

// * Recommended

// const readStream = fs.createReadStream("input.txt", "utf-8");

// readStream.on("data", (chunk) => {
//   console.log(chunk);
// });

// readStream.on("end", () => {
//   console.log("Reading completed");
// });

// const writeStream = fs.createWriteStream("input.txt", "utf-8");

// writeStream.write("Welcome to my codeSpace");

// Pipe: to transfer / copy one file data to another file

const readStream = fs.createReadStream("input.txt");
const writeStream = fs.createWriteStream("output.txt");

readStream.pipe(writeStream);

