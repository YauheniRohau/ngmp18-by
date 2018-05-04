import config from './config/config.json';
import { User, Product, DirWatcher, Importer } from './models';

console.log(config.name);
new User();
new Product();

const watcher = new DirWatcher();
const importer = new Importer();

importer.listen();
watcher.watch('./data', 1000);
