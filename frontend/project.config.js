const path = require('path');

const HELIX_FE_CONSTANTS = {
  // base clientside code
  BASE_LIB: 'all',
  // prefix for the entries to get them nicely namespaced
  SUFFIX_SOURCE:  '.entry',
  // suffix js
  SUFFIX_JS: '.js',
    // suffix css
  SUFFIX_CSS: '.css',
  // name of the source
  NAME_INDEX: 'index',
  // prefix for every bundle, if we generate several
  SUFFIX_BUNDLE:  '.bundle',
  // BASE DIRECTORY (levels to root)
  BASE_DIR: '../..',
  // frontend package (relative to root)
  FRONTEND_PACKAGE: '',
  // source path (relative to root)
  SOURCE: '../src',
  // target dir (where output will be generated)
  TARGET: '/dist'
}

const FILE_NAMES = {
  JS_ENTRY: `${HELIX_FE_CONSTANTS.NAME_INDEX}${HELIX_FE_CONSTANTS.SUFFIX_JS}`
}

module.exports = {
  ...HELIX_FE_CONSTANTS,
  ...FILE_NAMES,
  TARGET_PATH: path.join(HELIX_FE_CONSTANTS.BASE_DIR, HELIX_FE_CONSTANTS.TARGET),
  SOURCE_ENTRY: path.join(HELIX_FE_CONSTANTS.SOURCE, FILE_NAMES.JS_ENTRY )
}
