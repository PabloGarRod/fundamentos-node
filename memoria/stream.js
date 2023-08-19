const fs = require("fs");
const stream = require("stream");
const util = require("util");

let data = "";

let readableStream = fs.createReadStream(__dirname + "/input.txt");
readableStream.setEncoding("UTF8");
readableStream.on("data", (chunck) => {
  data += chunck;
});

// readableStream.on("end", () => {
//   console.log(data);
// });

// process.stdout.write("hola");
// process.stdout.write("que");
// process.stdout.write("tal");

const transform = stream.transform;

class Mayus extends stream.Transform {
  constructor() {
    super();
  }

  _transform(chunk, codif, cb) {
    let chunkMayus = chunk.toString().toUpperCase();
    this.push(chunkMayus);
    cb();
  }
}

var mayus = new Mayus();

readableStream.pipe(mayus).pipe(process.stdout);
