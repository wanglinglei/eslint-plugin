/**
 * @fileoverview 校验常见的js兼容性问题
 * @author wanglinglei
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


// import all rules in lib/rules
module.exports.rules = requireIndex(__dirname + "/rules");


module.exports={
  rules:requireIndex(__dirname + "/rules"),
  configs:{
    recommended:{
      plugins:[
        "fix-js"
      ],
      rules:{
        'fix-js/fix-ios-date':["error"],
        'fix-js/no-replace-all':["error"],
        'fix-js/to-locale-required-params':["error"],
      }
    }
  }
}
// import processors
module.exports.processors = {
  // add your processors here
};

