const PUBLIC_DIR = `${__dirname}/client`;
const PORT = 4000;
const PUBLIC_DIR_ITEMS = require(`fs`).readdirSync(PUBLIC_DIR);
require(`http`).createServer((req, res) => {
  try {
    console.log(`req.url:`, req.url);
    let url = req.url.slice(1);
    if (url === ``) url = `index.html`;
    const firstSegment = url.split(`/`)[0];
    if (PUBLIC_DIR_ITEMS.indexOf(firstSegment) === -1) url = `index.html`;
    const filePath = require(`path`).normalize(`${PUBLIC_DIR}/${url}`);
    if (filePath.indexOf(__dirname) !== 0) {
      console.log(`file not found:`, filePath);
      res.statusCode = 400;
      res.end();
    }
    const ext = filePath.split(`.`).slice(-1)[0];
    console.log(`ext:`, ext);
    if (ext === `js`) res.setHeader(`Content-Type`, `application/javascript`);
    console.log(`send:`, filePath);
    res.end(require(`fs`).readFileSync(filePath));
  } catch (err) {
    console.log(err);
    res.statusCode = 400;
    res.end();
  }
}).listen({ host: `0.0.0.0`, port: PORT }, () => console.log(`listen`));