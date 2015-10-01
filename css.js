import { CSSLoader, Plugins, fetch, bundle } from 'jspm-loader-css';

const loader = new CSSLoader([
  Plugins.autoprefixer()
], __moduleName);

export default loader;
export { CSSLoader, Plugins, fetch, bundle };