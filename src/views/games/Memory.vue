<template>
  <div>
    <button
      type="button"
      class="btn btn-primary"
      @click="$router.back()"
      style="cursor: pointer; float: left; margin-top: 10px; margin-bottom: 10px;"
    >Retour</button>    
    <iframe style="width: 100vw; height: 91vh;" src="https://www.bookwidgets.com/play/EKCBAR">
    </iframe>
  </div>
</template>
<script>
export default {
  data() {
    return {
      iframeUrl: ""
    };
  },
  components: {
  }
};
</script>
<style scoped>
.crosswords {
  background-image: url("~@/assets/wall.jpg");
  min-height: 100vh;
}

.mots-croises {
  background-image: url("~@/assets/mots croises.png");
}

.puzzles {
  background-image: url("~@/assets/puzzle.png");
}

.pendu {
  background-image: url("~@/assets/pendu.png");
}

.memoire {
  background-image: url("~@/assets/memoire.png");
}

.game-category {
  background-repeat: no-repeat;
  background-size: 100%;
  color: white;
  width: 200px;
  height: 200px;
}
.game-category-inner {
  background-color: rgba(0, 0, 0, 0.4);
  width: 200px;
  height: 200px;
  display: flex;
  display: -webkit-flex;
  align-items: center;
  -webkit-align-items: center;
  justify-content: center;
  -webkit-justify-content: center;
  font-weight: bold;
  font-size: 86px;
}

.modal-dialog {
  width: 100vw;
  height: 100%;
  margin: 0;
  padding: 0;
}

.modal-content {
  width: 100vw;
  height: 100%;
  border-radius: 0;
}
</style>