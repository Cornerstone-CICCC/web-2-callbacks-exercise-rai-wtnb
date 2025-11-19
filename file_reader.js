const fs = require("fs");

const charset = "utf-8";

fs.readFile("./firstname.txt", charset, (err, firstname) => {
  if (err) throw err;
  fs.readFile("./lastname.txt", charset, (err, lastname) => {
    if (err) throw err;
    fs.readFile("./age.txt", charset, (err, age) => {
      if (err) throw err;
      fs.readFile("./hobbies.txt", charset, (err, hobbiesData) => {
        if (err) throw err;
        const hobbies = JSON.parse(hobbiesData);
        console.log(
          `${firstname} ${lastname} is ${age} years old and his hoobies are ${hobbies[0]} and ${hobbies[1]}`
        );
      });
    });
  });
});
