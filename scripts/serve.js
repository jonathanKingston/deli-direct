const { spawn, exec } = require("child_process");
const fs = require("fs");

function build() {
  exec("npm run build", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
  })
}
function serve() {
  const serve = spawn("node",  ["./node_modules/http-server/bin/http-server", "./dist"], {
  });
  serve.stdout.on("data", data => {
      console.log(`stdout: ${data}`);
  });
  
  serve.stderr.on("data", data => {
      console.log(`stderr: ${data}`);
  });
  
  serve.on('error', (error) => {
      console.log(`error: ${error.message}`);
  });
  
  serve.on("close", code => {
      console.log(`child process exited with code ${code}`);
  });
}

function change(type, fileName) {
  if (type == "change" && fileName.match(/[.](js|css|html|txt)$/)) {
    build();
  }
}

fs.watch("./static", change);
fs.watch("./src", change);
fs.watch("./src/pages", change);

build();
serve();
