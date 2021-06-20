# v-mas-website

[![Netlify Status](https://api.netlify.com/api/v1/badges/3e52ce33-c46a-4d12-91d1-b5d1b3b53cf4/deploy-status)](https://app.netlify.com/sites/prodmactuary/deploys)
 ==> prod: https://mactuary.ca

[![Netlify Status](https://api.netlify.com/api/v1/badges/650efd8a-9fab-4a0a-bb4c-f971def5b10b/deploy-status)](https://app.netlify.com/sites/devmactuary/deploys)
 ==> dev: https://dev.mactuary.ca

## Temp Notes
> anything in public will simply be copied and not run through webpack

> In Vue Webpack template, Webpack is configured to replace @/ with src path

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve -- --port 3030
```

### Compiles and minifies for production
```
npm run build
```

### serving locally
```
# -s flag means serving in Single-Page Application mode
serve -s dist
```

### webpack
[how to reduce bundle size](https://medium.com/js-dojo/how-to-reduce-your-vue-js-bundle-size-with-webpack-3145bf5019b7)
```
npm install --save-dev webpack-bundle-analyzer 
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
