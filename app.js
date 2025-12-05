const file_manager = require('./file_manager');
const system = require('./system')
const readline = require('readline');
let currentPath = __dirname;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function fileSystem() {
    console.log("File Management Options:");
    console.log("1. Create Folder");
    console.log("2. Change Folder");
    console.log("3. Delete Folder");
    console.log("4. Create File");
    console.log("5. Write File");
    console.log("6. Read File");
    console.log("7. Rename File");
    console.log("8. Delete File");
    console.log("9. Show current folder");
    console.log("10. Return to main menu");
    rl.question("Enter your option: ", (ans) => {
        switch (ans) {
            case "1":
                rl.question("Enter your folder name: ", (ans) => {
                    file_manager.createFolder(ans, () => {
                        fileSystem();
                    });
                });
                break;
            case "2":
                rl.question("Enter the folder path you want to go: ", (ans) => {
                    currentPath = file_manager.changeFolder(ans, () => {
                        fileSystem();
                    });
                });
                break;
            case "3":
                rl.question("Enter the folder path you want to delete: ", (ans) => {
                    file_manager.deleteFolder(ans, () => {
                        fileSystem();
                    });
                });
                break;
            case "4":
                rl.question("Enter the file name you want to create and extension: ", (ans) => {
                    file_manager.createFile(ans, currentPath, () => {
                        fileSystem();
                    });
                });
                break;
            case "5":
                rl.question("Enter the file name you want to append on: ", (ans) => {
                    const fileName = ans;
                    rl.question("Enter the data you want to input: ", (ans) => {
                        file_manager.writeFile(fileName, currentPath, ans, () => {
                        fileSystem();
                    });
                    });
                });
                break;
            case "6":
                rl.question("Enter the file name you want to read: ", (ans) => {
                    file_manager.readFile(ans, currentPath, () => {
                        fileSystem();
                    });
                });
                break;
            case "7":
                rl.question("Enter the file name you want to rename: ", (ans) => {
                    const fileName = ans;
                    rl.question("Enter the new name you want to give to the file: ", (ans) => {
                        file_manager.renameFile(fileName, ans, currentPath, () => {
                        fileSystem();
                    });
                    });
                });
                break;
            case "8":
                rl.question("Enter the file name you want to delete: ", (ans) => {
                    file_manager.deleteFile(ans, currentPath, () => {
                        fileSystem();
                    });
                });
                break;
            case "9":
                console.log("Path: ", currentPath);
                break;
            case "10":
                console.log("Returning to main menu!");
                mainMenu();
                return;
            default:
                console.log("Enter a valid option!");
                fileSystem();
        }
    });
}

function mainMenu() {
    console.log("Welcome to CLI and File Manager System");
    console.log("What do you want to do?");
    console.log("1. System info");
    console.log("2. File Management");
    console.log("3. Exit");
    rl.question("Enter your option: ", (ans) => {
        switch (ans) {
            case "1":
                system.systemInfo();
                mainMenu();
                break;
            case "2":
                fileSystem();
                break;
            case "3":
                console.log("Goodbye!");
                rl.close();
                return;
            default:
                console.log("Invalid Option!");
                mainMenu();
        }
    });
}

mainMenu();
