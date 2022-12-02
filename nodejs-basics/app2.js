// const fs = require("fs");
// const path = require("path");

const myModule = require("./Module"); // here you are calling your local module


// create file inside directory
// const filePath = path.join(process.cwd(), "file.txt");
// fs.writeFileSync(filePath, "My first file");

// this read file from the directory
// const fileContent = fs.readFileSync(filePath).toString();
// console.log(fileContent);

// console.log(myModule);

// console.log(myModule.readFromFile(myModule.getFilePath()))
myModule.writeToFile(myModule.getFilePath(), "Update file from the app.js")

console.log(myModule.readFromFile(myModule.getFilePath()));