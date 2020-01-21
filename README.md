Vue TypeScript
----



## Project setup

```bash
# Modules download
$ yarn install

# Compiles and hot-reloads for development
$ yarn serve

#Compiles and minifies for production
$ yarn build

# Run your unit tests
$ yarn test:unit

# Lints and fixes files
yarn lint
```

### Directory Structure

```tree
- docker			Docker config
- public			Project resource
- src
  - api				Api vars
  - assets			static
  - components
  - layouts			BasicLayout
  - locales			Vue-i18n
  - router			Vue-Router
  - store			Vuex
  - styles			Global styles
  - utils			Ajax/Fetch/DateUtil
  - views			Pages
  - App.less
  - App.tsx
  - default.less
  - icons.ts
  - main.ts
  - shims-app.d.ts
  - shims-tsx.d.ts
- tests				Jest
- .browserslistrc
- .editorconfig
- .env.*
- .eslintrc.js
- .gitlab-ci.yml
- package.json
- vue.config.js
```


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).