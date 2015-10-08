/* global __moduleName */

import { CSSLoader, Plugins, fetch, bundle } from 'jspm-loader-css';
import atImport from 'postcss-import';

const loader = new CSSLoader([
  atImport,
  Plugins.autoprefixer()
], __moduleName);

export default loader;
export { CSSLoader, Plugins, fetch, bundle };