<template>
  <div class="wrap">
    <nuxt/>
  </div>
</template>

<style>
:root {
  --admin-color: #455A64;
  --light-gray: #DCE6F2;
  --white: #ECEFF1;
  --black: #263238;
  --current-user-color: #FFCC80;
  --other-user-color: #C8E6C9;
  --border-radius: 3px;
  --shodow: 5px 5px 11px rgba(0,0,0,.15),
  -5px -5px 11px rgba(255,255,255, .85);
  --shodow-active: 2px 2px 8px rgba(0,0,0,.15),
  -2px -2px 8px rgba(255,255,255, .85);
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
body {
  background-color: var(--light-gray);
}
button {
  color: #424242;
  background: none;
  border: none;
  border-radius: 3px;
  font-size: 2rem;
  padding: .5rem 1rem;
  box-shadow: var(--shodow);
  outline: none;
  transition: all .1s;
  margin-bottom: 1.5rem;
  margin-right: 2rem;
}
button:active {
  color: #212121;
  box-shadow: var(--shodow-active);
}
.wrap {
}
</style>

