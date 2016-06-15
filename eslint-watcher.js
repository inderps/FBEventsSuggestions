require('shelljs/global');
var chokidar = require('chokidar');

chokidar.watch('src/**', {ignored: /[\/\\]\./}).on('all', (event, path) => {
  exec('npm run lint');
});
