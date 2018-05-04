import fs from 'fs';
import EventEmitter from 'events';

export const DirWatcherEmitter = new EventEmitter();

export class DirWatcher {
  constructor() { }

  watch = (path, delay) => {
    let filesByPath = [];

    setInterval(() => {
      fs.readdir(path, (err, files) => {
        if (err) throw err;

        const addedFiles = files.filter(file => !filesByPath.includes(file));

        if (addedFiles.length > 0) {
          DirWatcherEmitter.emit('changed', { path, addedFiles });
          filesByPath = files;
        }
      });
    }, delay);
  }
}
