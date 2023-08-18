const bcrypt = require("bcrypt");

const password = "1234segura!";

const pass2 = "vvvvvvv";

bcrypt.hash(password, 5, function (err, hash) {
  console.log(hash);

  bcrypt.compare(pass2, hash, (err, result) => {
    console.log(err);
    console.log(result);
  });
});
