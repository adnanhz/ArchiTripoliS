<template>
  <div class="crosswords container-fluid">
    <div
      style="display: flex; flex-wrap: wrap; justify-content: space-around; align-items: center;"
    >
      <div style="width: 100%; display: flex; justify-content: space-between;">
        <span
          style="width: 27%; height: 100%; background-color: white; 
                    padding: 15px; margin-top: 10px; border: 6px solid #f5f5f5;
                    font-size: 40px;"
          @click="$router.back()"
        >Retour</span>
        <MenuItem
          style="margin-bottom: 150px; width: 70%; font-size: 40px;"
          bgcolor="#3f5756"
          title="Sites historiques"
        />
      </div>
      <div
        class="game-category ebook"
        data-toggle="modal"
        data-target="#jeu1"
        @click="iframeUrl = 'https://read.bookcreator.com/OpV1AYH7OQhgKCHzRYvpDjmNZjl1/xL4EJfahQOW_5LZCK3xP6g'"
      >
        <div class="game-category-inner">1</div>
      </div>
      <div
        class="game-category ebook"
        data-toggle="modal"
        data-target="#jeu1"
        @click="iframeUrl = 'https://read.bookcreator.com/OpV1AYH7OQhgKCHzRYvpDjmNZjl1/HWaICuXYSfiYVdbfw9WZjA'"
      >
        <div class="game-category-inner">2</div>
      </div>
      <div
        class="game-category video"
        data-toggle="modal"
        data-target="#jeu1"
        @click="iframeUrl = 'https://edpuzzle.com/embed/assignments/5e1a719f8047cc413c46f67e/watch'"
      >
        <div class="game-category-inner">3</div>
      </div>
      <div
        class="game-category video"
        data-toggle="modal"
        data-target="#jeu1"
        @click="iframeUrl = 'https://edpuzzle.com/embed/assignments/5e1a718175f58e413552c8a6/watch'"
      >
        <div class="game-category-inner">4</div>
      </div>
      <div
        class="game-category video"
        data-toggle="modal"
        data-target="#jeu1"
        @click="iframeUrl = 'https://edpuzzle.com/embed/assignments/5e1236c589522e40ac333013/watch'"
      >
        <div class="game-category-inner">5</div>
      </div>                 
    </div>
    <!-- Modal -->
    <div class="modal fade" id="jeu1" tabindex="-1">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <iframe
              style="width: 100%; overflow-y: scroll; height: 100%;"
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
  background-image: url("~@/assets/background.jpg");
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
  background-color: rgba(0, 0, 0, 0.4);
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