<template>
  <div class="wrap">
    <nuxt/>
  </div>
</template>

<style>
:root {
  --admin-color: #455A64;
  --white: #ECEFF1;
  --black: #263238;
  --current-user-color: #FFCC80;
  --other-user-color: #C8E6C9;
  --border-radius: 3px;
}
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 62.5%;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
.body {
  background-color: var(--white);
}
.wrap {
  max-width: 1200px;
  margin: 0 auto;
}
</style>

