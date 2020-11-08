<template>
  <div class="crosswords container-fluid">
    <div
      style="display: flex; display: -webkit-flex;; flex-wrap: wrap; justify-content: space-around; align-items: center; -webkit-align-items: center;"
    >
      <div style="width: 100%; height: 125px; display: flex; display: -webkit-flex;; justify-content: space-between;">
        <span
          style="width: 10%; height: 94px; background-color: white; 
                    padding: 15px; margin-top: 10px; border: 6px solid #f5f5f5;
                    font-size: 40px;cursor: pointer;"
          @click="$router.back()"
        ><i class="icon ion-md-arrow-round-back"></i></span>
        <MenuItem
          style="margin-bottom: 150px; width: 89%; font-size: 40px;"
          bgcolor="#3f5756"
          title="Livres interactifs"
        />
      </div>
      <div
       id="hammam"
        class="game-category ebook"
        data-toggle="modal"
        data-target="#activite"
        style="cursor: pointer" @click="iframeUrl = 'https://read.bookcreator.com/OpV1AYH7OQhgKCHzRYvpDjmNZjl1/xL4EJfahQOW_5LZCK3xP6g'"
      >
        <div class="game-category-inner"></div>
        <h2 style="color: black;">Hammam Ezzeddine</h2>
      </div>
      <div
        id="mosque"
        class="game-category ebook"
        data-toggle="modal"
        data-target="#activite"
        style="cursor: pointer" @click="iframeUrl = 'https://read.bookcreator.com/OpV1AYH7OQhgKCHzRYvpDjmNZjl1/HWaICuXYSfiYVdbfw9WZjA'"
      >
        <div class="game-category-inner"></div>
        <h2 style="color: black">La Grande&nbsp;Mosquée<br/>al-Mansouri</h2>
      </div>               
      
    </div>
    <!-- Modal -->
    <div class="modal fade" id="activite" tabindex="-1">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="btn btn-primary" @click="$router.back(); iframeUrl = ''" style="cursor: pointer;">
              Retour
            </button>
          </div>
          <div class="modal-body" style="height: 100%;">
            <iframe
            frameborder="0" allowfullscreen
            v-if="iframeUrl.length > 0"
              style="width: 100%; height: 100%; overflow-y: scroll;"
              :src="iframeUrl"
            >Bonjour</iframe>
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
}

#hammam {
  background-image: url("~@/assets/Hammam Ezzedine e-book.png");
}

#mosque {
  background-image: url("~@/assets/la Grande Mosquee.png");
}

.video { 
    background-image: url("~@/assets/camera.png");
}

.game-category {
  background-repeat: no-repeat;
  background-size: 100%;
  color: white;
  width: 300px;
  height: 300px;
  margin-bottom: -30px;
  padding-bottom: 200px;
}
.game-category-inner {
  background-color: rgba(0, 0, 0, 0);
  width: 300px;
  height: 300px;
  display: flex; display: -webkit-flex;;
  align-items: center; -webkit-align-items: center;
  justify-content: center; -webkit-justify-content: center;
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
