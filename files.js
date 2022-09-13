const fs = require('fs')
// // Reading the file

fs.readFile('./files/new.txt',(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data.toString());
    }
})


// Wrting something into fisles

fs.writeFile("./files/new1.txt","Hello World",()=>{
    console.log("Files has been written");
})

// Directories

// Creating a Directory

if(!fs.existsSync('./assets'))
{
    fs.mkdir('./assets',(error)=>{
        if(error){
            console.log(error);
        }else{
            console.log("Folder is created");
        }
    })
}else{
    fs.rmdir("./assets",(err)=>{
        if(err){
            console.log("Error");
        }else{
            console.log("File has been deleted");
        }
    })
}


// Deleting files

if(fs.existsSync('./files/newDir/new.txt')){
    fs.unlink('./files/newDir/new.txt',(error)=>{
        if(error){
            console.log(error);
        }else{
            console.log("Folder is deleted");
        }
    })
}