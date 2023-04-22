const rule =require("../../../lib/rules/fix-ios-date.js");
const RuleTester=require("eslint").RuleTester;

const ruleTester=new RuleTester();

ruleTester.run("fix-ios-date",rule,{
	valid: [
    {
			code: "var date = new Date('2018/01/01');",
			errors:[{message:"new Date is not supported 'yyyy-MM-dd' in IOS",type:'NewExpression'}]
		}],
		invalid: [{
      code: "var date = new Date('2018-01-01');",
      errors:[{message:"new Date is not supported 'yyyy-MM-dd' in IOS",type:'NewExpression'}]
    }]
})
    