//GLOBALS - NO WINDOW !!
//__dirname - path to current directory
// __filename - file name
// require - fucntion to use module (CommonJS)
// module - info about current module (file)
// process - info about env where program is executed
//CommonJs, every file is module (by default)
//Modules - Encapsulated Code (only share minimum)

console.log(__dirname);

setInterval(()=>{
    console.log("Hello world")
},1000);