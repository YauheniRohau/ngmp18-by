import csv from 'csvtojson';
import { DirWatcherEmitter } from './DirWatcher';

export class Importer {
  constructor() { }

  listen = () => {
    DirWatcherEmitter.on('changed', (arrayOfFiles) => {
      // const jsonData = Promise.all(
      //   arrayOfFiles.addedFiles
      //     .map(file => this.import(`${arrayOfFiles.path}/${file}`))
      // );
      // jsonData.then(array => array.forEach(data => console.log(data)));

      const jsonData = arrayOfFiles.addedFiles
        .map(file => {
          const cb = (js) => js;
          this.importSync(`${arrayOfFiles.path}/${file}`, js => console.log(js));
        });
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
