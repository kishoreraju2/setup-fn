const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');
const tc = require('@actions/tool-cache');

async function installFn() {
  const downloadUrl = "https://raw.githubusercontent.com/fnproject/cli/master/install"
  core.info(`Download from "${downloadUrl}"`)
  const pythonPath = tc.downloadTool(downloadUrl);
  core.info(`${pythonPath}`)
}

async function run() {
  await installFn();
}

run();

try {
  
  core.info(`${pythonPath}`)
  exec.exec('sh',['curl -LSs https://raw.githubusercontent.com/fnproject/cli/master/install'])
  core.setOutput("Successfully installed Fn");
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}