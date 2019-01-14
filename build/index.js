const rollup = require('rollup');
const configFactory = require('./rollup.config');
const fs = require('fs');
const util = require('util');
const path = require('path');

const { promisify } = util;

const promisifyReadDir = promisify(fs.readdir);

const formatName = n => n.replace(/\.js/, '').replace('-', '_');

async function build(option) {
  const bundle = await rollup.rollup(option.input);
  await bundle.write(option.output);
}

(async () => {
  try {
    build(
      configFactory({
        input: './index.js',
        fileName: './index.min.js'
      })
    );
  } catch (e) {
    console.error(e); // eslint-disable-line no-console
  }
})();
