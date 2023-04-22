module.exports = {
    meta: {
        type: "problem",
        messages:"",
        docs: {
            description: "fix ios Date not supported by 'yyyy-MM-dd' ",
            // category: "Fill me in",
            recommended: false,
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
        ]
    },
    create: function (context) {
        return {
            NewExpression(node){
                if(node.callee.name==="Date"){
                    if(node.arguments.length&&node.arguments[0].value&&node.arguments[0].value.includes("-")){
                        context.report({
                            node: node,
                            // messageId: "new Date is not supported 'yyyy-MM-dd' in IOS",
                            message:"new Date is not supported 'yyyy-MM-dd' in IOS"
                        });
                    }
                }
            }
 
        };
    }
};