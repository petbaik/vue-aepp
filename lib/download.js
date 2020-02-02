const request = require('request');
const fs = require('fs');
const AdmZip = require('adm-zip');

module.exports = (filename, url, folder, cb) => {
    const file = fs.createWriteStream(filename);
    request(url)
    .pipe(file)
    .on('close', function () {
        
        const zip = new AdmZip(filename);
        const zipEntries = zip.getEntries();
        zipEntries.forEach(function(zipEntry) {
            let dir = ""
            const path = zipEntry.entryName.split("/")
            path.shift()
            let finalPath = path.join("/")
            if(zipEntry.isDirectory) {
                if(finalPath != "") {
                    fs.mkdirSync(`${folder}/${finalPath}`)
                }
                
            } else {
                if(path.length > 1) {
                    path.pop()
                    finalPath = path.join("/")
                    dir = finalPath
                } else {
                    dir = ""
                }
                zip.extractEntryTo(zipEntry.entryName, `${folder}/${dir}` , false, true)
            }
        });
        fs.unlinkSync(filename)
        cb()
    });
}
