<template>
  <div class="crosswords container-fluid">
    <div
      style="display: flex; flex-wrap: wrap; justify-content: space-around; align-items: center;"
    >
      <div style="width: 100%; display: flex; justify-content: space-between;">
        <span
          style="width: 27%; height: 100%; background-color: white; 
                    padding: 10px; margin-top: 20px; border: 6px solid #f5f5f5;
                    font-size: 30px; z-index: 999999"
          @click="$router.back()"
        >Retour</span>
        <MenuItem
          style="padding: 10px; margin-top: 0px; margin-bottom: 150px; width: 70%; font-size: 30px; z-index: 99999"
          bgcolor="#3f5756"
          title="Frise chronologique"
        />
      </div>
    </div>
    <!-- Modal -->
    <div class="modal in" style="display: block; height: 90vh; top: 70px;" id="jeu1" tabindex="-1">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-body">
            <iframe
              style="width: 100%; overflow-y: scroll; height: 100%;"
              src="https://www.tiki-toki.com/timeline/embed/1224276/5312906398/"
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
      iframeUrl: ""
    };
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