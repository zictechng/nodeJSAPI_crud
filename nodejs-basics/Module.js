// this is know as a local module. how you can create your own module and use
const fs = require("fs");
const path = require("path");

//module.exports = "MyExportedModule";

function getFilePath(){
    return path.join(process.cwd(), "file.txt");
}

function writeToFile(filePath, string){
    fs.writeFileSync(filePath, string);
}

function readFromFile(filePath){
    return fs.readFileSync(filePath).toString();
}

exports.getFilePath = getFilePath;
exports.writeToFile = writeToFile;
exports.readFromFile = readFromFile;