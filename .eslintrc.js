module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "react-hooks"
    ],
    "rules": {
        "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
        "react-hooks/exhaustive-deps": "error",
        "react/react-in-jsx-scope": 0,
        "react/prop-types": 0,
        "react/no-unknown-property": [1, { ignore: ["class"] }],
        "no-unused-vars": ["error", { "vars": "all", "args": "after-used", "ignoreRestSiblings": true }],
        "no-restricted-syntax": [
            "error", {
                "selector": "ImportDeclaration[source.value=/\\.scss$/i] ~ ImportDeclaration[source.value!=/\\.scss$/i]",
                "message": "CSS import must be last"
            }
        ]
    },
    "overrides": [{
        "files": [
            "**/*.test.js",
            "**/*.test.jsx"
        ],
        "env": {
            "jest": true
        },
        "globals": {
            "global": true
        }
    }]
};
