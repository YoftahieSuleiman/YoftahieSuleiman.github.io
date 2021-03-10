import fs from "fs";
function readFile(url: string): string {
    let data = "";
    const readStream = fs.createReadStream(url);
    readStream.on('data', (chunk) => {
        data += chunk;
    });
    return data;
}