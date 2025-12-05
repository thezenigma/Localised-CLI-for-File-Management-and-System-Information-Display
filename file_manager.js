const fs = require('fs');
const path = require('path');

function createFolder(folderName, callback) {
    const nPath = path.resolve(__dirname, folderName);
    if (!fs.existsSync(nPath)) {
        fs.mkdir(nPath, (err) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log("Folder created");
            callback?.();
        })
    }
    else {
        console.log("Folder already exists!");
        callback?.();
    }
}

function changeFolder(folderPath, callback) {
    const parts = folderPath.split(path.sep);
    if (fs.existsSync(path.resolve(__dirname, ...parts))) {
        callback?.();
        return path.resolve(__dirname, ...parts);
    }
    console.log("Path invalid!");
    callback?.();
}

function deleteFolder(folderName, callback) {
    const nPath = path.resolve(__dirname, folderName);
    if (fs.existsSync(nPath)) {
        fs.rm(nPath, { recursive: true, force: true }, (err) => {
            if (err) {
                console.log(err);
                return;
            }
            else {
                console.log("Folder deleted! ");
            }
            callback?.();
        });
    }
    else {
        console.log("Invalid folder!");
        callback?.();
    }
}

function createFile(fileName, currentPath, callback) {
    const nPath = path.resolve(currentPath, fileName);
    fs.writeFile(nPath, "", (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log("File Created at: ", nPath);
        callback?.();
    });
}

function writeFile(fileName, currentPath, data, callback) {
    const nPath = path.resolve(currentPath, fileName);
    if (!fs.existsSync(nPath)) {
        console.log("File doesn't exist!");
        callback?.();
        return;
    }
    fs.writeFile(nPath, data, {flag: 'a'}, (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log("Data written at: ", nPath);
        callback?.();
    });
}

function readFile(fileName, currentPath, callback) {
    const nPath = path.resolve(currentPath, fileName);
    if (!fs.existsSync(nPath)) {
        console.log("File doesn't exist!");
        return;
    }
    fs.readFile(nPath, "utf8", (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(data);
        callback?.();
    });
}

function renameFile(fileName, newName, currentPath, callback) {
    const nPath = path.resolve(currentPath, fileName);
    if (!fs.existsSync(nPath)) {
        console.log("File doesn't exist!");
        callback?.();
        return;
    }
    fs.rename(nPath, path.resolve(currentPath, newName), (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log("File renamed!");
        callback?.();
    });
}

function deleteFile(fileName, currentPath, callback) {
    const nPath = path.resolve(currentPath, fileName);
    if (!fs.existsSync(nPath)) {
        console.log("File doesn't exist!");
        callback?.();
        return;
    }
    fs.rm(nPath, (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log("File deleted!");
        callback?.();
    });
}



module.exports = { createFolder, changeFolder, deleteFolder, createFile, writeFile, readFile, renameFile, deleteFile };

