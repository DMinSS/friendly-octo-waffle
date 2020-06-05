const path = require('path');
const fs = require('fs');
const sass = require('node-sass');

const directoryPath = path.join(__dirname, 'scss');

// get all file names from directory
fs.readdir(directoryPath, (err, files) => {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }
    // do something with each file
    files.forEach((file) => {
        //create output name. Use the /public/styles folder
        // you can change output folder here
        const outputFile = `${__dirname}/public/styles/${file.split(".").shift()}.css`
        // if file is not a partial
        if (file[0] !== "_") {
            // use node sass to compile scss to css
            sass.render({
                file: path.join(__dirname, 'scss', file),
                outFile: outputFile,
            }, (sassErr, result) => {
                // write the result to file
                fs.writeFile(outputFile, result.css, (err) => {
                    if (!err) {
                        console.log(`Converted ${file}`);
                    }
                });
            });
        }
    });
});