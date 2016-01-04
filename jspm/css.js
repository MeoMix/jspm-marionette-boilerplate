// NOTE: CSS Minification not supported until jspm v0.17.
// https://github.com/MeoMix/jspm-marionette-boilerplate/issues/12
import { CSSLoader, Plugins } from 'jspm-loader-css';

// Make life easier by automating away most of the boilerplate for using traits.
// OLD:
// :local(.foo) {
//   composes: primary from '../common/css/traits/color.css';
// }
// 
// NEW:
// @traits('../common/css/traits/');
// 
// :local(.foo:traits) {
//   color: primary;
// }

let traits = (css) => {
  // Find our path to the trait files
  let traitPath;
  const isBundling = typeof window === 'undefined';

  css.walkAtRules('traits', rule => {
    // Assume that traits path is from root.
    traitPath = '/' + (isBundling ? 'compiled/' : '' ) + rule.params.replace(/^\(['"]|['"]\)$/g, '');
    rule.remove();
  });

  if (!traitPath) return;

  const traitRegexp = /\:traits/;
  // Translate any .module:traits usages
  css.walkRules(rule => {
    if (rule.selector.match(traitRegexp)) {
      rule.selector = rule.selector.replace(traitRegexp, '');
      rule.walkDecls(decl => {
        decl.value = `${decl.prop} ${decl.value} from "${traitPath}${decl.prop}.css"`;
        decl.prop = 'composes';
      });
    }
  });
}

let plugins = [
  traits,
  Plugins.localByDefault,
  Plugins.extractImports,
  Plugins.scope,
  Plugins.autoprefixer()
];

let { fetch, bundle } = new CSSLoader(plugins, __moduleName);

export { fetch, bundle };