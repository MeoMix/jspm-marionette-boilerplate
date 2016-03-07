SystemJS.config({
          "packageConfigPaths": [
                    "npm:@*/*.json",
                    "npm:*.json",
                    "github:*/*.json"
          ],
          "transpiler": "plugin-babel",
          "babelOptions": {
                    moduleName: true
          },
          "meta": {
                    "*.css": {
                              "loader": "jspm/css.js"
                    },
                    "*.hbs": {
                              "loader": "hbs"
                    }
          },
          "map": {
                    "MeoMix/jspm-loader-css": "github:MeoMix/jspm-loader-css@1.0.4",
                    assert: "github:jspm/nodelibs-assert@0.2.0-alpha",
                    babel: "npm:babel-core@6.5.2",
                    backbone: "npm:backbone@1.2.3",
                    "backbone.babysitter": "github:marionettejs/backbone.babysitter@0.1.10",
                    "backbone.wreqr": "github:marionettejs/backbone.wreqr@1.3.5",
                    buffer: "github:jspm/nodelibs-buffer@0.2.0-alpha",
                    child_process: "github:jspm/nodelibs-child_process@0.2.0-alpha",
                    "core-js": "npm:core-js@1.2.6",
                    events: "github:jspm/nodelibs-events@0.2.0-alpha",
                    fs: "github:jspm/nodelibs-fs@0.2.0-alpha",
                    handlebars: "github:components/handlebars.js@4.0.5",
                    hbs: "github:davis/plugin-hbs@1.2.1",
                    http: "github:jspm/nodelibs-http@0.2.0-alpha",
                    jquery: "github:components/jquery@2.2.0",
                    "jspm-loader-css": "github:MeoMix/jspm-loader-css@1.0.4",
                    lodash: "npm:lodash@3.10.1",
                    marionette: "github:marionettejs/backbone.marionette@2.4.4",
                    module: "github:jspm/nodelibs-module@0.2.0-alpha",
                    net: "github:jspm/nodelibs-net@0.2.0-alpha",
                    path: "github:jspm/nodelibs-path@0.2.0-alpha",
                    "plugin-babel": "npm:systemjs-plugin-babel@0.0.5",
                    "postcss-modules-values": "npm:postcss-modules-values@1.1.1",
                    process: "github:jspm/nodelibs-process@0.2.0-alpha",
                    stream: "github:jspm/nodelibs-stream@0.2.0-alpha",
                    text: "github:systemjs/plugin-text@0.0.4",
                    tty: "github:jspm/nodelibs-tty@0.2.0-alpha",
                    url: "github:jspm/nodelibs-url@0.2.0-alpha",
                    util: "github:jspm/nodelibs-util@0.2.0-alpha"
          },
          "packages": {
                    "github:MeoMix/jspm-loader-css@1.0.4": {
                              "map": {
                                        "css-modules-loader-core": "npm:css-modules-loader-core@1.0.0",
                                        "debounce": "npm:debounce@1.0.0",
                                        "path": "npm:path@0.12.7",
                                        "toposort": "npm:toposort@0.2.12"
                              }
                    },
                    "github:davis/plugin-hbs@1.2.1": {
                              "map": {
                                        "handlebars": "github:components/handlebars.js@4.0.5"
                              }
                    },
                    "github:jspm/nodelibs-buffer@0.2.0-alpha": {
                              "map": {
                                        "buffer-browserify": "npm:buffer@4.5.0"
                              }
                    },
                    "github:jspm/nodelibs-http@0.2.0-alpha": {
                              "map": {
                                        "http-browserify": "npm:stream-http@2.1.1"
                              }
                    },
                    "github:jspm/nodelibs-stream@0.2.0-alpha": {
                              "map": {
                                        "stream-browserify": "npm:stream-browserify@2.0.1"
                              }
                    },
                    "github:jspm/nodelibs-url@0.2.0-alpha": {
                              "map": {
                                        "url-browserify": "npm:url@0.11.0"
                              }
                    },
                    "npm:ansi-styles@2.2.0": {
                              "map": {
                                        "color-convert": "npm:color-convert@1.0.0"
                              }
                    },
                    "npm:babel-code-frame@6.5.0": {
                              "map": {
                                        "babel-runtime": "npm:babel-runtime@5.8.35",
                                        "chalk": "npm:chalk@1.1.1",
                                        "esutils": "npm:esutils@2.0.2",
                                        "js-tokens": "npm:js-tokens@1.0.2",
                                        "line-numbers": "npm:line-numbers@0.2.0",
                                        "repeating": "npm:repeating@1.1.3"
                              }
                    },
                    "npm:babel-core@6.5.2": {
                              "map": {
                                        "babel-code-frame": "npm:babel-code-frame@6.5.0",
                                        "babel-generator": "npm:babel-generator@6.5.0",
                                        "babel-helpers": "npm:babel-helpers@6.5.0",
                                        "babel-messages": "npm:babel-messages@6.5.0",
                                        "babel-register": "npm:babel-register@6.5.2",
                                        "babel-runtime": "npm:babel-runtime@5.8.35",
                                        "babel-template": "npm:babel-template@6.5.0",
                                        "babel-traverse": "npm:babel-traverse@6.5.0",
                                        "babel-types": "npm:babel-types@6.5.2",
                                        "babylon": "npm:babylon@6.5.2",
                                        "convert-source-map": "npm:convert-source-map@1.1.3",
                                        "debug": "npm:debug@2.2.0",
                                        "json5": "npm:json5@0.4.0",
                                        "lodash": "npm:lodash@3.10.1",
                                        "minimatch": "npm:minimatch@2.0.10",
                                        "path-exists": "npm:path-exists@1.0.0",
                                        "path-is-absolute": "npm:path-is-absolute@1.0.0",
                                        "private": "npm:private@0.1.6",
                                        "shebang-regex": "npm:shebang-regex@1.0.0",
                                        "slash": "npm:slash@1.0.0",
                                        "source-map": "npm:source-map@0.5.3"
                              }
                    },
                    "npm:babel-generator@6.5.0": {
                              "map": {
                                        "babel-messages": "npm:babel-messages@6.5.0",
                                        "babel-runtime": "npm:babel-runtime@5.8.35",
                                        "babel-types": "npm:babel-types@6.5.2",
                                        "detect-indent": "npm:detect-indent@3.0.1",
                                        "is-integer": "npm:is-integer@1.0.6",
                                        "lodash": "npm:lodash@3.10.1",
                                        "repeating": "npm:repeating@1.1.3",
                                        "source-map": "npm:source-map@0.5.3",
                                        "trim-right": "npm:trim-right@1.0.1"
                              }
                    },
                    "npm:babel-helpers@6.5.0": {
                              "map": {
                                        "babel-runtime": "npm:babel-runtime@5.8.35",
                                        "babel-template": "npm:babel-template@6.5.0"
                              }
                    },
                    "npm:babel-messages@6.5.0": {
                              "map": {
                                        "babel-runtime": "npm:babel-runtime@5.8.35"
                              }
                    },
                    "npm:babel-register@6.5.2": {
                              "map": {
                                        "babel-core": "npm:babel-core@6.5.2",
                                        "babel-runtime": "npm:babel-runtime@5.8.35",
                                        "core-js": "npm:core-js@1.2.6",
                                        "home-or-tmp": "npm:home-or-tmp@1.0.0",
                                        "lodash": "npm:lodash@3.10.1",
                                        "mkdirp": "npm:mkdirp@0.5.1",
                                        "path-exists": "npm:path-exists@1.0.0",
                                        "source-map-support": "npm:source-map-support@0.2.10"
                              }
                    },
                    "npm:babel-runtime@5.8.35": {
                              "map": {}
                    },
                    "npm:babel-template@6.5.0": {
                              "map": {
                                        "babel-runtime": "npm:babel-runtime@5.8.35",
                                        "babel-traverse": "npm:babel-traverse@6.5.0",
                                        "babel-types": "npm:babel-types@6.5.2",
                                        "babylon": "npm:babylon@6.5.2",
                                        "lodash": "npm:lodash@3.10.1"
                              }
                    },
                    "npm:babel-traverse@6.5.0": {
                              "map": {
                                        "babel-code-frame": "npm:babel-code-frame@6.5.0",
                                        "babel-messages": "npm:babel-messages@6.5.0",
                                        "babel-runtime": "npm:babel-runtime@5.8.35",
                                        "babel-types": "npm:babel-types@6.5.2",
                                        "babylon": "npm:babylon@6.5.2",
                                        "debug": "npm:debug@2.2.0",
                                        "globals": "npm:globals@8.18.0",
                                        "invariant": "npm:invariant@2.2.0",
                                        "lodash": "npm:lodash@3.10.1",
                                        "repeating": "npm:repeating@1.1.3"
                              }
                    },
                    "npm:babel-types@6.5.2": {
                              "map": {
                                        "babel-runtime": "npm:babel-runtime@5.8.35",
                                        "babel-traverse": "npm:babel-traverse@6.5.0",
                                        "esutils": "npm:esutils@2.0.2",
                                        "lodash": "npm:lodash@3.10.1",
                                        "to-fast-properties": "npm:to-fast-properties@1.0.1"
                              }
                    },
                    "npm:babylon@6.5.2": {
                              "map": {
                                        "babel-runtime": "npm:babel-runtime@5.8.35"
                              }
                    },
                    "npm:backbone@1.2.3": {
                              "map": {
                                        "underscore": "npm:underscore@1.8.3"
                              }
                    },
                    "npm:brace-expansion@1.1.3": {
                              "map": {
                                        "balanced-match": "npm:balanced-match@0.3.0",
                                        "concat-map": "npm:concat-map@0.0.1"
                              }
                    },
                    "npm:buffer@4.5.0": {
                              "map": {
                                        "base64-js": "npm:base64-js@1.0.4",
                                        "ieee754": "npm:ieee754@1.1.6",
                                        "isarray": "npm:isarray@1.0.0"
                              }
                    },
                    "npm:chalk@1.1.1": {
                              "map": {
                                        "ansi-styles": "npm:ansi-styles@2.2.0",
                                        "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
                                        "has-ansi": "npm:has-ansi@2.0.0",
                                        "strip-ansi": "npm:strip-ansi@3.0.1",
                                        "supports-color": "npm:supports-color@2.0.0"
                              }
                    },
                    "npm:core-js@1.2.6": {
                              "map": {
                                        "systemjs-json": "github:systemjs/plugin-json@0.1.0"
                              }
                    },
                    "npm:css-modules-loader-core@1.0.0": {
                              "map": {
                                        "icss-replace-symbols": "npm:icss-replace-symbols@1.0.2",
                                        "postcss": "npm:postcss@5.0.10",
                                        "postcss-modules-extract-imports": "npm:postcss-modules-extract-imports@1.0.0",
                                        "postcss-modules-local-by-default": "npm:postcss-modules-local-by-default@1.0.0",
                                        "postcss-modules-scope": "npm:postcss-modules-scope@1.0.0",
                                        "postcss-modules-values": "npm:postcss-modules-values@1.1.0"
                              }
                    },
                    "npm:css-selector-tokenizer@0.5.4": {
                              "map": {
                                        "cssesc": "npm:cssesc@0.1.0",
                                        "fastparse": "npm:fastparse@1.1.1"
                              }
                    },
                    "npm:debounce@1.0.0": {
                              "map": {
                                        "date-now": "npm:date-now@1.0.1"
                              }
                    },
                    "npm:debug@2.2.0": {
                              "map": {
                                        "ms": "npm:ms@0.7.1"
                              }
                    },
                    "npm:detect-indent@3.0.1": {
                              "map": {
                                        "get-stdin": "npm:get-stdin@4.0.1",
                                        "minimist": "npm:minimist@1.2.0",
                                        "repeating": "npm:repeating@1.1.3"
                              }
                    },
                    "npm:fastparse@1.1.1": {
                              "map": {}
                    },
                    "npm:has-ansi@2.0.0": {
                              "map": {
                                        "ansi-regex": "npm:ansi-regex@2.0.0"
                              }
                    },
                    "npm:has-flag@1.0.0": {
                              "map": {}
                    },
                    "npm:home-or-tmp@1.0.0": {
                              "map": {
                                        "os-tmpdir": "npm:os-tmpdir@1.0.1",
                                        "user-home": "npm:user-home@1.1.1"
                              }
                    },
                    "npm:inherits@2.0.1": {
                              "map": {}
                    },
                    "npm:invariant@2.2.0": {
                              "map": {
                                        "loose-envify": "npm:loose-envify@1.1.0"
                              }
                    },
                    "npm:is-finite@1.0.1": {
                              "map": {
                                        "number-is-nan": "npm:number-is-nan@1.0.0"
                              }
                    },
                    "npm:is-integer@1.0.6": {
                              "map": {
                                        "is-finite": "npm:is-finite@1.0.1"
                              }
                    },
                    "npm:isarray@1.0.0": {
                              "map": {
                                        "systemjs-json": "github:systemjs/plugin-json@0.1.0"
                              }
                    },
                    "npm:js-base64@2.1.9": {
                              "map": {}
                    },
                    "npm:line-numbers@0.2.0": {
                              "map": {
                                        "left-pad": "npm:left-pad@0.0.3"
                              }
                    },
                    "npm:loose-envify@1.1.0": {
                              "map": {
                                        "js-tokens": "npm:js-tokens@1.0.2"
                              }
                    },
                    "npm:minimatch@2.0.10": {
                              "map": {
                                        "brace-expansion": "npm:brace-expansion@1.1.3"
                              }
                    },
                    "npm:mkdirp@0.5.1": {
                              "map": {
                                        "minimist": "npm:minimist@0.0.8"
                              }
                    },
                    "npm:path@0.12.7": {
                              "map": {
                                        "process": "npm:process@0.11.2",
                                        "util": "npm:util@0.10.3"
                              }
                    },
                    "npm:postcss-modules-extract-imports@1.0.0": {
                              "map": {
                                        "postcss": "npm:postcss@5.0.10"
                              }
                    },
                    "npm:postcss-modules-local-by-default@1.0.0": {
                              "map": {
                                        "css-selector-tokenizer": "npm:css-selector-tokenizer@0.5.4",
                                        "postcss": "npm:postcss@5.0.10"
                              }
                    },
                    "npm:postcss-modules-scope@1.0.0": {
                              "map": {
                                        "css-selector-tokenizer": "npm:css-selector-tokenizer@0.5.4",
                                        "postcss": "npm:postcss@5.0.10"
                              }
                    },
                    "npm:postcss-modules-values@1.1.0": {
                              "map": {
                                        "icss-replace-symbols": "npm:icss-replace-symbols@1.0.2",
                                        "postcss": "npm:postcss@5.0.10"
                              }
                    },
                    "npm:postcss-modules-values@1.1.1": {
                              "map": {
                                        "icss-replace-symbols": "npm:icss-replace-symbols@1.0.2",
                                        "postcss": "npm:postcss@5.0.10"
                              }
                    },
                    "npm:postcss@5.0.10": {
                              "map": {
                                        "js-base64": "npm:js-base64@2.1.9",
                                        "source-map": "npm:source-map@0.5.3",
                                        "supports-color": "npm:supports-color@3.1.2",
                                        "systemjs-json": "github:systemjs/plugin-json@0.1.0"
                              }
                    },
                    "npm:process@0.11.2": {
                              "map": {}
                    },
                    "npm:readable-stream@2.0.5": {
                              "map": {
                                        "core-util-is": "npm:core-util-is@1.0.2",
                                        "inherits": "npm:inherits@2.0.1",
                                        "isarray": "npm:isarray@0.0.1",
                                        "process-nextick-args": "npm:process-nextick-args@1.0.6",
                                        "string_decoder": "npm:string_decoder@0.10.31",
                                        "util-deprecate": "npm:util-deprecate@1.0.2"
                              }
                    },
                    "npm:repeating@1.1.3": {
                              "map": {
                                        "is-finite": "npm:is-finite@1.0.1"
                              }
                    },
                    "npm:source-map-support@0.2.10": {
                              "map": {
                                        "source-map": "npm:source-map@0.1.32"
                              }
                    },
                    "npm:source-map@0.1.32": {
                              "map": {
                                        "amdefine": "npm:amdefine@1.0.0"
                              }
                    },
                    "npm:source-map@0.5.3": {
                              "map": {}
                    },
                    "npm:stream-browserify@2.0.1": {
                              "map": {
                                        "inherits": "npm:inherits@2.0.1",
                                        "readable-stream": "npm:readable-stream@2.0.5"
                              }
                    },
                    "npm:stream-http@2.1.1": {
                              "map": {
                                        "builtin-status-codes": "npm:builtin-status-codes@2.0.0",
                                        "inherits": "npm:inherits@2.0.1",
                                        "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
                                        "xtend": "npm:xtend@4.0.1"
                              }
                    },
                    "npm:strip-ansi@3.0.1": {
                              "map": {
                                        "ansi-regex": "npm:ansi-regex@2.0.0"
                              }
                    },
                    "npm:supports-color@3.1.2": {
                              "map": {
                                        "has-flag": "npm:has-flag@1.0.0"
                              }
                    },
                    "npm:toposort@0.2.12": {
                              "map": {}
                    },
                    "npm:url@0.11.0": {
                              "map": {
                                        "punycode": "npm:punycode@1.3.2",
                                        "querystring": "npm:querystring@0.2.0"
                              }
                    },
                    "npm:util@0.10.3": {
                              "map": {
                                        "inherits": "npm:inherits@2.0.1",
                                        "systemjs-json": "github:systemjs/plugin-json@0.1.0"
                              }
                    }
          }
});
