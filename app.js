const testFolder = 'C:\\Users\\Megale\\Desktop\\Fotos_Casorio_Album\\make';



var fs = require('fs');
fs.realpath(testFolder, function(err, path) {
    if (err) {
        console.log(err);
     return;
    }
    console.log('Path is : ' + path);
});


fs.readdir(testFolder, function(err, files) {
    if (err) return;
    files.forEach(function(f) {
        console.log(f);
    });
});