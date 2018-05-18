const fs = require('fs');
const csv = require('csvtojson');
const through = require('through2');
var parseArgs = require('minimist');


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
  const readStream = fs.createReadStream(inputFile);
  let resultJson = [];
  return csv()
    .fromStream(readStream)
    .on('csv', (csvRow) => {
      return csvRow;
    })
    .on('done', (error) => {
      return resultJson;
    });
}

function convertToFile() {
  return convertFromFile()
    .pipe(fs.createWriteStream('test.json'));
}

const actionsMap = {
  reverse: () => createInputStream(reverse),
  transform: () => createInputStream(transform),
  outputFile,
  convertFromFile: () => convertFromFile().pipe(process.stdout),
  convertToFile,
};

const action = actionsMap[argv.action];

action();


