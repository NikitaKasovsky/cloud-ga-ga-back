const dts = require('dts-generator');

dts.default({
  name: 'museria',
  project: '/node_modules/museria',
  out: 'museria.d.ts'
});

console.log(dts)
