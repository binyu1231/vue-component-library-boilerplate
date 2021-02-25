# component-library-boilerplate

Note: Tree Shacking dosn't be supported in this vision witch Vue Cli(Webpack) 

## stack

- [x] storybook@^6
- [x] @vue/composition-api
- [x] vue@^2
- [x] postcss@^7
- [x] tailwindcss@^2
- [x] TypeScript
- [x] Jest

## development

``` bash
$ npm i
$ npm run serve
```

## startup

``` bash
$ npm <npm-package-name> -S
```

```js
// main.js
import '<npm-package-name>/dist/sika.css'
```

in component 

``` html
<template>
<ThemeProvider theme="theme-hack">
  <Box title="Some Value for Something">
    <Bar 
      :value="[199, 2345, 320, 440, 897, 1200]"
      :category="['c1', 'c2', 'c3', 'c4', 'c5', 'c6']">
  </Box>
</ThemeProvider>
</template>
<script>
import { ThemeProvider, Box, Bar } from '<npm-package-name>'
export default {
  components: { ThemeProvider, Box, Bar }
}
</script>
```

## features

- System
  - [x] ThemeProvider
  - [] LocaleProvider
  
- Components
  - [x] Box: a simple component

- Chart
  - [x] Bar: a demo chart

--

check branch `master` from Vue3