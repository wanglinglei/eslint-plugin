const rule = require("../../../lib/rules/no-replace-all");
const RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester();

ruleTester.run("no-replace-all", rule, {
  valid: [
    {
      code: "",
      errors: [{ message: "replaceAll in not supported in android", type: 'CallExpression' }]
    }],
  invalid: [{
    code: "'e'.replaceAll('a','b')",
    errors: [{ message: "replaceAll in not supported in android", type: 'CallExpression' }]
  }]
})
