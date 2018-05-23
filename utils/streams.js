const fs = require('fs');
const csv = require('csvtojson');
const through = require('through2');
const parseArgs = require('minimist');


const argv = parseArgs(process.argv.slice(2), {
  alias: {
    a: 'action',
    h: 'help',
    f: 'file',
  },
  unknown: (arg) => {
    console.error('Unknown option: ', arg);
    return false;
  }
});

const inputFile = argv.file;

if (!fs.existsSync(inputFile)) {
  throw new Error('File not exist!');
}

function end(done) {
  this.push(null);
  done();
}

function createInputStream(func) {
  return process.stdin
    .pipe(through(func, end))
    .pipe(process.stdout);
}

function reverse(data, encoding, next) {
  const reversedString = data
    .toString()
    .replace(/\r?\n|\r/g, '')
    .split('')
    .reverse()
    .join('')
    .concat('\n\n');
  next(null, reversedString);
}

function transform(data, encoding, next) {
  const transformedString = data
    .toString()
    .toUpperCase();
  next(null, transformedString);
}

function outputFile() {
  return fs.createReadStream(inputFile)
    .pipe(process.stdout);
}

function convertFromFile() {
  return csv()
    .fromFile(inputFile)
    .on('done', (error) => {
      if (error) console.log('Error convert to file');
    })
}

function convertToFile() {
  const writeStream = fs.createWriteStream(inputFile.replace('.csv', '.json'));
  writeStream.write('[');

  return convertFromFile()
    .on('json', json => writeStream.write(`${JSON.stringify(json)},\n`))
    .on('done', (error) => {
      if (error) console.log('Error convert to file');
      else writeStream.write(']');
    })
}

function help() {
  console.log(`
    '--help -h'       Show this help message
    '--action -a'     Enter type of action (reverse, transform, outputFile, convertFromFile, convertToFile, css-bundle)
    '--file -f'       Path to file
    '--path -p'       Path to directory
    `);
}

const actionsMap = {
  reverse: () => createInputStream(reverse),
  transform: () => createInputStream(transform),
  outputFile,
  convertFromFile: () => convertFromFile().pipe(process.stdout),
  convertToFile,
};

if (argv.help) {
  help();
} else {
  const action = actionsMap[argv.action]
    || function() { console.log('Action not defined.') };
  action();
}




