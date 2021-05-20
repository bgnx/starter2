(async () => {
  await new Promise((resolve, reject) => {
    const proc = require(`child_process`).spawn(`node`, [`server.js`], { cwd: `${__dirname}/../`, env: { ...process.env } });
    proc.stdout.on(`data`, (data) => {
      console.log(`server stdout: ${data}`);
    });
    proc.stderr.on(`data`, (data) => {
      console.error(`server stderr: ${data}`);
    });
    proc.on(`close`, (code) => {
      console.log(`server child process exited with code ${code}`);
      if (code !== 0) return reject(code);
      resolve();
    });
    proc.on(`error`, (err) => {
      console.log(`server err`, err);
    });
  });
})();