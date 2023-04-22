module.exports = {
	meta: {
		type: "problem",
		messages: "",
		docs: {
			description: "replaceAll in not supported  in android",
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
				if (node.callee.property && node.callee.property.name === "replaceAll") {
					context.report({
						node,
            message: "replaceAll in not supported in android",
					})
				}
			}

		};
	}
};