const fs = require('fs'); // file system module

const dankMeme = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

const getDankMeme = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(dankMeme);
  response.end();
};


module.exports.getDankMeme = getDankMeme;
