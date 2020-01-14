<template>
  <div id="app">    
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.container-fluid {
  padding: 0px;
}

@font-face {
font-family: "limelight";
src: url("~@/assets/Limelight.ttf");
}
p {
  font-family: "limelight";
}

span {
  font-family: "limelight";
}
</style>
