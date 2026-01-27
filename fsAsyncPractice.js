const fs = require("fs")

// fs.mkdir("./AsyncFolder",(e) =>{
//     if(e) throw e;
//     else{
//         console.log("Folder Created")
//     }
// })
// fs.writeFile("./AsyncFolder/example.txt","This is Async Operation",(e) =>{
//     if(e) throw e;
//     else{
//         console.log("File Created")
//     }
// })
// fs.readFile("./AsyncFolder/example.txt", "utf-8", (e, data) => {
//     if(e) throw e;
//     else{
//         console.log(data);
//     }
// })
// fs.appendFile("./AsyncFolder/example.txt", "\n This is appended text", (e) => {
//     if(e) throw e;
//     else{
//         console.log("Text Appended")
//     }
// })
// fs.rename("./AsyncFolder/example.txt", "./AsyncFolder/renamedExample.txt", (e) => {
//     if(e) throw e;
//     else{
//         console.log("File Renamed")
//     }
// })
// fs.unlink("./AsyncFolder/renamedExample.txt", (e) => {
//     if(e) throw e;
//     else{
//         console.log("File Deleted")
//     }
// })
fs.rmdir("./AsyncFolder", (e) => {
    if(e) throw e;
    else{
        console.log("Folder Removed")
    }
})