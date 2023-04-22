module.exports = {
	meta: {
		type: "problem",
		messages: "",
		docs: {
			description: "toLocaleString in required argument",
			// category: "Fill me in",
			recommended: false,
		},
		fixable: null,  // or "code" or "whitespace"
		schema: [
		]
	},
	create: function (context) {
		return {
			CallExpression(node) {
				console.log('node.callee.property.name',node.callee.property.name);
				if (node.callee.property && node.callee.property.name.startsWith("toLocale")) {
					if(node.arguments && node.arguments.length===0){
						context.report({
							node,
							message: "toLocaleString is required argument",
						})
					}
					}
			}
		};
	}
};