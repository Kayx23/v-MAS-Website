# v-mas-website

[![Netlify Status](https://api.netlify.com/api/v1/badges/c97052aa-caa3-473e-9448-3b1da6108ccd/deploy-status)](https://app.netlify.com/sites/unruffled-albattani-ddca59/deploys)

dev: https://dev.mactuary.ca

prod: https://mactuary.ca

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
