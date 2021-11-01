//
// With credits to https://github.com/joshwnj/ffprobe-static
//
var os = require('os');
var path = require('path');

var platform = os.platform();
if (platform !== 'darwin' && platform !=='linux' && platform !== 'win32') {
  console.error('Unsupported platform.');
  process.exit(1);
}

var arch = os.arch();
if (platform === 'darwin' && ! ['x64', 'arm64'].includes(arch)) {
  console.error('Unsupported architecture.');
  process.exit(1);
}

var ffprobePath = path.join(
  __dirname,
  'bin',
  platform,
  arch,
  platform === 'win32' ? 'ffprobe.exe' : 'ffprobe'
);

exports.path = ffprobePath;
