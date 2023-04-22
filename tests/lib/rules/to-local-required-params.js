const rule = require("../../../lib/rules/to-local-required-params");
const RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester();

ruleTester.run("to-local-required-params", rule, {
  valid: [
    {
      code: "'123456'.toLocaleString('zh-CN')",
      errors:[{message:"toLocaleString is required argument",type:'CallExpression'}]
    }],
  invalid: [{
    code: "'e'.toLocaleString()",
    errors: [{ message: "toLocaleString is required argument", type: 'CallExpression' }]
  }]

})


'12334555'.toLocaleString()