import { CSSLoader, Plugins, fetch, bundle } from 'jspm-loader-css';

console.log('Plugins:', Plugins);

const loader = new CSSLoader([
  Plugins.autoprefixer()
], __moduleName);

export default loader;
export { CSSLoader, Plugins, fetch, bundle };