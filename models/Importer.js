import csv from 'csvtojson';
import { DirWatcherEmitter } from './DirWatcher';

export class Importer {
  constructor() { }

  listen = () => {
    DirWatcherEmitter.on('changed', ({ path, addedFiles }) => {
      /*
        Using import (async)
      */
      const jsonData = Promise.all(
        addedFiles
          .map(file => this.import(`${path}/${file}`))
      );
      jsonData.then(array => array.forEach(data => console.log(data)));

      /*
        Using importSync
      */
      // const jsonData = addedFiles
      //   .forEach(file => this.importSync(`${path}/${file}`, json => console.log(json)));
    });
  }

  import = (path) => {
    const resultJson = [];
    return new Promise((resolve, reject) => {
      csv()
        .fromFile(path)
        .on('json', (jsonObj) => {
          resultJson.push(jsonObj);
        })
        .on('error', (error) => {
          reject(error);
        })
        .on('done', () => {
          resolve(resultJson);
        })
    });
  }

  importSync = (path, cb) => {
    const resultJson = [];
    csv()
      .fromFile(path)
      .on('json', (jsonObj) => {
        resultJson.push(jsonObj);
      })
      .on('error', (error) => {
        return error;
      })
      .on('done', () => {
        cb(resultJson);
      });
  }
}
