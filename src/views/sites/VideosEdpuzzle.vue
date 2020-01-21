<template>
  <div class="crosswords container-fluid">
    <div
      style="display: flex; flex-wrap: wrap; justify-content: space-around; align-items: center;"
    >
      <div style="width: 100%; display: flex; justify-content: space-between;">
        <span
          style="width: 27%; height: 100%; background-color: white; 
                    padding: 15px; margin-top: 10px; border: 6px solid #f5f5f5;
                    font-size: 40px;cursor: pointer;"
          @click="$router.back()"
        >Retour</span>
        <MenuItem
          style="margin-bottom: 150px; width: 70%; font-size: 40px;"
          bgcolor="#3f5756"
          title="Vidéos + Quiz"
        />
      </div>
      <div style="color: black; position: absolute">
              <h1>Le château de Saint-Gilles / La citadelle de Tripoli</h1>
      </div>
      <div
        class="game-category video"
        data-toggle="modal"
        data-target="#jeu"
        style="cursor: pointer" @click="iframeUrl = 'https://edpuzzle.com/embed/assignments/5e1a719f8047cc413c46f67e/watch'"
      >
        <div class="game-category-inner"></div>
        <h2 style="color: black;">vedfavj</h2>
      </div>
      <div
        class="game-category video"
        data-toggle="modal"
        data-target="#jeu"
        style="cursor: pointer" @click="iframeUrl = 'https://edpuzzle.com/embed/assignments/5e1a718175f58e413552c8a6/watch'"
      >
        <div class="game-category-inner"></div>
        <h2 style="color: black;">hubolge</h2>
      </div>
      <div
        class="game-category video"
        data-toggle="modal"
        data-target="#jeu"
        style="cursor: pointer" @click="iframeUrl = 'https://edpuzzle.com/embed/assignments/5e1236c589522e40ac333013/watch'"
      >
        <div class="game-category-inner"></div>
        <h2 style="color: black;">tusetof</h2>
      </div>                 
    </div>
    <!-- Modal -->
    <div class="modal fade" id="jeu" tabindex="-1">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="btn btn-primary" @click="$router.back()" style="cursor: pointer;">
              Retour
            </button>
          </div>
          <div class="modal-body">
            <iframe
            frameborder="0" allowfullscreen
              style="width: 100%; height: 100%; overflow-y: scroll;"
              :src="iframeUrl"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MenuItem from "@/components/MenuItem";
export default {
  data() {
    return {
      iframeUrl: ''
    }
  },
  components: {
    MenuItem
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

.ebook { 
    background-image: url("~@/assets/book logo2.png");
}

.video { 
    background-image: url("~@/assets/camera.png");
}

.game-category {
  background-repeat: no-repeat;
  background-size: 100%;
  color: white;
  width: 200px;
  height: 200px;
}
.game-category-inner {
  background-color: rgba(0, 0, 0, 0.0);
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
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
  height: 99%;
  border-radius: 0;
}
</style>