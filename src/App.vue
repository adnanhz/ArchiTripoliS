<template>
  <div id="app" v-if="$vssWidth>=1024 && $vssHeight <= $vssWidth">    
    <router-view/>
  </div>
  <div v-else-if="$vssHeight > $vssWidth" 
    style="display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100%;">
    <h2>Veuillez retourner votre écran.
    </h2>
    <img src="~@/assets/rotate.png" />
  </div>  
  <div v-else style="display: flex; justify-content: center; align-items: center; height: 100%;">
    <h2>Votre écran est trop petit pour bien afficher le site.</h2>
  </div>
</template>
<script>
import VueScreenSize from 'vue-screen-size'
export default {
  mixins: [VueScreenSize.VueScreenSizeMixin]
}
</script>
<style lang="scss">
#app {
  min-width: 1024px;
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
  font-family: "Arial";
}

span {
  font-family: "Arial";
}
</style>
