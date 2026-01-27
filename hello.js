const fs = require('fs');


// fs.mkdirSync('./Hello', (err) => {
//     if (err) {
//         console.error('Error creating directory:', err);
//     }else{
//         console.log('Directory "Hello" created successfully.');
//     }
// })


// fs.writeFile("ravi.txt","this is ravi text file" ,(err) => {
//     if (err) {
//         console.error('Error writing file:', err);
//     }else{
//         console.log('File "ravi.txt" created successfully.');
//     }
// })


// fs.rmdir('./Hello', (err) => {
//     if (err) {
//         console.error('Error deleting directory:', err);
//     }else{
//         console.log('Directory "Hello" deleted successfully.');
//     }
// })

// if(fs.existsSync("./World")){
//     fs.mkdir("hii",(err) =>{
//         if (err) {
//             console.error('Error creating directory:', err);
//         }else{
//             console.log('Directory "hii" created successfully.');
//         }
//     })
// }else(fs.rmdir("./World",(err) =>{
//     if (err) {
//         console.error('Error deleting directory:', err);
//     }else{
//         console.log('Directory "World" deleted successfully.');
//     }
// }))

// fs.writeFileSync("./World/Hello.txt","this is Hello text file" ,(err) => {
//     if (err) {
//         console.error('Error writing file:', err);
//     }else{
//         console.log('File "Hello.txt" created successfully.');
//     }
// })
// fs.readFile("./World/Hello.txt","utf-8",(err,data) => {
//     if (err) {
//         console.error('Error reading file:', err);
//     }else{
//         console.log(data);
//     }
// })

// fs.rename("./World/Hello.txt","./World/Hemath.txt", (e) =>{
//     if(e) throw e;
//     else{
//         console.log("Rename Successfully");
//     }

// })

// fs.mkdir("./Hemanth" ,(e) =>{
//     if(e) throw e;
//     else{
//         console.log("Created Sucessfully");
//     }
// })

// fs.writeFile("./Hemanth/Hemanth.txt","This is My File",(e) =>{
//     if(e)throw e;
//     else{
//         console.log("text File create Scussfully");
//     }
// })

// fs.rename("./Hemanth/Hemanth.txt","./Hemanth/MyFile.txt",(e) =>{
//     if(e) throw e;
//     else{
//         console.log("Renamed Scuessfully")
//     }
// })


// fs.readFile("./Hemanth/MyFile.txt","utf-8",(e,data) =>{
//     if(e) throw e;
//     else{
//         console.log(data);
//     }
// })

// fs.appendFile("./Hemanth/MyFile.txt","\n This is appended text file",(e) =>{
//     if(e) throw e;
//     else{
//         console.log("text Appended")
//     }
// })

// fs.unlink("./Hemanth/MyFile.txt",(e) =>{
//     if(e) throw e;
//     else{
//         console.log("File Deleted Sucessfully");
//     }
// })

// fs.rmdir("./Hemanth",(e) =>{
//     if(e) throw e;
//     else{
//         console.log("Directory Deleted Sucessfully");
//     }    
// })


// fs.writeFile('notes.txt', 'This is my first Node.js file!', (err) => {
//     if (err) {
//         console.log("An error occurred:", err);
//         return;
//     }
//     console.log("File created successfully!");
// });



console.log("Step 1: Start");

// readFileSync pauses the whole program here [cite: 24, 26]
// const data = fs.readFileSync('notes.txt', 'utf8'); 
// console.log("Step 2: File Content is:", data);

// readFile starts the task and immediately moves to Step 3 [cite: 24, 26]
// fs.readFile('notes.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.log("An error occurred:", err);
//         return;
//     }
//     console.log("Step 2: File Content is:", data);
// });



console.log("Step 3: Finish");