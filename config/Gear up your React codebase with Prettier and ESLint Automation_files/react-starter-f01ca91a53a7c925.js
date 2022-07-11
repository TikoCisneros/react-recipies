(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[472],{8433:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return o},default:function(){return a}});var i=n(3762),s=n(9009),r=n(5893),o=!0,a=function(e){return(0,r.jsxs)(s.XF,{blogKey:"react-starter",theme:e.theme,views:e.views,children:[(0,r.jsxs)(s.qL,{children:["Recently, I noticed that there were repetitive tasks that I was doing for all the new projects. So, I decided to document them so as not to repeat the mistakes. This article is about setting up",(0,r.jsx)(s.N7,{href:"https://prettier.io",noSpaceAfter:!0,children:"Prettier"}),",",(0,r.jsx)(s.N7,{href:"https://eslint.org",noSpaceAfter:!0,children:"ESLint"}),",",(0,r.jsx)(s.N7,{href:"https://typicode.github.io/husky",children:"Husky"}),"in your project."]}),(0,r.jsx)(s.XJ,{children:"This article can help you with:"}),(0,r.jsxs)(s.aV,{children:[(0,r.jsx)(i.HC,{children:"Keeping your code clean."}),(0,r.jsx)(i.HC,{children:"Following standard practices in your code."}),(0,r.jsx)(i.HC,{children:"Ensuring that all the tests pass before commit."}),(0,r.jsxs)(i.HC,{children:["Improving commit quality by adhering to the",(0,r.jsx)(s.N7,{href:"https://www.conventionalcommits.org",noSpaceAfter:!0,children:"conventional commit format"}),"."]})]}),(0,r.jsx)(s.XJ,{children:"Steps to setup"}),(0,r.jsxs)(s.aV,{children:[(0,r.jsxs)(i.HC,{children:["Create a React app any way you like. I prefer to do it with"," ",(0,r.jsx)(s.CT,{children:"NPX"}),".",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"For TypeScript project:",(0,r.jsx)(s.Oi,{code:"npx create-react-app my-app --template typescript",language:"bash"}),"For JavaScript project:",(0,r.jsx)(s.Oi,{code:"npx create-react-app my-app",language:"bash"}),"You can also use ",(0,r.jsx)(s.CT,{children:"Yarn"})," or ",(0,r.jsx)(s.CT,{children:"NPM"}),". You can check out",(0,r.jsx)(s.N7,{href:"https://create-react-app.dev/docs/getting-started#creating-an-app",children:"CRA docs"}),"for more details."]}),(0,r.jsxs)(i.HC,{children:["Open the project: ",(0,r.jsx)(s.CT,{children:"cd my-app"}),"."]}),(0,r.jsxs)(i.HC,{children:["Installing dependencies: ",(0,r.jsx)("br",{}),(0,r.jsx)("br",{})," With TypeScript:",(0,r.jsx)(s.Oi,{code:"yarn add -D eslint eslint-plugin-react prettier prettier-eslint eslint-plugin-jest eslint-plugin-react-hooks @typescript-eslint/eslint-plugin @typescript-eslint/parser husky @commitlint/{config-conventional,cli}",language:"bash"}),"The versions of packages at the time of writing are:",(0,r.jsx)(s.Oi,{code:'{\n  "devDependencies": {\n    "@commitlint/cli": "^13.1.0",\n    "@commitlint/config-conventional": "^13.1.0",\n    "@typescript-eslint/eslint-plugin": "^4.29.0",\n    "@typescript-eslint/parser": "^4.29.0",\n    "eslint": "^7.32.0",\n    "eslint-plugin-jest": "^24.4.0",\n    "eslint-plugin-react": "^7.24.0",\n    "eslint-plugin-react-hooks": "^4.2.0",\n    "husky": "^7.0.1",\n    "prettier": "^2.3.2",\n    "prettier-eslint": "^13.0.0"\n  }\n}',fileName:"package.json",language:"json"}),"With JavaScript:"," ",(0,r.jsx)(s.Oi,{code:"yarn add -D eslint eslint-plugin-react prettier prettier-eslint eslint-plugin-jest eslint-plugin-react-hooks husky @commitlint/{config-conventional,cli}",language:"bash"}),"The versions of dependencies at the time of writing are:",(0,r.jsx)(s.Oi,{code:'{\n  "devDependencies": {\n    "@commitlint/cli": "^13.1.0",\n    "@commitlint/config-conventional": "^13.1.0",\n    "eslint": "^7.32.0",\n    "eslint-plugin-jest": "^24.4.0",\n    "eslint-plugin-react": "^7.24.0",\n    "eslint-plugin-react-hooks": "^4.2.0",\n    "husky": "^7.0.1",\n    "prettier": "^2.3.2",\n    "prettier-eslint": "^13.0.0"\n  }\n}',fileName:"package.json",language:"json"})]}),(0,r.jsxs)(i.HC,{children:["Add Prettier config: create ",(0,r.jsx)(s.CT,{children:".prettierrc"})," with this content. Also, install the",(0,r.jsx)(s.N7,{href:"https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode",children:"Prettier plugin"}),"in VSCode.",(0,r.jsx)(s.Oi,{code:'{\n  "singleQuote": true,\n  "jsxBracketSameLine": false,\n  "useTabs": false,\n  "eslintIntegration": false,\n  "tslintIntegration": true,\n  "requireConfig": false,\n  "stylelintIntegration": false,\n  "arrowParens": "always",\n  "bracketSpacing": true,\n  "embeddedLanguageFormatting": "auto",\n  "htmlWhitespaceSensitivity": "css",\n  "insertPragma": false,\n  "jsxSingleQuote": true,\n  "tsxSingleQuote": true,\n  "printWidth": 80,\n  "proseWrap": "preserve",\n  "quoteProps": "as-needed",\n  "requirePragma": false,\n  "semi": true,\n  "tabWidth": 2,\n  "trailingComma": "es5"\n}',fileName:".prettierrc",language:"json"}),(0,r.jsxs)(s.R4,{cite:"https://prettier.io/playground",children:["Note: I prefer this config, you can use"," ",(0,r.jsx)(s.N7,{href:"https://prettier.io/playground",children:"Playground"}),"and choose what works for you. You can check out the"," ",(0,r.jsx)(s.N7,{href:"https://prettier.io/docs/en/rationale.html",children:"rationale"})," ","and the"," ",(0,r.jsx)(s.N7,{href:"https://prettier.io/docs/en/options.html",children:"options"})," ","to understand the rules better."]})]}),(0,r.jsxs)(i.HC,{children:["Add ESLint config: create ",(0,r.jsx)(s.CT,{children:".eslintrc.json"})," with this config. Also, install the",(0,r.jsx)(s.N7,{href:"https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint",children:"ESLint plugin"}),"in VSCode.",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"For TypeScript:",(0,r.jsx)(s.Oi,{code:'{\n  "settings": {\n    "react": {\n      "version": "detect"\n    }\n  },\n  "env": {\n    "browser": true,\n    "es2021": true,\n    "node": true\n  },\n  "extends": [\n    "eslint:recommended",\n    "plugin:react/recommended",\n    "plugin:@typescript-eslint/recommended",\n    "plugin:react-hooks/recommended"\n  ],\n  "parser": "@typescript-eslint/parser",\n  "parserOptions": {\n    "ecmaFeatures": {\n      "jsx": true\n    },\n    "ecmaVersion": 12,\n    "sourceType": "module"\n  },\n  "plugins": ["react"],\n  "rules": {\n    "no-bitwise": 0,\n    "react/react-in-jsx-scope": "off",\n    "react-hooks/rules-of-hooks": "error",\n    "react-hooks/exhaustive-deps": "warn",\n    "@typescript-eslint/ban-ts-comment": "off",\n    "@typescript-eslint/explicit-module-boundary-types": "off",\n    "@typescript-eslint/no-explicit-any": "off"\n  }\n}',fileName:".eslintrc.json",language:"json"}),"For JavaScript:",(0,r.jsx)(s.Oi,{code:'{\n  "settings": {\n    "react": {\n      "version": "detect"\n    }\n  },\n  "env": {\n    "browser": true,\n    "es2021": true,\n    "node": true,\n    "jest": true\n  },\n  "extends": [\n    "eslint:recommended",\n    "plugin:react/recommended",\n    "plugin:react-hooks/recommended"\n  ],\n  "parserOptions": {\n    "ecmaFeatures": {\n      "jsx": true\n    },\n    "ecmaVersion": 12,\n    "sourceType": "module"\n  },\n  "plugins": ["react"],\n  "rules": {\n    "no-bitwise": 0,\n    "react/react-in-jsx-scope": "off",\n    "react-hooks/rules-of-hooks": "error",\n    "react-hooks/exhaustive-deps": "warn"\n  }\n}',fileName:".eslintrc.json",language:"json"}),"The rules I have used are basically to override the recommended settings. The only addition being the"," ",(0,r.jsx)(s.N7,{href:"https://www.npmjs.com/package/eslint-plugin-react-hooks",noSpaceAfter:!0,children:"rules of hooks"}),".",(0,r.jsxs)(s.R4,{cite:"https://prettier.io/playground",children:["Note: Again, these are rules that I prefer, you can add the ones that work for you. You can check"," ",(0,r.jsx)(s.N7,{href:"https://eslint.org/docs/user-guide/configuring/#specifying-environments",children:"ESLint configuration docs"})," ","to",(0,r.jsx)(s.N7,{href:"https://eslint.org/demo",noSpaceAfter:!0,children:"create your rules"}),"."]})]}),(0,r.jsxs)(i.HC,{children:["Add scripts to ",(0,r.jsx)(s.CT,{children:"package.json"}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"For TypeScript:",(0,r.jsx)(s.Oi,{code:'{\n  "scripts": {\n    "lint": "eslint \\"**/*.{ts,tsx,js,jsx}\\"",\n    "prepare": "husky install",\n    "test": "react-scripts test"\n  }\n}',fileName:"package.json",language:"json"}),"For JavaScript:",(0,r.jsx)(s.Oi,{code:'{\n  "scripts": {\n    "lint": "eslint \\"**/*.{js,jsx}\\"",\n    "prepare": "husky install",\n    "test": "react-scripts test"\n  }\n}',fileName:"package.json",language:"json"})]}),(0,r.jsxs)(i.HC,{children:["Resolve lint errors: run ",(0,r.jsx)(s.CT,{children:"yarn lint"})," and resolve all warnings and errors (if any). You might see warnings and errors like this:",(0,r.jsx)(s.Oi,{code:"warning  'temp' is assigned a value but never used  @typescript-eslint/no-unused-vars\n\n\u2716 1 problem (0 errors, 1 warning)",language:"bash"})]}),(0,r.jsxs)(i.HC,{children:["Add Commitlint config:",(0,r.jsx)(s.Oi,{code:"echo \"module.exports = {extends: ['@commitlint/config-conventional']};\" > commitlint.config.js",language:"bash"}),"Conventional config is used here, you can also define your config with different"," ",(0,r.jsx)(s.N7,{href:"https://commitlint.js.org/#/reference-rules",noSpaceAfter:!0,children:"rules"}),"."]}),(0,r.jsxs)(i.HC,{children:["Install git hooks ",(0,r.jsx)(s.CT,{children:"yarn prepare / npm prepare"}),(0,r.jsxs)(s.R4,{cite:"",children:["Note: Using Husky with Yarn 2 requires"," ",(0,r.jsx)(s.N7,{href:"https://typicode.github.io/husky/#/?id=yarn-2",noSpaceAfter:!0,children:"different steps"}),"."]})]}),(0,r.jsxs)(i.HC,{children:["Add hooks: you can add any number of hooks you need. In this case, we are adding a pre-commit hook that will check the linting and run tests. We are also adding a Commitlint hook.",(0,r.jsx)(s.Oi,{code:"npx husky add .husky/pre-commit 'yarn lint && yarn test --watchAll=false'",language:"bash"}),(0,r.jsx)(s.Oi,{code:"npx husky add .husky/commit-msg 'npx --no-install commitlint --edit $1'",language:"bash"}),"For more specific use cases for Husky, you can check the"," ",(0,r.jsx)(s.N7,{href:"https://typicode.github.io/husky/#/?id=recipes",noSpaceAfter:!0,children:"recipes"}),"."]})]}),(0,r.jsxs)(s.qL,{children:["Et voila, this is all you needed to do. You can test the hooks by simply committing."," "]}),(0,r.jsx)(s.Oi,{code:'git commit -m "foo: this will fail"',language:"git"}),(0,r.jsx)(s.qL,{children:"You should see this in the terminal."}),(0,r.jsx)(s.Oi,{code:"\u29d7   input: foo: this will fail\n\u2716   type must be one of [build, chore, ci, docs, feat, fix, perf, refactor, revert, style, test] [type-enum]\n\n\u2716   found 1 problems, 0 warnings\n\u24d8   Get help: https://github.com/conventional-changelog/commitlint/#what-is-commitlint\n\nhusky - commit-msg hook exited with code 1 (error)",language:"bash"}),(0,r.jsxs)(s.R4,{cite:"https://typicode.github.io/husky/#/?id=bypass-hooks",children:["Note: If you want to skip these hooks, you can commit directly with"," ",(0,r.jsx)(s.CT,{children:"-n/--no-verify"})," option like"," ",(0,r.jsx)(s.CT,{children:'git commit -m "yolo!" --no-verify'})]}),(0,r.jsx)(s.qL,{children:"If you are starting with a new project, you can clone these repos with all the steps already done."}),(0,r.jsx)(s.H1,{link:"https://github.com/theankurkedia/react-starter-ts-template",description:"A React TypeScript starter project with basic optimal configuration for development"}),(0,r.jsx)(s.H1,{link:"https://github.com/theankurkedia/react-starter-template",description:"A React starter project with basic optimal configuration for development"})]})}},1795:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/react-starter",function(){return n(8433)}])}},function(e){e.O(0,[144,9,774,888,179],(function(){return t=1795,e(e.s=t);var t}));var t=e.O();_N_E=t}]);